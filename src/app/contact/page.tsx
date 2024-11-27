import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import heroImage from "../../../public/static/images/Hero-Image.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import fbIcon from "../../../public/static/images/fbIcon.svg"; 
import igIcon from "../../../public/static/images/igIcon.svg"; 

export default function About() {
  return (
    <>
      <HomePageNavBar />
      <div className="flex-wrap justify-center flex mt-[5rem] h-full mb-[5rem]">
          <div className="w-[25rem] flex flex-col h-[23.5rem]">
            <h1 className="text-spaceCadet text-lg md:text-4xl font-bold">Contact Us</h1>
            <p className="text-spaceCadet md:py-4 text-sm md:text-lg w-[17rem]">
              Have any questions? Send them our way and we’ll get back to you within 1-2 business days.
            </p>
            <p className="text-spaceCadet md:py-4 text-sm md:text-lg">reachout@info.com</p>
            <p className="text-spaceCadet md:py-4 text-sm md:text-lg">(604)-123-1234</p>
            <div className="flex space-x-2 text-4xl text-spaceCadet mt-auto">
              <FaFacebookSquare />
              <FaSquareXTwitter />
              <FaSquareInstagram />
            </div>
          </div>

        <div>
          <form className="w-full max-w-lg mx-auto bg-white rounded-lg">
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                placeholder="Subject"
              />
            </div>

            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-caribbeanCurrant text-white font-bold rounded-lg hover:bg-spaceCadet focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
              >
                Submit
              </button>
            </div>
          </form>


        </div>
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
