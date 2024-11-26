import {sql} from "drizzle-orm";
import {sqliteTable, text, integer, real} from "drizzle-orm/sqlite-core";

export const companies = sqliteTable("companies", {
  companyId: integer("company_id").primaryKey(),
  companyName: text("company_name").notNull(),
  logoUrl: text("logo_url"),
  accountType: integer("account_type").references(() => accountTypes.accountTypeId),
});

export const accountTypes = sqliteTable("account_types", {
  accountTypeId: integer("account_type_id").primaryKey(),
  accountType: text("account_type").notNull(),
});

export const users = sqliteTable("users", {
  userId: text("user_id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  accountTypeId: integer("account_type_id").references(() => accountTypes.accountTypeId),
  companyId: integer("company_id").references(() => companies.companyId),
});

export const status = sqliteTable("status", {
  statusId: integer("status_id").primaryKey(),
  status: text("status").notNull(),
});

export const jobTypes = sqliteTable("job_types", {
  jobTypeId: integer("job_type_id").primaryKey(),
  jobType: text("job_type").notNull(),
});

export const applicationStatus = sqliteTable("application_status", {
  applicationStatusId: integer("application_status_id").primaryKey(),
  applicationStatus: text("application_status").notNull(),
});

export const skills = sqliteTable("skills", {
  skillId: integer("skill_id").primaryKey(),
  skill: text("skill").notNull(),
});

export const jobPostings = sqliteTable("job_postings", {
  jobPostingId: integer("job_posting_id").primaryKey(),
  datePosted: text("date_posted").default(sql`CURRENT_TIMESTAMP`),
  description: text("description"),
  jobTypeId: integer("job_type_id").references(() => jobTypes.jobTypeId),
  companyId: integer("company_id").references(() => companies.companyId),
  salary: real("salary").notNull(),
  jobTitle: text("job_title").notNull(),
  location: text("location"),
});

export const clientProfiles = sqliteTable("client_profiles", {
  clientProfileId: integer("client_profile_id").primaryKey(),
  education: text("education"),
  record: text("record"),
  referral: text("referral"),
  workExperience: text("work_experience"),
});

export const skillClient = sqliteTable("skill_client", {
  skillClientId: integer("skill_client_id").primaryKey(),
  skillId: integer("skill_id").references(() => skills.skillId),
  clientId: integer("client_id").references(() => clients.clientId),
});

export const skillJob = sqliteTable("skill_job", {
  skillJobId: integer("skill_job_id").primaryKey(),
  skillId: integer("skill_id").references(() => skills.skillId),
  jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
});

export const jobBenefit = sqliteTable("job_benefit", {
  jobBenefitId: integer("job_benefit_id").primaryKey(),
  benefitId: integer("benefit_id").references(() => benefit.benefitId),
  jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
});

export const benefit = sqliteTable("benefit", {
  benefitId: integer("benefit_id").primaryKey(),
  benefitName: text("benefit_name").notNull(),
});

export const clientApplications = sqliteTable("client_applications", {
  clientApplicationId: integer("client_application_id").primaryKey(),
  applicationStatusId: integer("application_status_id").references(() => applicationStatus.applicationStatusId),
  interviewDate: text("date"),
  date: text("date"),
  jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
  userId: text("user_id").references(() => users.userId),
  clientId: integer("client_id").references(() => clients.clientId),
  resumeUrl: text("resume_url").notNull(),
});

export const clients = sqliteTable("clients", {
  clientId: integer("client_id").primaryKey(),
  statusId: integer("status_id").references(() => status.statusId),
  lastOnline: text("last_online")
    .notNull()
    .default(sql`(current_timestamp)`),
  phoneNumber: text("phone_number"),
  email: text("email"),
  city: text("city"),
  postal_code: text("postal_code"),
  resumeUrl: text("resume_url"),
  first_name: text("first_name"),
  last_name: text("last_name"),
  userId: text("user_id").references(() => users.userId),
  clientProfileId: integer("client_profile_id").references(() => clientProfiles.clientProfileId),
});

export const summaries = sqliteTable("summaries", {
  summaryId: integer("summary_id").primaryKey(),
  clientId: integer("client_id").references(() => clients.clientId),
  jobPostingsId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
  summary: text("summary"),
  score: real("score"),
});
