"use client"
import {JobListingContactInfo} from "@/components/client/JobListingContactInfo";
import {useState} from "react";

export default function JobListingContactPage() {

   const [contactInfo, setContactInfo] = useState({
    contactFirstName: "",
    contactLastName: "",
    contactCity: "",
    contactPhone: "",
    contactEmail: ""
    });
    
  return <JobListingContactInfo 
      nextModal={() => void 0}
      previousModal={() => void 0}
      closeModal={(e) => void 0}
      setContactFirstName={() => void 0}
      setContactLastName={() => void 0}
      setContactCity={() => void 0}
      setContactEmail={() => void 0}
      setContactPhone={() => void 0}
      contactInfo={{
        contactFirstName: contactInfo.contactFirstName,
        contactLastName: contactInfo.contactLastName,
        contactCity: contactInfo.contactCity,
        contactPhone: contactInfo.contactPhone
      }}
    />
}
