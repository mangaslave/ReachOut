"use client";

import {useState} from "react";
import ClientProfile from "./ClientProfile";

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
      }[]
    | null;
}) {
  const [selectedClient, setSelectedClient] = useState(clients ? clients[0] : null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const setModalOpen = () => {
    setProfileModalOpen(true);
  };

  const setModalClose = () => {
    setProfileModalOpen(false);
  };

  if (!clients) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-caribbeanCurrant text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">Company</th>
            <th className="px-6 py-3 text-left text-xs font-large text-white uppercase tracking-wider">Last Online</th>
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
                <select
                  className="w-sm border rounded-lg border-black text-black"
                  name=""
                  id=""
                  defaultValue="Unemployed" //TODO: Save user status in db
                >
                  <option value="Unemployed">Unemployed</option>
                  <option value="Employed">Employed</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  className="w-sm border rounded-lg border-black text-black"
                  name=""
                  id=""
                  defaultValue="N/A" // TODO: Save client company in db if they get hired
                >
                  <option value="N/A">N/A</option>
                  <option value="Gamma Inc">Gamma Inc.</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{client.lastOnline}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => {
                    setSelectedClient(client);
                    setModalOpen();
                  }}
                  key={index}
                  className="hover:underline bg-none"
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {profileModalOpen && selectedClient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ClientProfile closeModal={setModalClose} client={selectedClient} />
        </div>
      )}
    </div>
  );
}

