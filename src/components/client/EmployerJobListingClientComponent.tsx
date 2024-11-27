"use client";
import {useState} from "react";
import {EmployerSidebar} from "./EmployerSidebar";
import {EmployerJobListingClient} from "./EmployerJobListingClient";
import {JobListing} from "./JobListingMaster";
import {cn} from "@/lib/utils";

export default function EmployerJobListingClientComponent({
  activeUser,
  listings,
}: {
  activeUser: {name: string; email: string; image: string};
  listings: JobListing[];
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
      <main className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <EmployerJobListingClient initialListings={listings} />
      </main>
    </div>
  );
}
