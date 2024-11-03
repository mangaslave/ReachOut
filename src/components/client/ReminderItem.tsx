import { FC } from "react";
import Image from "next/image";

interface ReminderItemProps {
	title: string;
	date: string;
	time: string;
	statusColor: string;
}

const ReminderItem: FC<ReminderItemProps> = ({
	title,
	date,
	time,
	statusColor,
}) => {
	return (
		<div className="flex items-center justify-between p-3 rounded-lg border border-black mb-2 text-black">
			<div className="flex items-center">
				<span className={`w-2 h-2 rounded-full ${statusColor} mr-2`}></span>
				<p className="text-sm font-bold">{title}</p>
			</div>

			<div className="flex items-center space-x-2 text-black">
				<Image
					src="/static/images/clock-icon.svg"
					alt="clock"
					width={16}
					height={16}
				/>
				<p className="text-xs">{date}</p>
				<p className="text-xs">{time}</p>
			</div>
		</div>
	);
};

export default ReminderItem;
