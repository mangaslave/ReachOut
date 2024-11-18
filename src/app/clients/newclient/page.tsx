"use client";

import Header from "@/components/client/Header";
import AddNewClientForm from "@/components/client/NewClientForm";
import {Sidebar} from "@/components/client/SideBar";
// import {useState} from "react";

export default function ClientsPage() {

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
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