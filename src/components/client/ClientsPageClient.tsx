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
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
          <div className="max-w-7xl mx-1">
            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <ClientsFilters />
              </div>

              <div className="ml-auto flex items-center">
                <GoTrash className="text-2xl mx-4 text-gray-400 cursor-pointer" />
                <GoArchive className="text-2xl mr-8 ml-4 text-gray-400 cursor-pointer"/>
                <Link href="/organization/clients/newclient" passHref>
                  <Button variant="secondary" className="w-36">
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
