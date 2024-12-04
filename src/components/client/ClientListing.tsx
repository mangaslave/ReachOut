"use client";

import { useState } from "react";
import ClientProfile from "./ClientProfile";
import ApplicationTrackingModal from "./ApplicationTracking";
import ArchivedClientsModal from "./ApplicantTrackingArchived";
import Image from "next/image";

export default function ClientListing({
  clients,
}: {
  clients:
    | {
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
      }[]
    | null;
}) {
  const [selectedClient, setSelectedClient] = useState(clients ? clients[0] : null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [archivedModalOpen, setArchivedModalOpen] = useState(false);

  const setProfileModalOpenHandler = () => setProfileModalOpen(true);
  const setProfileModalCloseHandler = () => setProfileModalOpen(false);

  const setTrackingModalOpenHandler = () => setTrackingModalOpen(true);
  const setTrackingModalCloseHandler = () => setTrackingModalOpen(false);

  const setArchivedModalOpenHandler = () => setArchivedModalOpen(true);
  const setArchivedModalCloseHandler = () => setArchivedModalOpen(false);

  const activeApplications = [
    {
      title: "Machine Operator",
      company: "Newnham Construction",
      location: "Vancouver, BC",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7xuu7ATJ9Cn8TJImYjBIv3A8UuOpsg6R6g&s",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 1,
      dates: ["10/01/2024", "", "", ""],
    },
    {
      title: "Warehouse Associate",
      company: "Randstad Canada",
      location: "Richmond, BC",
      logo: "https://www.randstad.ca/themes/custom/bluex/src/assets/img/logo-bluex.png",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 2,
      dates: ["09/30/2024", "10/01/2024", "", ""],
    },
    {
      title: "Electrician",
      company: "Status Electrical",
      location: "Burnaby, BC",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHOWhD_GMvnrA/company-logo_200_200/company-logo_200_200/0/1630664579660/status_electrical_corporation_logo?e=2147483647&v=beta&t=PHjufLQ_dCdPwEbiFFTcUaoDSDXCd6E1F1sgm5IM0Pk",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 3,
      dates: ["10/01/2024", "10/02/2024", "10/04/2024", ""],
      archiveDate: "10/04/2024",
      archiveReason: "Position Fulfilled",
    },
    {
      title: "Mill Worker",
      company: "Westkey Graphics Ltd.",
      location: "Burnaby, BC",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF3ZTsTzbDUjQ/company-logo_200_200/company-logo_200_200/0/1680820572754/westkey_graphics_logo?e=2147483647&v=beta&t=nEgb-ANczum2d_C59_sPF2Dq4jx33hCFIfSO08yBAa0",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 4,
      dates: ["10/01/2024", "10/02/2024", "10/04/2024", "10/07/2024"],
      archiveDate: "10/15/2024",
      archiveReason: "Candidate Declined Offer",
    },
  ];

  const archivedApplications = [
    {
      title: "Electrician",
      company: "Status Electrical",
      location: "Burnaby, BC",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHOWhD_GMvnrA/company-logo_200_200/company-logo_200_200/0/1630664579660/status_electrical_corporation_logo?e=2147483647&v=beta&t=PHjufLQ_dCdPwEbiFFTcUaoDSDXCd6E1F1sgm5IM0Pk",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 1,
      dates: ["10/01/2024", "10/02/2024", "10/04/2024", ""],
      archiveDate: "10/04/2024",
      archiveReason: "Position Fulfilled",
    },
    {
      title: "Mill Worker",
      company: "Westkey Graphics Ltd.",
      location: "Burnaby, BC",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF3ZTsTzbDUjQ/company-logo_200_200/company-logo_200_200/0/1680820572754/westkey_graphics_logo?e=2147483647&v=beta&t=nEgb-ANczum2d_C59_sPF2Dq4jx33hCFIfSO08yBAa0",
      progress: ["Submitted", "In Review", "Interview", "Offer"],
      currentStage: 1,
      dates: ["10/01/2024", "10/02/2024", "10/04/2024", "10/07/2024"],
      archiveDate: "10/15/2024",
      archiveReason: "Candidate Declined Offer",
    },
  ];

  if (!clients) {
    return null;
  }

  return (
    <div className="overflow-x-auto -my-10 ml-2">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-caribbeanCurrant text-white">
          <tr>
            <th className="px-6 py-3"></th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">
              Last Online
            </th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-caribbeanCurrant">
          {clients.map((client, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="rounded-xl" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{`${client.firstName} ${client.lastName}`}</td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <select className="border border-black rounded-2xl text-black py-1 px-2">
                  <option value="Unemployed">Unemployed</option>
                  <option value="Employed">Employed</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select className="border border-black rounded-2xl text-black py-1 px-2">
                  <option value="N/A">N/A</option>
                  <option value="Gamma Inc">Gamma Inc.</option>
                  <option value="Seaspan ULC">Seaspan ULC</option>
                  <option value="PHSA">PHSA</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{client.lastOnline}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => {
                    setSelectedClient(client);
                    setProfileModalOpenHandler();
                  }}
                  className="hover:underline text-black"
                >
                  View Profile
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => {
                    setSelectedClient(client);
                    setTrackingModalOpenHandler();
                  }}
                  className="hover:underline text-black"
                >
                  Active Applications
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Client Profile Modal */}
      {profileModalOpen && selectedClient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ClientProfile closeModal={setProfileModalCloseHandler} client={selectedClient} />
        </div>
      )}

      {/* Application Tracking Modal */}
      {trackingModalOpen && selectedClient && (
        <ApplicationTrackingModal
          closeModal={setTrackingModalCloseHandler}
          clientName={`${selectedClient.firstName} ${selectedClient.lastName}`}
          applications={activeApplications}
        />
      )}

      {/* Archived Clients Modal */}
      {archivedModalOpen && selectedClient && (
        <ArchivedClientsModal
          closeModal={setArchivedModalCloseHandler}
          clientName={`${selectedClient.firstName} ${selectedClient.lastName}`}
        />
      )}
    </div>
  );
}
