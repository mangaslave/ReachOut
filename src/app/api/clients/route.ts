import { NextRequest, NextResponse } from "next/server";
import { newClient } from "@/db/queries/client"; 

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { firstName, lastName, city, postalCode, email, phoneNumber } = formData;

    console.log("received data", formData)

    await newClient({
      first_name: firstName,
      last_name: lastName,
      email,
      phoneNumber,
      city,
      postal_code: postalCode,
    });

    return NextResponse.json({ message: "Client added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error adding client:", error);
    return NextResponse.json({ message: "Failed to add client." }, { status: 500 });
  }
}



