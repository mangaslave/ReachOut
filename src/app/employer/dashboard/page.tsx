"use server";

import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import GetApplicationsAction from "@/actions/GetApplicationsAction";
import EmployerDashboard from "@/components/client/EmployerDashboard";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {EmployerNewJobListingBox} from "@/components/client/EmployerNewJobListingsBox";
import {NewMessagesBox} from "@/components/client/NewMessagesBox";
import Reminders from "@/components/client/Reminders";
import Header from "@/components/client/Header";
import {EmployerSidebar} from "@/components/client/EmployerSidebar";
import EmployerDashboardClientComponent from "@/components/client/EmployerDashboardClient";

export default async function EmployerDashboardPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  await AddKindeUserToDb(user, 2);

  const applications = await GetApplicationsAction(user.id);

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <EmployerDashboardClientComponent activeUser={activeUser} applications={applications} />;
}
