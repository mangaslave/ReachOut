"use client";
import React, {Dispatch, SetStateAction, useState} from "react";
import {Calendar} from "../ui/calendar";
import {Button} from "@/components/ui/button";

export function JobListingInterviewAvailability({
  nextModal,
  previousModal,
  closeModal,
  setAvailability,
  selectedDate,
}: {
  nextModal: () => void;
  previousModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setAvailability: Dispatch<SetStateAction<Date>>;
  selectedDate: Date;
}) {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  const moveToNext = () => {
    if (date) {
      setAvailability(date);
      nextModal();
    } else {
      alert("Please select a date on the calendar");
    }
  };

  return (
    <div
      onClick={closeModal}
      className="max-w-3xl min-h-fit flex flex-col mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
    >
      <div>
        <h1 className="font-bold text-2xl mb-1">Job Listing</h1>
        <span className="text-gray-600">Company Name</span>
      </div>

      <div className="border-b border-caribbeanCurrant my-4" />

      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-1">Interview Availability</h2>
        <p className="text-sm text-gray-600 mb-4">Please select a day that you are available for an interview</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-auto flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="relative w-full"
            classNames={{
              months: "flex flex-col",
              head_row: "flex w-full",
              head_cell: "flex text-gray-500 items-center justify-center rounded-md w-full font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "w-20 h-20 font-normal aria-selected:opacity-100 text-black",
              day_selected:
                "bg-spaceCadet text-white hover:bg-spaceCadet hover:text-white focus:bg-spaceCadet focus:text-white",
              day_outside: "text-gray-300 border-1",
              nav: "space-x-1 flex items-center",
              nav_button: "hover:bg-transparent p-1",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              caption: "flex justify-center py-2 relative items-center",
              caption_label: "text-sm font-medium",
            }}
          />
        </div>
        <div className="flex-col">
          <Button onClick={previousModal} variant="outline" className="py-2 mx-1">
            Go Back
          </Button>
          <Button onClick={moveToNext} variant="secondary" className="py-2">
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
}
