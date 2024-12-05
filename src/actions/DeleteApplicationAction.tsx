"use server";
import {db} from "@/db";
import {clientApplications} from "@/db/schema";
import {eq} from "drizzle-orm";

export default async function deleteApplicationAction(applicationId: number) {
  try {
    const applicationDeleted = await db
      .delete(clientApplications)
      .where(eq(clientApplications.clientApplicationId, applicationId));
    return {success: true};
  } catch (err) {
    return {success: false};
  }
}
