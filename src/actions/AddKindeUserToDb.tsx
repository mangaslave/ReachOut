"use server";
import {db} from "@/db";
import {users} from "@/db/schema";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";
import {eq} from "drizzle-orm";

export default async function AddKindeUserToDb(user: KindeUser<Record<string, any>>, accountType: number) {
  if (!user) {
    return;
  }
  try {
    const userExists = await db
      .select({id: users.userId, companyId: users.companyId})
      .from(users)
      .where(eq(users.userId, user.id));
    if (userExists[0]?.id) {
      if (userExists[0]?.companyId) {
        return {companyId: userExists[0].companyId};
      }
      return;
    }

    await db.insert(users).values({
      userId: user.id as string,
      firstName: user.given_name as string,
      lastName: user.family_name as string,
      email: user.email as string,
      accountTypeId: accountType,
    });
  } catch (err) {
    console.log(err);
  }
}
