"use client";

import { Sidebar } from "@/components/client/SideBar";
import Header from "@/components/client/Header";
import { useState } from "react";
import Reminders from "@/components/client/Reminders";

export default function DashboardPage() {
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
					headerMsg="Welcome Back, John"
					subHeadingMsg="Here's what's happening with your projects today."
				/>

				<main className="flex-1 overflow-y-auto pt-20 px-4 sm:px-6 lg:px-8">
					{/* dashboard content here */}
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							<div className="bg-white p-6 rounded-lg shadow">
								<h3 className="text-lg font-medium">Sample Card</h3>
								<p className="text-gray-600">Dashboard content goes here</p>
							</div>

							<Reminders />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
