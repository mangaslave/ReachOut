import { relations } from "drizzle-orm/relations";
import { accountTypes, companies, jobPostings, jobTypes, jobBenefit, benefit, skillJob, skills, clientProfiles, clients, users, status, clientApplications, applicationStatus, skillClient } from "./schema";

export const companiesRelations = relations(companies, ({one, many}) => ({
	accountType: one(accountTypes, {
		fields: [companies.accountType],
		references: [accountTypes.accountTypeId]
	}),
	jobPostings: many(jobPostings),
}));

export const accountTypesRelations = relations(accountTypes, ({many}) => ({
	companies: many(companies),
	users: many(users),
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
	jobBenefits: many(jobBenefit),
	skillJobs: many(skillJob),
	clientApplications: many(clientApplications),
}));

export const jobTypesRelations = relations(jobTypes, ({many}) => ({
	jobPostings: many(jobPostings),
}));

export const jobBenefitRelations = relations(jobBenefit, ({one}) => ({
	jobPosting: one(jobPostings, {
		fields: [jobBenefit.jobPostingId],
		references: [jobPostings.jobPostingId]
	}),
	benefit: one(benefit, {
		fields: [jobBenefit.benefitId],
		references: [benefit.benefitId]
	}),
}));

export const benefitRelations = relations(benefit, ({many}) => ({
	jobBenefits: many(jobBenefit),
}));

export const skillJobRelations = relations(skillJob, ({one}) => ({
	jobPosting: one(jobPostings, {
		fields: [skillJob.jobPostingId],
		references: [jobPostings.jobPostingId]
	}),
	skill: one(skills, {
		fields: [skillJob.skillId],
		references: [skills.skillId]
	}),
}));

export const skillsRelations = relations(skills, ({many}) => ({
	skillJobs: many(skillJob),
	skillClients: many(skillClient),
}));

export const clientsRelations = relations(clients, ({one, many}) => ({
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
	clientApplications: many(clientApplications),
	skillClients: many(skillClient),
}));

export const clientProfilesRelations = relations(clientProfiles, ({many}) => ({
	clients: many(clients),
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

export const clientApplicationsRelations = relations(clientApplications, ({one}) => ({
	client: one(clients, {
		fields: [clientApplications.clientId],
		references: [clients.clientId]
	}),
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

export const skillClientRelations = relations(skillClient, ({one}) => ({
	client: one(clients, {
		fields: [skillClient.clientId],
		references: [clients.clientId]
	}),
	skill: one(skills, {
		fields: [skillClient.skillId],
		references: [skills.skillId]
	}),
}));