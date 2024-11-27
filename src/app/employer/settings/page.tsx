"use server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import SettingsPageClient from "@/components/client/SettingsPageClient";

export default async function SettingsPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  const isEmployer = await AddKindeUserToDb(user, 2);

  if (!isEmployer?.companyId) {
    redirect("/");
  }

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return <SettingsPageClient activeUser={activeUser} employer={true} />;
}
