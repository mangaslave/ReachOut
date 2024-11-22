"use client";

import Image from "next/image";
import InfoPopup from "./MatchStatusPopup";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

interface JobCardProps {
	baseColor: string;
	textcolor: string;
	bordercolor: string;
	companyName: string;
	jobTitle: string;
	jobType: string;
	matchStatus: string;
	statusColor: string;
	dateOfPosting: string;
	location: string;
	hourlyPay: string;
	companyLogo: string;
	openModal: () => void;
	status: {
		status1: string;
		status2: string;
		status3: string;
	};
}

const tooltipContent = (matchStatus: string) => {
	return (
		<div className="flex flex-col gap-1">
			{matchStatus === "Excellent" && (
				<p>
					An &quot;Excellent&quot; match indicates that the selected client
					meets all job requirements.
				</p>
			)}
			{matchStatus === "Okay" && (
				<p>
					An &quot;Okay&quot; match indicates that the selected client meets
					some, but not all of the job requirements.
				</p>
			)}
			{matchStatus === "Bad" && (
				<p>
					A &quot;Bad&quot; match indicates that the selected client does not
					meet any of the job requirements.
				</p>
			)}
		</div>
	);
};

export default function JobCard({
	baseColor = "bg-orchidPink",
	textcolor = "text-black",
	bordercolor = "border-black",
	companyName,
	jobTitle,
	jobType,
	matchStatus,
	statusColor,
	dateOfPosting,
	location,
	hourlyPay,
	companyLogo,
	openModal,
	status,
}: JobCardProps) {
	return (
		<div className={`${baseColor} shadow-lg rounded-lg p-1 w-80 mt-5 pb-1`}>
			{/* Header with company info */}
			<div className="flex items-center justify-between pt-3">
				<div className={`${textcolor} px-4`}>
					<p className={`${textcolor}`}>{jobTitle}</p>
					<h3 className="text-xl font-bold">{companyName}</h3>
				</div>
				<div className="pr-6">
					<Image
						src={companyLogo}
						alt="company logo"
						width={50}
						height={50}
						className="rounded-full bg-white w-14 h-14"
					/>
				</div>
			</div>

			{/* Job Info */}
			<div className="flex items-center justify-center mb-5 pb-3 pt-4">
				<div className="flex items-center space-x-4">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<span
									className={`flex items-center space-x-2 ${textcolor} py-1 px-2 rounded-md text-xs border-solid border ${bordercolor}`}
								>
									<span
										className={`w-2 h-2 ${statusColor} rounded-full border-solid`}
									></span>
									<span>{matchStatus}</span>
									<InfoPopup status={status} />
								</span>
							</TooltipTrigger>
							<TooltipContent className="max-w-xs bg-white text-black border-2 border-black">
								{tooltipContent(matchStatus)}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<span
						className={`${textcolor} py-2
           px-2 rounded-md text-xs border-solid border ${bordercolor}`}
					>
						{jobType}
					</span>
				</div>
			</div>

			{/* Date of posting */}
			<div className="flex justify-end space-x-2 pb-1">
				<Image
					src="/static/images/calendar.svg"
					alt="clock icon"
					width={16}
					height={16}
				/>
				<span className="text-white text-xs">{dateOfPosting}</span>
			</div>

			{/* Footer with location and hourly pay */}
			<div className="w-full h-16 bg-white rounded-b-lg m-0 flex items-center justify-between pr-3">
				<div className="px-2">
					<p className="text-black">{hourlyPay}</p>
					<p className="text-black">{location}</p>
				</div>

				{/* View Details Button */}
				<button
					onClick={openModal}
					className="bg-spaceCadet text-white hover:bg-ylnMnBlue text-sm px-4 py-2 rounded-md h-8"
				>
					View Details
				</button>
			</div>
		</div>
	);
}
