"use client";
import Image from "next/image";
import editIcon from "../../../public/static/images/editIcon.svg";
import locationIcon from "../../../public/static/images/locationIcon.svg";
import emailIcon from "../../../public/static/images/email.svg";
import phoneIcon from "../../../public/static/images/phoneIcon.svg";
import downloadIcon from "../../../public/static/images/downloadIcon.svg";
import {Document, Page} from "react-pdf";
import {useState} from "react";
import {pdfjs} from "react-pdf";
import {Progress} from "../ui/progress";
import checkmark from "../../../public/static/images/complete-checkmark-icon.svg";
import exclamation from "../../../public/static/images/incomplete-exclamation-icon.svg";
import { IoIosAddCircleOutline } from "react-icons/io";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const profileProgressCalculation = (client: {
  id: number;
  firstName: string | null;
  lastName: string | null;
  lastOnline: string;
  email: string | null;
  phoneNumber: string | null;
  city: string | null;
  postalCode: string | null;
  resumeUrl: string | null;
  skills: (string | null)[];
}) => {
  const sections = {
    personalInfo: Boolean(client.firstName && client.lastName && client.email && client.city && client.postalCode),
    resume: Boolean(client.resumeUrl),
    skills: Boolean(client.skills && client.skills.length > 0),
  };

  const completedSections = Object.values(sections).filter(Boolean).length;
  return Math.round((completedSections / Object.keys(sections).length) * 100);
};

const SectionStatus = ({isComplete}: {isComplete: boolean}) => {
  return (
    <div className="flex items-center gap-2">
      {isComplete ? (
        <Image src={checkmark} alt="green checkmark" className="w-5 h-5" />
      ) : (
        <Image src={exclamation} alt="red exclamation mark" className="w-5 h-5" />
      )}
    </div>
  );
};

