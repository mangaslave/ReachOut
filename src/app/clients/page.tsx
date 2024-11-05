"use client";

import { Sidebar } from "@/components/client/SideBar";
import { useState } from "react";
import ClientListing from "@/components/client/ClientListing";
import ClientsFilters from "@/components/client/ClientFilters";

export default function ClientsPage() {
	const [user] = useState({
		name: "Giselle Andrews",
		email: "gandrews@email.com ",
		image: "/static/images/giselleAndrews.jpg",
	});

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar user={user} />

			<div className="flex-1 flex flex-col">
				<main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
					<div className="max-w-7xl mx-1">
						<div className="flex justify-between items-center mb-4">
							<div className="flex">
								<ClientsFilters />
							</div>
						</div>

						<div>
							<ClientListing />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
