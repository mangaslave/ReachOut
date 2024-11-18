"use server";
import {db} from "@/db";
import {clients} from "@/db/schema";

export default async function GetClientAction() {
  try {
    const allClients = await db
      .select({id: clients.clientId, firstName: clients.first_name, lastName: clients.last_name})
      .from(clients);
    return {success: true, clients: allClients};
  } catch (err) {
    return {success: false, clients: null};
  }
}
