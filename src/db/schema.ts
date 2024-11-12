import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const companies = sqliteTable("companies", {
  companyId: integer("company_id").primaryKey(),
  companyName: text("company_name").notNull(),
  logoUrl: text("logo_url"),
});

export const accountTypes = sqliteTable("account_types", {
  accountTypeId: integer("account_type_id").primaryKey(),
  accountType: text("account_type").notNull(),
  companyId: integer("company_id").references(() => companies.companyId),
});

export const users = sqliteTable("users", {
  userId: integer("user_id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  accountTypeId: integer("account_type_id").references(() => accountTypes.accountTypeId),
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
  requiredSkills: text("required_skills"),
  jobTypeId: integer("job_type_id").references(() => jobTypes.jobTypeId),
  companyId: integer("company_id").references(() => companies.companyId),
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
  clientProfileId: integer("client_profile_id").references(() => clientProfiles.clientProfileId),
});

export const applicationHistory = sqliteTable("application_history", {
  applicationHistoryId: integer("application_history_id").primaryKey(),
  applicationStatusId: integer("application_status_id").references(() => applicationStatus.applicationStatusId),
  date: text("date").default(sql`CURRENT_TIMESTAMP`),
  jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
  userId: integer("user_id").references(() => users.userId),
});

export const clients = sqliteTable("clients", {
  clientId: integer("client_id").primaryKey(),
  statusId: integer("status_id").references(() => status.statusId),
  lastOnline: text('last_online')
    .notNull()
    .default(sql`(current_timestamp)`),
  phoneNumber: text("phone_number"),
  address: text("address"),
  resumeUrl: text("resume_url"),
  userId: integer("user_id").references(() => users.userId),
  clientProfileId: integer("client_profile_id").references(() => clientProfiles.clientProfileId),
});