export default function ClientProfile({
  closeModal,
  client,
}: {
  closeModal: () => void;
  client: {
    id: number;
    firstName: string | null;
    lastName: string | null;
    lastOnline: string;
    email: string | null;
    phoneNumber: string | null;
    city: string | null;
    postalCode: string | null;
    resumeUrl: string | null;
    skills: (string | null)[];
  };
}) {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [noClientResume, setNoClientResume] = useState(client.resumeUrl ? false : true);

  const openResumeModal = () => {
    if (noClientResume) {
      setNoClientResume(true);
      return;
    }
    setResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };

  const clientProgress: number = profileProgressCalculation(client);

  const sections = {
    personalInfo: Boolean(client.firstName && client.lastName && client.email && client.city && client.postalCode),
    resume: Boolean(client.resumeUrl),
    skills: Boolean(client.skills && client.skills.length > 0),
  };

  return (
    <div className="bg-white flex flex-col items-start justify-start drop-shadow-sm rounded-lg w-[35rem] h-[40rem] overflow-y-auto p-4">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-semibold text-2xl">Profile Details</h1>
          <p>{`${client.firstName} ${client.lastName}`}</p>
        </div>
        <div>
          <button onClick={closeModal} className= "border border-caribbeanCurrant bg-white text-caribbeanCurrant w-20 rounded-md mx-2 self-end">
            Cancel
          </button>
          <button onClick={closeModal} className="bg-caribbeanCurrant w-20 rounded-md self-end text-white">
            Save
          </button>
        </div>
      </div>
      <hr className="border-t-1 w-full border-caribbeanCurrant mb-8 mt-2"></hr>
      <div className="text-center w-full">
        <Progress value={clientProgress} className="w-11/12 [&>div]:bg-caribbeanCurrant w-full" />
        <p>{clientProgress}% completed</p>
      </div>
      

      <form className="w-full">
        <div className="flex text-left mt-8">
          <h2 className="mr-1 font-bold text-l">Contact Information</h2>
          <SectionStatus isComplete={sections.personalInfo} />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mt-3">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              defaultValue={client.firstName}
              className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-3">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              defaultValue={client.lastName}
              className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mt-3">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            defaultValue={client.city}
            className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-3">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={client.email}
            className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mt-3">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            defaultValue={client.phoneNumber}
            className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
          />
        </div>
      </form>

      <form className="w-full">
        <div className="flex text-left mt-10">
          <h2 className="mr-1  font-bold text-l">Education/Certifications</h2>
          <SectionStatus isComplete={sections.personalInfo} />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mt-3">
            Educational Institution
          </label>
          <input
            id="city"
            name="city"
            type="text"
            defaultValue="Vancouver Community College"
            className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-3">
            Degree/Certification
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue="Associates Degree in Business Mangagement"
            className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-[10rem]">
          <label htmlFor="datePicker" className="block text-sm font-medium text-gray-700 mt-3 mb-1">
            Start & End Date
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              id="datePicker"
              name="datePicker"
              defaultValue="2024-12-02"
              className="border border-gray-500 rounded-md shadow-sm px-3 py-1 text-gray-700 focus:outline-none focus:ring-caribbeanCurrant focus:border-caribbeanCurrant"
            />
            <input
              type="date"
              id="datePicker"
              name="datePicker"
              defaultValue="2023-05-24"
              className="border border-gray-500 rounded-md shadow-sm px-3 py-1 text-gray-700 focus:outline-none focus:ring-caribbeanCurrant focus:border-caribbeanCurrant"
            />
          </div>

          
          
        </div>

        <div className=" border-gray-500 border w-full text-center mt-8 rounded-md hover:bg-gray-200 transition-colors duration-200 p-2">
            <IoIosAddCircleOutline className="m-auto" />
            <p className="w-full mt-1">Add another Degree/Certification</p>
        </div>
      </form>

      <form className="w-full">
        <div className="flex text-left mt-10">
          <h2 className="mr-1  font-bold text-l">Work Experience</h2>
          <SectionStatus isComplete={sections.personalInfo} />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mt-3">
            Company
          </label>
          <input
            id="city"
            name="city"
            type="text"
            defaultValue="Gary's Welding Ltd"
            className="mt-1 w-full border-gray-500 border rounded-sm shadow-sm py-1 px-3 focus:border-caribbeanCurrant focus:ring-caribbeanCurrant sm:text-sm"
          />
        </div>

        <div className="flex flex-col w-[10rem]">
          <label htmlFor="datePicker" className="block text-sm font-medium text-gray-700 mt-3 mb-1">
            Start & End Date
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              id="datePicker"
              name="datePicker"
              defaultValue="2024-12-02"
              className="border border-gray-500 rounded-md shadow-sm px-3 py-1 text-gray-700 focus:outline-none focus:ring-caribbeanCurrant focus:border-caribbeanCurrant"
            />
            <input
              type="date"
              id="datePicker"
              name="datePicker"
              defaultValue="2023-05-24"
              className="border border-gray-500 rounded-md shadow-sm px-3 py-1 text-gray-700 focus:outline-none focus:ring-caribbeanCurrant focus:border-caribbeanCurrant"
            />
          </div>          
        </div>

        <div className="border-gray-500 border w-full text-center mt-8 rounded-md hover:bg-gray-200 transition-colors duration-200 p-2">
            <IoIosAddCircleOutline className="m-auto" />
            <p className="w-full mt-1">Add more Work Experience</p>
        </div>

      </form>

      <div className="flex text-left mt-10">
        <h2 className="font-bold text-l mr-1">Resume</h2>
        <SectionStatus isComplete={sections.resume} />
      </div>
              

              <button onClick={openResumeModal} className="bg-white text-spaceCadet rounded-md font-thin">
                {noClientResume ?
                <p className="text-red-600 w-full">No resume available</p>
                 : <p>View Resume</p>}
              </button>
              <div className="border-gray-500 border w-full text-center mt-2 rounded-md hover:bg-gray-200 transition-colors duration-200 p-2">
                  <IoIosAddCircleOutline className="m-auto" />
                  <p className="w-full mt-1">Add a Resume</p>
              </div>

              <div className="flex text-left mt-10">
                <h2 className="font-bold text-l mr-1">Skills and Qualifications</h2>
                <SectionStatus isComplete={sections.skills} />
              </div>

              <p className="text-red-600 w-full">No skills yet</p>

              <div className="border-gray-500 border w-full text-center mt-2 rounded-md hover:bg-gray-200 transition-colors duration-200 p-2">
                  <IoIosAddCircleOutline className="m-auto" />
                  <p className="w-full mt-1">Add Skills</p>
              </div>

                {client.skills?.map((skill) => {
                  return (
                    <li className="font-thin p-1 mx-2" key={skill}>
                      {skill}
                    </li>
                  );
                })}


      {resumeModalOpen && (
        <div className="fixed inset-0 rounded-md flex items-center justify-center bg-black bg-opacity-50">
          <Document
            className="fixed inset-0 rounded-md flex-col h-auto items-center justify-center"
            file={client.resumeUrl}
          >
            <Page className="flex rounded-md scale-95 overflow-hidden" pageNumber={1}>
              <button
                onClick={closeResumeModal}
                className="bg-caribbeanCurrant w-20 rounded-md mx-8 my-2 self-end text-white"
              >
                Close
              </button>
            </Page>
          </Document>
        </div>
      )}
    </div>
  );
}
