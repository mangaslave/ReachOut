"use server";
import { Sidebar } from "@/components/client/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }
  const user = await getUser();
  await AddKindeUserToDb(user, 1);

  const activeUser = {
    name: `${user.given_name} ${user.family_name}`,
    email: `${user.email}`,
    image: `${user.picture}`,
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar user={activeUser} />
      <div className="flex-1 flex flex-col">
        <header className="px-4 py-6 border-b border-gray-300 bg-white">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-sm text-gray-600">
            Customize Your Preferences and Account Settings
          </p>
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {/* Tabs Section */}
            <div className="flex justify-between border-b border-gray-300 mb-6">
              <ul className="flex space-x-8">
                <li className="text-blue-500 border-b-2 border-blue-500 pb-2 font-medium">
                  General
                </li>
                <li className="text-gray-600 hover:text-gray-800 font-medium">
                  Accessibility
                </li>
                <li className="text-gray-600 hover:text-gray-800 font-medium">
                  Dashboard
                </li>
              </ul>
            </div>

            {/* General Tab */}
            <div className="flex flex-wrap gap-6">
              {/* Change Password Section */}
              <section className="flex-1 min-w-[300px] p-4 rounded flex flex-col gap-2">
                <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
                <p className="text-sm text-gray-600">Create a new secured password.</p>
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </section>

              {/* Notification Center Section */}
              <section className="flex-1 min-w-[300px] p-4 rounded flex flex-col gap-2">
                <h2 className="text-lg font-medium text-gray-900">
                  Notification Center
                </h2>
                <p className="text-sm text-gray-600">Manage your notification preferences and alerts.</p>
                <div className="flex flex-col gap-4">
                  {[
                    "Receive Email Notifications",
                    "Receive SMS Notifications",
                    "Reminders & Activities",
                    "Status Progress",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <label
                        htmlFor={`notification-${index}`}
                        className="flex items-center cursor-pointer"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id={`notification-${index}`}
                            className="sr-only"
                          />
                          <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-700">
                          {item}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </section>

              {/* Two-Factor Authentication Section */}
              <section className="flex-2 min-w-[300px] p-4 rounded flex flex-col gap-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Two-Factor Authentication
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Cellphone Number", status: "Enable" },
                    { label: "Secondary Email", status: "N/A" },
                    { label: "Authenticator App", status: "Not Set" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p className="text-sm font-medium text-gray-700">
                        {item.label}
                      </p>
                      <Button
                        variant="ghost"
                        className="border border-spaceCadet mx-2"
                      >
                        {item.status}
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-3 justify-end">
              <Button>Save & Continue</Button>
              <Button variant="ghost" className="border border-spaceCadet mx-2">
                Go Back
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
