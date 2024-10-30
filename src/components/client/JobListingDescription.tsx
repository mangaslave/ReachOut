"use client";
import Reminders from "./Reminders";
import {Button, buttonVariants} from "../ui/button";
import Link from "next/link";

interface JobDetails {
  companyName: string;
  jobTitle: string;
  salary: string;
  location: string;
  jobType: string;
  description: string;
}

interface JobListingProps {
  jobDetails: JobDetails;
  nextModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const JobListing = ({jobDetails, nextModal, closeModal}: JobListingProps) => {
  const companyName = jobDetails.companyName;
  const salary = jobDetails.salary;
  const type = jobDetails.jobType;
  const location = jobDetails.location;
  const description = jobDetails.description;

  return (
    <div onClick={closeModal} className="max-w-3xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">Job Listing</h1>
          <span className="text-gray-600">{companyName}</span>
        </div>
        <div className="text-right">
          <div className="text-gray-900 font-medium">{salary}</div>
          <div className="text-gray-500 text-sm">{type}</div>
          <div className="text-gray-500 text-sm">{location}</div>
        </div>
      </div>
      <div className="border-b border-caribbeanCurrant my-4" />
      {/* <Link href="/job-listing/contact"> */}
      <Button onClick={nextModal} variant="secondary" className="bg-spaceCadet text-white">
        Start Application
      </Button>
      {/* </Link> */}
      <div className="flex justify-between items-start mb-4 ">
        <h2 className="font-bold text-xl mt-6 text-spaceCadet">Job Description</h2>
      </div>
      <p className="mt-4">{description}</p>
      <h2 className="font-bold text-xl mt-4 text-spaceCadet">Benefits</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Dental care</li>
        <li>Extended health care</li>
        <li>On-site parking</li>
        <li>Competitive hourly wage</li>
        <li>Opportunities for growth and development</li>
        <li>Positive, team-oriented work environment</li>
      </ul>
      <h2 className="font-bold text-xl mt-4 text-spaceCadet">Qualifications</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>2-4 years of experience in general labor, construction, or related fields</li>
        <li>Ability to thrive in physically demanding and adverse weather conditions</li>
        <li>Strong teamwork skills and adaptability on-site</li>
        <li>Reliable transportation to the worksite</li>
      </ul>

      <h2 className="font-bold text-xl mt-4 text-spaceCadet">Work Enviornment</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Outdoor work in varying weather conditions</li>
        <li>Physically demanding tasks requiring stamina and strength</li>
        <li>Collaborative team-based work</li>
        <li>Expected hours: 30 – 40 per week</li>
        <li>Monday to Friday</li>
      </ul>
    </div>
  );
};
