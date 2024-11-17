"use client";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import {useState} from "react";
import JobCard from "@/components/client/job_postcard";
import {JobListingContactInfo} from "@/components/client/JobListingContactInfo";
import {JobListing} from "@/components/client/JobListingDescription";
import {JobListingInterviewAvailability} from "@/components/client/JobListingInterviewAvailability";
import {JobListingUploadResume} from "@/components/client/JobListingUploadResume";
import JobListingFilters from "@/components/client/JobListingFilters";
import {JobListingApplicationSummary} from "@/components/client/JobListingSummary";

interface JobDetails {
  companyName: string;
  jobTitle: string;
  salary: string;
  location: string;
  jobType: string;
  description: string;
}

export interface JobApplication {
  companyId: number;
  clientId: number;
  contactFirstName: string;
  contactLastName: string;
  contactCity: string;
  contactEmail: string;
  contactPhone: string;
  resumeLink: string;
  availability: Date;
}

/*
  INSERT INTO companies (company_name, account_types) VALUES ('Aecon Group', 3);
*/

export default function JobListingPage() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedJobDetails, setSelectedJobDetails] = useState<JobDetails | null>(null);
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactCity, setContactCity] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [availability, setAvailability] = useState(new Date(Date.now()));

  const [user] = useState({
    name: "Giselle Andrews",
    email: "gandrews@email.com ",
    image: "/static/images/giselleAndrews.jpg",
  });

  const applicationInfo = (): JobApplication => {
    return {
      companyId: 1,
      clientId: 1,
      contactFirstName,
      contactLastName,
      contactCity,
      contactEmail,
      contactPhone,
      resumeLink,
      availability,
    };
  };

  const openDetailsModal = (jobDetails: JobDetails) => {
    closeAll();
    setSelectedJobDetails(jobDetails);
    setDetailsModalOpen(true);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeAll();
    }
  };

  const moveToApplication = () => {
    closeAll();
    setApplicationModalOpen(true);
  };

  const moveToAvailability = () => {
    closeAll();
    setAvailabilityModalOpen(true);
  };

  const moveToConfirm = () => {
    closeAll();
    setConfirmModalOpen(true);
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
    setConfirmModalOpen(false);
  };

  const closeAllShowSuccess = () => {
    setApplicationModalOpen(false);
    setDetailsModalOpen(false);
    setAvailabilityModalOpen(false);
    setResumeModalOpen(false);
    setConfirmModalOpen(false);
    // TODO: Server action here
    // SubmitApplicationAction({
    //   companyId: 1,
    //   clientId: 1,
    //   contactFirstName,
    //   contactLastName,
    //   contactCity,
    //   contactEmail,
    //   contactPhone,
    //   resumeLink,
    //   availability
    // });
    setSuccessModalOpen(true);
    //TODO: Reset state upon successful submit
    //resetState();
    setTimeout(() => {
      setSuccessModalOpen(false);
    }, 2500);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={user} />

      <div className="flex-1 flex flex-col">
        <Header headerMsg="Job Listing" subHeadingMsg="Browse the latest job listing posts." />

        <main className="flex-1 overflow-y-auto lg:px-8 mt-4">
          {/* joblistings content here */}
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <JobListingFilters />
              </div>

              <div className="ml-auto">
                <button className="bg-spaceCadet text-white hover:bg-ylnMnBlue text-xs px-4 rounded-md h-8">
                  + Add New
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <JobCard
                openModal={() =>
                  openDetailsModal({
                    companyName: "Aecon Group",
                    jobTitle: "Construction Worker",
                    salary: "$20-30/h",
                    location: "Toronto, ON",
                    jobType: "Part-Time",
                    description:
                      "We're looking for a reliable and flexible person to join our team. You should be comfortable working in different environments, sometimes under tough conditions, and be able to work well with a small group. While you don't need a lot of specific technical skills, it's important that you're eager to learn, can adapt quickly, and can handle challenging situations. Having some previous experience is a plus, as it shows you're resilient and capable of taking on the job.",
                  })
                }
                baseColor="bg-orchidPink"
                textcolor="text-black"
                bordercolor="border-black"
                companyName="Aecon Group"
                companyLogo="/static/images/aecon-logo.svg"
                location="Toronto, ON"
                hourlyPay="$20-30/h"
                jobTitle="Construction Worker"
                matchStatus="Excellent"
                jobType="Part-Time"
                dateOfPosting="1 day ago"
                statusColor="bg-green-600"
                status={{
                  status1: "/static/images/match-green.svg",
                  status2: "/static/images/match-green.svg",
                  status3: "/static/images/match-green.svg",
                }}
              />

              <JobCard
                openModal={() =>
                  openDetailsModal({
                    companyName: "Atelier Inns",
                    jobTitle: "Hotel Maintenance",
                    salary: "$20-26/h",
                    location: "Toronto, ON",
                    jobType: "Part-Time",
                    description:
                      "The Guest Service Representative position is generally responsible for representing the hotel to the guest throughout all stages of the guest’s stay, determining the guest’s reservation status and identifying their duration of stay. He or she will also process the guest’s method of payment, be customer-service oriented, and work closely with housekeeping and maintenance to ensure room status reports are current and up to date.",
                  })
                }
                baseColor="bg-caribbeanCurrant"
                textcolor="text-white"
                bordercolor="border-white"
                companyName="Atelier Inns"
                companyLogo="/static/images/atelier-logo.png"
                location="Toronto, ON"
                hourlyPay="$20-30/h"
                jobTitle="Hotel Maintance"
                matchStatus="Bad"
                jobType="Part-Time"
                dateOfPosting="1 day ago"
                statusColor="bg-red-600"
                status={{
                  status1: "/static/images/match-red.svg",
                  status2: "/static/images/match-red.svg",
                  status3: "/static/images/match-red.svg",
                }}
              />

              <JobCard
                openModal={() =>
                  openDetailsModal({
                    companyName: "TPD",
                    jobTitle: "Manager",
                    salary: "$32-35/h",
                    location: "Markham, ON",
                    jobType: "Part-Time",
                    description:
                      "Our client, a global provider of engineering and geoscience software solutions, is looking for a Part Time Office Manager in their busy Vancouver office for a 3 month contract with the possibility to go permanent after 3 months. The Office Manager is essential to team cohesion, serving as the go-to person for daily operations. You’ll proactively handle office administration, travel arrangements, and facility management, ensuring staff feel supported and the office runs smoothly. We are looking for an energetic professional who thrives in a dynamic environment and is capable of managing various administrative tasks independently. With strong organizational skills and a customer-focused attitude, you’ll excel in supporting a busy and diverse office..",
                  })
                }
                baseColor="bg-ylnMnBlue"
                textcolor="text-white"
                bordercolor="border-white"
                companyName="TPD"
                companyLogo="/static/images/tpd-logo.jpeg"
                location="Markham, ON"
                hourlyPay="$32-35/h"
                jobTitle="Manager"
                matchStatus="Okay"
                jobType="Part-Time"
                dateOfPosting="3 day ago"
                statusColor="bg-yellow-600"
                status={{
                  status1: "/static/images/match-green.svg",
                  status2: "/static/images/match-green.svg",
                  status3: "/static/images/match-red.svg",
                }}
              />

              <JobCard
                openModal={() =>
                  openDetailsModal({
                    companyName: "Atelier Inns",
                    jobTitle: "Hotel Maintenance",
                    salary: "$20-30/h",
                    location: "Toronto, ON",
                    jobType: "Part-Time",
                    description:
                      "The Guest Service Representative position is generally responsible for representing the hotel to the guest throughout all stages of the guest’s stay, determining the guest’s reservation status and identifying their duration of stay. He or she will also process the guest’s method of payment, be customer-service oriented, and work closely with housekeeping and maintenance to ensure room status reports are current and up to date.",
                  })
                }
                baseColor="bg-caribbeanCurrant"
                textcolor="text-white"
                bordercolor="border-white"
                companyName="Halton Region"
                companyLogo="/static/images/halton-logo.jpeg"
                location="Halton, ON"
                hourlyPay="$32/h"
                jobTitle="Construction Foreman"
                matchStatus="Okay"
                jobType="Full-Time"
                dateOfPosting="4 day ago"
                statusColor="bg-yellow-600"
                status={{
                  status1: "/static/images/match-green.svg",
                  status2: "/static/images/match-green.svg",
                  status3: "/static/images/match-red.svg",
                }}
              />
              <JobCard
                openModal={() =>
                  openDetailsModal({
                    companyName: "Atelier Inns",
                    jobTitle: "Hotel Maintenance",
                    salary: "$20-30/h",
                    location: "Toronto, ON",
                    jobType: "Part-Time",
                    description:
                      "The Guest Service Representative position is generally responsible for representing the hotel to the guest throughout all stages of the guest’s stay, determining the guest’s reservation status and identifying their duration of stay. He or she will also process the guest’s method of payment, be customer-service oriented, and work closely with housekeeping and maintenance to ensure room status reports are current and up to date.",
                  })
                }
                baseColor="bg-ylnMnBlue"
                textcolor="text-white"
                bordercolor="border-white"
                companyName="Halton Region"
                companyLogo="/static/images/halton-logo.jpeg"
                location="Halton, ON"
                hourlyPay="$26/h"
                jobTitle="Maintenance Coordinator"
                matchStatus="Bad"
                jobType="Part-Time/Full-Time"
                dateOfPosting="5 day ago"
                statusColor="bg-red-600"
                status={{
                  status1: "/static/images/match-red.svg",
                  status2: "/static/images/match-red.svg",
                  status3: "/static/images/match-red.svg",
                }}
              />
              <JobCard
                openModal={() =>
                  openDetailsModal({
                    companyName: "Atelier Inns",
                    jobTitle: "Hotel Maintenance",
                    salary: "$20-30/h",
                    location: "Toronto, ON",
                    jobType: "Part-Time",
                    description:
                      "The Guest Service Representative position is generally responsible for representing the hotel to the guest throughout all stages of the guest’s stay, determining the guest’s reservation status and identifying their duration of stay. He or she will also process the guest’s method of payment, be customer-service oriented, and work closely with housekeeping and maintenance to ensure room status reports are current and up to date.",
                  })
                }
                baseColor="bg-orchidPink"
                textcolor="text-black"
                bordercolor="border-black"
                companyName="Outlier AI"
                companyLogo="/static/images/outlier-logo.jpeg"
                location="Oakville, ON"
                hourlyPay="$18/h"
                jobTitle="Math Tutor"
                matchStatus="Okay"
                jobType="Part-Time"
                dateOfPosting="7 day ago"
                statusColor="bg-yellow-600"
                status={{
                  status1: "/static/images/match-green.svg",
                  status2: "/static/images/match-green.svg",
                  status3: "/static/images/match-red.svg",
                }}
              />
            </div>
          </div>
        </main>
      </div>
      {detailsModalOpen && selectedJobDetails && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListing jobDetails={selectedJobDetails} closeModal={handleClickOutside} nextModal={moveToApplication} />
        </div>
      )}
      {applicationModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingContactInfo
            closeModal={handleClickOutside}
            nextModal={moveToResume}
            previousModal={closeAll}
            setContactFirstName={setContactFirstName}
            setContactLastName={setContactLastName}
            setContactCity={setContactCity}
            setContactEmail={setContactEmail}
            setContactPhone={setContactPhone}
            contactInfo={{contactFirstName, contactLastName, contactCity, contactPhone}}
          />
        </div>
      )}
      {resumeModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingUploadResume
            closeModal={handleClickOutside}
            nextModal={moveToAvailability}
            previousModal={moveToApplication}
            setResumeLink={setResumeLink}
            resumeName={resumeName}
            setResumeName={setResumeName}
          />
        </div>
      )}
      {availabilityModalOpen && (
        <div className="fixed z-50 py-4  inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingInterviewAvailability
            closeModal={handleClickOutside}
            nextModal={moveToConfirm}
            previousModal={moveToResume}
            setAvailability={setAvailability}
            selectedDate={availability}
          />
        </div>
      )}
      {confirmModalOpen && (
        <div className="fixed z-50 py-4  inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingApplicationSummary
            closeModal={handleClickOutside}
            nextModal={closeAllShowSuccess}
            previousModal={moveToAvailability}
            applicationInfo={applicationInfo}
          />
        </div>
      )}
      {successModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-md shadow-black rounded-lg text-spaceCadet w-96 flex items-center justify-center h-24">
            <h3 className="py-8 text-lg">Application submitted successfully! ✅</h3>
          </div>
        </div>
      )}
    </div>
  );
}
