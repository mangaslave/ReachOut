"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { EmployerResources } from "@/components/client/EmployerResources"
import { EmployerSidebar } from "@/components/client/EmployerSidebar"; 
import Header from "@/components/client/Header"; 

export default async function ResourcesPage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/");
  }

  const user = await getUser();
  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <div className="flex-1 flex flex-col">
        <Header
          headerMsg="Resource Library"
          subHeadingMsg="View or search for second-chance hiring resources."
        />
        <div className="border-t border-gray-200 my-4"></div>
          <EmployerResources />
        </div>
      </div>
  );
}
