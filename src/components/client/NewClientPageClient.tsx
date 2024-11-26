"use client";
import {Sidebar} from "./SideBar";
import {useState} from "react";
import {cn} from "@/lib/utils";
import AddNewClientForm from "./NewClientForm";
import Header from "./Header";

export default function NewClientsPageClient({activeUser}: {activeUser: {name: string; email: string; image: string}}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <Header headerMsg={`Add New Client`} subHeadingMsg={"Fill in required information about new client."} />
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
          <div className="max-w-7xl mx-1">
            <AddNewClientForm />
          </div>
        </main>
      </div>
    </div>
  );
}
