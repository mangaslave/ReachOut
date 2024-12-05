"use client";
import {FaMapMarkerAlt} from "react-icons/fa";
import {MdWorkOutline} from "react-icons/md";
import userIcon from "../../../public/static/images/userIcon.svg";
import Image from "next/image";
import {ChevronDownIcon} from "lucide-react";
import {Dispatch, SetStateAction, useState} from "react";
import {ClientInfo, JobListing} from "./JobListingMaster";
import {IoMdClose} from "react-icons/io";

export interface FilterState {
  location: string;
  jobType: string;
  client: number;
}

type JobListingFilter = (type: keyof FilterState, value: string | number) => void;

export default function JobListingFilters({
  onFilterChange,
  clients,
  setClientId,
  clientId,
  listings,
}: {
  onFilterChange: JobListingFilter;
  clients: ClientInfo[];
  setClientId: Dispatch<SetStateAction<number>>;
  clientId: number;
  listings: JobListing[];
}) {
  const [location, setLocation] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [client, setClient] = useState<string>("");

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
    onFilterChange("location", event.target.value);
  };

  const handleJobTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJobType(event.target.value);
    onFilterChange("jobType", event.target.value);
  };

  const handleClientSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClient = event.target.options[event.target.selectedIndex].innerText;
    setClient(selectedClient);
    setClientId(Number(event.target.value));
    onFilterChange("client", Number(event.target.value));
  };

  const clearFilters = () => {
    setLocation("");
    setJobType("");
    setClient("");
    setClientId(0);

    onFilterChange("location", "");
    onFilterChange("jobType", "");
    onFilterChange("client", 0);
  };

  const removeFilter = (filter: string) => {
    if (filter === location) {
      setLocation("");
      onFilterChange("location", "");
    } else if (filter === jobType) {
      setJobType("");
      onFilterChange("jobType", "");
    } else if (filter === client) {
      setClient("");
      setClientId(0);
      onFilterChange("client", 0);
    }
  };

  const isAnyFilterActive = location || jobType || client;

  const filterCities: string[] = [];
  listings.forEach((listing) => {
    if (listing.location && !filterCities.includes(listing.location)) {
      filterCities.push(listing.location);
    }
  });

  const activeFilters = [...(location ? [location] : []), ...(jobType ? [jobType] : []), ...(client ? [client] : [])];

  return (
    <div className="space-y-4 mt-4">
      {/* Filter Buttons */}
      <div className="flex space-x-4">
        {/* Location Filter */}
        <div className="w-48">
          <div className="relative">
            <select
              value={location}
              onChange={handleLocationChange}
              className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
            >
              <option value="">Location</option>
              {filterCities.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-500 h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Job Type Filter */}
        <div className="w-48">
          <div className="relative">
            <select
              value={jobType}
              onChange={handleJobTypeChange}
              className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
            >
              <option value="">Select Job Type</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Full-Time">Full-Time</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdWorkOutline className="text-gray-500 h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Client Filter */}
        <div className="w-48">
          <div className="relative">
            <select
              onChange={handleClientSelect}
              value={clientId || ""}
              className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orchidPink appearance-none"
            >
              <option value={0}>Select Client</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id!}>
                  {`${client.firstName} ${client.lastName}`}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image src={userIcon} width={10} height={10} alt="userIcon" className="text-gray-500 h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Clear Filters Button */}
        {isAnyFilterActive && (
          <button
            onClick={clearFilters}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Filtering Section */}
      {isAnyFilterActive && (
        <div className="flex items-center space-x-2">
          <p className="text-spaceCadet font-bold text-lg">Filtering By:</p>
          {activeFilters.map((filter) => (
            <div
              key={filter}
              className="flex items-center px-3 py-1 border-orchidPink border-2 bg-orchidPink bg-opacity-30 text-sm text-spaceCadet rounded-full shadow"
            >
              {filter}
              <IoMdClose className="ml-2 cursor-pointer" onClick={() => removeFilter(filter)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
