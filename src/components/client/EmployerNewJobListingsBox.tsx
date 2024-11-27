"use client";
import {Application} from "@/actions/GetApplicationsAction";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {Button} from "../ui/button";

export function EmployerNewJobListingBox({applications}: {applications: Application[]}) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md max-w-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">New Employee Matches</h2>
        <a href="#" className="text-lg underline">
          View All
        </a>
      </div>

      {applications.slice(0, 3).map((application, index) => (
        <div key={index} className="flex items-center justify-between mb-4 last:mb-0">
          <div className="flex items-center gap-4 min-w-0">
            <Avatar className="h-14 w-14 shrink-0 border-2 border-gray-200">
              <AvatarImage src="/static/images/userIcon.svg" alt="" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-medium">{`${application.applicantFirstName} ${application.applicantLastName}`}</h3>
              <p className="text-gray-600">Position: {application.jobTitle}</p>
            </div>
          </div>
          <Button className="bg-[#2F334D] hover:bg-[#373b5c] text-white px-6 py-3 rounded-lg text-lg">
            View Application
          </Button>
        </div>
      ))}
    </div>
  );
}
