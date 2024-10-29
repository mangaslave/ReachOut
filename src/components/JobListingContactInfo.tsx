import {Textarea} from "./ui/textarea";
import {Label} from "./ui/label";
import {Button} from "./ui/button";
import Link from "next/link";

export function JobListingContactInfo() {
  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">Job Listing</h1>
          <span className="text-gray-600">Company name</span>
        </div>
      </div>

      <div className="border-b border-caribbeanCurrant my-4" />
      <h2 className="text-xl font-bold text-spaceCadet">Contact Information</h2>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">First Name</Label>
        <Textarea className="resize-none" placeholder="First Name" id="message" />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">Last Name</Label>
        <Textarea className="resize-none" placeholder="Last Name" id="message" />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">City</Label>
        <Textarea className="resize-none" placeholder="City" id="message" />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">Phone</Label>
        <Textarea className="resize-none" placeholder="Phone" id="message" />
      </div>

      <Link href="/job-listing/upload-resume">
        <Button variant="secondary" className="bg-spaceCadet text-white mt-4">
          Next
        </Button>
      </Link>
    </div>
  );
}
