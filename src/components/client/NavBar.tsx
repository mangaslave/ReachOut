"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	return (
		<nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<Link href="/" className="text-xl font-bold">
							Logo
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-4">
						<Link
							href="/"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							About
						</Link>
						<Link
							href="/services"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							Services
						</Link>
						<Link
							href="/contact"
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
						>
							Contact
						</Link>
						<Button variant="default">Sign In</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
