"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { EmployerJobListingClient } from "@/components/client/EmployerJobListingClient"
import AddKindeUserToDb from "@/actions/AddKindeUserToDb"
import { EmployerSidebar } from "@/components/client/EmployerSidebar"

export default async function EmployerJobListingPage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  
  const user = await getUser();
  await AddKindeUserToDb(user, 2);
  
  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <main className="flex-1">
        <EmployerJobListingClient user={activeUser} />
      </main>
    </div>
  );
}