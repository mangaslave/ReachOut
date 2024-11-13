"use client";
import React from "react";
import {Button} from "@/components/ui/button";
import {JobApplication} from "@/app/job-listing/page";

export function JobListingApplicationSummary({
  nextModal,
  previousModal,
  closeModal,
  applicationInfo,
}: {
  nextModal: () => void;
  previousModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  applicationInfo: () => JobApplication;
}) {
  const info = applicationInfo();
  const moveToNext = () => {
    console.log(applicationInfo);
    nextModal();
  };

  return (
    <div
      onClick={closeModal}
      className="max-w-3xl w-full h-full mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
    >
      <div>
        <h1 className="font-bold text-2xl mb-1">Job Listing</h1>
        <span className="text-gray-600">Company Name</span>
      </div>

      <div className="border-b border-caribbeanCurrant my-4" />

      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-1">Summary</h2>
        <p className="text-sm text-gray-600 mb-4">Review your information to check if it is correct</p>
      </div>
      <div className="flex flex-col">
        <div className="w-auto flex-col justify-center">
          <h2 className="text-xl font-bold mb-1">Contact</h2>
          <ul className="text-sm text-gray-600 mb-4">
            <li>{`${info.contactFirstName} ${info.contactLastName}`}</li>
            <li>{`${info.contactCity}`}</li>
            <li>{`${info.contactEmail}`}</li>
            <li>{`${info.contactPhone}`}</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold mb-1">Resume</h2>
        {/* 
          //TODO: Change this to resume viewer or something?
           */}
        <p className="text-sm text-gray-600 mb-4">{`${info.resumeLink}`}</p>
        <h2 className="text-xl font-bold mb-1">Availability</h2>
        <p className="text-sm text-gray-600 mb-4">{`${info.availability.toLocaleDateString()}`}</p>
      </div>
      <Button onClick={previousModal} variant="outline" className="py-2 mx-1">
        Go Back
      </Button>
      <Button onClick={moveToNext} variant="secondary" className="py-2 mx-1">
        Submit Application
      </Button>
    </div>
  );
}
