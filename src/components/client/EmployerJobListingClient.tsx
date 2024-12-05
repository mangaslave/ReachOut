"use client";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CreateJobListingClient} from "./CreateJobListingClient";
import {type JobListing} from "@/components/client/JobListingMaster";
import {EmployerViewJobListing} from "./EmployerViewJobListingComponent";

export function EmployerJobListingClient({initialListings}: {initialListings: JobListing[]}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<JobListing | null>(null);
  const [isAddListingModalOpen, setIsAddListingModalOpen] = useState(false);

  const handleViewDetails = (listing: JobListing) => {
    setSelectedListing(listing);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedListing(null);
  };

  const closeAddListingModal = () => {
    setIsAddListingModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="p-6 bg-white">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Your Listings</h1>
          <p className="text-sm text-gray-500">View your current job listings</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-white border border-gray-200">
                <SelectValue placeholder="Job Position" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(new Set(initialListings.map((l) => l.title))).map((title) => (
                  <SelectItem key={title} value={title}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px] bg-white border border-gray-200">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(new Set(initialListings.map((l) => l.jobType).filter(Boolean))).map((type) => (
                  <SelectItem key={type!} value={type!}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            className="bg-spaceCadet hover:bg-indigo-800 text-white"
            onClick={() => setIsAddListingModalOpen(true)}
          >
            + Add New Listing
          </Button>
        </div>

        <div className="rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-spaceCadet text-white">
                <th className="text-left p-4 font-medium">Position</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-left p-4 font-medium">Location</th>
                <th className="text-right p-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {initialListings.map((listing) => (
                <tr key={listing.jobPostingId} className="border-b">
                  <td className="p-4">{listing.title}</td>
                  <td className="p-4">{listing.jobType}</td>
                  <td className="p-4">{listing.location}</td>
                  <td className="p-4 text-right">
                    <Button
                      variant="link"
                      className="text-gray-600 hover:text-gray-900"
                      onClick={() => handleViewDetails(listing)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && selectedListing && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className="relative bg-white rounded-lg max-w-3xl w-full mx-4">
            <EmployerViewJobListing jobDetails={selectedListing} closeModal={closeModal} />
          </div>
        </div>
      )}

      {isAddListingModalOpen && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && closeAddListingModal()}
        >
          <div className="relative w-full max-w-3xl mx-auto my-8">
            <Button className="absolute top-4 right-4 z-50" variant="ghost" onClick={closeAddListingModal}>
              ×
            </Button>
            <CreateJobListingClient />
          </div>
        </div>
      )}
    </div>
  );
}
