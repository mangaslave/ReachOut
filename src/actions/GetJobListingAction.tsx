"use server";
import {JobListing} from "@/components/client/JobListingMaster";
import {db} from "@/db";
import {
  jobPostings as jobPostingsTable,
  jobBenefit,
  skillJob,
  benefit,
  skills as skillsTable,
  companies,
  jobTypes,
} from "@/db/schema";
import {eq, inArray} from "drizzle-orm";

export async function GetJobListingsAction(companyId?: number) {
  try {
    const listingsQuery = db
      .select({
        title: jobPostingsTable.jobTitle,
        companyName: companies.companyName,
        logoUrl: companies.logoUrl,
        salary: jobPostingsTable.salary,
        datePosted: jobPostingsTable.datePosted,
        location: jobPostingsTable.location,
        description: jobPostingsTable.description,
        jobPostingId: jobPostingsTable.jobPostingId,
        jobType: jobTypes.jobType,
      })
      .from(jobPostingsTable)
      .leftJoin(companies, eq(companies.companyId, jobPostingsTable.companyId))
      .leftJoin(jobTypes, eq(jobTypes.jobTypeId, jobPostingsTable.jobTypeId));

    if (companyId) {
      listingsQuery.where(eq(companies.companyId, companyId));
    }

    const listings = await listingsQuery;

    const jobPostingIds = listings.map((posting) => posting.jobPostingId);

    const skills = await db
      .select({
        jobPostingId: skillJob.jobPostingId,
        skill: skillsTable.skill,
      })
      .from(skillJob)
      .leftJoin(skillsTable, eq(skillsTable.skillId, skillJob.skillId))
      .where(inArray(skillJob.jobPostingId, jobPostingIds));

    const benefits = await db
      .select({
        jobPostingId: jobBenefit.jobPostingId,
        benefitName: benefit.benefitName,
      })
      .from(jobBenefit)
      .leftJoin(benefit, eq(benefit.benefitId, jobBenefit.benefitId))
      .where(inArray(jobBenefit.jobPostingId, jobPostingIds));

    const jobPosts = listings.map((posting) => {
      const postingSkills = skills
        .filter((skill) => skill.jobPostingId === posting.jobPostingId)
        .map((skill) => skill.skill);

      const postingBenefits = benefits
        .filter((benefit) => benefit.jobPostingId === posting.jobPostingId)
        .map((benefit) => benefit.benefitName);

      return {
        title: posting.title,
        companyName: posting.companyName,
        logoUrl: posting.logoUrl,
        date: posting.datePosted,
        jobType: posting.jobType,
        salary: posting.salary,
        location: posting.location,
        description: posting.description,
        jobPostingId: posting.jobPostingId,
        skills: postingSkills,
        benefit: postingBenefits,
      };
    });
    return {success: true, listings: jobPosts as JobListing[]};
  } catch (err) {
    console.log(err);
    return {success: false, listings: null};
  }
}
