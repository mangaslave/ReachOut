"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Settings, User, LogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();

	return (
		<div
			className={cn(
				"relative flex flex-col h-screen bg-caribbeanCurrant border-r transition-all duration-300 text-white",
				collapsed ? "w-16" : "w-64"
			)}
		>
			<div className="p-4 flex justify-end">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setCollapsed(!collapsed)}
				>
					<ChevronLeft
						className={cn(
							"h-4 w-4 transition-transform",
							collapsed && "rotate-180"
						)}
					/>
				</Button>
			</div>

			<nav className="flex-1">
				<ul className="space-y-2 px-2">
					<li>
						<Link href="/dashboard">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/dashboard"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/Dashboard_icon.svg"
										alt="Dashboard icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/dashboard" ? "brightness-0 invert-0" : ""
										)}
									/>
								</div>
								{!collapsed && <span>Dashboard</span>}
							</span>
						</Link>
					</li>

					<li>
						<Link href="/job-listing">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/job-listing"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/JobListings_icon.svg"
										alt="Job Listings icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/job-listing" ? "brightness-0 invert-0" : ""
										)}
									/>
								</div>
								{!collapsed && <span>Job Listings</span>}
							</span>
						</Link>
					</li>

					<li>
						<Link href="/clients">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/clients"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/UseManagement_icon.svg"
										alt="Client Management icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/clients" ? "brightness-0 invert-0" : ""
										)}
									/>
								</div>
								{!collapsed && <span>Client Management</span>}
							</span>
						</Link>
					</li>

					<li>
						<Link href="/inbox">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/inbox"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/Inbox_icon.svg"
										alt="Inbox icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/inbox" ? "brightness-0 invert-0" : ""
										)}
									/>
								</div>
								{!collapsed && <span>Inbox</span>}
							</span>
						</Link>
					</li>

					<li>
						<Link href="/resume">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/resume"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/Resume_icon.svg"
										alt="Resume Builder icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/resume" ? "brightness-0 invert-0" : ""
										)}
									/>
								</div>
								{!collapsed && <span>Resume Builder</span>}
							</span>
						</Link>
					</li>
				</ul>
			</nav>

			<div className="border-t">
				<ul className="space-y-2 px-2 py-2">
					<li>
						<Link href="/notifications">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/notifications"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/Bell_Notification_icon.svg"
										alt="Notifications icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/notifications"
												? "brightness-0 invert-0"
												: ""
										)}
									/>
								</div>
								{!collapsed && <span>Notifications</span>}
							</span>
						</Link>
					</li>

					<li>
						<Link href="/settings">
							<span
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
									"hover:bg-accent hover:text-accent-foreground group",
									pathname === "/settings"
										? "bg-accent text-accent-foreground"
										: "transparent",
									collapsed && "justify-center"
								)}
							>
								<div className="relative w-5 h-5">
									<Image
										src="/static/images/Settings_icon.svg"
										alt="Settings icon"
										fill
										className={cn(
											"object-contain transition-all",
											"brightness-0 invert",
											"group-hover:brightness-0 group-hover:invert-0",
											pathname === "/settings" ? "brightness-0 invert-0" : ""
										)}
									/>
								</div>
								{!collapsed && <span>Settings</span>}
							</span>
						</Link>
					</li>
				</ul>

				<div className="p-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className={cn(
									"w-full flex items-center gap-2 px-2",
									collapsed ? "justify-center" : "justify-start"
								)}
							>
								<Avatar className="h-8 w-8">
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
								{!collapsed && (
									<div className="flex flex-col items-start text-sm">
										<span className="font-medium">John Doe</span>
										<span className="text-xs text-muted-foreground">
											john@example.com
										</span>
									</div>
								)}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-[200px]">
							<DropdownMenuItem>
								<User className="mr-2 h-4 w-4" />
								View Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings className="mr-2 h-4 w-4" />
								Settings
							</DropdownMenuItem>
							<LogoutLink className="w-full">
								<DropdownMenuItem>
									<LogOut className="mr-2 h-4 w-4" />
									Log out
								</DropdownMenuItem>
							</LogoutLink>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
