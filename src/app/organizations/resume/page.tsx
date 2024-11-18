"use server";
import {useState} from "react";
import {DocumentOrganizationComponent} from "@/components/client/DocumentsOrganizationPage";
import {Sidebar} from "@/components/client/SideBar";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";

export default async function DocumentOrganizationPage() {
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
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="flex justify-between items-center mb-4">
              <div className="flex w-full">
                <DocumentOrganizationComponent />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
