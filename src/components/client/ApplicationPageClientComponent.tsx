"use client";
import {Application} from "@/actions/GetApplicationsAction";
import EmployerApplicationTable from "./EmployerApplicationTable";
import {EmployerSidebar} from "./EmployerSidebar";
import Header from "./Header";
import {useState} from "react";
import {cn} from "@/lib/utils";

export default function ApplicationPageClientComponent({
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

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <Header
          headerMsg="Applications"
          subHeadingMsg="View a curated list of potential candidates for your open positions."
        />
        <div className="border-t border-gray-200 my-4"></div>
        <div className="max-w-7xl mx-1">
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-gray-900">Employee Matches</h2>
            <p className="text-lg">List of best candidates matched to your job openings</p>
          </div>
          <EmployerApplicationTable applications={applications.applications} />
        </div>
      </div>
    </div>
  );
}
