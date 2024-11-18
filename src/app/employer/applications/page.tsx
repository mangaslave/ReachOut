"use server"

import React from 'react';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";

import { EmployerSidebar } from '@/components/client/EmployerSidebar';

export default async function PotentialEmployees() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  await AddKindeUserToDb();

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <EmployerSidebar user={activeUser} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4">
          <div className="max-w-7xl mx-1">
            <div className="mb-8">
              <h1 className="text-xl font-medium text-gray-900 mb-1">Potential Employees</h1>
              <p className="text-sm text-gray-500 mb-1">View a curated list of potential candidates for your open positions</p>
              <div className="border-t border-gray-200 my-4"></div>
              
              <h2 className="text-sm font-medium text-gray-900 mb-1">Employee Matches</h2>
              <p className="text-xs text-gray-500">List of best candidates matched to your job openings</p>
            </div>

            <div>
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-teal-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Position</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-900">John Wick</td>
                    <td className="px-4 py-4 text-sm text-gray-900">Assistant Manager</td>
                    <td className="px-4 py-4 text-sm text-gray-900">Full-Time</td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        Interviewing
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-blue-600">View full application</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-900">John Wick</td>
                    <td className="px-4 py-4 text-sm text-gray-900">Assistant Manager</td>
                    <td className="px-4 py-4 text-sm text-gray-900">Part-Time</td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        New
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-blue-600">View full application</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-900">John Wick</td>
                    <td className="px-4 py-4 text-sm text-gray-900">Assistant Manager</td>
                    <td className="px-4 py-4 text-sm text-gray-900">Full-Time</td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Hired
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-blue-600">View full application</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}