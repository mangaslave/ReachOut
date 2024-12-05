"use client";

import {useState} from "react";
import InboxPreview from "./InboxPreview";
import {cn} from "@/lib/utils";
import {EmployerSidebar} from "./EmployerSidebar";

export default function EmployerInbox({activeUser}: {activeUser: {name: string; email: string; image: string}}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <EmployerSidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />
        <div className="mx-10">
          <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
            <header className="border-spaceCadet border-b pb-3">
              <h1 className="text-2xl font-bold mt-20">Inbox</h1>
              <p className="text-sm text-gray-600">See messages from others.</p>
            </header>
            <main className="flex">
              <section className="flex-col justify-center items-center">
                <form>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 w-80 mt-10 rounded border border-gray-500"
                  />
                </form>
                <div className="flex justify-evenly border-2 border-spaceCadet bg-gray-200 rounded-xl mt-3 p-1 w-80">
                  <button className="bg-spaceCadet text-white w-16 text-center rounded-lg font-medium">All</button>
                  <button className="hover:bg-spaceCadet hover:text-white w-16 text-center rounded-lg hover:font-medium">
                    Read
                  </button>
                  <button className="hover:bg-spaceCadet hover:text-white w-16 text-center rounded-lg hover:font-medium">
                    Unread
                  </button>
                </div>
                <InboxPreview
                  sender="ReachOut"
                  subject="New Application!"
                  time="12:21PM"
                  content="Hey There! You have received a new application for you listing..."
                />
                <div className="w-10/12 h-px bg-spaceCadet my-7"></div>
                <InboxPreview
                  sender="James Lawson"
                  subject="Application Status"
                  time="10:02AM"
                  content="Hey! Just following up to see if my client Gregory Wick's interview was..."
                />
                <div className="w-10/12 h-px bg-spaceCadet my-7"></div>
                <InboxPreview
                  sender="Samantha McMaster"
                  subject="Interview Reschedule"
                  time="Yesterday"
                  content="Hey, apologies for the last minute schedule change. My client is..."
                />
              </section>
              <section className="-ml-16">
                <div className="bg-spaceCadet w-px h-full"></div>
              </section>
              <section className="flex items-center justify-center h-screen">
                <div className="m-72">No message selected...</div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
