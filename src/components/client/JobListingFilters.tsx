import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import userIcon from "../../../public/static/images/userIcon.svg";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

import { useState } from "react";

export interface FilterState {
	location: string;
	jobType: string;
	client: string;
}

interface JobListingFiltersProps {
	onFilterChange: (type: keyof FilterState, value: string) => void;
}

export default function JobListingFilters({
	onFilterChange,
}: JobListingFiltersProps) {
	const [location, setLocation] = useState("");
	const [jobType, setJobType] = useState("");
	const [client, setClient] = useState("");

	const handleLocationChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLocation(event.target.value);
		onFilterChange("location", event.target.value);
	};

	const handleJobTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setJobType(event.target.value);
		onFilterChange("jobType", event.target.value);
	};

	const handleClientSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setClient(event.target.value);
		onFilterChange("client", event.target.value);
	};

	const clearFilters = () => {
		setLocation("");
		setJobType("");
		setClient("");

		onFilterChange("location", "");
		onFilterChange("jobType", "");
		onFilterChange("client", "");
	};

	const isAnyFilterActive = location || jobType || client;

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
						<option value="">Select Location</option>
						<option value="Toronto">Toronto</option>
						<option value="Vancouver">Vancouver</option>
						<option value="Markham">Markham</option>
						<option value="Oakville">Oakville</option>
					</select>
					<ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />

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
						<option value="">Select Job Type</option>
						<option value="Part-Time">Part-Time</option>
						<option value="Full-Time">Full-Time</option>
					</select>
					<ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />

					{/* Work Icon */}
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<MdWorkOutline className="text-gray-500 h-4 w-4" />
					</div>
				</div>
			</div>

			<div className="w-48">
				<div className="relative">
					<select
						value={client}
						onChange={handleClientSelect}
						className="block w-full h-8 pl-10 pr-3 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 appearance-none"
					>
						<option value="">Select Client</option>
						<option value="Gregory Wick">Gregory Wick</option>
						<option value="Alice Johnson">Alice Johnson</option>
						<option value="Andrew Green">Andrew Green</option>
					</select>
					<ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />

					{/* User Icon */}
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Image
							src={userIcon}
							width={10}
							height={10}
							alt="userIcon"
							className="text-gray-500 h-4 w-4"
						/>
					</div>
				</div>
			</div>
			{isAnyFilterActive && (
				<button
					onClick={clearFilters}
					className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
				>
					Clear Filters
				</button>
			)}
		</div>
	);
}
