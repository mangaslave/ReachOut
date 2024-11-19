"use client";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import userIcon from "../../../public/static/images/userIcon.svg";
import {useState} from "react";
import JobCard from "@/components/client/job_postcard";
import {JobListingContactInfo} from "@/components/client/JobListingContactInfo";
import {JobListing} from "@/components/client/JobListingDescription";
import {JobListingInterviewAvailability} from "@/components/client/JobListingInterviewAvailability";
import {JobListingUploadResume} from "@/components/client/JobListingUploadResume";
import JobListingFilters, {FilterState} from "@/components/client/JobListingFilters";
import {JobListingApplicationSummary} from "@/components/client/JobListingSummary";
import SubmitApplicationAction from "@/actions/SubmitApplicationAction";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";

export interface JobDetails {
  companyName: string;
  jobTitle: string;
  salary: string;
  location: string;
  jobType: string;
  description: string;
  skills: string[];
  benefits: string[];
}

export interface ClientInfo {
  firstName: string | null;
  lastName: string | null;
  id: number | null;
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
  userId: string;
}

export type JobListing =
  | {
      title: string;
      companyName: string | null;
      datePosted: string | null;
      logoUrl: string | null;
      salary: number;
      location: string | null;
      date: string | null;
      jobType: string | null;
      description: string | null;
      jobPostingId: number;
      skills: (string | null)[];
      benefit: (string | null)[];
    }[]
  | null;

export default function JobListingMaster({
  listings,
  clients,
  user,
}: {
  listings: JobListing;
  clients: ClientInfo[];
  user: KindeUser<Record<string, unknown>>;
}) {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [selectClientModalOpen, setSelectClientModalOpen] = useState(false);
  const [selectedJobDetails, setSelectedJobDetails] = useState<JobDetails | null>(null);
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactCity, setContactCity] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [, setResumeName] = useState("");
  const [availability, setAvailability] = useState(new Date(Date.now()));
  const [companyId, setCompanyId] = useState(0);
  const [clientId, setClientId] = useState(clients[0]?.id ? clients[0]?.id : 0);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    location: "",
    jobType: "",
    client: "",
  });

  const handleFilterChange = (type: keyof FilterState, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const applicationInfo = (): JobApplication => {
    return {
      companyId,
      clientId,
      contactFirstName,
      contactLastName,
      contactCity,
      contactEmail,
      contactPhone,
      resumeLink,
      availability,
      userId: user.id,
    };
  };

  const openDetailsModal = (jobDetails: JobDetails, jobId: number) => {
    setCompanyId(jobId);
    closeAll();
    setSelectedJobDetails(jobDetails);
    setDetailsModalOpen(true);
  };

  const handleClientSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(Number(event.target.value));
    setClientId(Number(event.target.value));
    const client = clients[Number(event.target.value)];
    setContactFirstName(client.firstName as string);
    setContactLastName(client.lastName as string);
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

  const resetState = () => {
    setContactFirstName("");
    setContactLastName("");
    setContactCity("");
    setContactEmail("");
    setContactPhone("");
    setResumeLink("");
    setResumeName("");
    setAvailability(new Date(Date.now()));
    setCompanyId(0);
  };

  const closeAllShowSuccess = async () => {
    setApplicationModalOpen(false);
    setDetailsModalOpen(false);
    setAvailabilityModalOpen(false);
    setResumeModalOpen(false);
    setConfirmModalOpen(false);
    const apply = await SubmitApplicationAction({
      companyId,
      clientId,
      contactFirstName,
      contactLastName,
      contactCity,
      contactEmail,
      contactPhone,
      resumeLink,
      availability,
      userId: user.id,
    });
    if (apply.success) {
      setSuccessModalOpen(true);
    } else {
      setErrorModalOpen(true);
    }
    resetState();
    setTimeout(() => {
      setSuccessModalOpen(false);
      setErrorModalOpen(false);
    }, 2500);
  };
  const bgColors = ["bg-orchidPink", "bg-caribbeanCurrant", "bg-ylnMnBlue"];
  const borderTextColors = ["black", "white", "white"];
  let i = -1;

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} />

      <div className="flex-1 flex flex-col">
        <Header headerMsg="Job Listing" subHeadingMsg="Browse the latest job listing posts." />

        <main className="flex-1 overflow-y-auto lg:px-8 mt-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <JobListingFilters clients={clients} setClientId={setClientId} onFilterChange={handleFilterChange} />
              </div>

              <div className="ml-auto">
                <button className="bg-spaceCadet text-white hover:bg-ylnMnBlue text-xs px-4 rounded-md h-8">
                  + Add New
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {listings?.map((listing) => {
                if (i < 2) {
                  i++;
                } else {
                  i = 0;
                }
                return (
                  <JobCard
                    openModal={() =>
                      openDetailsModal(
                        {
                          companyName: listing.companyName as string,
                          jobTitle: listing.title as string,
                          salary: `${listing.salary}`,
                          location: `${listing.location}`,
                          jobType: `${listing.jobType}`,
                          description: `${listing.description}`,
                          skills: listing.skills as string[],
                          benefits: listing.benefit as string[],
                        },
                        listing.jobPostingId
                      )
                    }
                    key={listings.indexOf(listing)}
                    baseColor={bgColors[i]}
                    textcolor={`text-${borderTextColors[i]}`}
                    bordercolor={`border-${borderTextColors[i]}`}
                    companyName={`${listing.companyName}`}
                    companyLogo={`${listing.logoUrl}`}
                    location={`${listing.location}`}
                    hourlyPay={`${listing.salary}`}
                    jobTitle={`${listing.title}`}
                    matchStatus="Excellent"
                    jobType={`${listing.jobType}`}
                    dateOfPosting={`${listing.datePosted}`}
                    statusColor="bg-green-600"
                    status={{
                      status1: "/static/images/match-green.svg",
                      status2: "/static/images/match-green.svg",
                      status3: "/static/images/match-green.svg",
                    }}
                  />
                );
              })}
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
            jobDetails={selectedJobDetails}
            contactInfo={{contactFirstName, contactLastName, contactCity, contactPhone, contactEmail}}
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
      {errorModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-md shadow-black rounded-lg text-spaceCadet w-96 flex items-center justify-center h-24">
            <h3 className="py-8 text-lg">
              Application could not be submitted due to a server error. Please try again. ⛔
            </h3>
          </div>
        </div>
      )}
      {selectClientModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
          <div className="w-48">
            <div className="relative">
              <select
                onChange={handleClientSelection}
                className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
              >
                {clients.map((client) => {
                  return (
                    <option
                      key={client.id}
                      value={client.id ? client.id : 0}
                    >{`${client.firstName} ${client.lastName}`}</option>
                  );
                })}
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image src={userIcon} width={10} height={10} alt="userIcon" className="text-gray-500 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
