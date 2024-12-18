"use server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import DashboardClient from "@/components/client/DashboardComponent";
import {GetJobListingsAction} from "@/actions/GetJobListingAction";

export default async function DashboardPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  await AddKindeUserToDb(user, 1);

  const activeUser = {
    name: `${user?.given_name} ${user?.family_name}`,
    email: `${user?.email}`,
    image: `${user?.picture}`,
  };

  const jobs = await GetJobListingsAction();

  return <DashboardClient user={activeUser} jobListings={jobs.listings} />;
}
