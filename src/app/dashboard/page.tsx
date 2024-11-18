"use server";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import Reminders from "@/components/client/Reminders";
import {NewMessagesBox} from "@/components/client/NewMessagesBox";
import {NewJobListingsBox} from "@/components/client/NewJobListingsBox";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";

export default async function DashboardPage() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  await AddKindeUserToDb();

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} />

      <div className="flex-1 flex flex-col">
        <Header headerMsg={`Welcome back, ${activeUser.name}`} />

        <main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <NewJobListingsBox />
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
