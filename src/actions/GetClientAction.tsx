"use server";
import {db} from "@/db";
import {clients, skillClient, skills as skillsTable, summaries} from "@/db/schema";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {eq, inArray, sum} from "drizzle-orm";

export default async function GetClientAction() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return {success: false, clients: null};
  }
  try {
    const allClients = await db
      .select({
        id: clients.clientId,
        firstName: clients.first_name,
        lastName: clients.last_name,
        lastOnline: clients.lastOnline,
        email: clients.email,
        phoneNumber: clients.phoneNumber,
        city: clients.city,
        postalCode: clients.postal_code,
        resumeUrl: clients.resumeUrl,
      })
      .from(clients)
      .where(eq(clients.userId, user.id));

    const clientIds = allClients.map((client) => client.id);

    const skills = await db
      .select({
        clientId: skillClient.clientId,
        skill: skillsTable.skill,
      })
      .from(skillClient)
      .leftJoin(skillsTable, eq(skillsTable.skillId, skillClient.skillId))
      .where(inArray(skillClient.clientId, clientIds));

    const allClientSummaries = await db
      .select({
        summary: summaries.summary,
        score: summaries.score,
        clientId: summaries.clientId,
        jobPostingId: summaries.jobPostingsId,
      })
      .from(summaries)
      .where(inArray(summaries.clientId, clientIds));

    const clientList = allClients.map((client) => {
      const clientSkills = skills.filter((skill) => skill.clientId === client.id).map((skill) => skill.skill);
      const clientSummaries = allClientSummaries.filter((summary) => summary.clientId === client.id);
      return {
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        lastOnline: client.lastOnline,
        email: client.email,
        phoneNumber: client.phoneNumber,
        city: client.city,
        postalCode: client.postalCode,
        resumeUrl: client.resumeUrl,
        skills: clientSkills,
        summaries: clientSummaries,
      };
    });
    return {success: true, clients: clientList};
  } catch (err) {
    return {success: false, clients: null, error: err};
  }
}
