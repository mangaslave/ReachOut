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

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <div className="ml-64 flex-1 flex flex-col">
        <Header headerMsg={`Welcome back, ${activeUser.name}`} />

        <main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <EmployerNewJobListingBox applications={applications.applications} />
                <NewMessagesBox />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Reminders />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
