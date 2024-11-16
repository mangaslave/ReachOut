"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

export function StatusTooltip() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<span
						className={`flex items-center space-x-2 ${textcolor} py-1 px-2 rounded-md text-xs border-solid border ${bordercolor}`}
					>
						<span
							className={`w-2 h-2 ${statusColor} rounded-full border border-black`}
						></span>
						<span>{matchStatus}</span>
						<InfoPopup status={status} />
					</span>
				</TooltipTrigger>
				<TooltipContent>
					<p>{STATUS_MESSAGES[status]}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
