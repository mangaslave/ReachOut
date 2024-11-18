import { newUser } from "@/db/queries/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  console.log("API hit!");

  try {
    const { getUser } = getKindeServerSession(req);
    const user = await getUser();

    if (!user) {
      console.log("No user session found");
      return new Response("Not logged in", { status: 401 });
    }

    // Ensure that user fields are not null or undefined
    const firstName = user.given_name || "DefaultFirstName"; // Provide a fallback if null
    const lastName = user.family_name || "DefaultLastName"; // Provide a fallback if null
    const email = user.email || ""; // Email is typically mandatory; handle as needed
    const accountTypeId = 1; // Default value for accountTypeId

    if (!email) {
      console.error("Email is required but missing");
      return new Response("Email is required", { status: 400 });
    }

    // Create the user
    const createdUser = await newUser({ firstName, lastName, email, accountTypeId });

    return new Response(
      JSON.stringify({ message: "User logged in", user: createdUser }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

  
