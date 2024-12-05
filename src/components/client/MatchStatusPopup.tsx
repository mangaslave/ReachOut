"use client";
import {useState} from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";

export default function InfoPopup({status}: {status: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block mt-1">
      {/* Info Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={togglePopup} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-[0.95rem] w-[0.95rem]`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                //? Maybe change
                className={`text-spaceCadet`}
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-8.25a.75.75 0 101.5 0v-3.5a.75.75 0 00-1.5 0v3.5zM9.75 12a.75.75 0 100 1.5h.5a.75.75 0 100-1.5h-.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-white text-black border-2 border-black">
          <p>Click to see what requirements have been met by your client.</p>
        </TooltipContent>
      </Tooltip>

      {/* Popup */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-ylnMnBlue p-4 rounded-lg shadow-lg z-10">
          {/* Header and Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Matching Summary</h3>
          </div>

          <div className="text-gray-200 space-y-2">
            {/* Status items */}
            <div className="flex items-center">
              <p className="text-sm">{status}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
