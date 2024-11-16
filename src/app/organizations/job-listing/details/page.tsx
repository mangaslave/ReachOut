import {JobListing} from "@/components/client/JobListingDescription";

export default function JobListingPage() {
  return <JobListing 
      jobDetails={{
        companyName: "Example Company",
        jobTitle: "Example Position",
        salary: "Competitive",
        location: "Remote",
        jobType: "Full-time",
        description: "Job description here"
      }}
      nextModal={() => void 0}
      closeModal={(e) => void 0}
    />
}
