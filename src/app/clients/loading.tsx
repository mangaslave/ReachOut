import { Skeleton } from "@/components/ui/skeleton";

export default function ClientsPageSkeleton() {
	return (
		<div className="flex h-screen bg-gray-100">
			<div className="w-64 bg-white">
				<div className="h-20 flex items-center px-6">
					<Skeleton className="h-10 w-32" />
				</div>
				<div className="px-6 py-4 space-y-4">
					{Array.from({ length: 5 }).map((_, i) => (
						<Skeleton key={i} className="h-8" />
					))}
				</div>
			</div>

			<div className="flex-1 flex flex-col">
				<main className="flex-1 pt-20 px-4">
					<div className="max-w-7xl mx-1">
						<div className="flex justify-between items-center mb-4">
							<div className="flex gap-2">
								{Array.from({ length: 3 }).map((_, i) => (
									<Skeleton key={i} className="h-10 w-24" />
								))}
							</div>
						</div>

						<div className="grid gap-4">
							{Array.from({ length: 6 }).map((_, i) => (
								<Skeleton key={i} className="h-24" />
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
