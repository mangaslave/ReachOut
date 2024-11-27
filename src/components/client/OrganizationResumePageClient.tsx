"use client";
import {useState} from "react";
import {DocumentOrganizationComponent} from "./DocumentsOrganizationPage";
import {Sidebar} from "./SideBar";

export default function OrganizationResumePageClientComponent({
  activeUser,
}: {
  activeUser: {name: string; email: string; image: string};
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
      <div className="ml-64 flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="flex justify-between items-center mb-4">
              <div className="flex w-full">
                <DocumentOrganizationComponent />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
