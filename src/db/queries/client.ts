import { db } from "..";
import { clients as clientTable } from "../schema";

export async function newClient({
    first_name,
    last_name,
    email,
    phoneNumber,
    city,
    postal_code,
  }: {
    first_name: string;
    last_name: string;
    email: string;
    phoneNumber: string | null;
    city: string;
    postal_code: string,
  }) {
    try {
      console.log("Inserting client:", { first_name, last_name, phoneNumber, email, postal_code, city });
  
      const insertedClient = await db.insert(clientTable).values({
        first_name,
        last_name,
        phoneNumber,
        email,
        postal_code,
        city
      });
  
      console.log("Client inserted successfully:", insertedClient);
  
      return { success: true, message: 'New client added successfully' };
    } catch (error) {
      console.error('Error adding new client to database:', error);
      return { success: false, error: 'Error adding new client to database' };
    }
  }