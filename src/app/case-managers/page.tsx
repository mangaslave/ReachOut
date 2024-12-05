"use client";

import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import Link from "next/link";
import CaseManagerHeroImage from "../../../public/static/images/case-manager-hero-image.jpg";
import JobListings from "../../../public/static/images/case-manager-job-listings.png";
import ClientManagement from "../../../public/static/images/case-manager-client-management.png";
import ResumeBuilder from "../../../public/static/images/case-manager-resume-builder.png";
import Footer from "@/components/client/HomepageFooter";

export default function CaseManagers() {
	return (
		<>
			<HomePageNavBar />
			<div className="flex flex-col md:flex-row w-full h-max bg-caribbeanCurrant">
				<div className="px-6 md:ml-20 xl:ml-52 py-8 md:w-1/2 max-w-lg z-20 relative">
					<h1 className="text-white text-lg md:text-3xl font-bold py-4">
						Simplifying Your Efforts to Build Brighter Futures.
					</h1>
					<p className="md:py-4 text-sm text-white md:text-lg">
						ReachOut believes nonprofit organizations are the first step to
						helping previously incarcerated individuals begin their new lives.
						That&apos;s why we&apos;ve built a platform that allows you to
						empower these individuals by providing them with all the tools and
						resources you&apos;ll need.
					</p>
					<button className="font-bold text-darkCarribbeanCurrant rounded-lg my-6 w-44 h-12 pt-3 pb-3 bg-white hover:bg-ylnMnBlue hover:bg-opacity-40 hover:text-white mb-20">
						Get Started Now!
					</button>
				</div>
				<div className="relative z-10 w-full md:flex-1 h-[300px] md:h-auto">
					<div className="absolute inset-0 bg-gradient-to-r to-40% from-caribbeanCurrant to-transparent z-10 overflow-hidden" />
					<Image
						src={CaseManagerHeroImage}
						alt="Hero image"
						width={1000}
						height={1000}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			{/*/
        //* Features Tailored For You
        */}
			<div className="flex items-center justify-center w-full bg-white">
				<h1 className="text-darkCarribbeanCurrant text-2xl md:text-4xl font-bold py-12 text-center">
					Features Tailored For You
				</h1>
			</div>

			{/*/
        //* Second-Chance Job Listings
        */}
			<div className="w-full bg-ylnMnBlue bg-opacity-10">
				<div className="flex flex-col items-center justify-between py-12 w-full">
					<div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
						<Image
							src={JobListings}
							height={300}
							width={700}
							alt="ai powered research"
							className="w-full md:w-1/2 object-contain"
						></Image>
						<div className="flex flex-col justify-center items-center md:items-start">
							<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
								Second-Chance Job Listings
							</h1>
							<ul className="space-y-4 px-8 list-disc">
								<li>
									<span className="font-semibold">
										Over 100,000 Potential Offers:{" "}
									</span>{" "}
									View a list of jobs featuring more than 1,200 companies open
									to hiring people with criminal records.
								</li>
								<li>
									<span className="font-semibold">Compatibility:</span> View
									which jobs are most suited for your client based on their
									skill set, preferences, and criminal background.
								</li>
								<li>
									<span className="font-semibold">Automated Applications:</span>{" "}
									Simply choose which client you&apos;re applying for and
									we&apos;ll do all the hefty work.
								</li>
							</ul>
							<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant">
								View Jobs
							</button>
						</div>
					</div>
				</div>
			</div>

			{/*/
        //* Centralized Client Management 
        */}

			<div className="flex flex-col items-center justify-between py-12 w-full bg-white bg-opacity-30">
				<div className="flex flex-col md:flex-row-reverse px-6 gap-8 max-w-7xl mx-auto">
					<Image
						src={ClientManagement}
						height={500}
						width={700}
						alt="client management"
						className="w-full md:w-1/2 object-contain"
					></Image>
					<div className="flex flex-col justify-center items-center md:items-start">
						<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
							Centralized Client Management
						</h1>
						<ul className="space-y-4 px-8 list-disc">
							<li>
								<span className="font-semibold">Client Dashboard: </span> Add
								and keep track of all your clients and their details in one
								page.
							</li>
							<li>
								<span className="font-semibold">Progress Tracking: </span>{" "}
								Review and receive real-time updates on the progress of your
								client&apos;s applications.
							</li>
						</ul>
						<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant">
							View Demo
						</button>
					</div>
				</div>
			</div>

			{/*/
        //* Resume Builder
        */}

			<div className="flex flex-col items-center justify-between py-12 w-full">
				<div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
					<Image
						src={ResumeBuilder}
						height={300}
						width={650}
						alt="resource database"
						className="w-full md:w-1/2 object-contain"
					></Image>
					<div className="flex flex-col justify-center items-center md:items-start">
						<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
							Resume Builder
						</h1>
						<ul className="space-y-4 px-8 list-disc">
							<li>
								<span className="font-semibold">AI-Automation:</span> Answer a
								few questions about your client and our AI model will generate a
								industry-ready resume in minutes.
							</li>
							<li>
								<span className="font-semibold">AI Recommendations:</span>{" "}
								Already have a resume? Upload it and our AI will provide
								suggestions for improvement to boost its effectiveness.
							</li>
						</ul>
						<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant">
							Try Now
						</button>
					</div>
				</div>
			</div>

			{/*/
        //* Frequently Asked Questions 
        */}
			<div className="flex flex-col items-center w-full bg-caribbeanCurrant px-6 py-8">
				<h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
					Frequently Asked Questions
				</h1>
				<p className="text-white text-center">
					Can&apos;t find what you&apos;re looking for? Contact us{" "}
					<Link href="/" className="underline hover:text-darkCarribbeanCurrant">
						here
					</Link>
					.
				</p>
			</div>
			<div className="w-full px-6 py-12 bg-white">
				<div className="max-w-3xl mx-auto space-y-8">
					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							Can ReachOut help clients with little to no work experience?
						</h4>
						<p className="text-spaceCadet">
							Yes! ReachOut is designed to help individuals with any amount of
							experience. We provide a database of educational materials and
							skill-building workshops to prepare your clients for the
							workforce. ReachOut&apos;s job dashboard also allows you to curate
							a list of specifically entry-level jobs.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							Can clients apply directly to jobs, or do I need to apply on their
							behalf?
						</h4>
						<p className="text-spaceCadet">
							Yes! Clients are able to make their own accounts at ReachOut where
							they can apply to job listings themselves. If you&apos;d like, you
							can link your accounts so that you can review their applications
							and provide feedback.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							Does ReachOut support clients with specific needs, such as
							disabilities or substance recovery?
						</h4>
						<p className="text-spaceCadet">
							Yes! ReachOut is passionate about inclusivity and ensuring that
							our services accommodate people with all sorts of needs. We
							believe in transparency and encourage employers to indicate
							whether their workspace is suitable for people of various needs,
							including wheelchair accessibility, remote options, and onboarding
							support.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
