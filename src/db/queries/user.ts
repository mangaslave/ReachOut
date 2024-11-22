// import { db } from "..";
// import { users as userTable } from "../schema";

// export async function newUser({firstName, lastName, email, accountTypeId}: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     accountTypeId: number;
//   }) {
//     try {
//         console.log("Inserting user:", { firstName, lastName, email});
    
//         const insertedUser = await db.insert(userTable).values({
//           firstName,
//           lastName,
//           email,
//           accountTypeId,
//         }).onConflictDoUpdate({
//             target: userTable.email,
//             set: {
//               firstName: firstName,
//               lastName: lastName,
//               email: email,
//             },
//           });;
    
//         console.log("User inserted successfully:", insertedUser);
    
//         return { success: true, message: 'New client added successfully' };
//       } catch (error) {
//         console.error('Error adding new client to database:', error);
//         return { success: false, error: 'Error adding new client to database' };
//       }
// }