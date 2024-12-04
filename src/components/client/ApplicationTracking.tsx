"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";
import ArchivedClientsModal from "./ApplicantTrackingArchived";

interface Application {
  title: string;
  company: string;
  location: string;
  logo: string;
  progress: string[];
  currentStage: number;
  dates: string[];
}

interface ApplicationTrackingModalProps {
  closeModal: () => void;
  clientName: string;
  applications: Application[];
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

export default function ApplicationTrackingModal({
  closeModal,
  clientName,
  applications,
}: ApplicationTrackingModalProps) {
  const [isArchivedView, setIsArchivedView] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Application History</h2>
          <button
            onClick={closeModal}
            className="text-white hover:text-gray-800 font-semibold bg-caribbeanCurrant w-20 h-8 rounded-md"
          >
            Close
          </button>
        </div>

        <div className="text-md text-gray-600 -mt-5 mb-4">{clientName}</div>

        <hr className="border-t-1 w-full border-caribbeanCurrant mb-8 mt-2"></hr>

        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={() => setIsArchivedView(false)}
              className={`font-semibold ${
                !isArchivedView
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:border-b-2 hover:border-gray-500"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setIsArchivedView(true)}
              className={`font-semibold ${
                isArchivedView
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:border-b-2 hover:border-gray-500"
              }`}
            >
              Archived
            </button>
          </div>
          <div className="text-gray-500 font-medium flex flex-row gap-1">
            <p className="font-semibold">{applications.length}</p> Active Applications
          </div>
        </div>

        {isArchivedView ? (
          <ArchivedClientsModal
            closeModal={closeModal}
            clientName={clientName}
          />
        ) : (
          <div className="space-y-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm flex items-center space-x-6"
              >
                {/* Logo */}
                <Image
                  src={app.logo}
                  alt={`${app.company} logo`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                {/* Details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <p className="text-sm text-gray-600">
                    {app.company}, {app.location}
                  </p>
                  {/* Progress Bar */}
                  <div className="relative flex flex-col items-center mt-4">
                    {/* Icons and Text */}
                    <div className="flex justify-between w-full">
                      {app.progress.map((stage, stageIndex) => {
                        const isActive = stageIndex <= app.currentStage;
                        const isCompleted =
                          app.currentStage === app.progress.length;
                        return (
                          <div
                            key={stageIndex}
                            className="flex flex-col items-center w-1/4"
                          >
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                isActive
                                  ? isCompleted
                                    ? "bg-correctGreen text-white"
                                    : "bg-caribbeanCurrant text-white"
                                  : "bg-gray-300 text-gray-500"
                              }`}
                            >
                              {getIcon(stage)}
                            </div>
                            <p
                              className={`mt-1 text-xs font-bold ${
                                isActive
                                  ? isCompleted
                                    ? "text-correctGreen"
                                    : "text-caribbeanCurrant"
                                  : "text-gray-500"
                              }`}
                            >
                              {stage}
                            </p>
                            <p className="text-xs text-black font-medium pt-5">
                              {app.dates[stageIndex] || ""}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {/* Progress Bar */}
                    <div className="absolute top-12 flex w-full items-center my-2">
                      {app.progress.map((_, stageIndex) => {
                        const isCompleted =
                          app.currentStage === app.progress.length;
                        return (
                          <div
                            key={stageIndex}
                            className={`flex-grow h-3 rounded-md ${
                              stageIndex < app.currentStage
                                ? isCompleted
                                  ? "bg-correctGreen"
                                  : "bg-caribbeanCurrant"
                                : "bg-gray-300"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
