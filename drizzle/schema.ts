import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, real, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const applicationStatus = sqliteTable("application_status", {
	applicationStatusId: integer("application_status_id").primaryKey().notNull(),
	applicationStatus: text("application_status").notNull(),
});

export const clientProfiles = sqliteTable("client_profiles", {
	clientProfileId: integer("client_profile_id").primaryKey().notNull(),
	education: text(),
	record: text(),
	referral: text(),
	workExperience: text("work_experience"),
});

export const companies = sqliteTable("companies", {
	companyId: integer("company_id").primaryKey().notNull(),
	companyName: text("company_name").notNull(),
	logoUrl: text("logo_url"),
	accountType: integer("account_type").references(() => accountTypes.accountTypeId),
});

export const jobPostings = sqliteTable("job_postings", {
	jobPostingId: integer("job_posting_id").primaryKey().notNull(),
	datePosted: text("date_posted").default("sql`(CURRENT_TIMESTAMP)`"),
	description: text(),
	jobTypeId: integer("job_type_id").references(() => jobTypes.jobTypeId),
	companyId: integer("company_id").references(() => companies.companyId),
	salary: real().notNull(),
	jobTitle: text("job_title").notNull(),
	location: text(),
});

export const jobTypes = sqliteTable("job_types", {
	jobTypeId: integer("job_type_id").primaryKey().notNull(),
	jobType: text("job_type").notNull(),
});

export const skills = sqliteTable("skills", {
	skillId: integer("skill_id").primaryKey().notNull(),
	skill: text().notNull(),
});

export const status = sqliteTable("status", {
	statusId: integer("status_id").primaryKey().notNull(),
	status: text().notNull(),
});

export const accountTypes = sqliteTable("account_types", {
	accountTypeId: integer("account_type_id").primaryKey().notNull(),
	accountType: text("account_type").notNull(),
});

export const benefit = sqliteTable("benefit", {
	benefitId: integer("benefit_id").primaryKey().notNull(),
	benefitName: text("benefit_name").notNull(),
});

export const jobBenefit = sqliteTable("job_benefit", {
	jobBenefitId: integer("job_benefit_id").primaryKey().notNull(),
	benefitId: integer("benefit_id").references(() => benefit.benefitId),
	jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
});

export const skillJob = sqliteTable("skill_job", {
	skillJobId: integer("skill_job_id").primaryKey().notNull(),
	skillId: integer("skill_id").references(() => skills.skillId),
	jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
});

export const clients = sqliteTable("clients", {
	clientId: integer("client_id").primaryKey().notNull(),
	statusId: integer("status_id").references(() => status.statusId),
	lastOnline: text("last_online").default("sql`(current_timestamp)`").notNull(),
	phoneNumber: text("phone_number"),
	email: text(),
	city: text(),
	postalCode: text("postal_code"),
	resumeUrl: text("resume_url"),
	firstName: text("first_name"),
	lastName: text("last_name"),
	userId: text("user_id").references(() => users.userId),
	clientProfileId: integer("client_profile_id").references(() => clientProfiles.clientProfileId),
});

export const users = sqliteTable("users", {
	userId: text("user_id").primaryKey().notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	email: text().notNull(),
	accountTypeId: integer("account_type_id").references(() => accountTypes.accountTypeId),
	companyId: integer("company_id"),
},
(table) => {
	return {
		emailUnique: uniqueIndex("users_email_unique").on(table.email),
	}
});

export const clientApplications = sqliteTable("client_applications", {
	clientApplicationId: integer("client_application_id").primaryKey().notNull(),
	applicationStatusId: integer("application_status_id").references(() => applicationStatus.applicationStatusId),
	date: text(),
	jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
	userId: text("user_id").references(() => users.userId),
	clientId: integer("client_id").references(() => clients.clientId),
	resumeUrl: text("resume_url").notNull(),
});

export const skillClient = sqliteTable("skill_client", {
	skillClientId: integer("skill_client_id").primaryKey().notNull(),
	skillId: integer("skill_id").references(() => skills.skillId),
	clientId: integer("client_id").references(() => clients.clientId),
});

