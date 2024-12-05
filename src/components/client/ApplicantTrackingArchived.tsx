"use client";

import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";

interface Application {
  title: string;
  company: string;
  location: string;
  logo: string;
  progress: string[];
  currentStage: number;
  dates: string[];
  archiveDate: string;
  archiveReason: string;
}

interface ArchivedClientsModalProps {
  closeModal: () => void;
  clientName: string;
}

function getIcon(stage: string) {
  switch (stage) {
    case "Submitted":
      return <IoIosSend className="text-lg" />;
    case "In Review":
      return <IoMdCheckmarkCircleOutline className="text-lg" />;
    case "Interview":
      return <FaRegCalendarCheck className="text-lg" />;
    case "Offer":
      return <LuClipboardCheck className="text-lg" />;
    default:
      return null;
  }
}

export default function ArchivedClientsModal({
  closeModal,
  clientName,
}: ArchivedClientsModalProps) {
  const archivedApplications: Application[] = [
    {
      title: "Warehouse Worker",
      company: "Aerotek",
      location: "Burnaby, BC",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH5kvfGdcqmLQ/company-logo_200_200/company-logo_200_200/0/1720012523576/aerotek_logo?e=2147483647&v=beta&t=vt17OkbHPziNXNffLPLYSmpalSigttIVOyoWL9eaa5o",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 3,
      dates: ["10/01/2024", "10/02/2024", "10/04/2024", ""],
      archiveDate: "10/04/2024",
      archiveReason: "Position Fulfilled",
    },
    {
      title: "Plumber",
      company: "True Mechanical",
      location: "Vancouver, BC",
      logo: "https://truemechanical.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-13-at-6.19.15-PM.png",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 4,
      dates: ["10/01/2024", "10/02/2024", "10/04/2024", "10/07/2024"],
      archiveDate: "10/15/2024",
      archiveReason: "Client Declined Offer",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 flex justify-center items-center overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Application History</h2>
          <button
            onClick={closeModal}
            className="text-white hover:bg-spaceCadet font-semibold bg-caribbeanCurrant w-20 h-8 rounded-md"
          >
            Close
          </button>
        </div>

        <div className="text-md text-gray-600 -mt-5 mb-4">{clientName}</div>

        <hr className="border-t-1 w-full border-gray-500 mb-8 mt-2"></hr>

        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="font-semibold text-gray-500 hover:border-b-2 hover:border-gray-500">Active</button> 
            <button className="font-semibold text-black border-b-2 border-black">Archived</button>
          </div>
          <div className="text-gray-500 font-medium flex flex-row gap-1">
            <p className="font-semibold">{archivedApplications.length}</p> Archived Applications
          </div>
        </div>

        <div className="space-y-4">
          {archivedApplications.map((app, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm flex flex-col space-y-4">
              <div className="flex items-center space-x-6">
                <Image
                  src={app.logo}
                  alt={`${app.company} logo`}
                  width={60}
                  height={60}
                  className="rounded-full grayscale"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-500">{app.title}</h3>
                  <p className="text-sm text-gray-400">
                    {app.company}, {app.location}
                  </p>
                  <div className="relative flex flex-col items-center mt-4">
                    <div className="flex justify-between w-full">
                      {app.progress.map((stage, stageIndex) => {
                        const isActive = stageIndex <= app.currentStage;
                        return (
                          <div
                            key={stageIndex}
                            className="flex flex-col items-center w-1/4"
                          >
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                isActive
                                  ? "bg-gray-500 text-white"
                                  : "bg-gray-300 text-gray-500"
                              }`}
                            >
                              {getIcon(stage)}
                            </div>
                            <p
                              className={`mt-1 text-xs font-bold ${
                                isActive
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }`}
                            >
                              {stage}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-700 w-80 border border-black p-1 rounded-md">
                <p className="text-lg">
                  <span className="font-bold text-lg">{app.archiveDate}:</span>{" "}
                  {app.archiveReason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
