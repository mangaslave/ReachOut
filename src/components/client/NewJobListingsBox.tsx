"use client";
import {useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {Button} from "../ui/button";
import {JobListing} from "./JobListingDescription";
import {JobListing as listing} from "./JobListingMaster";
import Link from "next/link";

export function NewJobListingsBox({jobListings}: {jobListings: listing[] | null}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<listing>();
  const handleViewListing = (index: number) => {
    if (!jobListings) {
      return;
    }
    setSelectedListing(jobListings[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!jobListings) {
    return (
      <div className="p-6 rounded-xl bg-white shadow-md max-w-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">New Job Listings</h2>
          <Link href="/job-listing" className="text-lg underline">
            View All
          </Link>
        </div>
        <h2 className="text-lg font-bold">No new job listings</h2>
      </div>
    );
  }
  return (
    <div className="p-6 rounded-xl bg-white shadow-md max-w-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">New Job Listings</h2>
        <Link href="/job-listing" className="text-lg underline">
          View All
        </Link>
      </div>

      {jobListings.slice(0, 3).map((listing, index) => (
        <div key={listing.jobPostingId} className="flex items-center justify-between mb-4 last:mb-0">
          <div className="flex items-center gap-4 min-w-0">
            <Avatar className="h-14 w-14 shrink-0">
              <AvatarImage src={listing.logoUrl as string} alt={listing.companyName as string} />
              <AvatarFallback>{listing.logoUrl}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-medium">{listing.companyName}</h3>
              <p className="text-gray-600">{listing.title}</p>
            </div>
          </div>
          <Button
            onClick={() => {
              handleViewListing(index);
            }}
            value={index}
            className="bg-[#2F334D] hover:bg-[#373b5c] text-white px-6 py-3 rounded-lg text-lg"
          >
            View Listing
          </Button>
        </div>
      ))}
      {modalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListing jobDetails={selectedListing as listing} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}
