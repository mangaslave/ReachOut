"use client";

import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import Link from "next/link";
import CaseManagerHeroImage from "../../../public/static/images/case-manager-hero-image.jpg";
import JobListings from "../../../public/static/images/case-manager-job-listings.png";
import ClientManagement from "../../../public/static/images/case-manager-client-management.png";
import ResumeBuilder from "../../../public/static/images/case-manager-resume-builder.png";
import fbIcon from "../../../public/static/images/fbIcon.svg";
import igIcon from "../../../public/static/images/igIcon.svg";

export default function CaseManagers() {
  return (
    <>
      <HomePageNavBar />
      <div className="flex w-full h-max bg-caribbeanCurrant">
        <div className="flex flex-col ml-20 xl:ml-52 justify-evenly w-1/2 max-w-lg z-20 relative">
          <h1 className="text-white text-lg md:text-3xl font-bold pb-4 pt-14">
            Simplifying Your Efforts to Build Brighter Futures.
          </h1>
          <p className="md:py-4 text-sm text-white md:text-lg">
            ReachOut believes nonprofit organizations are the first step to helping previously incarcerated individuals
            begin their new lives. That&aposs why we&aposve built a platform that allows you to empower these
            individuals by providing them with all the tools and resources you&aposll need.
          </p>
          <button className="font-bold text-darkCarribbeanCurrant rounded-lg my-6 w-44 h-12 pt-3 pb-3 bg-white hover:bg-ylnMnBlue hover:bg-opacity-40 hover:text-white mb-20">
            Get Started Now!
          </button>
        </div>
        <div className="relative z-10 w-1/2 mr-0 ml-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-40% from-caribbeanCurrant to-transparent z-10 overflow-hidden" />
          <Image
            src={CaseManagerHeroImage}
            alt="Hero image"
            width={1000}
            height={1000}
            className="object-cover w-full h-full pr-40"
          />
        </div>
      </div>

      {/*/
        //* Features Tailored For You
        */}
      <div className="flex items-center justify-center w-full bg-white">
        <h1 className="text-darkCarribbeanCurrant text-lg md:text-4xl font-bold py-12">Features Tailored For You</h1>
      </div>

      {/*/
        //* Second-Chance Job Listings
        */}
      <div className="flex flex-col items-center justify-between pb-28 pt-20 w-full h-max bg-ylnMnBlue bg-opacity-10">
        <div className="flex">
          <Image src={JobListings} height={300} width={700} alt="ai powered research"></Image>
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Second-Chance Job Listings</h1>
            <ul className="max-w-md px-8 list-disc my-8">
              <li>
                <span className="font-semibold">Over 100,000 Potential Offers: </span> View a list of jobs featuring
                more than 1,200 companies open to hiring people with criminal records.
              </li>
              <li>
                <span className="font-semibold">Compatibility:</span> View which jobs are most suited for your client
                based on their skill set, preferences, and criminal background.
              </li>
              <li>
                <span className="font-semibold">Automated Applications:</span> Simply choose which client you&aposre
                applying for and we&aposll do all the hefty work.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 mt-0 w-44 h-12 pt-3 pb-3 bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant">
              View Jobs
            </button>
          </div>
        </div>
      </div>

      {/*/
        //* Centralized Client Management 
        */}

      <div className="flex flex-col items-center justify-between pb-16 pt-6 w-full h-max bg-ylnMnBlue bg-opacity-10">
        <div className="flex">
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-darkCarribbeanCurrant text-lg md:text-4xl font-bold p-6">
              Centralized Client Management
            </h1>
            <ul className="max-w-md px-8 list-disc my-14">
              <li>
                <span className="font-semibold">Client Dashboard: </span> Add and keep track of all your clients and
                their details in one page.
              </li>
              <li>
                <span className="font-semibold">Progress Tracking: </span> Review and receive real-time updates on the
                progress of your client&aposs applications.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 w-44 h-12 pt-3 pb-3 bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant">
              View Demo
            </button>
          </div>
          <Image src={ClientManagement} height={500} width={700} alt="client management"></Image>
        </div>
      </div>

      {/*/
        //* Resume Builder
        */}

      <div className="flex flex-col items-center justify-between py-20 w-full h-max bg-ylnMnBlue bg-opacity-10">
        <div className="flex">
          <Image src={ResumeBuilder} height={300} width={650} alt="resource database"></Image>
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Resume Builder</h1>
            <ul className="max-w-md px-8 list-disc my-14">
              <li>
                <span className="font-semibold">AI-Automation:</span> Answer a few questions about your client and our
                AI model will generate a industry-ready resume in minutes.
              </li>
              <li>
                <span className="font-semibold">AI Recommendations:</span> Already have a resume? Upload it and our AI
                will provide suggestions for improvement to boost its effectiveness.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 w-44 h-12 pt-3 pb-3 bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant">
              Try Now
            </button>
          </div>
        </div>
      </div>

      {/*/
        //* Frequently Asked Questions 
        */}
      <div className="flex flex-col items-center justify-center w-full bg-caribbeanCurrant">
        <h1 className="text-white text-lg md:text-4xl font-bold pt-8">Frequently Asked Questions</h1>
        <p className="text-white pt-1 pb-8">
          Can&apost find what you&aposre looking for? Contact us{" "}
          <Link href="/" className="underline hover:text-darkCarribbeanCurrant">
            here
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white mx-96 px-32 text-spaceCadet">
        <ul>
          <li>
            <h4 className="font-bold text-lg/5 mb-5 mt-14">
              Can ReachOut help clients with little to no work experience?
            </h4>
            <p className="text-base leading-5 mt-4 mb-10">
              Yes! ReachOut is designed to help individuals with any amount of experience. We provide a database of
              educational materials and skill-building workshops to prepare your clients for the workforce.
              ReachOut&aposs job dashboard also allows you to curate a list of specifically entry-level jobs.
            </p>
          </li>
          <li>
            <h4 className="font-bold text-lg/5 mt-5">
              Can clients apply directly to jobs, or do I need to apply on their behalf?
            </h4>
            <p className="text-base leading-5 mt-4 mb-10">
              Yes! Clients are able to make their own accounts at ReachOut where they can apply to job listings
              themselves. If you&aposd like, you can link your accounts so that you can review their applications and
              provide feedback.
            </p>
          </li>
          <li>
            <h4 className="font-bold text-lg/5 mt-5">
              Does ReachOut support clients with specific needs, such as disabilities or substance recovery?
            </h4>
            <p className="text-base leading-5 mt-4 mb-14">
              Yes! ReachOut is passionate about inclusivity and ensuring that our services accommodate people with all
              sorts of needs. We believe in transparency and encourage employers to indicate whether their workspace is
              suitable for people of various needs, including wheelchair accessibility, remote options, and onboarding
              support.
            </p>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center w-full bg-caribbeanCurrant">
        <ul className="flex items-center justify-between my-8">
          <li className="flex flex-col mx-10">
            <h1 className="text-xl font-bold my-2 text-white">Case Managers</h1>
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
              <Image src={fbIcon} height={25} width={25} alt="facebook icon" className="mx-2"></Image>
              <Image src={igIcon} height={25} width={25} alt="instagram icon" className="mx-2"></Image>
            </div>
            <ul>
              <li className="text-white text-sm my-2">Privacy Policy</li>
              <li className="text-white text-sm my-2">Terms of Service</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
