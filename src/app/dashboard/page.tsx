"use client";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import {useEffect, useState} from "react";
import Reminders from "@/components/client/Reminders";
import {NewMessagesBox} from "@/components/client/NewMessagesBox";
import {NewJobListingsBox} from "@/components/client/NewJobListingsBox";

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    image: "/path-to-avatar.jpg",
  });

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
      <Sidebar user={user} />

      <div className="flex-1 flex flex-col">
        <Header headerMsg={`Welcome back, ${user.name}`} subHeadingMsg={`${formattedDate}`} />

        <main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <NewJobListingsBox />
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
