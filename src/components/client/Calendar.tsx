"use client";
import { useState } from "react";
import { format, addMonths, subMonths, isSameDay } from "date-fns";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Calendar = ({ employer }: { employer: boolean }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const events = [
    { date: "2024-12-10", title: "Meeting w/ Andrew Norman", time: "10:30am" },
    { date: "2024-12-12", title: "Meeting w/ Jack Brown", time: "12:30pm" },
  ];

  const getEventsForDate = (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    return events.filter((event) => event.date === formattedDate);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md max-h-[20rem] overflow-hidden flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 bg-gray-100 rounded-full w-8 hover:bg-gray-300 transition-all flex justify-center"
        >
          <FaChevronLeft />
        </button>
        <h2 className="text-lg font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
        <button
          onClick={nextMonth}
          className="p-2 bg-gray-100 rounded-full w-8 hover:bg-gray-300 transition-all flex justify-center"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Weekdays Section */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days and Events Section */}
      <div className="grid grid-cols-7 text-center flex-grow overflow-y-auto">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className="text-orchidPink">
            -
          </div>
        ))}
        {daysArray.map((day) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isToday = isSameDay(date, today);
          const eventsForDate = getEventsForDate(date);

          const bgColor = employer ? "bg-spaceCadet" : "bg-caribbeanCurrant";

          return (
            <div
              key={day}
              className={`p-2 w-full h-10 flex flex-col items-center justify-start rounded-lg transition-all cursor-pointer 
                ${isToday ? `${bgColor} text-white` : "hover:bg-orchidPink"}`}
            >
              <div className="font-bold">{day}</div>
              {eventsForDate.map((event, index) => (
                <div
                  key={index}
                  className="text-xs mt-1 bg-caribbeanCurrant text-black rounded px-1 py-0.5 w-full truncate"
                >
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
