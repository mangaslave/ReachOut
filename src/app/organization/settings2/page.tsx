"use server";
import {Sidebar} from "@/components/client/SideBar";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function AccessibilityPage() {
  const {getUser, isAuthenticated} = getKindeServerSession();
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
          <p className="text-sm text-gray-600">Customize Your Preferences and Account Settings</p>
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
          </div>
        </main>
      </div>
    </div>
  );
}
