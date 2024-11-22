"use client";
import Header from "@/components/client/Header";
import { NewMessagesBox } from "@/components/client/NewMessagesBox";
import Reminders from "@/components/client/Reminders"
import { useState, useEffect } from "react";
import { EmployerNewJobListingBox } from "@/components/client/EmployerNewJobListingsBox";
import { EmployerSidebar } from "@/components/client/EmployerSidebar";

export function EmployerDashboardPageComponent() {
    const [user] = useState({
        name: "Greg Johnson",
        email: "gjohnson@gmail.com",
        image: "/static/images/giselleAndrews.jpg"
    })

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
      <div className="flex-1 flex flex-col">
        <Header headerMsg={`Welcome back, ${user.name}`} subHeadingMsg={`${formattedDate}`} />

        <main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <EmployerNewJobListingBox />
                <NewMessagesBox />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Reminders />
            </div>
          </div>
        </main>
      </div>
  );

}
