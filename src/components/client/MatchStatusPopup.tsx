import { useState } from "react";
import Image from "next/image"; // Make sure Image is imported

interface Status {
  status: {
    status1: string;
    status2: string;
    status3: string;
  };
}

export default function InfoPopup({ status: { status1, status2, status3 } }: Status) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block mt-1">
      {/* Info Button */}
      <button onClick={togglePopup} className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500 hover:text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-8.25a.75.75 0 101.5 0v-3.5a.75.75 0 00-1.5 0v3.5zM9.75 12a.75.75 0 100 1.5h.5a.75.75 0 100-1.5h-.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-ylnMnBlue p-4 rounded-lg shadow-lg z-10">
          {/* Header and Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Job Requirements</h3>
            {/* <button onClick={togglePopup} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-300 hover:text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 10-1.5 0v3.5a.75.75 0 001.5 0v-3.5zM9.75 12a.75.75 0 100 1.5h.5a.75.75 0 100-1.5h-.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button> */}
          </div>

          <div className="text-gray-200 space-y-2">
            {/* Status items */}
            <div className="flex items-center">
              <Image src={status1} alt="Status Icon 1" width={20} height={20} />
              <span className="ml-2">Background Check</span>
            </div>
            <div className="flex items-center">
              <Image src={status2} alt="Status Icon 2" width={20} height={20} />
              <span className="ml-2">Valid Driver's License</span>
            </div>
            <div className="flex items-center">
              <Image src={status3} alt="Status Icon 3" width={20} height={20} />
              <span className="ml-2">1 year Managing Experience</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


