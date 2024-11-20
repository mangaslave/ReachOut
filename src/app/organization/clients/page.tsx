"use server";

import { Sidebar } from "@/components/client/SideBar";
import ClientListing from "@/components/client/ClientListing";
import ClientsFilters from "@/components/client/ClientFilters";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import AddKindeUserToDb from "@/actions/AddKindeUserToDb";
import GetClientAction from "@/actions/GetClientAction";

export default async function ClientsPage() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	if (!user) {
		redirect("/");
	}
	await AddKindeUserToDb();

	const clients = await GetClientAction();

	const activeUser = {
		name: `${user.given_name} ${user.family_name}`,
		email: `${user.email}`,
		image: `${user.picture}`,
	};

	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar user={activeUser} />

			<div className="flex-1 flex flex-col">
				<main className="flex-1 overflow-y-auto pt-20 px-2 sm:px-2 lg:px-4 ">
					<div className="max-w-7xl mx-1">
						<div className="flex justify-between items-center mb-4">
							<div className="flex">
								<ClientsFilters />
							</div>

							<div className="ml-auto">
								<Link href="/clients/newclient" passHref>
									<button className="bg-spaceCadet text-white hover:bg-ylnMnBlue text-xs px-4 rounded-md h-8">
										+ Add New
									</button>
								</Link>
							</div>
						</div>

						<div>
							<ClientListing clients={clients.clients} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
