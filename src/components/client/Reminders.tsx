"use client";
import Image from "next/image";
import ReminderItem from "./ReminderItem";

const Reminders = () => {
  return (
    <div className="p-5 w-full max-w-md bg-white shadow-md rounded-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold  text-black">Reminders</h3>
      </div>

      <ReminderItem title="Meeting w/ Andrew Norman" date="Nov 29" time="10:30am" statusColor="bg-red-500" />
      <ReminderItem title="Meeting w/ Jack Brown" date="Nov 30" time="12:30pm" statusColor="bg-red-500" />

      <button className="flex items-center justify-center w-full mt-4 p-3  text-sm border border-black rounded-lg hover:bg-gray-100">
        <Image src="/static/images/plus-icon.svg" alt="Add" width={16} height={16} />
        <span className="ml-2 text-black">Add new event</span>
      </button>
    </div>
  );
};

export default Reminders;
