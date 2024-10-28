"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavBarProps {
	headerMsg: string;
	subHeadingMsg: string;
}

const Navbar = ({ headerMsg, subHeadingMsg }: NavBarProps) => {
	return (
		<nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					<div className="flex flex-col w-full md:w-2/3 lg:w-1/2">
						<h1 className="text-3xl font-semibold text-gray-900">
							{headerMsg}
						</h1>
						<p className="text-base text-gray-600">{subHeadingMsg}</p>
					</div>
					<div className="relative max-w-md w-full">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-5 w-5 text-gray-400" />
						</div>
						<Input
							type="search"
							placeholder="Search..."
							className="pl-10 w-full"
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
