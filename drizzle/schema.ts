import { sqliteTable, AnySQLiteColumn, foreignKey, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const accountTypes = sqliteTable("account_types", {
	accountTypeId: integer("account_type_id").primaryKey().notNull(),
	accountType: text("account_type").notNull(),
	companyId: integer("company_id").references(() => companies.companyId),
});

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

export const clients = sqliteTable("clients", {
	clientId: integer("client_id").primaryKey().notNull(),
	statusId: integer("status_id").references(() => status.statusId),
	lastOnline: text("last_online").default("sql`(current_timestamp)`").notNull(),
	phoneNumber: text("phone_number"),
	resumeUrl: text("resume_url"),
	userId: integer("user_id").references(() => users.userId),
	clientProfileId: integer("client_profile_id").references(() => clientProfiles.clientProfileId),
	email: text(),
	city: text(),
	postalCode: text("postal_code"),
	firstName: text("first_name"),
	lastName: text("last_name"),
});

export const companies = sqliteTable("companies", {
	companyId: integer("company_id").primaryKey().notNull(),
	companyName: text("company_name").notNull(),
	logoUrl: text("logo_url"),
});

export const jobPostings = sqliteTable("job_postings", {
	jobPostingId: integer("job_posting_id").primaryKey().notNull(),
	datePosted: text("date_posted").default("sql`(CURRENT_TIMESTAMP)`"),
	description: text(),
	requiredSkills: text("required_skills"),
	jobTypeId: integer("job_type_id").references(() => jobTypes.jobTypeId),
	companyId: integer("company_id").references(() => companies.companyId),
});

export const jobTypes = sqliteTable("job_types", {
	jobTypeId: integer("job_type_id").primaryKey().notNull(),
	jobType: text("job_type").notNull(),
});

export const skillClient = sqliteTable("skill_client", {
	skillClientId: integer("skill_client_id").primaryKey().notNull(),
	skillId: integer("skill_id").references(() => skills.skillId),
	clientProfileId: integer("client_profile_id").references(() => clientProfiles.clientProfileId),
});

export const skills = sqliteTable("skills", {
	skillId: integer("skill_id").primaryKey().notNull(),
	skill: text().notNull(),
});

export const status = sqliteTable("status", {
	statusId: integer("status_id").primaryKey().notNull(),
	status: text().notNull(),
});

export const users = sqliteTable("users", {
	userId: integer("user_id").primaryKey().notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	email: text().notNull(),
	accountTypeId: integer("account_type_id").references(() => accountTypes.accountTypeId),
	password: text().notNull(),
},
(table) => {
	return {
		emailUnique: uniqueIndex("users_email_unique").on(table.email),
	}
});

export const clientApplications = sqliteTable("client_applications", {
	clientApplicationId: integer("client_application_id").primaryKey().notNull(),
	applicationStatusId: integer("application_status_id").references(() => applicationStatus.applicationStatusId),
	date: text().default("sql`(CURRENT_TIMESTAMP)`"),
	jobPostingId: integer("job_posting_id").references(() => jobPostings.jobPostingId),
	userId: integer("user_id").references(() => users.userId),
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
});

