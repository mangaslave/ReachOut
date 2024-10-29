import { JobListing } from "@/components/JobListingDescription";
import { JobListingContactInfo } from "@/components/JobListingContactInfo";
import { JobListingUploadResume } from "@/components/JobListingUploadResume";



export default function JobListingPage() {
  return (
    <div className="flex gap-6 p-6">
      <div className="flex-none w-[600px]">
        <JobListing />
      </div>
      <div className="flex-none w-[600px]">
        <JobListingContactInfo />
      </div>

      <div className="flex-none w-[600px]">
        <JobListingUploadResume />
      </div>

    </div>
  );
}