// import { newUser } from "@/db/queries/user";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { NextApiRequest } from "next";

// export async function POST(req: NextApiRequest) {
//     console.log("API hit!");
  
//     try {
//       const { getUser } = getKindeServerSession(req);
//       const user = await getUser();
  
//       if (!user) {
//         console.log("No user session found");
//         return new Response("Not logged in", { status: 401 });
//       }

//       const firstName = user.given_name;
//       const lastName = user.family_name;
//       const email = user.email;
//       const accountTypeId = 1;
  
//       const createdUser = await newUser({firstName, lastName, email, accountTypeId})
  
//       return new Response(
//         JSON.stringify({ message: "User logged in", user }),
//         { status: 200 }
//       );
//     } catch (error) {
//       console.error("API error:", error);
//       return new Response("Internal Server Error", { status: 500 });
//     }
//   }
  
