"use client";

import { Sidebar } from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import { useState } from "react";
import JobCard from "@/components/client/job_postcard";

export default function JobListingPage() {
	const [user] = useState({
		name: "John Doe",
		email: "john@example.com",
		image: "/path-to-avatar.jpg",
	});

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar user={user} />

			<div className="flex-1 flex flex-col">
				<Header
					headerMsg="Job Listing"
					subHeadingMsg="Browse the latest job listing posts."
				/>

				<main className="flex-1 overflow-y-auto pt-40 px-1 sm:px-6 lg:px-8">
					{/* joblistings content here */}
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">

							<JobCard baseColor = "bg-orchidPink" textcolor = "text-black" bordercolor="border-black"/>
                            <JobCard baseColor = "bg-caribbeanCurrant" textcolor = "text-white" bordercolor="border-white"/>
                            <JobCard baseColor = "bg-ylnMnBlue" textcolor = "text-white" bordercolor="border-white"/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}