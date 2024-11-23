"use server";
import { Sidebar } from "@/components/client/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AccessibilityPage() {
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
      {/* Sidebar */}
      <Sidebar user={activeUser} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="px-4 py-6 border-b border-gray-300 bg-white">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-sm text-gray-600">
            Customize Your Preferences and Account Settings
          </p>
        </header>

        {/* Main Section */}
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {/* Tabs Section */}
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <ul className="flex space-x-8">
                <Link
                  href="/organization/settings"
                  className="font-medium text-gray-600 hover:text-gray-800 pb-2 border-b-2 transition-all duration-200"
                >
                  General
                </Link>
                <Link
                  href="/organization/settings2"
                  className="font-medium text-blue-500 border-b-2 border-blue-500 pb-2"
                >
                  Accessibility
                </Link>
              </ul>
            </div>

            {/* Accessibility Settings Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Language Section */}
              <section className="p-4 bg-white rounded shadow flex flex-col gap-4">
                <h2 className="text-lg font-medium text-gray-900">Language</h2>
                <p className="text-sm text-gray-600">
                  Select your preferred displayed language.
                </p>
                <select className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select a language</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </section>

              {/* Display Section */}
              <section className="p-4 bg-white rounded shadow flex flex-col gap-4">
                <h2 className="text-lg font-medium text-gray-900">Display</h2>
                <p className="text-sm text-gray-600">
                  Adjust the appearance of your text.
                </p>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600">Text Size</label>
                  <input
                    type="range"
                    min="10"
                    max="30"
                    className="flex-1"
                  />
                </div>
                <select className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select Text Style</option>
                  <option>Serif</option>
                  <option>Sans-Serif</option>
                  <option>Monospace</option>
                </select>
              </section>

              {/* Themes Section */}
              <section className="p-4 bg-white rounded shadow flex flex-col gap-4">
                <h2 className="text-lg font-medium text-gray-900">Themes</h2>
                <p className="text-sm text-gray-600">
                  Customize the look of your interface.
                </p>
                {["Dark Mode", "High-Contrast"].map((theme, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700">{theme}</span>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                      />
                      <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors">
                        <div className="absolute w-6 h-6 bg-white rounded-full shadow-md left-1 top-1 transition-transform peer-checked:translate-x-6"></div>
                      </div>
                    </label>
                  </div>
                ))}
              </section>

              {/* Accessibility Tools Section */}
              <section className="p-4 bg-white rounded shadow flex flex-col gap-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Accessibility Tools
                </h2>
                <p className="text-sm text-gray-600">
                  Tools to enhance usability and support diverse needs.
                </p>
                {["Text-to-Speech", "Speech Recognition", "Keyboard Navigation"].map(
                  (tool, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-700">{tool}</span>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                        />
                        <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors">
                          <div className="absolute w-6 h-6 bg-white rounded-full shadow-md left-1 top-1 transition-transform peer-checked:translate-x-6"></div>
                        </div>
                      </label>
                    </div>
                  )
                )}
              </section>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-3 justify-end">
              <Button>Save and Continue</Button>
              <Button variant="ghost" className="border border-gray-300">
                Go Back
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
