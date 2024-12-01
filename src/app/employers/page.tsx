"use client";

import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import Link from "next/link";
import EmployersHeroImage from "../../../public/static/images/employers-hero-image.jpg";
import EmployersListings from "../../../public/static/images/employers-listings.png";
import EmployersResources from "../../../public/static/images/employers-resources.png";
import Footer from "@/components/client/HomepageFooter";

export default function Employers() {
	return (
		<>
			<HomePageNavBar />
			<div className="flex flex-col md:flex-row w-full h-max bg-spaceCadet">
				<div className="px-6 md:ml-20 xl:ml-52 py-8 md:w-1/2 max-w-lg z-20 relative">
					<h1 className="text-white text-lg md:text-3xl font-bold py-4">
						Build Your Workforce and Transform Lives.
					</h1>
					<p className="md:py-4 text-sm text-white md:text-lg">
						Discover how second-chance hiring can benefit your business. From
						accessing tax credits to improving retention rates, ReachOut makes
						it easy to connect with motivated candidates who are ready to make
						an impact.
					</p>
					<button className="font-bold text-darkCarribbeanCurrant rounded-lg my-6 w-44 h-12 pt-3 pb-3 bg-white hover:bg-ylnMnBlue hover:bg-opacity-40 hover:text-white mb-20">
						Get Started Now!
					</button>
				</div>
				<div className="relative z-10 w-full md:flex-1 h-[300px] md:h-auto">
					<div className="absolute inset-0 bg-gradient-to-r to-40% from-spaceCadet to-transparent z-10 overflow-hidden" />
					<Image
						src={EmployersHeroImage}
						alt="Hero image"
						width={1000}
						height={1000}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			{/*/
        //* Features Designed for Easy Hiring
        */}
			<div className="flex items-center justify-center w-full bg-white">
				<h1 className="text-spaceCadet text-2xl md:text-4xl font-bold py-12 text-center">
					Features Designed for Easy Hiring
				</h1>
			</div>

			{/*/
        //* Job Posting & Matches
        */}
			<div className="w-full bg-spaceCadet bg-opacity-10">
				<div className="flex flex-col items-center justify-between py-12 w-full">
					<div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
						<Image
							src={EmployersListings}
							height={300}
							width={700}
							alt="job posting & matches"
							className="w-full md:w-1/2 object-contain"
						/>
						<div className="flex flex-col justify-center items-center md:items-start">
							<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
								Job Posting & Matches
							</h1>
							<ul className="space-y-4 px-8 list-disc">
								<li>
									<span className="font-semibold">
										Candidate Recommendations:{" "}
									</span>
									View a list of potential hires who meet your specific
									requirements.
								</li>
								<li>
									<span className="font-semibold">Centralized View: </span>
									Manage all your current and past job listings with ease on one
									page.
								</li>
							</ul>
							<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-spaceCadet hover:bg-ylnMnBlue">
								Post Your Jobs
							</button>
						</div>
					</div>
				</div>
			</div>
			{/*/
        //* Applicant Tracking
        */}

			<div className="flex flex-col items-center justify-between py-12 w-full bg-white bg-opacity-30">
				<div className="flex flex-col md:flex-row-reverse px-6 gap-8 max-w-7xl mx-auto">
					<Image
						src={EmployersListings}
						height={500}
						width={700}
						alt="applicant tracking"
						className="w-full md:w-1/2 object-contain"
					/>
					<div className="flex flex-col justify-center items-center md:items-start">
						<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
							Applicant Tracking
						</h1>
						<ul className="space-y-4 px-8 list-disc">
							<li>
								<span className="font-semibold">
									Streamlined Organization:{" "}
								</span>
								Keep track of all the candidates that have applied to your
								posting and drag and drop them into the appropriate categories.
							</li>
							<li>
								<span className="font-semibold">Applicant Profiles: </span>
								View all candidate details at a glance, including resumes,
								skills, and work history, directly on their application cards.
							</li>
						</ul>
						<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-spaceCadet hover:bg-ylnMnBlue">
							View Demo
						</button>
					</div>
				</div>
			</div>
			{/*/
        //* Resource Database
        */}

			<div className="flex flex-col items-center justify-between py-12 w-full">
				<div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
					<Image
						src={EmployersResources}
						height={300}
						width={650}
						alt="resource database"
						className="w-full md:w-1/2 object-contain"
					/>
					<div className="flex flex-col justify-center items-center md:items-start">
						<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
							Resource Database
						</h1>
						<ul className="space-y-4 px-8 list-disc">
							<li>
								<span className="font-semibold">
									Second-Chance Hiring Guides:{" "}
								</span>
								Access comprehensive guides on implementing second-chance hiring
								practices.
							</li>
							<li>
								<span className="font-semibold">
									Legal Compliance Support:{" "}
								</span>
								Stay informed about local and federal hiring laws.
							</li>
							<li>
								<span className="font-semibold">
									Tax Incentive Information:{" "}
								</span>
								Learn how to access wage subsidies, the Federal Bonding Program,
								and provincial hiring incentives for marginalized groups.
							</li>
						</ul>
						<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-spaceCadet hover:bg-ylnMnBlue">
							Learn More
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center w-full bg-spaceCadet px-6 py-8">
				<h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
					Frequently Asked Questions
				</h1>
				<p className="text-white text-center">
					Can&apos;t find what you&apos;re looking for? Contact us{" "}
					<Link href="/" className="underline hover:text-ylnMnBlue">
						here
					</Link>
					.
				</p>
			</div>
			<div className="w-full px-6 py-12 bg-white">
				<div className="max-w-3xl mx-auto space-y-8">
					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							Why should I consider second-chance hiring?
						</h4>
						<p className="text-spaceCadet">
							Second-chance hiring allows you to access a motivated talent pool,
							reduce turnover rates, and contribute to your community&apos;s
							growth. Studies show that second-chance employees often outperform
							their peers in terms of loyalty and productivity.
						</p>
					</div>
					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							Will I be notified about updates on applications?
						</h4>
						<p className="text-spaceCadet">
							Yes, you will receive notifications when candidates apply, respond
							to interview requests, or update their profiles.
						</p>
					</div>
					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							Is my company&apos;s information secure on ReachOut?
						</h4>
						<p className="text-spaceCadet">
							Absolutely. We use advanced security measures to ensure your data
							and candidate information remain private and protected.
						</p>
					</div>
				</div>
			</div>
			<Footer backgroundColor="bg-spaceCadet" />
		</>
	);
}
