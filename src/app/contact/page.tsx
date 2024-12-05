import HomePageNavBar from "@/components/client/HomePageNavBar";
import {FaFacebookSquare} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaSquareInstagram} from "react-icons/fa6";
import Footer from "@/components/client/HomepageFooter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomePageNavBar />
      <main className="flex-1 flex items-center">
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-6 py-8 md:py-16 max-w-[1400px] mx-auto">
          <div className="w-full md:w-1/2 max-w-xl space-y-6">
            <h1 className="text-spaceCadet text-2xl md:text-4xl font-bold">Contact Us</h1>
            <p className="text-spaceCadet text-sm md:text-lg">
              Have any questions? Send them our way and we&apos;ll get back to you within 1-2 business days.
            </p>
            <p className="text-spaceCadet text-sm md:text-lg">reachout@info.com</p>
            <p className="text-spaceCadet text-sm md:text-lg">(604)-123-1234</p>
            <div className="flex space-x-4 text-3xl text-spaceCadet">
              <FaFacebookSquare className="hover:text-caribbeanCurrant cursor-pointer" />
              <FaSquareXTwitter className="hover:text-caribbeanCurrant cursor-pointer" />
              <FaSquareInstagram className="hover:text-caribbeanCurrant cursor-pointer" />
            </div>
          </div>

          <div className="w-full md:w-1/2 max-w-2xl">
            <form className="w-full bg-white rounded-lg p-6 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant resize-none"
                  rows={6}
                  placeholder="Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-caribbeanCurrant text-white font-bold rounded-lg hover:bg-spaceCadet focus:outline-none focus:ring-2 focus:ring-caribbeanCurrant transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
