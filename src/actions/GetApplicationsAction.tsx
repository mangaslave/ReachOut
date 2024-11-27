import {db} from "@/db";
import {clientApplications, clients, companies, jobPostings, users} from "@/db/schema";
import {eq} from "drizzle-orm";

export default async function GetApplicationsAction(userId: string) {
  try {
    const userCompanyId = await db
      .select({companyId: companies.companyId})
      .from(users)
      .leftJoin(companies, eq(users.companyId, companies.companyId))
      .where(eq(users.userId, userId));

    if (!userCompanyId[0].companyId) {
      return {success: false, applications: [], message: "User does not belong to a company"};
    }

    const applications: Application[] = await db
      .select({
        applicantFirstName: clients.first_name,
        applicantLastName: clients.last_name,
        applicantEmail: clients.email,
        appliedDate: clientApplications.date,
        jobTitle: jobPostings.jobTitle,
        companyName: companies.companyName,
        resumeUrl: clientApplications.resumeUrl,
      })
      .from(clientApplications)
      .leftJoin(clients, eq(clientApplications.clientId, clients.clientId))
      .leftJoin(jobPostings, eq(clientApplications.jobPostingId, jobPostings.jobPostingId))
      .leftJoin(companies, eq(jobPostings.companyId, companies.companyId))
      .where(eq(companies.companyId, userCompanyId[0].companyId));

    return {success: true, applications, message: ""};
  } catch (err) {
    console.log(err);
    return {success: false, applications: [], message: "Error connecting to database"};
  }
}

export type Application = {
  applicantFirstName: string | null;
  applicantLastName: string | null;
  applicantEmail: string | null;
  appliedDate: string | null;
  jobTitle: string | null;
  companyName: string | null;
  resumeUrl: string;
};
