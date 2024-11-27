"use server";

import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import GetApplicationsAction from "@/actions/GetApplicationsAction";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import EmployerDashboardClientComponent from "@/components/client/EmployerDashboardClient";

export default async function EmployerDashboardPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  const isEmployer = await AddKindeUserToDb(user, 2);

  if (!isEmployer?.companyId) {
    redirect("/");
  }
  const applications = await GetApplicationsAction(user.id);

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <EmployerDashboardClientComponent activeUser={activeUser} applications={applications} />;
}
