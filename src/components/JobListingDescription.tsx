import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

 export const JobListing = ({
  companyName = "Company Name",
  salary = "$27 - $30 an hour",
  type = "Part Time",
  location = "City, Provience",
  description = "We're looking for a reliable and flexible person to join our team. You should be comfortable working in different environments, sometimes under tough conditions, and be able to work well with a small group. While you don't need a lot of specific technical skills, it's important that you're eager to learn, can adapt quickly, and can handle challenging situations. Having some previous experience is a plus, as it shows you're resilient and capable of taking on the job."
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">Job Listing</h1>
          <span className="text-gray-600">{companyName}</span>
        </div>
        <div className="text-right">
          <div className="text-gray-900 font-medium">{salary}</div>
          <div className="text-gray-500 text-sm">{type}</div>
          <div className="text-gray-500 text-sm">{location}</div>
        </div>
      </div>
          <hr className="border-t border-black my-4" />
          <Link href="/job-listing/contact">
        <Button variant="secondary" className="bg-spaceCadet text-white">Start Application</Button>
          </Link>
        <div className="flex justify-between items-start mb-4 ">
        <h2 className="font-bold text-xl mt-6 text-spaceCadet">Job Description</h2>
        </div>
        <p className="mt-4">{description}</p>
        <h2 className="font-bold text-xl mt-4 text-spaceCadet">Benefits</h2>
        <ul className="list-disc pl-5 space-y-1">
            <li>Dental care</li>
            <li>Extended health care</li>
            <li>On-site parking</li>
            <li>Competitive hourly wage</li>
            <li>Opportunities for growth and development</li>
            <li>Positive, team-oriented work environment</li>
        </ul>
        <h2 className="font-bold text-xl mt-4 text-spaceCadet">Qualifications</h2>
         <ul className="list-disc pl-5 space-y-1">
          <li>2-4 years of experience in general labor, construction, or related fields</li>
          <li>Ability to thrive in physically demanding and adverse weather conditions</li>
          <li>Strong teamwork skills and adaptability on-site</li>
          <li>Reliable transportation to the worksite</li>
         </ul>

          <h2 className="font-bold text-xl mt-4 text-spaceCadet">Work Enviornment</h2>
         <ul className="list-disc pl-5 space-y-1">
          <li>Outdoor work in varying weather conditions</li>
          <li>Physically demanding tasks requiring stamina and strength</li>
          <li>Collaborative team-based work</li>
          <li>Expected hours: 30 – 40 per week</li>
          <li>Monday to Friday</li>
          </ul>
        </div>
        

    
  );
}