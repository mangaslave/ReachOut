"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	ChevronLeft,
	LayoutDashboard,
	Briefcase,
	Users,
	Inbox,
	FileText,
	Bell,
	Settings,
	User,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	user?: {
		name: string;
		email: string;
		image?: string;
	};
}

interface SidebarItem {
	title: string;
	icon: React.ReactNode;
	href: string;
}

const sidebarItems: SidebarItem[] = [
	{
		title: "Dashboard",
		icon: <LayoutDashboard className="h-5 w-5" />,
		href: "/dashboard",
	},
	{
		title: "Job Listings",
		icon: <Briefcase className="h-5 w-5" />,
		href: "/jobs",
	},
	{
		title: "Client Management",
		icon: <Users className="h-5 w-5" />,
		href: "/clients",
	},
	{
		title: "Inbox",
		icon: <Inbox className="h-5 w-5" />,
		href: "/inbox",
	},
	{
		title: "Resume Builder",
		icon: <FileText className="h-5 w-5" />,
		href: "/resume",
	},
];

const bottomItems: SidebarItem[] = [
	{
		title: "Notifications",
		icon: <Bell className="h-5 w-5" />,
		href: "/notifications",
	},
	{
		title: "Settings",
		icon: <Settings className="h-5 w-5" />,
		href: "/settings",
	},
];

export function Sidebar({ className, user }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();

	const NavItem = ({ item }: { item: SidebarItem }) => (
		<Link href={item.href}>
			<span
				className={cn(
					"flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
					"hover:bg-accent hover:text-accent-foreground",
					pathname === item.href ? "bg-accent" : "transparent",
					collapsed && "justify-center"
				)}
			>
				{item.icon}
				{!collapsed && <span>{item.title}</span>}
			</span>
		</Link>
	);

	return (
		<div
			className={cn(
				"relative flex flex-col h-screen bg-background border-r transition-all duration-300",
				collapsed ? "w-16" : "w-64",
				className
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
					{sidebarItems.map((item) => (
						<li key={item.href}>
							<NavItem item={item} />
						</li>
					))}
				</ul>
			</nav>

			{/* Bottom Section */}
			<div className="border-t">
				<ul className="space-y-2 px-2 py-2">
					{bottomItems.map((item) => (
						<li key={item.href}>
							<NavItem item={item} />
						</li>
					))}
				</ul>

				{/* User Profile Section */}
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
									<AvatarImage src={user?.image} />
									<AvatarFallback>
										{user?.name
											?.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								{!collapsed && (
									<div className="flex flex-col items-start text-sm">
										<span className="font-medium">{user?.name}</span>
										<span className="text-xs text-muted-foreground">
											{user?.email}
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
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
