"use server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import DashboardClient from "@/components/client/DashboardComponent";

export default async function DashboardPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();

  await AddKindeUserToDb(user);

  const activeUser = {
    name: `${user?.given_name} ${user?.family_name}`,
    email: `${user?.email}`,
    image: `${user?.picture}`,
  };

  return <DashboardClient user={activeUser} />;
}
