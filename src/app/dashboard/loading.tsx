"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDashboard() {
	return (
		<div className="flex h-screen bg-gray-100">
			<div className="w-64 p-4">
				<Skeleton className="h-full" />
			</div>

			<div className="flex-1 flex flex-col">
				<div className="h-20 p-4">
					{" "}
					<Skeleton className="h-8 w-1/3 mb-2" />
					<Skeleton className="h-4 w-1/4" />
				</div>

				<main className="flex-1 overflow-y-auto pt-4 px-2 sm:px-2 lg:px-4">
					<div className="max-w-7xl mx-1">
						<div className="mb-8">
							<Skeleton className="h-8 w-48 mb-4" />
							<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
								<Skeleton className="h-40" />
								<Skeleton className="h-40" />
							</div>
						</div>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							<Skeleton className="h-60" />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
