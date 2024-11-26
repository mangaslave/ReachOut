"use server";
import {Sidebar} from "@/components/client/SideBar";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import SettingsClient from "@/components/client/SettingsClient";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function SettingsPage() {
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
    <div className="flex h-screen bg-gray-50">
      <Sidebar user={activeUser} />
      <div className="flex-1 flex flex-col">
        <header className="px-4 py-6 border-b border-gray-300 bg-white">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-sm text-gray-600">Customize Your Preferences and Account Settings</p>
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <SettingsClient />
        </main>
      </div>
    </div>
  );
}
