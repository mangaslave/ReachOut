"use client";
import {useEffect, useState} from "react";
import {EmployerNewJobListingBox} from "./EmployerNewJobListingsBox";
import {EmployerSidebar} from "./EmployerSidebar";
import Header from "./Header";
import {NewMessagesBox} from "./NewMessagesBox";
import Reminders from "./Reminders";
import {Application} from "@/actions/GetApplicationsAction";
import {cn} from "@/lib/utils";

export default function EmployerDashboardClientComponent({
  activeUser,
  applications,
}: {
  activeUser: {name: string; email: string; image: string};
  applications: {
    success: boolean;
    applications: Application[];
    message: string;
  };
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

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
      <EmployerSidebar user={activeUser} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <Header headerMsg={`Welcome back, ${activeUser.name}`} subHeadingMsg={formattedDate} />

        <main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Today&apos;s Overview</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <EmployerNewJobListingBox applications={applications.applications} />
                <NewMessagesBox />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Reminders />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
