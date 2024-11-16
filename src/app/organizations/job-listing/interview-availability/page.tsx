import { JobListingInterviewAvailability } from "@/components/client/JobListingInterviewAvailability";



export default function JobListingInterviewAvaliablityPage () {
    return (
         <JobListingInterviewAvailability 
      nextModal={() => void 0}           
      previousModal={() => void 0}         
      closeModal={(e) => void 0}          
      setAvailability={() => void 0}        
      selectedDate={new Date()}            
    />
    )
}