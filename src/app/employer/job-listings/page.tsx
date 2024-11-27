"use server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import {JobListing} from "@/components/client/JobListingMaster";
import {GetJobListingsAction} from "@/actions/GetJobListingAction";
import EmployerJobListingClientComponent from "@/components/client/EmployerJobListingClientComponent";

export default async function EmployerJobListingPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
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

  const jobs = await GetJobListingsAction();
  let listings = jobs.listings as JobListing[];
  if (!jobs.success) {
    listings = [];
  }

  return <EmployerJobListingClientComponent activeUser={activeUser} listings={listings} />;
}
