"use client";

import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import Link from "next/link";
import EmployersHeroImage from "../../../public/static/images/employers-hero-image.jpg";
import EmployersListings from "../../../public/static/images/employers-listings.png";
import EmployersResources from "../../../public/static/images/employers-resources.png";
import fbIcon from "../../../public/static/images/fbIcon.svg";
import igIcon from "../../../public/static/images/igIcon.svg";

export default function Employers() {
  return (
    <>
      <HomePageNavBar />
      <div className="flex w-full h-max bg-spaceCadet">
        <div className="flex flex-col ml-20 xl:ml-52 justify-evenly w-1/2 max-w-lg z-20 relative">
          <h1 className="text-white text-lg md:text-3xl font-bold pb-4 pt-14">
            Build Your Workforce and Transform Lives.
          </h1>
          <p className="md:py-4 text-sm text-white md:text-lg">
            Discover how second-chance hiring can benefit your business. From accessing tax credits to improving
            retention rates, ReachOut makes it easy to connect with motivated candidates who are ready to make an
            impact.
          </p>
          <button className="font-bold text-darkCarribbeanCurrant rounded-lg my-6 w-44 h-12 pt-3 pb-3 bg-white hover:bg-transparent hover:border hover:border-white hover:text-white mb-20">
            Get Started Now!
          </button>
        </div>
        <div className="relative z-10 w-1/2 mr-0 ml-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-40% from-spaceCadet to-transparent z-10 overflow-hidden" />
          <Image
            src={EmployersHeroImage}
            alt="Hero image"
            width={1000}
            height={1000}
            className="object-cover w-full h-full pr-40"
          />
        </div>
      </div>

      {/*/
        //* Features Designed for Easy Hiring
        */}
      <div className="flex items-center justify-center w-full bg-white">
        <h1 className="text-spaceCadet text-lg md:text-4xl font-bold py-12">Features Designed for Easy Hiring</h1>
      </div>

      {/*/
        //* Job Posting & Matches
        */}
      <div className="flex flex-col items-center justify-between pb-28 pt-20 w-full h-max bg-spaceCadet bg-opacity-10">
        <div className="flex">
          <Image src={EmployersListings} height={300} width={700} alt="job posting & matches"></Image>
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Job Posting & Matches</h1>
            <ul className="max-w-md px-8 list-disc my-8">
              <li>
                <span className="font-semibold">Candidate Recommendations: </span> View a list of potential hires who
                meet your specific requirements.
              </li>
              <li>
                <span className="font-semibold">Centralized View:</span> Manage all your current and past job listings
                with ease on one page.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 mt-0 w-44 h-12 pt-3 pb-3 bg-spaceCadet hover:bg-ylnMnBlue">
              Post Your Jobs
            </button>
          </div>
        </div>
      </div>

      {/*/
        //* Applicant Tracking
        */}

      <div className="flex flex-col items-center justify-between pb-16 pt-6 w-full h-max bg-spaceCadet bg-opacity-10">
        <div className="flex">
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-darkCarribbeanCurrant text-lg md:text-4xl font-bold p-6">Applicant Tracking</h1>
            <ul className="max-w-md px-8 list-disc my-3">
              <li>
                <span className="font-semibold">Streamlined Organization: </span> Keep track of all the candidates that
                have applied to your posting and drag and drop them into the appropriate categories (i.e. “Under
                Review”, “Interview”, etc.).
              </li>
              <li>
                <span className="font-semibold">Applicant Profiles: </span> View all candidate details at a glance,
                including resumes, skills, and work history, directly on their application cards.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 mt-6 w-44 h-12 pt-3 pb-3 bg-spaceCadet hover:bg-ylnMnBlue">
              View Demo
            </button>
          </div>
          <Image src={EmployersListings} height={200} width={700} alt="employer listings"></Image>
        </div>
      </div>

      {/*/
        //* Resource Database
        */}

      <div className="flex flex-col items-center justify-between py-20 w-full h-max bg-spaceCadet bg-opacity-10">
        <div className="flex">
          <Image src={EmployersResources} height={300} width={650} alt="employer resources"></Image>
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Resource Database</h1>
            <ul className="max-w-md px-8 list-disc my-14">
              <li>
                <span className="font-semibold">Second-Chance Hiring Guides:</span> Access comprehensive guides on
                implementing second-chance hiring practices.
              </li>
              <li>
                <span className="font-semibold">Legal Compliance Support:</span> Stay informed about local and federal
                hiring laws.
              </li>
              <li>
                <span className="font-semibold">Tax Incentive Information:</span> Learn how to access wage subsidies,
                the Federal Bonding Program, and provincial hiring incentives for marginalized groups.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 w-44 h-12 pt-3 pb-3 bg-spaceCadet hover:bg-ylnMnBlue">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/*/
        //* Frequently Asked Questions 
        */}
      <div className="flex flex-col items-center justify-center w-full bg-spaceCadet">
        <h1 className="text-white text-lg md:text-4xl font-bold pt-8">Frequently Asked Questions</h1>
        <p className="text-white pt-1 pb-8">
          Can&apost find what you&aposre looking for? Contact us{" "}
          <Link href="/" className="underline hover:text-spaceCadet">
            here
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white mx-96 px-32 text-spaceCadet">
        <ul>
          <li>
            <h4 className="font-bold text-lg/5 mb-5 mt-14">Why should I consider second-chance hiring?</h4>
            <p className="text-base leading-5 mt-4 mb-10">
              Second-chance hiring allows you to access a motivated talent pool, reduce turnover rates, and contribute
              to your community&aposs growth. Studies show that second-chance employees often outperform their peers in
              terms of loyalty and productivity.
            </p>
          </li>
          <li>
            <h4 className="font-bold text-lg/5 mt-5">Will I be notified about updates on applications?</h4>
            <p className="text-base leading-5 mt-4 mb-10">
              Yes, you will receive notifications when candidates apply, respond to interview requests, or update their
              profiles.
            </p>
          </li>
          <li>
            <h4 className="font-bold text-lg/5 mt-5">Is my company&aposs information secure on ReachOut?</h4>
            <p className="text-base leading-5 mt-4 mb-14">
              Absolutely. We use advanced security measures to ensure your data and candidate information remain private
              and protected.
            </p>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center w-full bg-spaceCadet">
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
