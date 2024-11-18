"use server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import DashboardClient from "@/components/client/DashboardComponent";

export default async function DashboardPage() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    redirect("/");
  }

  await AddKindeUserToDb();

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <DashboardClient user={activeUser} />;
}
