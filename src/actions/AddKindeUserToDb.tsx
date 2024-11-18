"use server";
import {db} from "@/db";
import {users} from "@/db/schema";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {eq} from "drizzle-orm";
import {redirect} from "next/navigation";

export default async function AddKindeUserToDb() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  try {
    const userExists = await db.select({id: users.userId}).from(users).where(eq(users.userId, user.id));
    if (userExists[0].id) {
      return;
    }

    await db.insert(users).values({
      userId: user.id as string,
      firstName: user.given_name as string,
      lastName: user.family_name as string,
      email: user.email as string,
      accountTypeId: 1,
    });
  } catch (err) {
    console.log(err);
  }
}
