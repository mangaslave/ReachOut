"use server";
import {clients as clientTable} from "@/db/schema";
import {db} from "@/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export async function AddClientAction({
  firstName,
  lastName,
  email,
  phoneNumber,
  city,
  postalCode,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  postalCode: string;
}) {
  try {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if (!user) {
      return {success: false, message: "No user detected, client not added to database."};
    }

    const insertedClient = await db.insert(clientTable).values({
      userId: user.id as string,
      first_name: firstName,
      last_name: lastName,
      phoneNumber,
      email,
      postal_code: postalCode,
      city,
    });

    console.log("Client inserted successfully:", insertedClient);

    return {success: true, message: "New client added successfully"};
  } catch (error) {
    console.error("Error adding new client to database:", error);
    return {success: false, message: "Error adding new client to database"};
  }
}
