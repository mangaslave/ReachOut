import { FaMapMarkerAlt } from "react-icons/fa"; 
import { MdWorkOutline } from "react-icons/md"; 
import { useState } from "react";

export default function JobListingFilters() {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  const handleJobTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJobType(event.target.value);
  };

  return (
    <div className="flex space-x-4 mt-4">
      {/* Location Filter with Pin Icon */}
      <div className="w-48">
        <div className="relative">
          <select
            value={location}
            onChange={handleLocationChange}
            className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
          >
            <option value="">Location</option>
            <option value="Toronto">Toronto</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Markham">Markham</option>
            <option value="Oakville">Oakville</option>
          </select>

          {/* Location Pin Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="text-gray-500 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Job Type Filter with Work Icon */}
      <div className="w-48">
        <div className="relative">
          <select
            value={jobType}
            onChange={handleJobTypeChange}
            className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
          >
            <option value="">Select Type</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
          </select>

          {/* Work Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MdWorkOutline className="text-gray-500 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
