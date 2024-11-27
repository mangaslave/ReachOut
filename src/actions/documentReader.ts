import {db} from "@/db";
import {AzureKeyCredential, DocumentAnalysisClient} from "@azure/ai-form-recognizer";
import {TextAnalyticsClient} from "@azure/ai-text-analytics";
import {jobPostings} from "@/db/schema";
import {skillJob} from "@/db/schema";
import {skills} from "@/db/schema";
import {summaries} from "@/db/schema";
import {clients as clientsTable} from "@/db/schema";
import {and, eq} from "drizzle-orm";

const key = process.env.AZURE_AI_DI_KEY1;
const endpoint = process.env.AZURE_AI_DI_ENDPOINT;
const textAnalyticsKey = process.env.AZURE_TEXT_ANALYTICS_KEY1;
const textAnalyticsEndpoint = process.env.AZURE_TEXT_ANALYTICS_ENDPOINT;

if (!key || !endpoint || !textAnalyticsEndpoint || !textAnalyticsKey) {
  throw new Error(
    `Missing Azure Form Recognizer credentials: ${!key ? "AZURE_AI_DI_KEY1" : ""} ${
      !endpoint ? "AZURE_AI_DI_ENDPOINT" : ""
    }`
  );
}

const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
const textAnalyticsClient = new TextAnalyticsClient(textAnalyticsEndpoint, new AzureKeyCredential(textAnalyticsKey));

export default async function analyzeResume(resumeS3Url: string, clientId: number) {
  try {
    const poller = await client.beginAnalyzeDocumentFromUrl("prebuilt-document", resumeS3Url);
    const result = await poller.pollUntilDone();

    if (!result) {
      console.error("No analysis result found.");
      return;
    }

    if (result.content) {
      const listingsWithSkills = await db
        .select({
          jobPostingId: jobPostings.jobPostingId,
          description: jobPostings.description,
          skill: skills.skill,
        })
        .from(jobPostings)
        .leftJoin(skillJob, eq(skillJob.jobPostingId, jobPostings.jobPostingId))
        .leftJoin(skills, eq(skills.skillId, skillJob.skillId));

      const clientName = await db
        .select({
          first_name: clientsTable.first_name,
          last_name: clientsTable.last_name,
        })
        .from(clientsTable)
        .where(eq(clientsTable.clientId, clientId));

      const fullname = `${clientName[0].first_name} ${clientName[0].last_name}`;

      const resumeText = result.content;
      const jobListings = listingsWithSkills.reduce((acc, listing) => {
        const {jobPostingId, description, skill} = listing;

        if (!description) {
          throw new Error(`Missing Description`);
        }

        if (!acc[jobPostingId]) {
          acc[jobPostingId] = {
            jobPostingId,
            description,
            skills: [],
          };
        }

        if (skill) acc[jobPostingId].skills.push(skill);

        return acc;
      }, {} as Record<number, {jobPostingId: number; description: string; skills: string[]}>);

      console.log("Start inserting summaries");
      for (const listing of Object.values(jobListings)) {
        const jobDescription = listing.description + " " + listing.skills.join(" ");

        const resumeKeyPhrases = await extractKeyPhrases(resumeText);
        const jobKeyPhrases = await extractKeyPhrases(jobDescription);

        const {matchScore} = matchKeyPhrasesWithScore(resumeKeyPhrases, jobKeyPhrases);
        const {matched, missing} = matchKeyPhrases(resumeKeyPhrases, jobKeyPhrases);
        const summary = generateFitSummaryFromKeyPhrases(matched, missing, fullname, matchScore);

        const existingSummary = await db.select().from(summaries);
        and(eq(summaries.jobPostingsId, listing.jobPostingId), eq(summaries.clientId, clientId));

        if (existingSummary.length > 0) {
          await db
            .update(summaries)
            .set({
              summary: summary,
              score: matchScore,
            })
            .where(and(eq(summaries.jobPostingsId, listing.jobPostingId), eq(summaries.clientId, clientId)));
        } else {
          await db.insert(summaries).values({
            jobPostingsId: listing.jobPostingId,
            clientId: clientId,
            summary: summary,
            score: matchScore,
          });
        }
      }
      console.log("Finished inserting summaries");
    } else {
      console.log("No text content found.");
    }
  } catch (error) {
    console.error("Error analyzing resume:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to analyze resume. Reason: ${error.message}`);
    }
    throw new Error("Failed to analyze resume due to an unknown error.");
  }
}

async function extractKeyPhrases(text: string): Promise<string[]> {
  const [result] = await textAnalyticsClient.extractKeyPhrases([text]);
  if (result.error) {
    throw new Error(`Error extracting key phrases: ${result.error.message}`);
  }
  return result.keyPhrases || [];
}

function matchKeyPhrases(resumeKeyPhrases: string[], jobKeyPhrases: string[]): {matched: string[]; missing: string[]} {
  const matched = resumeKeyPhrases.filter((phrase) => jobKeyPhrases.includes(phrase.toLowerCase()));
  const missing = jobKeyPhrases.filter((phrase) => !resumeKeyPhrases.includes(phrase.toLowerCase()));

  return {matched, missing};
}

function generateFitSummaryFromKeyPhrases(
  matched: string[],
  missing: string[],
  fullname: string,
  score: number
): string {
  let summary = "";

  if (score > 7.0) {
    summary += `${fullname} matches well with the following important aspects of this job: ${matched.join(", ")}. `;
    summary += `Overall, ${fullname} is a strong fit for this role.`;
  } else if (score > 4.0) {
    summary += `${fullname} is an okay fit for this role, but some important aspects are missing.`;
    summary += `${fullname}'s resume is missing some key aspects like ${missing.join(", ")}. `;
  } else {
    summary += `${fullname} is not a great fit for this role due to the missing aspects.`;
    summary += `${fullname}'s resume is missing some key aspects like ${missing.join(", ")}. `;
  }

  return summary;
}

function matchKeyPhrasesWithScore(
  resumeKeyPhrases: string[],
  jobKeyPhrases: string[]
): {matched: string[]; missing: string[]; matchScore: number} {
  const matched = resumeKeyPhrases.filter((phrase) => jobKeyPhrases.includes(phrase.toLowerCase()));
  const missing = jobKeyPhrases.filter((phrase) => !resumeKeyPhrases.includes(phrase.toLowerCase()));

  const matchScore = (matched.length / jobKeyPhrases.length) * 100;

  if (matchScore == 0){
    return {matched, missing, matchScore: 1};
  }

  return {matched, missing, matchScore: parseFloat(matchScore.toFixed(2))};
}
