"use client";

import Link from "next/link";
import Image from "next/image";
import fbIcon from "../../../public/static/images/fbIcon.svg";
import igIcon from "../../../public/static/images/igIcon.svg";

interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
	return (
		<li className="text-white text-sm my-2 hover:text-ylnMnBlue transition-colors">
			<Link href={href}>{children}</Link>
		</li>
	);
}

const footerData = {
	caseManagers: {
		title: "Case Managers",
		links: [
			{ text: "Manage Clients", href: "/case-managers/clients" },
			{ text: "Resource Directory", href: "/case-managers/resources" },
			{ text: "Training Portal", href: "/case-managers/training" },
		],
	},
	jobSeekers: {
		title: "Job Seekers",
		links: [
			{ text: "Search Jobs", href: "/jobs/search" },
			{ text: "Career Support", href: "/jobs/support" },
			{ text: "Success Stories", href: "/jobs/success-stories" },
		],
	},
	employers: {
		title: "Employers",
		links: [
			{ text: "Post Positions", href: "/employers/post" },
			{ text: "Partner Programs", href: "/employers/partners" },
			{ text: "Hiring Guide", href: "/employers/guide" },
		],
	},
	aboutUs: {
		title: "About Us",
		links: [
			{ text: "Our Mission", href: "/about/mission" },
			{ text: "Contact Us", href: "/about/contact" },
			{ text: "Impact Report", href: "/about/impact" },
		],
	},
};

interface FooterProps {
	backgroundColor?: string;
}
export default function Footer({
	backgroundColor = "bg-caribbeanCurrant",
}: FooterProps) {
	return (
		<footer className={`mt-auto ${backgroundColor} px-4 md:px-6 py-2 w-screen`}>
			<ul className="flex flex-col md:flex-row items-center md:items-start justify-between my-8 w-full max-w-7xl flex-wrap gap-8 mx-auto">
				{Object.entries(footerData).map(([key, section]) => (
					<li key={key} className="flex flex-col items-center md:items-start">
						<h1 className="text-xl font-bold my-2 text-white text-center md:text-left">
							{section.title}
						</h1>
						<ul className="space-y-2 text-center md:text-left">
							{section.links.map((link) => (
								<FooterLink key={link.href} href={link.href}>
									{link.text}
								</FooterLink>
							))}
						</ul>
					</li>
				))}
				<li className="flex flex-col items-center md:items-start">
					<div className="flex my-5 justify-center md:justify-start">
						<Image
							src={fbIcon}
							height={25}
							width={25}
							alt="facebook icon"
							className="mx-2"
						/>
						<Image
							src={igIcon}
							height={25}
							width={25}
							alt="instagram icon"
							className="mx-2"
						/>
					</div>
					<ul className="space-y-2 text-center md:text-left">
						<FooterLink href="/privacy">Privacy Policy</FooterLink>
						<FooterLink href="/terms">Terms of Service</FooterLink>
					</ul>
				</li>
			</ul>
		</footer>
	);
}
