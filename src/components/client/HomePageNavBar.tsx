"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/static/images/logo-new.svg";
import {
	RegisterLink,
	LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-white w-full">
			<div className="mx-auto w-full">
				<div className="flex justify-between items-center h-16 px-6 lg:px-12">
					<div className="flex items-center">
						<Link href="/">
							<Image
								src={logo}
								alt="Reach Out Logo"
								width={60}
								height={60}
								className="mr-2"
							/>
						</Link>
						<h1 className="text-2xl font-bold text-black">ReachOut</h1>
					</div>
					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/case-managers"
							className="text-black font-bold hover:text-caribbeanCurrant"
						>
							Case Managers
						</Link>
						<Link
							href="/job-seekers"
							className="text-black font-bold hover:text-caribbeanCurrant"
						>
							Job Seekers
						</Link>
						<Link
							href="/employers"
							className="text-black font-bold hover:text-caribbeanCurrant"
						>
							Employers
						</Link>
						<Link
							href="/contact"
							className="text-black font-bold hover:text-caribbeanCurrant"
						>
							Contact
						</Link>
						<button className="font-bold rounded-lg px-4 py-2 bg-spaceCadet text-white hover:bg-ylnMnBlue">
							<LoginLink>Sign In</LoginLink>
						</button>
						<button className="font-bold text-spaceCadet hover:text-caribbeanCurrant">
							<RegisterLink>Register</RegisterLink>
						</button>
					</nav>
					{/* 
          // * Mobile Navigation!
          */}
					<div className="md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<button className="p-2">
									<Menu className="h-6 w-6" />
								</button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<SheetTitle>Navigation Menu</SheetTitle>
								<nav className="flex flex-col gap-4 mt-8">
									<Link
										href="/case-managers"
										onClick={() => setIsOpen(false)}
										className="text-black font-bold hover:text-caribbeanCurrant px-4 py-2"
									>
										Case Managers
									</Link>
									<Link
										href="/job-seekers"
										onClick={() => setIsOpen(false)}
										className="text-black font-bold hover:text-caribbeanCurrant px-4 py-2"
									>
										Job Seekers
									</Link>
									<Link
										href="/employers"
										onClick={() => setIsOpen(false)}
										className="text-black font-bold hover:text-caribbeanCurrant px-4 py-2"
									>
										Employers
									</Link>
									<Link
										href="/contact"
										onClick={() => setIsOpen(false)}
										className="text-black font-bold hover:text-caribbeanCurrant px-4 py-2"
									>
										Contact
									</Link>
									<div className="flex flex-col gap-4 mt-4 px-4">
										<button className="font-bold rounded-lg py-2 bg-spaceCadet text-white hover:bg-ylnMnBlue">
											<LoginLink>Sign In</LoginLink>
										</button>
										<button className="font-bold text-spaceCadet hover:text-caribbeanCurrant">
											<RegisterLink>Register</RegisterLink>
										</button>
									</div>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
