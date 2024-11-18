import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import HomePageCarousel from "@/components/client/HomePageCarousel";
import fbIcon from "../../public/static/images/fbIcon.svg";
import igIcon from "../../public/static/images/igIcon.svg";
import peopleIcon from "../../public/static/images/people-1.svg";
import recruitmentIcon from "../../public/static/images/recruitment-1.svg";
import interviewIcon from "../../public/static/images/interview-1.svg";
import aiPoweredResearch from "../../public/static/images/screenshot_job_listings.png";
import researchProgressTracking from "../../public/static/images/screenshot_dashboard.png";
import heroImage from "../../public/static/images/Hero-Image.jpg";

export default function Home() {
	return (
		<>
			<HomePageNavBar />
			<div className="flex w-full h-max bg-caribbeanCurrant">
				<div className="flex flex-col ml-20 xl:ml-52 justify-evenly w-1/2 max-w-lg z-20 relative">
					<h1 className="text-white text-lg md:text-3xl font-bold py-4">
						Connecting You to Jobs and the Support You Deserve.
					</h1>
					<p className="md:py-4 text-sm text-white md:text-lg">
						At ReachOut, we introduce people with criminal records to
						fair-chance employers who believe in their potential. With
						personalized job matches and an extensive resource database, we&#39;re
						here to help people build a new future, one connection at a time.
					</p>
					<button className="font-bold text-white rounded-lg my-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
						Get Started Now!
					</button>
				</div>
				<div className="relative z-10 w-1/2 mr-0 ml-auto">
					<div className="absolute inset-0 bg-gradient-to-r to-40% from-caribbeanCurrant to-transparent z-10 overflow-hidden" />
					<Image
						src={heroImage}
						alt="Hero image"
						width={1000}
						height={1000}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<div className="flex items-center justify-evenly py-6 flex-col w-full h-48 bg-caribbeanCurrant bg-opacity-60">
				<h1 className="text-lg md:text-4xl text-white font-bold py-2">
					Who We Are
				</h1>
				<p className="text-sm md:text-lg md:max-w-5xl xl:max-w-7xl text-white">
					Our mission is to empower individuals with second chances. We strive
					to break barriers, foster trust, and create pathways to brighter
					futures through job placement, resources, and advocacy.
				</p>
			</div>
			{/*/
        //* OUR IMPACT
        */}
			<div className="flex items-center justify-evenly py-6 flex-col w-full h-96 bg-caribbeanCurrant bg-opacity-10">
				<h1 className="text-spaceCadet text-lg md:text-4xl font-bold">
					Our Impact
				</h1>
				<ul className="flex justify-evenly items-center">
					<li className="h-full w-auto flex flex-col items-center justify-center mx-24 my-6">
						<Image
							src={peopleIcon}
							height={141}
							width={141}
							alt="people icon"
						></Image>
						<p className="text-sm md:text-lg my-6 text-spaceCadet">
							Over <span className="font-semibold">2,000</span> job seekers
							placed in meaningful employment.
						</p>
					</li>
					<li className="h-full w-auto flex flex-col items-center justify-center mx-24 my-6">
						<Image
							src={interviewIcon}
							height={138}
							width={138}
							alt="interview icon"
						></Image>
						<p className="text-sm md:text-lg my-6 text-spaceCadet">
							<span className="font-semibold">60%</span> of clients secured
							interviews within the first 3 months.
						</p>
					</li>
					<li className="h-full w-auto flex flex-col items-center justify-center mx-24 my-6">
						<Image
							src={recruitmentIcon}
							height={172}
							width={172}
							alt="recruitment icon"
						></Image>
						<p className="text-sm md:text-lg mt-1 mb-6 text-spaceCadet">
							<span className="font-semibold">500+</span> nonprofit
							organizations and fair-chance employers actively engaged.
						</p>
					</li>
				</ul>
				{/*/
        //* OUR KEY FEATURES
        */}
				<div className="flex items-center justify-center w-full bg-caribbeanCurrant">
					<h1 className="text-white text-lg md:text-4xl font-bold py-12">
						Our Key Features
					</h1>
				</div>
				{/*/
        //* AI POWERED JOB SEARCH
        */}
				<div className="flex flex-col items-center justify-between py-6 w-full h-max bg-caribbeanCurrant bg-opacity-10">
					<div className="flex">
						<Image
							src={aiPoweredResearch}
							height={500}
							width={500}
							alt="ai powered research"
						></Image>
						<div className="flex flex-col justify-evenly items-center mx-10">
							<h1 className="text-spaceCadet text-lg md:text-4xl font-bold">
								AI-Powered Job Search
							</h1>
							<ul className="max-w-md px-8 list-disc">
								<li>
									<span className="font-semibold">
										Real Jobs, Real Chances:{" "}
									</span>{" "}
									Our AI instantly connects you with 1000+ jobs from our trusted
									employers who specifically welcome and hire people returning
									from incarceration.
								</li>
								<li>
									<span className="font-semibold">Compatibility:</span> View
									which jobs are most suitable based on skill set, preferences,
									and criminal background.
								</li>
								<li>
									<span className="font-semibold">
										Skill Development Insights:
									</span>{" "}
									View and access a list of gaps in potential skills needed for
									available jobs.
								</li>
							</ul>
							<button className="font-bold mr-60 text-white rounded-lg my-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
								View Jobs
							</button>
						</div>
					</div>
				</div>
				{/*/
        //* PROGRESS TRACKING
        */}
				<div className="flex flex-col items-center justify-between py-6 w-full h-max bg-caribbeanCurrant bg-opacity-10">
					<div className="flex">
						<div className="flex flex-col justify-evenly items-center mx-10">
							<h1 className="text-spaceCadet text-lg md:text-4xl font-bold p-6">
								Progress Tracking
							</h1>
							<ul className="max-w-md px-8 list-disc">
								<li>
									<span className="font-semibold">
										Track Application Progress:{" "}
									</span>{" "}
									Monitor your job applications and track your success rates.
								</li>
								<li>
									<span className="font-semibold">Progress Analytics: </span>{" "}
									View detailed metrics about your application journey,
									interview success rates, and available jobs.
								</li>
								<li>
									<span className="font-semibold">Milestone Tracking: </span>{" "}
									Receive real-time updates on the status of applications.
								</li>
							</ul>
							<button className="font-bold mr-60 text-white rounded-lg my-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
								View Jobs
							</button>
						</div>
						<Image
							src={researchProgressTracking}
							height={500}
							width={500}
							alt="research progress tracking"
						></Image>
					</div>
				</div>
				{/*/
        //* RESOURCE DATABASE
        */}
				{/* <div className="flex flex-col items-center justify-between py-6 w-full h-max bg-caribbeanCurrant bg-opacity-10">
          <div className="flex">
            <Image src={resourceDatabase} height={500} width={500} alt="resource database"></Image>
            <div className="flex flex-col justify-evenly items-center mx-10">
              <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Resource Database</h1>
              <ul className="max-w-md px-8 list-disc">
                <li>
                  <span className="font-semibold">Over 100,000 Potential Offers:</span> View a list of jobs featuring
                  more than 1,200 companies open to hiring people with criminal records.
                </li>
                <li>
                  <span className="font-semibold">Compatibility:</span> View which jobs are most suited for your skill
                  set, preferences, and criminal background.
                </li>
                <li>
                  <span className="font-semibold">Skill Development Insights:</span> View and access a list of gaps in
                  your skills needed for different jobs.
                </li>
              </ul>
              <button className="font-bold mr-60 text-white rounded-lg my-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
                View Jobs
              </button>
            </div>
          </div>
        </div> */}
				<div className="flex items-center justify-center w-full bg-caribbeanCurrant">
					<h1 className="text-white text-lg md:text-4xl font-bold py-12">
						Success Stories
					</h1>
				</div>
				<div className="flex flex-col items-center justify-between py-6 w-full h-max bg-caribbeanCurrant bg-opacity-10">
					{/*
          //!Fix this Carousel
          */}
					<HomePageCarousel />
				</div>
				<div className="flex items-center justify-center w-full bg-caribbeanCurrant">
					<ul className="flex items-center justify-between my-8">
						<li className="flex flex-col mx-10">
							<h1 className="text-xl font-bold my-2 text-white">
								Case Managers
							</h1>
							<ul>
								<li className="text-white text-sm my-2">Manage Clients</li>
								<li className="text-white text-sm my-2">Resource Directory</li>
								<li className="text-white text-sm my-2">Training Portal</li>
							</ul>
						</li>
						<li className="flex flex-col mx-10">
							<h1 className="text-xl font-bold my-2 text-white">Job Seekers</h1>
							<ul>
								<li className="text-white text-sm my-2">Search Jobs</li>
								<li className="text-white text-sm my-2">Career Support</li>
								<li className="text-white text-sm my-2">Success Stories</li>
							</ul>
						</li>
						<li className="flex flex-col mx-10">
							<h1 className="text-xl font-bold my-2 text-white">Employers</h1>
							<ul>
								<li className="text-white text-sm my-2">Post Positions</li>
								<li className="text-white text-sm my-2">Partner Programs</li>
								<li className="text-white text-sm my-2">Hiring Guide</li>
							</ul>
						</li>
						<li className="flex flex-col mx-10">
							<h1 className="text-xl font-bold my-2 text-white">About Us</h1>
							<ul>
								<li className="text-white text-sm my-2">Our Mission</li>
								<li className="text-white text-sm my-2">Contact Us</li>
								<li className="text-white text-sm my-2">Impact Report</li>
							</ul>
						</li>
						<li className="flex flex-col mx-10">
							<div className="flex my-5">
								<Image
									src={fbIcon}
									height={25}
									width={25}
									alt="facebook icon"
									className="mx-2"
								></Image>
								<Image
									src={igIcon}
									height={25}
									width={25}
									alt="instagram icon"
									className="mx-2"
								></Image>
							</div>
							<ul>
								<li className="text-white text-sm my-2">Privacy Policy</li>
								<li className="text-white text-sm my-2">Terms of Service</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
