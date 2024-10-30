import { FaAngleDown } from "react-icons/fa";
import { MdViewColumn } from "react-icons/md"; 
import { useState } from "react";

export default function ClientFilters() {
  const [itemsToDisplay, setItemsToDisplay] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleItemsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsToDisplay(event.target.value);
  };

  const handleColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColumn(event.target.value);
  };

  return (
    <div className="flex space-x-4 mt-4">
      {/* Display Items Filter with Angle Down Icon */}
      <div className="w-48">
        <div className="relative">
          <select
            value={itemsToDisplay}
            onChange={handleItemsChange}
            className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
          >
            <option value="10">Display 10 items</option>
            <option value="20">Display 20 items</option>
            <option value="30">Display 30 items</option>
          </select>

          {/* Angle Down Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaAngleDown className="text-gray-500 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Select Column Filter with View Column Icon */}
      <div className="w-48">
        <div className="relative">
          <select
            value={selectedColumn}
            onChange={handleColumnChange}
            className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
          >
            <option value="">Select Column</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="company">Company</option>
            <option value="lastOnline">Last Online</option>
          </select>

          {/* View Column Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MdViewColumn className="text-gray-500 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
