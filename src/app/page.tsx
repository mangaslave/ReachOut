"use server";
import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import HomePageCarousel from "@/components/client/HomePageCarousel";
import peopleIcon from "../../public/static/images/people-1.svg";
import recruitmentIcon from "../../public/static/images/recruitment-1.svg";
import interviewIcon from "../../public/static/images/interview-1.svg";
import heroImage from "../../public/static/images/Hero-Image.jpg";
import Footer from "@/components/client/HomepageFooter";
import JobSearch from "../../public/static/images/landing-search.png"; 
import Tracking from "../../public/static/images/landing-tracking.png"; 
import Resources from "../../public/static/images/employer-resources.png"; 


export default async function Home() {
	return (
		<>
			<HomePageNavBar />
			<div className="flex flex-col md:flex-row w-full h-max bg-caribbeanCurrant">
				<div className="px-6 md:ml-20 xl:ml-52 py-8 md:w-1/2 max-w-lg z-20 relative">
					<h1 className="text-white text-2xl md:text-3xl font-bold py-4">
						Connecting You to Jobs and the Support You Deserve.
					</h1>
					<p className="md:py-4 text-sm text-white md:text-lg">
						At ReachOut, we introduce people with criminal records to
						fair-chance employers who believe in their potential. With
						personalized job matches and an extensive resource database,
						we&apos;re here to help people build a new future, one connection at
						a time.
					</p>
					<button className="font-bold text-spaceCadet rounded-lg my-6 w-44 h-12 bg-white hover:bg-ylnMnBlue hover:text-white">
						Get Started Now!
					</button>
				</div>
				<div className="relative z-10 w-full md:flex-1 h-[300px] md:h-auto">
					<div className="absolute inset-0 bg-gradient-to-r to-40% from-caribbeanCurrant to-transparent z-10 overflow-hidden" />
					<Image
						src={heroImage}
						alt="Hero image"
						width={1000}
						height={1000}
						className="object-cover w-full h-full"
						priority
					/>
				</div>
			</div>
			<div className="flex items-center justify-evenly py-6 flex-col w-full px-6 md:px-0 min-h-[12rem] bg-caribbeanCurrant bg-opacity-90">
				<h1 className="text-2xl md:text-4xl text-white font-bold py-2 text-center">
					Who We Are
				</h1>
				<p className="text-sm md:text-lg md:max-w-5xl xl:max-w-7xl text-white text-center">
					Our mission is to empower individuals with second chances. We strive
					to break barriers, foster trust, and create pathways to brighter
					futures through job placement, resources, and advocacy.
				</p>
			</div>
			<div className="flex items-center justify-evenly py-6 flex-col w-full min-h-[24rem] bg-caribbeanCurrant bg-opacity-10">
				<h1 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center">
					Our Impact
				</h1>
				<ul className="flex flex-col md:flex-row justify-evenly items-center w-full px-6">
					<li className="w-full md:w-auto flex flex-col items-center justify-center my-6 md:mx-24">
						<Image
							src={peopleIcon}
							height={141}
							width={141}
							alt="people icon"
							className="w-24 md:w-36"
						></Image>
						<p className="text-sm md:text-lg my-6 text-spaceCadet text-center">
							Over <span className="font-semibold">2,000</span> job seekers
							placed in meaningful employment.
						</p>
					</li>
					<li className="w-full md:w-auto flex flex-col items-center justify-center my-6 md:mx-24">
						<Image
							src={interviewIcon}
							height={138}
							width={138}
							alt="interview icon"
							className="w-24 md:w-36"
						></Image>
						<p className="text-sm md:text-lg my-6 text-spaceCadet text-center">
							<span className="font-semibold">60%</span> of clients secured
							interviews within the first 3 months.
						</p>
					</li>
					<li className="w-full md:w-auto flex flex-col items-center justify-center my-6 md:mx-24">
						<Image
							src={recruitmentIcon}
							height={172}
							width={172}
							alt="recruitment icon"
							className="w-24 md:w-36"
						></Image>
						<p className="text-sm md:text-lg my-6 text-spaceCadet text-center">
							<span className="font-semibold">500+</span> nonprofit
							organizations and fair-chance employers actively engaged.
						</p>
					</li>
				</ul>
				{/* 
        // * Key Features Section!
        */}
				<div className="w-full bg-caribbeanCurrant">
					<h1 className="text-white text-2xl md:text-4xl font-bold py-12 text-center">
						Our Key Features
					</h1>
				</div>
				<div className="w-full bg-caribbeanCurrant bg-opacity-10">
					{/*/
        // * Feature:
        // * RESOURCE DATABASE
        */}
					<div className="flex flex-col items-center justify-between py-12 w-full">
						<div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
							<Image
								src={JobSearch}
								height={500}
								width={500}
								alt="ai powered research"
								className="w-full md:w-1/2 object-contain"
							/>
							<div className="flex flex-col justify-center items-center md:items-start">
								<h2 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
									AI-Powered Job Search
								</h2>
								<ul className="space-y-4 px-8 list-disc">
									<li>
										<span className="font-semibold">
											Real Jobs, Real Chances:{" "}
										</span>
										Our AI instantly connects you with 1000+ jobs from our
										trusted employers who specifically welcome and hire people
										returning from incarceration.
									</li>
									<li>
										<span className="font-semibold">Compatibility: </span>
										View which jobs are most suitable based on skill set,
										preferences, and criminal background.
									</li>
									<li>
										<span className="font-semibold">
											Skill Development Insights:{" "}
										</span>
										View and access a list of gaps in potential skills needed
										for available jobs.
									</li>
								</ul>
								<button className="font-bold text-white rounded-lg mt-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
									View Jobs
								</button>
							</div>
						</div>
					</div>

					{/*/
        // * Feature:
        // * Progress Tracking
        */}
					<div className="flex flex-col items-center justify-between py-12 w-full bg-white bg-opacity-30">
						<div className="flex flex-col md:flex-row-reverse px-6 gap-8 max-w-7xl mx-auto">
							<Image
								src={Tracking}
								height={500}
								width={500}
								alt="research progress tracking"
								className="w-full md:w-1/2 object-contain"
							/>
							<div className="flex flex-col justify-center items-center md:items-start">
								<h2 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
									Progress Tracking
								</h2>
								<ul className="space-y-4 px-8 list-disc">
									<li>
										<span className="font-semibold">
											Track Application Progress:{" "}
										</span>
										Monitor your job applications and track your success rates.
									</li>
									<li>
										<span className="font-semibold">Progress Analytics: </span>
										View detailed metrics about your application journey,
										interview success rates, and available jobs.
									</li>
									<li>
										<span className="font-semibold">Milestone Tracking: </span>
										Receive real-time updates on the status of applications.
									</li>
								</ul>
								<button className="font-bold text-white rounded-lg mt-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
									View Progress
								</button>
							</div>
						</div>
					</div>

					{/*/
        //* RESOURCE DATABASE
        */}
					<div className="flex flex-col items-center justify-between py-12 w-full">
    <div className="flex flex-col md:flex-row px-6 gap-8 max-w-7xl mx-auto">
      <Image
        src={Resources}
        height={500}
        width={500}
        alt="resource database"
        className="w-full md:w-1/2 object-contain"
      />
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-2xl md:text-4xl text-spaceCadet font-bold text-center md:text-left mb-6">
          Resource Database
        </h2>
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
        <button className="font-bold text-white rounded-lg mt-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
          View Resources
        </button>
      </div>
    </div>
  </div>
				</div>
				<div className="flex items-center justify-center w-full bg-caribbeanCurrant">
					<h1 className="text-white text-lg md:text-4xl font-bold py-12">
						Success Stories
					</h1>
				</div>
				<div className="flex flex-col items-center justify-between py-6 w-full h-max bg-caribbeanCurrant bg-opacity-10">
					<HomePageCarousel />
				</div>
				<Footer />
			</div>
		</>
	);
}
