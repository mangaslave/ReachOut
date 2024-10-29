"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/static/images/logo-new.svg";
import {useState} from "react";
import SignInModal from "./SignIn";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-white flex justify-between w-full items-center flex-col max-h-40">
      <div className="flex justify-evenly w-full py-5 flex-col sm:flex-row">
        <div className="flex items-center self-start py-2">
          <Link href="/">
            <Image src={logo} alt="Reach Out Logo" width={60} height={60} className="mr-2" />
          </Link>
          <h1 className="text-2xl font-bold text-black">ReachOut</h1>
        </div>
        <nav className="flex items-center self-center">
          <ul className="flex space-x-5 items-center">
            <li>
              <Link
                aria-label="case managers"
                href="/case-managers"
                className="text-black font-bold text-sm sm:text-base hover:text-caribbeanCurrant"
              >
                Case Managers
              </Link>
            </li>
            <li>
              <Link
                aria-label="Job Seekers"
                href="/job-seekers"
                className="text-black font-bold text-sm sm:text-base hover:text-caribbeanCurrant"
              >
                Job Seekers
              </Link>
            </li>
            <li>
              <Link
                aria-label="Employers"
                href="/employers"
                className="text-black font-bold text-sm sm:text-base hover:text-caribbeanCurrant"
              >
                Employers
              </Link>
            </li>
            <li>
              <Link
                aria-label="About"
                href="/about"
                className="text-black text-sm sm:text-base font-bold hover:text-caribbeanCurrant"
              >
                About
              </Link>
            </li>
            <li>
              <button
                className="font-bold rounded-lg w-32 h-10 bg-spaceCadet text-white hover:bg-ylnMnBlue"
                onClick={() => setShowModal(true)}
              >
                Sign In
              </button>

              <SignInModal showModal={showModal} setShowModal={setShowModal} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
