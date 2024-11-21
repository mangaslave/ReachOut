"use server";

import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import GetApplicationsAction from "@/actions/GetApplicationsAction";
import EmployerDashboard from "@/components/client/EmployerDashboard";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function EmployerDashboardPage() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  await AddKindeUserToDb(1);

  const applications = await GetApplicationsAction(user.id);

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <EmployerDashboard user={activeUser} applications={applications.applications} />;
}
