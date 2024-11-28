"use client";
import {Application} from "@/actions/GetApplicationsAction";
import {useState} from "react";
import emailIcon from "../../../public/static/images/email-icon.svg";
import Image from "next/image";
import {ApplicationModal} from "./EmployerApplicationModal";
import {Button} from "../ui/button";
import ContactApplicantModal from "./ContactApplicantModal";

export default function EmployerApplicationTable({
  applications,
  activeUser,
}: {
  applications: Application[];
  activeUser: {
    name: string;
    email: string;
    image: string;
  };
}) {
  const [application, setApplication] = useState<Application>(applications[0]);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [statuses, setStatuses] = useState<{[key: number]: string}>(
    applications.reduce<{[key: number]: string}>((acc, app) => {
      acc[app.applicationId] = "New";
      return acc;
    }, {})
  );

  const changeApplicationStatus = (applicationId: number) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [applicationId]: "Interviewing",
    }));
  };

  const openContact = (app: Application) => {
    setApplication(app);
    setContactModalOpen(true);
  };

  const closeContact = () => {
    setContactModalOpen(false);
  };

  const displayApplication = (app: Application) => {
    setApplication(app);
    setApplicationModalOpen(true);
  };

  const closeApplication = () => {
    setApplicationModalOpen(false);
  };
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-spaceCadet">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-white">Name</th>
            <th className="px-4 py-3 text-left font-medium text-white">Position</th>
            <th className="px-4 py-3 text-left font-medium text-white">Type</th>
            <th className="px-4 py-3 text-left font-medium text-white">Status</th>
            <th className="px-4 py-3 text-left font-medium text-white"></th>
            <th className="px-4 py-3 text-left font-medium text-white"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {applications.map((app, index) => (
            <tr key={index}>
              <td className="px-4 py-4 text-gray-900">{`${app.applicantFirstName} ${app.applicantLastName}`}</td>
              <td className="px-4 py-4 text-gray-900">{app.jobTitle}</td>
              <td className="px-4 py-4 text-gray-900">{app.jobTitle}</td>
              <td className="px-4 py-4">
                <select
                  className="w-36 border rounded-lg border-black text-black"
                  name=""
                  id=""
                  value={statuses[app.applicationId]}
                  onChange={(e) => changeApplicationStatus(app.applicationId)}
                >
                  <option value="New">🔴 NEW!</option>
                  <option value="Interviewing">🟡 Interviewing</option>
                  <option value="Hired">🟢 Hired</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => displayApplication(app)}
                  key={index}
                  value={index}
                  className="hover:underline bg-none"
                >
                  View Full Application
                </button>
              </td>
              <td>
                <Button variant="ghost" onClick={() => openContact(app)}>
                  <Image src={emailIcon} height={20} width={20} alt=""></Image>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {applicationModalOpen && (
        <ApplicationModal
          closeModal={closeApplication}
          application={application}
          setInterview={changeApplicationStatus}
        />
      )}
      {contactModalOpen && (
        <ContactApplicantModal closeModal={closeContact} application={application} activeUser={activeUser} />
      )}
    </div>
  );
}
