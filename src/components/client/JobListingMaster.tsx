"use client";

import {Sidebar} from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import userIcon from "../../../public/static/images/userIcon.svg";
import closeIcon from "../../../public/static/images/CloseIcon.svg";
import downMenuIcon from "../../../public/static/images/DownMenu_icon.svg";
import {useMemo, useState} from "react";
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
import {Button} from "../ui/button";
import {cn} from "@/lib/utils";
import {ClientList, ClientSummaries} from "@/actions/GetClientAction";

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
  city: string | null;
  phoneNumber: string | null;
  postalCode: string | null;
  email: string | null;
  resumeUrl: string | null;
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

export type JobListing = {
  title: string;
  companyName: string | null;
  logoUrl: string | null;
  salary: number;
  location: string | null;
  date: string | null;
  jobType: string | null;
  description: string | null;
  jobPostingId: number;
  skills: (string | null)[];
  benefit: (string | null)[];
};

export default function JobListingMaster({
  listings,
  clients,
  user,
}: {
  listings: JobListing[];
  clients: ClientList;
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
  const [selectedJobDetails, setSelectedJobDetails] = useState<JobListing | null>(null);
  const [contactFirstName, setContactFirstName] = useState(clients[0]?.firstName ? clients[0]?.firstName : "");
  const [contactLastName, setContactLastName] = useState(clients[0]?.lastName ? clients[0]?.lastName : "");
  const [contactCity, setContactCity] = useState(clients[0]?.city ? clients[0]?.city : "");
  const [contactEmail, setContactEmail] = useState(clients[0]?.email ? clients[0]?.email : "");
  const [contactPhone, setContactPhone] = useState(clients[0]?.phoneNumber ? clients[0]?.phoneNumber : "");
  const [resumeLink, setResumeLink] = useState(clients[0]?.resumeUrl ? clients[0]?.resumeUrl : "");
  const [resumeName, setResumeName] = useState("");
  const [availability, setAvailability] = useState(new Date(Date.now()));
  const [companyId, setCompanyId] = useState(0);
  const [clientId, setClientId] = useState(0);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    location: "",
    jobType: "",
    client: 0,
  });
  const [collapsed, setCollapsed] = useState(false);

  const handleFilterChange = (type: keyof FilterState, value: string | number) => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const filteredListings = useMemo(() => {
    const filteredList: JobListing[] = listings.filter((listing) => {
      let matches = true;

      if (activeFilters.location && !listing.location?.includes(activeFilters.location)) {
        matches = false;
      }
      if (activeFilters.jobType && listing.jobType !== activeFilters.jobType) {
        matches = false;
      }
      return matches;
    });
    return filteredList.map((listing) => {
      const clientName = clients.find((client) => client.id === Number(activeFilters.client));
      const clientSummaries = clientName ? clientName.summaries : [];
      const summary = clientSummaries.find((summary) => summary.jobPostingId === listing.jobPostingId);

      return {
        ...listing,
        summary: summary ? summary.summary : null,
        score: summary ? summary.score : null,
      };
    });
  }, [activeFilters, listings, clients]);

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

  const openDetailsModal = (jobDetails: JobListing, jobId: number) => {
    setCompanyId(jobId);
    closeAll();
    setSelectedJobDetails(jobDetails);
    setDetailsModalOpen(true);
  };

  const handleClientSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClientId(Number(event.target.value));
    const clientSelection = event.target.options[event.target.selectedIndex].innerText;
    const clientSelectionFirstName = clientSelection.split(" ")[0];
    const clientSelectionLastName = clientSelection.split(" ")[1];
    const selectedClient = clients.filter(
      (client) => client.firstName === clientSelectionFirstName && client.lastName === clientSelectionLastName
    )[0];
    setContactFirstName(selectedClient.firstName as string);
    setContactLastName(selectedClient.lastName as string);
    setContactPhone(selectedClient.phoneNumber as string);
    setContactEmail(selectedClient.email as string);
    setContactCity(selectedClient.city as string);
    setResumeLink(selectedClient.resumeUrl as string);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeAll();
    }
  };

  const moveToSelectClient = () => {
    setSelectClientModalOpen(true);
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
    setSelectClientModalOpen(false);
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
  const bgColors = ["bg-spaceCadet", "bg-spaceCadet", "bg-spaceCadet"];
  const borderTextColors = ["white", "white", "white"];
  let i = -1;

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={activeUser} setCollapsed={setCollapsed} collapsed={collapsed} />

      <div className={cn("flex-1 flex flex-col ml-16 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <Header headerMsg="Job Listing" subHeadingMsg="Browse the latest job listing posts." />

        <main className="flex-1 overflow-y-auto lg:px-8 mt-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                <JobListingFilters
                  clients={clients}
                  listings={listings}
                  setClientId={setClientId}
                  onFilterChange={handleFilterChange}
                  clientId={clientId}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredListings?.map((listing) => {
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
                          title: listing.title as string,
                          salary: listing.salary,
                          location: `${listing.location}`,
                          jobType: `${listing.jobType}`,
                          description: `${listing.description}`,
                          skills: listing.skills as string[],
                          benefit: listing.benefit as string[],
                          date: listing.date,
                          logoUrl: listing.logoUrl,
                          jobPostingId: listing.jobPostingId,
                        },
                        listing.jobPostingId
                      )
                    }
                    key={listing.jobPostingId}
                    baseColor={bgColors[i]}
                    textcolor={`text-${borderTextColors[i]}`}
                    bordercolor={`border-${borderTextColors[i]}`}
                    companyName={`${listing.companyName}`}
                    companyLogo={`${listing.logoUrl}`}
                    location={`${listing.location}`}
                    hourlyPay={`${listing.salary}`}
                    jobTitle={`${listing.title}`}
                    jobType={`${listing.jobType}`}
                    dateOfPosting={`${listing.date}`}
                    summary={listing.summary}
                    score={listing.score}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      {detailsModalOpen && selectedJobDetails && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <button
              onClick={closeAll}
              className="absolute -top-10 right-0 z-50 p-2 rounded-full hover:bg-gray-100 bg-white"
            >
              <Image src={closeIcon} alt="Close" width={24} height={24} />
            </button>
            <JobListing jobDetails={selectedJobDetails} closeModal={closeAll} nextModal={moveToSelectClient} />
          </div>
        </div>
      )}
      {selectClientModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
          <div className="w-60 h-48 rounded-md bg-white flex flex-col justify-evenly items-center">
            <div className="flex">
              <h2 className="text-spaceCadet ml-2 text-xl font-bold">Application For: </h2>
              <Button variant="ghost" className="text-3xl m-0 p-0 hover:bg-none dark:hover:bg-none" onClick={closeAll}>
                <Image
                  src={closeIcon}
                  width={50}
                  height={50}
                  alt=""
                  className="ml-6 mb-6 hover:bg-none dark:hover:bg-none"
                ></Image>
              </Button>
            </div>
            <div className="relative">
              <select
                onChange={handleClientSelection}
                className="block h-8 pl-10 pr-3 w-52 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
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
                <Image src={userIcon} width={10} height={10} alt="" className="text-gray-500 h-4 w-4" />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Image src={downMenuIcon} width={10} height={10} alt="" className="text-gray-500 h-4 w-4" />
              </div>
            </div>
            <Button className="self-end mx-10" onClick={moveToApplication}>
              Next
            </Button>
          </div>
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
            resumeUrl={resumeLink}
            clientId={clientId}
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
            resumeName={resumeName}
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
    </div>
  );
}
