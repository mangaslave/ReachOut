"use server";
import {db} from "@/db";
import {clients} from "@/db/schema";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {eq} from "drizzle-orm";

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
    return {success: true, clients: allClients};
  } catch (err) {
    return {success: false, clients: null, error: err};
  }
}
