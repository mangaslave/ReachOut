"use client";

import Link from "next/link";
import {Button} from "../ui/button";

export default function LandingPageContent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg bg-caribbeanCurrant w-96  h-[27rem] m-auto flex flex-col justify-center items-center ">
        <p className="p-5 text-2xl font-bold text-white text-center">Which role matches you best?</p>
        <Link href="/organization/dashboard">
          <Button className="hover:text-white w-60 p-2 mt-10 bg-white rounded-md text-black font-bold">I'm a Non-Profit Worker.</Button>
        </Link>
        <Link href="/employer/dashboard">
          <Button className="hover:text-white w-60 p-2 mt-6 bg-white rounded-md text-black font-bold">I'm an Employer.</Button>
        </Link>
      </div>
    </div>
    
  );
}
