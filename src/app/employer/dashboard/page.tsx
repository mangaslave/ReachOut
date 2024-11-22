"use server"
import {EmployerDashboardPageComponent} from "@/components/client/EmployerDashboradPage"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import { EmployerSidebar } from "@/components/client/EmployerSidebar";

export default async function EmployerDashboardPage() {
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
    <EmployerSidebar user={activeUser}/>
    <div>
      <EmployerDashboardPageComponent />
    </div>
  </div>
); 
}