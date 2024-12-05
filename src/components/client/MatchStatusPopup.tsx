"use client";
import {useState, useRef, useEffect} from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";

export default function InfoPopup({status}: {status: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block mt-1">
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

      {isOpen && (
        <div ref={popupRef} className="absolute top-full left-0 mt-2 w-64 bg-ylnMnBlue p-4 rounded-lg shadow-lg z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Matching Summary</h3>
          </div>

          <div className="text-gray-200 space-y-2">
            {status.split(/(?<!\w\.\w.)(?<=\.|\?|!|:)\s+/).map((sentence, index) => {
              if (sentence.trim().toLowerCase().startsWith("matched skills")) {
                return (
                  <div key={index} className="mt-4">
                    <strong>• {sentence.trim()}</strong>
                  </div>
                );
              }
              if (sentence.trim().toLowerCase().startsWith("missing skills")) {
                return (
                  <div key={index} className="mt-4">
                    <strong>• {sentence.trim()}</strong>
                  </div>
                );
              }
              return (
                <p key={index} className="mt-2">
                  {sentence.trim()}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
