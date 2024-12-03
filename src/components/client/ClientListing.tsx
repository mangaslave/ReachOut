"use client";

import { useState } from "react";
import ClientProfile from "./ClientProfile";
import ApplicationTrackingModal from "./ApplicationTracking";
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

  const setProfileModalOpenHandler = () => setProfileModalOpen(true);
  const setProfileModalCloseHandler = () => setProfileModalOpen(false);

  const setTrackingModalOpenHandler = () => setTrackingModalOpen(true);
  const setTrackingModalCloseHandler = () => setTrackingModalOpen(false);

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
                <select className="border rounded-lg text-black">
                  <option value="Unemployed">Unemployed</option>
                  <option value="Employed">Employed</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select className="border rounded-lg text-black">
                  <option value="N/A">N/A</option>
                  <option value="Gamma Inc">Gamma Inc.</option>
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
                  Track Applications
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
          applications={[
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
              title: "Skilled Labourer",
              company: "Quolus Construction",
              location: "North Vancouver, BC",
              logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHPAvJSFZhvrQ/company-logo_200_200/company-logo_200_200/0/1630610177623?e=2147483647&v=beta&t=OaEshIO6PrOaHb-OlhW8pJZK5clgHIedjO789uR97bY",
              progress: ["Submitted", "In Review", "Interview", "Offer"],
              currentStage: 3,
              dates: ["10/01/2024", "10/02/2024", "10/04/2024", ""],
            },
            {
              title: "Mill Worker",
              company: "Westkey Graphics Ltd.",
              location: "Burnaby, BC",
              logo: "https://media.licdn.com/dms/image/v2/D560BAQF3ZTsTzbDUjQ/company-logo_200_200/company-logo_200_200/0/1680820572754/westkey_graphics_logo?e=2147483647&v=beta&t=nEgb-ANczum2d_C59_sPF2Dq4jx33hCFIfSO08yBAa0",
              progress: ["Submitted", "In Review", "Interview", "Offer"],
              currentStage: 4,
              dates: ["10/01/2024", "10/02/2024", "10/04/2024", "10/07/2024"],
            },
          ]}
        />      
      )}
    </div>
  );
}
