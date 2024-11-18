"use client";
import {Button, buttonVariants} from "../ui/button";
import {JobDetails} from "./JobListingMaster";

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
  const benefits = jobDetails.benefits;
  const skills = jobDetails.skills;

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
      <Button onClick={nextModal} variant="secondary" className="bg-spaceCadet text-white">
        Start Application
      </Button>
      <div className="flex justify-between items-start mb-4 ">
        <h2 className="font-bold text-xl mt-6 text-spaceCadet">Job Description</h2>
      </div>
      <p className="mt-4">{description}</p>
      <h2 className="font-bold text-xl mt-4 text-spaceCadet">Benefits</h2>
      <ul className="list-disc pl-5 space-y-1">
        {benefits.map((benefit) => {
          return <li key={benefits.indexOf(benefit)}>{benefit}</li>;
        })}
      </ul>
      <h2 className="font-bold text-xl mt-4 text-spaceCadet">Skills Required</h2>
      <ul className="list-disc pl-5 space-y-1">
        {skills.map((skill) => {
          return <li key={skills.indexOf(skill)}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};
