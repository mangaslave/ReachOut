"use client";

import {Button} from "../ui/button";

export default function GeneralSettings() {
  return (
    <div className="flex flex-wrap gap-6">
      {/* Change Password Section */}
      <section className="flex-1 min-w-[300px] p-4 rounded flex flex-col gap-2">
        <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
        <p className="text-sm text-gray-600">Create a new secured password.</p>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="old-password" className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              id="old-password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Notification Center Section */}
      <section className="flex-1 min-w-[300px] p-6 flex flex-col gap-4">
        <h2 className="text-lg font-medium text-gray-900">Notification Center</h2>
        <div className="flex flex-col gap-6">
          {[
            {
              label: "Receive Email Notifications",
              description: "Get updates and alerts via email.",
            },
            {
              label: "Receive SMS Notifications",
              description: "Receive notifications directly to your phone.",
            },
            {
              label: "Reminders & Activities",
              description: "Stay on top of tasks and activities with timely reminders.",
            },
            {
              label: "Status Progress",
              description: "Track your progress and milestones with updates.",
            },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center gap-4">
              {/* Label and Description */}
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              {/* Toggle Switch */}
              <label htmlFor={`notification-${index}`} className="flex items-center cursor-pointer">
                <input type="checkbox" id={`notification-${index}`} className="sr-only peer" />
                <div className="relative w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors">
                  <div className="absolute w-6 h-6 bg-white rounded-full shadow-md left-1 top-1 transition-transform peer-checked:translate-x-6"></div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Two-Factor Authentication Section */}
      <section className="flex-2 min-w-[300px] p-4 rounded flex flex-col gap-4">
        <h2 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h2>
        <div className="flex flex-col gap-4">
          {[
            {label: "Cellphone Number", status: "Enable"},
            {label: "Secondary Email", status: "N/A"},
            {label: "Authenticator App", status: "Not Set"},
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">{item.label}</p>
              <Button variant="ghost" className="border border-gray-300 w-32">
                {item.status}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
