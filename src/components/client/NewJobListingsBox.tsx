"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export function NewJobListingsBox() {
	return (
		<div className="p-6 rounded-xl bg-white shadow-md max-w-xl">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-bold">New Job Listings</h2>
				<a href="#" className="text-lg underline">
					View All
				</a>
			</div>

			{[1, 2, 3].map((_, index) => (
				<div
					key={index}
					className="flex items-center justify-between mb-4 last:mb-0"
				>
					<div className="flex items-center gap-4 min-w-0">
						<Avatar className="h-14 w-14 shrink-0">
							{/* <AvatarImage src="/aecon-logo.png" alt="Aecon Logo" /> */}
							<AvatarFallback>AE</AvatarFallback>
						</Avatar>
						<div>
							<h3 className="text-xl font-medium">Aecon Group</h3>
							<p className="text-gray-600">Part-time Construction Worker</p>
						</div>
					</div>
					<Button className="bg-[#2F334D] hover:bg-[#373b5c] text-white px-6 py-3 rounded-lg text-lg">
						View Listing
					</Button>
				</div>
			))}
		</div>
	);
}
