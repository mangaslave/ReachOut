"use server";

import React from "react";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";

import {EmployerSidebar} from "@/components/client/EmployerSidebar";
import Header from "@/components/client/Header";
import GetApplicationsAction from "@/actions/GetApplicationsAction";
import EmployerApplicationTable from "@/components/client/EmployerApplicationTable";

export default async function PotentialEmployees() {
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

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <div className="ml-64 flex-1 flex flex-col">
        <Header
          headerMsg="Applications"
          subHeadingMsg="View a curated list of potential candidates for your open positions."
        />
        <div className="border-t border-gray-200 my-4"></div>
        <div className="max-w-7xl mx-1">
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-gray-900">Employee Matches</h2>
            <p className="text-lg">List of best candidates matched to your job openings</p>
          </div>
          <EmployerApplicationTable applications={applications.applications} />
        </div>
      </div>
    </div>
  );
}
