"use server";

import GetClientAction from "@/actions/GetClientAction";
import {GetJobListingsAction} from "@/actions/GetJobListingAction";
import JobListingMaster, {ClientInfo, JobListing} from "@/components/client/JobListingMaster";

export default async function JobListingPage() {
  const jobs = await GetJobListingsAction();
  let listings = jobs.listings as JobListing;
  if (!jobs.success) {
    listings = [];
  }

  const clients = await GetClientAction();
  let allClients = clients.clients as ClientInfo[];
  if (!clients.success) {
    allClients = [];
  }

  return <JobListingMaster listings={listings} clients={allClients} />;
}
