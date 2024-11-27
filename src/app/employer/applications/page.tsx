"use server";

import React from "react";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import GetApplicationsAction from "@/actions/GetApplicationsAction";
import ApplicationPageClientComponent from "@/components/client/ApplicationPageClientComponent";

export default async function PotentialEmployees() {
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

  return <ApplicationPageClientComponent activeUser={activeUser} applications={applications} />;
}
