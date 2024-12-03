"use client";

import Link from "next/link";
import {Button} from "../ui/button";
import {useState} from "react";
import AccessibilitySettings from "./AccessibilitySettings";
import GeneralSettings from "./GeneralSettings";
import {twMerge} from "tailwind-merge";

export default function SettingsClient({employer}: {employer: boolean}) {
  const [accessibility, setAccessibility] = useState(false);
  const switchSettings = () => {
    setAccessibility(!accessibility);
  };

  return (
    <div className="w-auto mx-auto flex flex-col gap-8">
      {/* Tabs Section */}
      <div className="flex justify-between border-b border-gray-300 mb-6">
        <ul className="flex space-x-8">
          <button onClick={switchSettings} className="pb-2 font-medium border-b-2 transition-all duration-200">
            <li
              className={twMerge(
                "font-medium",
                accessibility ? "text-gray-600 hover:text-gray-800 " : "text-blue-500 border-b-2 border-blue-500"
              )}
            >
              General
            </li>
          </button>
          <button onClick={switchSettings} className="pb-2 font-medium border-b-2 transition-all duration-200">
            <li
              className={twMerge(
                "font-medium",
                accessibility ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600 hover:text-gray-800"
              )}
            >
              Accessibility
            </li>
          </button>
        </ul>
        <div className="flex gap-3 justify-end">
          <Link
            href={employer ? "/employer/dashboard" : "/organization/dashboard"}
            className="pb-2 font-medium transition-all duration-200"
          >
            <Button>Save & Continue</Button>
          </Link>
          <Link
            href={employer ? "/employer/dashboard" : "/organization/dashboard"}
            className="pb-2 font-medium transition-all duration-200"
          >
            <Button variant="ghost" className="border border-spaceCadet mx-2">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
      {accessibility ? <AccessibilitySettings /> : <GeneralSettings />}
    </div>
  );
}
