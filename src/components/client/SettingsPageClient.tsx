"use client";
import {useState} from "react";
import SettingsClient from "./SettingsClient";
import {Sidebar} from "./SideBar";
import {cn} from "@/lib/utils";
import {EmployerSidebar} from "./EmployerSidebar";

export default function SettingsPageClient({
  activeUser,
  employer,
}: {
  activeUser: {name: string; email: string; image: string};
  employer: boolean;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-gray-50">
      {employer ? (
        <EmployerSidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
      ) : (
        <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
      )}
      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <header className="px-4 py-6 border-b border-gray-300 bg-white">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-sm text-gray-600">Customize Your Preferences and Account Settings</p>
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <SettingsClient employer={employer} />
        </main>
      </div>
    </div>
  );
}
