"use server";

import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import Header from "@/components/client/Header";
import AddNewClientForm from "@/components/client/NewClientForm";
import NewClientsPageClient from "@/components/client/NewClientPageClient";
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

  return <NewClientsPageClient activeUser={activeUser} />;
}
