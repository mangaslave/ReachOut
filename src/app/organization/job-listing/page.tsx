"use server";

import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import GetClientAction from "@/actions/GetClientAction";
import {GetJobListingsAction} from "@/actions/GetJobListingAction";
import JobListingMaster, {ClientInfo, JobListing} from "@/components/client/JobListingMaster";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export default async function JobListingPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  await AddKindeUserToDb(user, 1);

  const jobs = await GetJobListingsAction();
  let listings = jobs.listings as JobListing[];
  if (!jobs.success) {
    listings = [];
  }

  const clients = await GetClientAction();
  let allClients = clients.clients as ClientInfo[];
  if (!clients.success) {
    allClients = [];
  }

  return <JobListingMaster user={user} listings={listings} clients={allClients} />;
}