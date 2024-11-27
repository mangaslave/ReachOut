"use server";
import {db} from "@/db";
import {jobPostings as jobPostingsTable, jobBenefit, skillJob} from "@/db/schema";

export async function createJobPosting({
  title,
  description,
  jobTypeId,
  salary,
  location,
  skills,
  benefits,
}: {
  title: string;
  description: string;
  jobTypeId: number;
  salary: number;
  location: string;
  skills?: number[];
  benefits?: number[];
}) {
  const job = {
    title,
    description,
    jobTypeId,
    salary,
    location,
    skills,
    benefits,
  };
  console.log(job);
  //TODO: Make the skills and benfits work
  // try {
  //   const [newJobPosting] = await db
  //     .insert(jobPostingsTable)
  //     .values({
  //       jobTitle: title,
  //       description,
  //       jobTypeId,
  //       salary,
  //       location,
  //     })
  //     .returning();

  //   if (!newJobPosting) {
  //     throw new Error("Failed to create job posting");
  //   }

  //   if (skills && skills.length > 0) {
  //     await db.insert(skillJob).values(
  //       skills.map((skillId) => ({
  //         skillId,
  //         jobPostingId: newJobPosting.jobPostingId,
  //       }))
  //     );
  //   }

  //   if (benefits && benefits.length > 0) {
  //     await db.insert(jobBenefit).values(
  //       benefits.map((benefitId) => ({
  //         benefitId,
  //         jobPostingId: newJobPosting.jobPostingId,
  //       }))
  //     );
  //   }

  //   return newJobPosting;
  // } catch (error) {
  //   console.error("Error creating job posting:", error);
  //   throw error;
  // }
}
