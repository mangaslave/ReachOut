"use server";

import {db} from "@/db";
import {clientApplications} from "@/db/schema";

export default async function SubmitApplicationAction(applicationInfo: {
  companyId: number;
  clientId: number;
  contactFirstName: string;
  contactLastName: string;
  contactCity: string;
  contactEmail: string;
  contactPhone: string;
  resumeLink: string;
  availability: Date;
  userId: number;
}) {
  console.log(applicationInfo);
  try {
    const application = await db
      .insert(clientApplications)
      .values({
        clientId: applicationInfo.clientId,
        jobPostingId: applicationInfo.companyId,
        resumeUrl: applicationInfo.resumeLink,
        interviewDate: applicationInfo.availability.toLocaleDateString(),
        date: new Date(Date.now()).toLocaleDateString(),
        userId: applicationInfo.userId,
        applicationStatusId: 2, // Set status as sent in database
      })
      .returning({id: clientApplications.clientApplicationId});
    return {success: true, id: application[0].id};
  } catch (err) {
    console.log(err);
    return {success: false, id: null};
  }
}
