"use server";

import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import Header from "@/components/client/Header";
import AddNewClientForm from "@/components/client/NewClientForm";
import {Sidebar} from "@/components/client/SideBar";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function ClientsPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  await AddKindeUserToDb(user, 1);

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} />
      <div className="ml-64 flex-1 flex flex-col">
        <Header headerMsg={`Add New Client`} subHeadingMsg={"Fill in required information about new client."} />
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
          <div className="max-w-7xl mx-1">
            <AddNewClientForm />
          </div>
        </main>
      </div>
    </div>
  );
}
