"use client";
import {Sidebar} from "./SideBar";
import ClientsFilters from "./ClientFilters";
import Link from "next/link";
import ClientListing from "./ClientListing";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {ClientList} from "@/actions/GetClientAction";
import {Button} from "../ui/button";
import { GoArchive } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import Header from "./Header";

export default function ClientsPageClient({
  activeUser,
  clients,
}: {
  activeUser: {name: string; email: string; image: string};
  clients: ClientList | null;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />

      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <div className="w-full -mb-10">
          <Header headerMsg="Client Management" subHeadingMsg="View and edit your client's information."/>
        </div>
        <div className="flex space-x-4 mt-16 ml-7 -mb-12">
          <button className="font-semibold text-black border-b-2 border-black">
            Active
          </button>
          <button className="font-semibold text-gray-500">Archived</button>
        </div>
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
          <div className="max-w-7xl mx-1">
            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <ClientsFilters />
              </div>

              <div className="ml-auto flex items-center">
                <GoTrash className="text-2xl mx-4 mb-6 text-gray-400 cursor-pointer" />
                <GoArchive className="text-2xl mr-8 ml-4 mb-6 text-gray-400 cursor-pointer"/>
                <Link href="/organization/clients/newclient" passHref>
                  <Button variant="secondary" className="w-36 mb-10">
                    + Add New
                  </Button>
                </Link>
              </div>
            </div>

            <div>{clients ? <ClientListing clients={clients} /> : ""}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
