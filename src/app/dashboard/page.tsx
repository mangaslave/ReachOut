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
					headerMsg={`Welcome back, ${user.name}!`}
					subHeadingMsg="Here's what's happening with your projects today."
				/>

				<main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
					<div className="max-w-7xl mx-1">
						<div className="mb-8">
							<h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
							<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div className="bg-white p-6 rounded-lg shadow">
									{/* Content for first section */}
									<h3 className="text-lg font-semibold">Section 1</h3>
									{/* Add your content here */}
								</div>
								<div className="bg-white p-6 rounded-lg shadow">
									{/* Content for second section */}
									<h3 className="text-lg font-semibold">Section 2</h3>
									{/* Add your content here */}
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							<Reminders />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
