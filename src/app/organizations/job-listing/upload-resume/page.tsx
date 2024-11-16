"use client"
import {JobListingUploadResume} from "@/components/client/JobListingUploadResume";
import { useState } from "react";

export default function JobListingUploadResumePage() {
  const [resumeName, setResumeName] = useState("");
  const [resumeLink, setResumeLink] = useState("");

  return (
    <JobListingUploadResume 
      nextModal={() => void 0}
      previousModal={() => void 0}
      closeModal={(e) => void 0}
      setResumeLink={() => void 0}
      setResumeName={() => void 0}
      resumeName=""
    />
  );
}
