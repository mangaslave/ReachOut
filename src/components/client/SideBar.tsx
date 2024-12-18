"use client";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ChevronLeft, Settings, User} from "lucide-react";
import Image from "next/image";
import {Dispatch, SetStateAction} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs";
import {LogOut} from "lucide-react";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const NavItem = ({
  title,
  iconSrc,
  href,
  collapsed,
}: {
  title: string;
  iconSrc: string;
  href: string;
  collapsed?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <span
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
          "hover:bg-accent hover:text-accent-foreground group",
          pathname === href ? "bg-accent text-accent-foreground" : "transparent",
          collapsed && "justify-center"
        )}
      >
        <div className="relative w-5 h-5">
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            fill
            className={cn(
              "object-contain transition-all",
              "brightness-0 invert",
              "group-hover:brightness-0 group-hover:invert-0",
              pathname === href ? "brightness-0 invert-0" : ""
            )}
          />
        </div>
        {!collapsed && <span className="ml-3">{title}</span>}
      </span>
    </Link>
  );
};

export function Sidebar({className, user, setCollapsed, collapsed}: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed flex flex-col h-screen bg-caribbeanCurrant border-r transition-all duration-300 text-white",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center gap-3 p-4 border-b">
        <Image
          src="/static/images/organization-logo.jpeg"
          alt="Company Logo"
          width={35}
          height={35}
          className="rounded-full"
        />
        {!collapsed && (
          <div>
            <p className="text-m font-semibold text-white">John Howard Society</p>
            <p className="text-xs text-white pb-2">Non-Profit Worker</p>
          </div>
        )}
      </div>

      <div className="p-4 flex justify-end">
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </Button>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          <li>
            <NavItem
              title="Dashboard"
              iconSrc="/static/images/Dashboard_icon.svg"
              href="/organization/dashboard"
              collapsed={collapsed}
            />
          </li>
          <li>
            <NavItem
              title="Job Listings"
              iconSrc="/static/images/JobListings_icon.svg"
              href="/organization/job-listing"
              collapsed={collapsed}
            />
          </li>
          <li>
            <NavItem
              title="Client Management"
              iconSrc="/static/images/UseManagement_icon.svg"
              href="/organization/clients"
              collapsed={collapsed}
            />
          </li>
          <li>
            <NavItem
              title="Inbox"
              iconSrc="/static/images/Inbox_icon.svg"
              href="/organization/inbox"
              collapsed={collapsed}
            />
          </li>
          <li>
            <NavItem
              title="Resume Builder"
              iconSrc="/static/images/Resume_icon.svg"
              href="/organization/resume"
              collapsed={collapsed}
            />
          </li>
        </ul>
      </nav>

      <div className="border-t">
        <ul className="space-y-2 px-2 py-2">
          <li>
            <NavItem
              title="Notifications"
              iconSrc="/static/images/Bell_Notification_icon.svg"
              href="/organization/notifications"
              collapsed={collapsed}
            />
          </li>
          <li>
            <NavItem
              title="Settings"
              iconSrc="/static/images/Settings_icon.svg"
              href="/organization/settings"
              collapsed={collapsed}
            />
          </li>
        </ul>

        <div className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn("w-full flex items-center gap-2 px-2", collapsed ? "justify-center" : "justify-start")}
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
                    <span className="text-xs text-slate-400">{user?.email}</span>
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
