"use client";

import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface JobCardProps {
  companyName: string;
  jobTitle: string;
  jobType: string;
  accessibility: string;
  dateOfPosting: string;
  location: string;
  hourlyPay: string;
  companyLogo: string;
  openModal: () => void;
  score?: number | null;
}

const calculateMatch = (score: number | null | undefined) => {
  if (!score) return "Not Calculated";
  if (score >= 7) return "Excellent Match";
  if (score >= 4) return "Okay Match";
  if (score < 4) return "Not a Good Match";
};

const calculateStatusColor = (score: number | null | undefined) => {
  if (!score) return "bg-black";
  if (score >= 7) return "bg-green-500";
  if (score >= 4) return "bg-yellow-500";
  if (score < 4) return "bg-red-500";
};

const tooltipContent = (score: number | null | undefined) => {
  if (!score) {
    return <p>Match has not been calculated yet.</p>;
  }
  if (score >= 7) {
    return <p>An "Excellent" match indicates that the client meets all job requirements.</p>;
  }
  if (score >= 4) {
    return <p>An "Okay" match indicates that the client meets some, but not all, job requirements.</p>;
  }
  return <p>A "Not a Good" match indicates that the client does not meet the job requirements.</p>;
};

export default function JobCard({
  companyName,
  jobTitle,
  jobType,
  accessibility,
  dateOfPosting,
  location,
  hourlyPay,
  companyLogo,
  openModal,
  score,
}: JobCardProps) {
  const matchRating = calculateMatch(score);
  const matchStatusColor = calculateStatusColor(score);

  return (
    <div className="bg-spaceCadet shadow-lg rounded-lg w-80 mt-5">
      {/* Match Status at the Top with Tooltip */}
      <div className="flex items-center justify-start p-3 rounded-t-lg space-x-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={`flex items-center gap-2 px-3 py-1 rounded-sm border font-bold bg-white text-spaceCadet cursor-pointer`}
              >
                <span className={`w-3 h-3 rounded-full ${matchStatusColor}`} />
                {matchRating}
              </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-white text-black border border-gray-300 p-2 rounded-md shadow">
              {tooltipContent(score)}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Job Info */}
      <div className="flex items-center justify-between px-3 py-1">
        <div className="flex flex-col">
          <p className="text-sm text-white">{companyName}</p>
          <h3 className="text-xl font-bold text-white">{jobTitle}</h3>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={companyLogo || "/static/images/fallback-logo.png"}
            alt="Company Logo"
            width={20}
            height={20}
            className="rounded-full bg-white w-12 h-12"
          />
        </div>
      </div>

      {/* Chips for Job Type and Accessibility */}
      <div className="flex items-center space-x-4 px-3 my-2">
        <span className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs border border-white text-white">
          {jobType}
        </span>
        <span className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs border border-white text-white">
          {accessibility} Wheelchair Accessible
        </span>
      </div>

      {/* Date of Posting */}
      <div className="flex items-center justify-between px-4 mt-3 mb-2 text-xs text-white">
        <Image src="/static/images/calendar.svg" alt="Date Icon" width={16} height={16} className="ml-52"/>
        <span>{dateOfPosting}</span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-3 py-2 m-0.5 bg-white rounded-b-lg">
        <div>
          <p className="text-sm font-medium text-spaceCadet">{hourlyPay}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <button
          onClick={openModal}
          className="bg-spaceCadet text-white hover:bg-ylnMnBlue px-4 py-2 rounded-md text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
