"use client";

import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import Link from "next/link";
import JobSeekersHeroImage from "../../../public/static/images/job-seekers-hero-image.jpg";
import JobSeekersJobListings from "../../../public/static/images/job-seeker-job-listings.png";
import JobSeekersResumeBuilder from "../../../public/static/images/job-seeker-resume-builder.png";
import JobSeekersProgressTracking from "../../../public/static/images/job-seeker-progress-tracking.png";
import fbIcon from "../../../public/static/images/fbIcon.svg";
import igIcon from "../../../public/static/images/igIcon.svg";

export default function JobSeekers() {
  return (
    <>
      <HomePageNavBar />
      <div className="flex w-full h-max bg-ylnMnBlue">
        <div className="flex flex-col ml-20 xl:ml-52 justify-evenly w-1/2 max-w-lg z-20 relative">
          <h1 className="text-white text-lg md:text-3xl font-bold pb-4 pt-14">
            Find Jobs That Value You and Your Skills.
          </h1>
          <p className="md:py-4 text-sm text-white md:text-lg">
            Your skills, experiences, and determination define your potential—not your past. That&aposs why we connect
            you with employers who see your value and are committed to giving you the opportunity to succeed. Whether
            you&aposre looking to start fresh, build a career, or explore new possibilities, we&aposre here to support
            you at every step.
          </p>
          <button className="font-bold text-darkCarribbeanCurrant rounded-lg my-6 w-44 h-12 pt-3 pb-3 bg-white hover:bg-transparent hover:border hover:border-white hover:text-white mb-20">
            Get Started Now!
          </button>
        </div>
        <div className="relative z-10 w-1/2 mr-0 ml-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-40% from-ylnMnBlue to-transparent z-10 overflow-hidden" />
          <Image
            src={JobSeekersHeroImage}
            alt="Hero image"
            width={1000}
            height={1000}
            className="object-cover w-full h-full pr-40"
          />
        </div>
      </div>

      {/*/
        //* Features to Help You Succeed
        */}
      <div className="flex items-center justify-center w-full bg-white">
        <h1 className="text-ylnMnBlue text-lg md:text-4xl font-bold py-12">Features to Help You Succeed</h1>
      </div>

      {/*/
        //* Second-Chance Job Listings
        */}
      <div className="flex flex-col items-center justify-between pb-28 pt-20 w-full h-max bg-ylnMnBlue bg-opacity-10">
        <div className="flex">
          <Image src={JobSeekersJobListings} height={300} width={700} alt="second chance job listings"></Image>
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Second-Chance Job Listings</h1>
            <ul className="max-w-md px-8 list-disc my-8">
              <li>
                <span className="font-semibold">Over 100,000 Potential Offers: </span> View a list of jobs featuring
                more than 1,200 companies open to hiring you.
              </li>
              <li>
                <span className="font-semibold">Compatibility:</span> View which jobs are most suited for you based on
                your skill set, preferences, and criminal background.
              </li>
              <li>
                <span className="font-semibold">Automated Applications:</span> Simply choose which job you want to apply
                for and we&aposll do all the tedious work for you.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 mt-0 w-44 h-12 pt-3 pb-3 bg-ylnMnBlue hover:bg-spaceCadet">
              View Jobs
            </button>
          </div>
        </div>
      </div>

      {/*/
        //* Progress Tracking
        */}

      <div className="flex flex-col items-center justify-between pb-16 pt-6 w-full h-max bg-ylnMnBlue bg-opacity-10">
        <div className="flex">
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-darkCarribbeanCurrant text-lg md:text-4xl font-bold p-6">Progress Tracking</h1>
            <ul className="max-w-md px-8 list-disc my-3">
              <li>
                <span className="font-semibold">Real-Time Updates: </span> Receive updates as employers review your
                application.
              </li>
              <li>
                <span className="font-semibold">Centralized View: </span> See a list of all your active and inactive
                applications in one page.
              </li>
              <li>
                <span className="font-semibold">Employer Feedback: </span> Get helpful insights from employers on the
                strengths of your application and suggestions for improvement to boost your chances of success.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 mt-6 w-44 h-12 pt-3 pb-3 bg-ylnMnBlue hover:bg-spaceCadet">
              View Demo
            </button>
          </div>
          <Image src={JobSeekersProgressTracking} height={200} width={700} alt="progress tracking"></Image>
        </div>
      </div>

      {/*/
        //* Resume Builder
        */}

      <div className="flex flex-col items-center justify-between py-20 w-full h-max bg-ylnMnBlue bg-opacity-10">
        <div className="flex">
          <Image src={JobSeekersResumeBuilder} height={300} width={650} alt="resume builder"></Image>
          <div className="flex flex-col justify-evenly items-center mx-10">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Resume Builder</h1>
            <ul className="max-w-md px-8 list-disc my-14">
              <li>
                <span className="font-semibold">AI-Automation:</span> Answer a few questions about yourself and our AI
                model will generate an industry-ready resume in minutes.
              </li>
              <li>
                <span className="font-semibold">AI Recommendations:</span> Already have a resume? Upload it and our AI
                will provide suggestions for improvement to boost its effectiveness.
              </li>
            </ul>
            <button className="font-bold mr-60 text-white rounded-lg mb-6 w-44 h-12 pt-3 pb-3 bg-ylnMnBlue hover:bg-spaceCadet">
              Try Now
            </button>
          </div>
        </div>
      </div>

      {/*/
        //* Frequently Asked Questions 
        */}
      <div className="flex flex-col items-center justify-center w-full bg-ylnMnBlue">
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
            <h4 className="font-bold text-lg/5 mb-5 mt-14">Does it cost anything to use ReachOut?</h4>
            <p className="text-base leading-5 mt-4 mb-10">
              No, ReachOut is completely free to all users. Our full library of resources, tools, and support features
              can be accessed at no cost.
            </p>
          </li>
          <li>
            <h4 className="font-bold text-lg/5 mt-5">What resources are available to help me prepare for jobs?</h4>
            <p className="text-base leading-5 mt-4 mb-10">
              We offer resume and cover letter templates, interview tips, and guides on building workplace skills. You
              can also access training programs and certifications to enhance your employability.
            </p>
          </li>
          <li>
            <h4 className="font-bold text-lg/5 mt-5">What should I do if I need help using ReachOut?</h4>
            <p className="text-base leading-5 mt-4 mb-14">
              Our support team is here to help! You can contact us through the help center or email us directly with any
              questions or concerns.
            </p>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center w-full bg-ylnMnBlue">
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
