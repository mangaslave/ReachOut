"use client";

import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import Link from "next/link";
import JobSeekersHeroImage from "../../../public/static/images/job-seekers-hero-image.jpg";
import JobSeekersJobListings from "../../../public/static/images/job-seeker-job-listings.png";
import JobSeekersResumeBuilder from "../../../public/static/images/job-seeker-resume-builder.png";
import JobSeekersProgressTracking from "../../../public/static/images/job-seeker-progress-tracking.png";
import Footer from "@/components/client/HomepageFooter";

export default function JobSeekers() {
	return (
		<>
			<HomePageNavBar />
			<div className="flex flex-col md:flex-row w-full h-max bg-ylnMnBlue">
				<div className="px-6 md:ml-20 xl:ml-52 py-8 md:w-1/2 max-w-lg z-20 relative">
					<h1 className="text-white text-lg md:text-3xl font-bold py-4">
						Find Jobs That Value You and Your Skills.
					</h1>
					<p className="md:py-4 text-sm text-white md:text-lg">
						Your skills, experiences, and determination define your
						potential—not your past. That&apos;s why we connect you with
						employers who see your value and are committed to giving you the
						opportunity to succeed. Whether you&apos;re looking to start fresh,
						build a career, or explore new possibilities, we&apos;re here to
						support you at every step.
					</p>
					<button className="font-bold text-darkCarribbeanCurrant rounded-lg my-6 w-44 h-12 pt-3 pb-3 bg-white hover:bg-spaceCadet hover:bg-opacity-40 hover:text-white mb-20">
						Get Started Now!
					</button>
				</div>
				<div className="relative z-10 w-full md:flex-1 h-[300px] md:h-auto">
					<div className="absolute inset-0 bg-gradient-to-r to-40% from-ylnMnBlue to-transparent z-10 overflow-hidden" />
					<Image
						src={JobSeekersHeroImage}
						alt="Hero image"
						width={1000}
						height={1000}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>

			{/*/
        //* Features to Help You Succeed
        */}
			<div className="flex items-center justify-center w-full bg-white">
				<h1 className="text-ylnMnBlue text-2xl md:text-4xl font-bold py-12 text-center">
					Features to Help You Succeed
				</h1>
			</div>

			{/*/
        //* Second-Chance Job Listings
        */}
			{/* Second-Chance Job Listings */}
			<div className="w-full bg-ylnMnBlue bg-opacity-10">
				<div className="flex flex-col items-center justify-between py-12 w-full">
					<div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
						<Image
							src={JobSeekersJobListings}
							height={300}
							width={700}
							alt="second chance job listings"
							className="w-full md:w-1/2 object-contain"
						/>
						<div className="flex flex-col justify-center items-center md:items-start">
							<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
								Second-Chance Job Listings
							</h1>
							<ul className="space-y-4 px-8 list-disc">
								<li>
									<span className="font-semibold">
										Over 100,000 Potential Offers:{" "}
									</span>
									View a list of jobs featuring more than 1,200 companies open
									to hiring you.
								</li>
								<li>
									<span className="font-semibold">Compatibility:</span> View
									which jobs are most suited for you based on your skill set,
									preferences, and criminal background.
								</li>
								<li>
									<span className="font-semibold">Automated Applications:</span>{" "}
									Simply choose which job you want to apply for and we&apos;ll
									do all the tedious work for you.
								</li>
							</ul>
							<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-ylnMnBlue hover:bg-spaceCadet">
								View Jobs
							</button>
						</div>
					</div>
				</div>
			</div>

			{/*/
        //* Progress Tracking
        */}

			<div className="flex flex-col items-center justify-between py-12 w-full bg-white bg-opacity-30">
				<div className="flex flex-col md:flex-row-reverse px-6 gap-8 max-w-7xl mx-auto">
					<Image
						src={JobSeekersProgressTracking}
						height={200}
						width={700}
						alt="progress tracking"
						className="w-full md:w-1/2 object-contain"
					/>
					<div className="flex flex-col justify-center items-center md:items-start">
						<h1 className="text-2xl md:text-4xl text-darkCarribbeanCurrant font-bold text-center md:text-left mb-6">
							Progress Tracking
						</h1>
						<ul className="space-y-4 px-8 list-disc">
							<li>
								<span className="font-semibold">Real-Time Updates: </span>{" "}
								Receive updates as employers review your application.
							</li>
							<li>
								<span className="font-semibold">Centralized View: </span> See a
								list of all your active and inactive applications in one page.
							</li>
							<li>
								<span className="font-semibold">Employer Feedback: </span> Get
								helpful insights from employers on the strengths of your
								application and suggestions for improvement to boost your
								chances of success.
							</li>
						</ul>
						<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-ylnMnBlue hover:bg-spaceCadet">
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
						src={JobSeekersResumeBuilder}
						height={300}
						width={650}
						alt="resume builder"
						className="w-full md:w-1/2 object-contain"
					/>
					<div className="flex flex-col justify-center items-center md:items-start">
						<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
							Resume Builder
						</h1>
						<ul className="space-y-4 px-8 list-disc">
							<li>
								<span className="font-semibold">AI-Automation:</span> Answer a
								few questions about yourself and our AI model will generate an
								industry-ready resume in minutes.
							</li>
							<li>
								<span className="font-semibold">AI Recommendations:</span>{" "}
								Already have a resume? Upload it and our AI will provide
								suggestions for improvement to boost its effectiveness.
							</li>
						</ul>
						<button className="font-bold text-white rounded-lg mt-6 w-44 h-12 bg-ylnMnBlue hover:bg-spaceCadet">
							Try Now
						</button>
					</div>
				</div>
			</div>

			{/*/
        //* Frequently Asked Questions 
        bg-ylnMnBlue
        */}
			<div className="flex flex-col items-center w-full bg-ylnMnBlue px-6 py-8">
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
							Does it cost anything to use ReachOut?
						</h4>
						<p className="text-spaceCadet">
							No, ReachOut is completely free to all users. Our full library of
							resources, tools, and support features can be accessed at no cost.
						</p>
					</div>
					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							What resources are available to help me prepare for jobs?
						</h4>
						<p className="text-spaceCadet">
							We offer resume and cover letter templates, interview tips, and
							guides on building workplace skills. You can also access training
							programs and certifications to enhance your employability.
						</p>
					</div>
					<div className="space-y-4">
						<h4 className="font-bold text-lg text-spaceCadet">
							What should I do if I need help using ReachOut?
						</h4>
						<p className="text-spaceCadet">
							Our support team is here to help! You can contact us through the
							help center or email us directly with any questions or concerns.
						</p>
					</div>
				</div>
			</div>
			<Footer backgroundColor="bg-ylnMnBlue" />
		</>
	);
}
