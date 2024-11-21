"use server";

import React from "react";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";

import {EmployerSidebar} from "@/components/client/EmployerSidebar";
import Header from "@/components/client/Header";

export default async function PotentialEmployees() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  await AddKindeUserToDb(2);

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <div className="flex-1 flex flex-col">
        <Header
          headerMsg="Applications"
          subHeadingMsg="View a curated list of potential candidates for your open positions."
        />
        <div className="border-t border-gray-200 my-4"></div>
        <div className="max-w-7xl mx-1">
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-gray-900">Employee Matches</h2>
            <p className="text-lg">List of best candidates matched to your job openings</p>
          </div>

          <div>
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-teal-700">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-white">Name</th>
                  <th className="px-4 py-3 text-left font-medium text-white">Position</th>
                  <th className="px-4 py-3 text-left font-medium text-white">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-white">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-white"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-4 text-gray-900">John Wick</td>
                  <td className="px-4 py-4 text-gray-900">Assistant Manager</td>
                  <td className="px-4 py-4 text-gray-900">Full-Time</td>
                  <td className="px-4 py-4">
                    <select className="w-36 border rounded-lg border-black text-black" name="" id="" defaultValue="New">
                      <option value="New">🔴 NEW!</option>
                      <option value="Interviewing">🟡 Interviewing</option>
                      <option value="Hired">🟢 Hired</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      // onClick={() => {
                      //   setSelectedClient(client);
                      //   setModalOpen();
                      // }}
                      // key={index}
                      className="hover:underline bg-none"
                    >
                      View Full Application
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-gray-900">John Wick</td>
                  <td className="px-4 py-4 text-gray-900">Assistant Manager</td>
                  <td className="px-4 py-4 text-gray-900">Part-Time</td>
                  <td className="px-4 py-4">
                    <select
                      className="w-36 border rounded-lg border-black text-black"
                      name=""
                      id=""
                      defaultValue="Interviewing"
                    >
                      <option value="New">🔴 NEW!</option>
                      <option value="Interviewing">🟡 Interviewing</option>
                      <option value="Hired">🟢 Hired</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      // onClick={() => {
                      //   setSelectedClient(client);
                      //   setModalOpen();
                      // }}
                      className="hover:underline bg-none"
                    >
                      View Full Application
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-gray-900">John Wick</td>
                  <td className="px-4 py-4 text-gray-900">Assistant Manager</td>
                  <td className="px-4 py-4 text-gray-900">Part-Time</td>
                  <td className="px-4 py-4">
                    <select
                      className="w-36 border rounded-lg border-black text-black"
                      name=""
                      id=""
                      defaultValue="Hired"
                    >
                      <option value="New">🔴 NEW!</option>
                      <option value="Interviewing">🟡 Interviewing</option>
                      <option value="Hired">🟢 Hired</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      // onClick={() => {
                      //   setSelectedClient(client);
                      //   setModalOpen();
                      // }}
                      className="hover:underline bg-none"
                    >
                      View Full Application
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
