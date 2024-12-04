"use client";
import {useState} from "react";
import {format, addMonths, subMonths, isSameDay} from "date-fns";
import {FaChevronRight} from "react-icons/fa6";
import {FaChevronLeft} from "react-icons/fa6";

const Calendar = ({employer}: {employer: boolean}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const daysArray = Array.from({length: totalDays}, (_, i) => i + 1);

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
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
      <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center">
        {Array.from({length: startDay}).map((_, i) => (
          <div key={`empty-${i}`} className="text-gray-300">
            -
          </div>
        ))}
        {daysArray.map((day) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isToday = isSameDay(date, today);
          const bgColor = employer ? "bg-spaceCadet" : "bg-caribbeanCurrant";

          return (
            <div
              key={day}
              className={`p-2 w-full h-10 flex items-center justify-center rounded-lg transition-all cursor-pointer 
                ${isToday ? `${bgColor} text-white` : "hover:bg-orchidPink"}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
