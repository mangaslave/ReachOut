"use client"
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function JobListingInterviewAvailability() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <div>
                <h1 className="font-bold text-2xl mb-1">Job Listing</h1>
                <span className="text-gray-600">Company Name</span> 
            </div>
            
            <div className="border-b border-gray-300 my-4" />
            
            <h2 className="text-xl font-bold mb-1">Interview Availability</h2>
            <p className="text-sm text-gray-600 mb-4">
                Please select a range of days that you are available for an interview
            </p>
            
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="p-0"
                classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                    head_row: "flex",
                    head_cell: "text-gray-500 rounded-md w-8 font-normal text-[0.8rem]",
                    row: "flex w-full mt-2",
                    cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-black",
                    day_selected: "bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:",
                    day_outside: "text-gray-300",
                    nav: "space-x-1 flex items-center",
                    nav_button: "hover:bg-transparent p-1",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    caption: "flex justify-center py-2 relative items-center",
                    caption_label: "text-sm font-medium",
                }}
            />
          <Link href="/">
        <Button variant="secondary" className="bg-spaceCadet text-white">Submit Application</Button>
          </Link> 
        </div>
    );
}