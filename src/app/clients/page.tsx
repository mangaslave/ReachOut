"use client";

import { Sidebar } from "@/components/client/SideBar";
import { useState } from "react";
import ClientListing from "@/components/client/ClientListing";

export default function ClientsPage() {
	const [user] = useState({
		name: "John Doe",
		email: "john@example.com",
		image: "/path-to-avatar.jpg",
	});

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar user={user} />

			<div className="flex-1 flex flex-col">
			<main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
					<div className="max-w-7xl mx-1">
					<div className="flex justify-between items-center mb-4">
						<div className="flex">
							<div>
							<select
								id="displayItems"
								className="block w-full h-8 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm"
							>
								<option value="default">Display 10 items</option>
								<option value="5">5 items</option>
								<option value="10">10 items</option>
								<option value="15">15 items</option>
								<option value="20">20 items</option>
							</select>
							</div>
							
							<div>
							<select
								id="selectColumn"
								className="block w-full h-8 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm"
							>
								<option value="default">Select column</option>
								<option value="name">Name</option>
								<option value="status">Status</option>
								<option value="company">Company</option>
								<option value="lastOnline">Last Online</option>
							</select>
							</div>
						</div>

						<div className="ml-auto">
							<button className="bg-spaceCadet text-white hover:bg-ylnMnBlue text-xs px-4 py-2 rounded-md h-8">
							+ Add New
							</button>
						</div>
						</div>
						<div>
							<ClientListing/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}