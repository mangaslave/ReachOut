"use client";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import {useState} from "react";
import JobCard from "@/components/client/job_postcard";
import {JobListingContactInfo} from "@/components/client/JobListingContactInfo";
import {JobListing} from "@/components/client/JobListingDescription";
import {JobListingInterviewAvailability} from "@/components/client/JobListingInterviewAvailability";
import {JobListingUploadResume} from "@/components/client/JobListingUploadResume";

export default function JobListingPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    image: "/path-to-avatar.jpg",
  });

  const openDetailsModal = () => {
    setDetailsModalOpen(true);
  };

  const closeAvailabilityModal = () => {
    setAvailabilityModalOpen(false);
  };

  const moveToApplication = () => {
    closeAll();
    setApplicationModalOpen(true);
  };

  const moveToAvailability = () => {
    closeAll();
    setAvailabilityModalOpen(true);
  };

  const moveToResume = () => {
    closeAll();
    setResumeModalOpen(true);
  };

  const closeAll = () => {
    setApplicationModalOpen(false);
    setDetailsModalOpen(false);
    setAvailabilityModalOpen(false);
    setResumeModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={user} />

      <div className="flex-1 flex flex-col">
        <Header headerMsg="Job Listing" subHeadingMsg="Browse the latest job listing posts." />

        <main className="flex-1 overflow-y-auto pt-40 px-1 sm:px-6 lg:px-8">
          {/* joblistings content here */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
              <JobCard
                openModal={openDetailsModal}
                baseColor="bg-orchidPink"
                textcolor="text-black"
                bordercolor="border-black"
              />
              <JobCard
                openModal={openDetailsModal}
                baseColor="bg-caribbeanCurrant"
                textcolor="text-white"
                bordercolor="border-white"
              />
              <JobCard
                openModal={openDetailsModal}
                baseColor="bg-ylnMnBlue"
                textcolor="text-white"
                bordercolor="border-white"
              />
            </div>
          </div>
        </main>
      </div>
      {applicationModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingContactInfo nextModal={moveToResume} />
        </div>
      )}
      {detailsModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListing nextModal={moveToApplication} />
        </div>
      )}
      {resumeModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingUploadResume nextModal={moveToAvailability} />
        </div>
      )}
      {availabilityModalOpen && (
        <div className="fixed z-50 py-4  inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingInterviewAvailability nextModal={closeAll} />
        </div>
      )}
    </div>
  );
}
