"use client";

import { Button } from "../ui/button";

export default function GeneralSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Change Password Section */}
      <section className="flex flex-col gap-2 p-6 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
        <p className="text-sm text-gray-600 py-3">Create a new secured password.</p>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="old-password"
              className="block text-sm font-medium text-gray-700"
            >
              Old Password
            </label>
            <input
              type="password"
              id="old-password"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Notification Center Section */}
      <section className="flex flex-col gap-4 p-6 rounded bg-white shadow">
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
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-caribbeanCurrant rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-caribbeanCurrant"></div>
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Syncing Email Section */}
      <section className="flex flex-col gap-4 p-6 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Sync Email</h2>
        <p className="text-sm text-gray-600">
          Sync your ReachOut messages with your existing email account.
        </p>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="email-provider"
            className="block text-sm font-medium text-black"
          >
            Select Email Provider
          </label>
          <select
            id="email-provider"
            className="block w-full max-w-[200px] h-10 p-2 rounded-md border-black border shadow-sm"
          >
            <option className="text-sm" value="">Select Provider</option>
            <option className="text-sm" value="gmail">Gmail</option>
            <option className="text-sm" value="outlook">Outlook</option>
            <option className="text-sm" value="yahoo">Yahoo</option>
            <option className="text-sm" value="other">Other</option>
          </select>

          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>

          <Button className="self-start">Connect Email</Button>
        </div>
      </section>

      {/* Two-Factor Authentication Section */}
      <section className="flex flex-col gap-4 p-6 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h2>
        <div className="flex flex-col gap-4">
          {[
            { label: "Cellphone Number", status: "Enable" },
            { label: "Secondary Email", status: "N/A" },
            { label: "Authenticator App", status: "Not Set" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">{item.label}</p>
              <Button variant="ghost" className="border border-black w-32">
                {item.status}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
