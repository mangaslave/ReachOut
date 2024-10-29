"use client";

import {Suspense, useState} from "react";
import ClientProfile from "./ClientProfile";

const data = [
  {
    name: "Gregory Wick",
    status: "Unemployed",
    company: "N/A",
    lastOnline: "10/20/2024",
  },
  {
    name: "Leon Howard",
    status: "Unemployed",
    company: "N/A",
    lastOnline: "10/18/2024",
  },
  {
    name: "Alice Johnson",
    status: "Employed",
    company: "Gamma Inc",
    lastOnline: "10/19/2024",
  },
];

export default async function ClientListing() {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const setModalOpen = () => {
    setProfileModalOpen(true);
  };

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
          {data.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="rounded-xl" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <select
                  className="w-sm border rounded-lg border-black text-black"
                  name=""
                  id=""
                  defaultValue={user.status}
                >
                  <option value="Unemployed" selected>
                    Unemployed
                  </option>
                  <option value="Employed">Employed</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  className="w-sm border rounded-lg border-black text-black"
                  name=""
                  id=""
                  defaultValue={user.company}
                >
                  <option value="Unemployed" selected>
                    N/A
                  </option>
                  <option value="Employed">Gamma Inc.</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.lastOnline}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={setModalOpen} className="hover:underline bg-none">
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      //!!! why is this not working?
      {profileModalOpen && (
        <div className="fixed inset-0 flex place-items-center bg-black bg-opacity-50">
          <ClientProfile />
        </div>
      )}
    </div>
  );
}
