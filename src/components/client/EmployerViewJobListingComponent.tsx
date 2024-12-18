"use client";
import {Button} from "../ui/button";
import {JobListing as Listing} from "./JobListingMaster";
import {FiEdit} from "react-icons/fi";
import {IoCloseOutline} from "react-icons/io5";

interface JobListingProps {
  jobDetails: Listing;
  nextModal?: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const EmployerViewJobListing = ({jobDetails, closeModal}: JobListingProps) => {
  const companyName = jobDetails.companyName;
  const salary = jobDetails.salary;
  const type = jobDetails.jobType;
  const location = jobDetails.location;
  const description = jobDetails.description;
  const benefits = jobDetails.benefit;
  const skills = jobDetails.skills;

  return (
    <div onClick={closeModal} className="max-w-3xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="text-2xl flex justify-end mb-2">
        <IoCloseOutline className="cursor-pointer" />
      </div>
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
      <div className="border-b border-spaceCadet my-4" />
      <Button>
        <FiEdit /> Edit Listing
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
