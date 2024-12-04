"use client";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import Reminders from "@/components/client/Reminders";
import Calendar from "@/components/client/Calendar";
import {NewMessagesBox} from "@/components/client/NewMessagesBox";
import {NewJobListingsBox} from "@/components/client/NewJobListingsBox";
import {useEffect, useState} from "react";
import {JobListing as Listing} from "./JobListingMaster";
import {cn} from "@/lib/utils";

export default function DashboardClient({
  user,
  jobListings,
}: {
  user: {name: string; email: string; image: string};
  jobListings: Listing[] | null;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={user} setCollapsed={setCollapsed} collapsed={collapsed} />

      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <Header headerMsg={`Welcome back, ${user.name}`} subHeadingMsg={formattedDate} />

        <main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Today&#39;s Overview</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <NewJobListingsBox jobListings={jobListings} />
                <NewMessagesBox />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Reminders />
              <Calendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
