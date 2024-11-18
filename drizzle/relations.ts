import { relations } from "drizzle-orm/relations";
import { companies, accountTypes, clientProfiles, clients, users, status, jobPostings, jobTypes, skillClient, skills, clientApplications, applicationStatus } from "./schema";

export const accountTypesRelations = relations(accountTypes, ({one, many}) => ({
	company: one(companies, {
		fields: [accountTypes.companyId],
		references: [companies.companyId]
	}),
	users: many(users),
}));

export const companiesRelations = relations(companies, ({many}) => ({
	accountTypes: many(accountTypes),
	jobPostings: many(jobPostings),
}));

export const clientsRelations = relations(clients, ({one}) => ({
	clientProfile: one(clientProfiles, {
		fields: [clients.clientProfileId],
		references: [clientProfiles.clientProfileId]
	}),
	user: one(users, {
		fields: [clients.userId],
		references: [users.userId]
	}),
	status: one(status, {
		fields: [clients.statusId],
		references: [status.statusId]
	}),
}));

export const clientProfilesRelations = relations(clientProfiles, ({many}) => ({
	clients: many(clients),
	skillClients: many(skillClient),
}));

export const usersRelations = relations(users, ({one, many}) => ({
	clients: many(clients),
	accountType: one(accountTypes, {
		fields: [users.accountTypeId],
		references: [accountTypes.accountTypeId]
	}),
	clientApplications: many(clientApplications),
}));

export const statusRelations = relations(status, ({many}) => ({
	clients: many(clients),
}));

export const jobPostingsRelations = relations(jobPostings, ({one, many}) => ({
	company: one(companies, {
		fields: [jobPostings.companyId],
		references: [companies.companyId]
	}),
	jobType: one(jobTypes, {
		fields: [jobPostings.jobTypeId],
		references: [jobTypes.jobTypeId]
	}),
	clientApplications: many(clientApplications),
}));

export const jobTypesRelations = relations(jobTypes, ({many}) => ({
	jobPostings: many(jobPostings),
}));

export const skillClientRelations = relations(skillClient, ({one}) => ({
	clientProfile: one(clientProfiles, {
		fields: [skillClient.clientProfileId],
		references: [clientProfiles.clientProfileId]
	}),
	skill: one(skills, {
		fields: [skillClient.skillId],
		references: [skills.skillId]
	}),
}));

export const skillsRelations = relations(skills, ({many}) => ({
	skillClients: many(skillClient),
}));

export const clientApplicationsRelations = relations(clientApplications, ({one}) => ({
	user: one(users, {
		fields: [clientApplications.userId],
		references: [users.userId]
	}),
	jobPosting: one(jobPostings, {
		fields: [clientApplications.jobPostingId],
		references: [jobPostings.jobPostingId]
	}),
	applicationStatus: one(applicationStatus, {
		fields: [clientApplications.applicationStatusId],
		references: [applicationStatus.applicationStatusId]
	}),
}));

export const applicationStatusRelations = relations(applicationStatus, ({many}) => ({
	clientApplications: many(clientApplications),
}));