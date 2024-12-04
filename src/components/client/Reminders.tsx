"use client";
import { useState } from "react";
import Image from "next/image";
import ReminderItem from "./ReminderItem";

const Reminders = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="p-5 w-[36rem] bg-white shadow-md rounded-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-black">Reminders</h3>
      </div>
      <div className="flex flex-col justify-between h-[15rem]">
        <div>
          <ReminderItem
            title="Meeting w/ Andrew Norman"
            date="Dec 10"
            time="10:30am"
            statusColor="bg-red-500"
          />
          <ReminderItem
            title="Meeting w/ Jack Brown"
            date="Dec 12"
            time="12:30pm"
            statusColor="bg-red-500"
          />
        </div>

        <button
          onClick={togglePopup}
          className="flex items-center justify-center mt-auto p-3 text-sm border border-black rounded-lg hover:bg-gray-100"
        >
          <Image
            src="/static/images/plus-icon.svg"
            alt="Add"
            width={16}
            height={16}
          />
          <span className="ml-2 text-black">Add new event</span>
        </button>
      </div>

    

      {isPopupOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h4 className="text-lg font-semibold mb-4">Add New Event</h4>
          <form>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Event Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                type="time"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
              />
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                onClick={togglePopup}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-caribbeanCurrant border border-white text-white rounded-lg transition-all duration-300 hover:bg-white hover:border hover:border-caribbeanCurrant hover:text-caribbeanCurrant"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
     
      )}
    </div>
  );
};

export default Reminders;

