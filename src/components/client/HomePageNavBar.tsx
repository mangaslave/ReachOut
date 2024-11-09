"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/static/images/logo-new.svg";
import {useState} from "react";
import SignInModal from "./SignIn";
import HamburgerModal from "./HomePageHamburger";
import {FaBars} from "react-icons/fa";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <header className="bg-white flex justify-between w-full items-center flex-col max-h-40 min-h-20">
      <div className="flex justify-evenly w-full py-5 flex-row">
        <div className="flex items-center self-start py-2">
          <Link href="/">
            <Image src={logo} alt="Reach Out Logo" width={60} height={60} className="mr-2" />
          </Link>
          <h1 className="text-2xl font-bold text-black">ReachOut</h1>
        </div>
        <nav className="flex items-center self-center">
          <ul className="flex space-x-1 sm:space-x-5 items-center">
            <li>
              <Link
                aria-label="case managers"
                href="/case-managers"
                className="text-black font-bold text-sm sm:text-base md:inline-block hidden hover:text-caribbeanCurrant"
              >
                Case Managers
              </Link>
            </li>
            <li>
              <Link
                aria-label="Job Seekers"
                href="/job-seekers"
                className="text-black font-bold text-sm sm:text-base md:inline-block hidden hover:text-caribbeanCurrant"
              >
                Job Seekers
              </Link>
            </li>
            <li>
              <Link
                aria-label="Employers"
                href="/employers"
                className="text-black font-bold text-sm sm:text-base md:inline-block hidden hover:text-caribbeanCurrant"
              >
                Employers
              </Link>
            </li>
            <li>
              <Link
                aria-label="About"
                href="/about"
                className="text-black text-sm sm:text-base font-bold md:inline-block hidden hover:text-caribbeanCurrant"
              >
                About
              </Link>
            </li>
            <li>
              <button
                className="font-bold rounded-lg sm:w-32 w-24 h-10 bg-spaceCadet text-white hover:bg-ylnMnBlue"
                onClick={() => setShowModal(true)}
              >
                Sign In
              </button>

              <SignInModal showModal={showModal} setShowModal={setShowModal} />
            </li>
            <li>
              <button
                className="font-bold rounded-lg mx-4 md:hidden flex justify-center items-center h-10 text-3xl text-spaceCadet hover:bg-ylnMnBlue"
                onClick={() => (showHamburger ? setShowHamburger(false) : setShowHamburger(true))}
              >
                <FaBars />
              </button>

              <HamburgerModal showModal={showHamburger} setShowModal={setShowHamburger} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
