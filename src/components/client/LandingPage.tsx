"use client";

import Link from "next/link";
import {Button} from "../ui/button";

export default function LandingPageContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Welcome to ReachOut</h1>
      <p>Who are you?</p>
      <Link href="/organization/dashboard">
        <Button>Non-Profit Organization Worker</Button>
      </Link>
      <Link href="/employer/dashboard">
        <Button>Employer</Button>
      </Link>
    </div>
  );
}
