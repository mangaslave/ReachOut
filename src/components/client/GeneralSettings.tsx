"use client";

import {useState} from "react";
import {Button} from "../ui/button";
import {FaRegCircleCheck} from "react-icons/fa6";

export default function GeneralSettings() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const handleConnectEmail = () => {
    setIsEmailModalOpen(true);
  };

  const handleSyncCalendar = () => {
    setIsCalendarModalOpen(true);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Change Password Section */}
      <section className="flex flex-col gap-2 p-6 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
        <p className="text-sm text-gray-600 py-3">Create a new secured password.</p>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="old-password" className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              id="old-password"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
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
        <p className="text-sm text-gray-600">Sync your ReachOut messages with your existing email account.</p>
        <div className="flex flex-col gap-4">
          <label htmlFor="email-provider" className="block text-sm font-medium text-black">
            Select Email Provider
          </label>
          <select
            id="email-provider"
            className="block w-full max-w-[200px] h-10 p-2 rounded-md border-black border shadow-sm"
          >
            <option className="text-sm" value="">
              Select Provider
            </option>
            <option className="text-sm" value="gmail">
              Gmail
            </option>
            <option className="text-sm" value="outlook">
              Outlook
            </option>
            <option className="text-sm" value="yahoo">
              Yahoo
            </option>
            <option className="text-sm" value="other">
              Other
            </option>
          </select>

          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="mt-1 block w-full h-10 rounded-md border-black border shadow-sm"
            />
          </div>

          <Button onClick={handleConnectEmail} className="self-start bg-spaceCadet">
            Connect Email
          </Button>
        </div>
      </section>

      {/* Sync Calendar Section */}
      <section className="flex flex-col gap-4 p-6 rounded bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Sync Calendar</h2>
        <p className="text-sm text-gray-600">
          Sync your calendar with an external calendar like Google Calendar or your phone&apos;s calendar.
        </p>
        <div className="flex flex-col gap-4">
          <label htmlFor="calendar-provider" className="block text-sm font-medium text-black">
            Select Calendar Provider
          </label>
          <select
            id="calendar-provider"
            className="block w-full max-w-[200px] h-10 p-2 rounded-md border-black border shadow-sm"
          >
            <option className="text-sm" value="">
              Select Provider
            </option>
            <option className="text-sm" value="google">
              Google Calendar
            </option>
            <option className="text-sm" value="apple">
              Apple Calendar
            </option>
            <option className="text-sm" value="outlook">
              Outlook Calendar
            </option>
          </select>
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
            Email Adress
          </label>
          <input
            type="email"
            id="email-address"
            className="-mt-3 block w-full h-10 rounded-md border-black border shadow-sm"
          />

          <Button onClick={handleSyncCalendar} className="self-start bg-spaceCadet">
            Sync Calendar
          </Button>
        </div>
      </section>

      {/* Email Sync Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 flex flex-row gap-2">
              Email Connected <FaRegCircleCheck className="text-correctGreen text-2xl mt-[3px]" />
            </h3>
            <p className="text-sm text-gray-600 mt-2">Your email has been connected successfully!</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={closeEmailModal} className="bg-caribbeanCurrant text-white px-4 py-2 rounded">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Sync Modal */}
      {isCalendarModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 flex flex-row gap-2">
              Calendar Synced <FaRegCircleCheck className="text-correctGreen text-2xl mt-[3px]" />
            </h3>
            <p className="text-sm text-gray-600 mt-2">Your calendar has been synced successfully!</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={closeCalendarModal} className="bg-caribbeanCurrant text-white px-4 py-2 rounded">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
