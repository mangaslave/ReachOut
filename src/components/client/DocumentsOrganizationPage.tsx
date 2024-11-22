"use client";
import {useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import {ResumeModal} from "./ResumeView";

interface ResumeDetails {
  email: string;
  phone: string;
  skills: Array<{
    title: string;
    description: string;
  }>;
  education: {
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
  };
  certification: {
    name: string;
    details: string;
    date: string;
  };
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    details: string;
  };
  summary: string;
}

interface StatusStyle {
  button: string;
  dot: string;
}

interface StatusStyleMap {
  [key: string]: StatusStyle;
}

interface ResumeItem {
  name: string;
  fileType: string;
  status: "Completed" | "Sent" | "In Progress";
  lastEdited: string;
  resumeDetails: ResumeDetails;
}

const statusStyles: StatusStyleMap = {
  Completed: {
    button: "bg-green-50 border-green-200",
    dot: "bg-green-500",
  },
  Sent: {
    button: "bg-gray-50 border-gray-200",
    dot: "bg-gray-400",
  },
  "In Progress": {
    button: "bg-yellow-50 border-yellow-200",
    dot: "bg-yellow-400",
  },
} as const;

export function DocumentOrganizationComponent() {
  const [selectedResume, setSelectedResume] = useState<ResumeItem | null>(null);
  const [sortBy, setSortBy] = useState("Default");
  const [data, setData] = useState<ResumeItem[]>([
    {
      name: "John Doe",
      fileType: "PDF",
      status: "Completed",
      lastEdited: "10/12/2024",
      resumeDetails: {
        email: "jdoe@email.com",
        phone: "(123) 456-7890",
        skills: [
          {
            title: "Team Coordination",
            description: "Proficient in scheduling, delegation, and managing tasks in team settings.",
          },
          {
            title: "Problem-Solving",
            description: "Skilled in quickly resolving unexpected issues in high-pressure environments.",
          },
        ],
        education: {
          degree: "Associate Degree in Business Administration",
          school: "Vancouver Community College",
          location: "Vancouver, BC",
          graduationDate: "May 2023",
        },
        certification: {
          name: "Basic First Aid and CPR",
          details: "Red Cross, Certified",
          date: "2023",
        },
        experience: {
          title: "Operations Assistant",
          company: "The Continental Hotel",
          location: "Vancouver, BC",
          period: "September 2022 - May 2023",
          details:
            "Coordinated team schedules, managed reservations, and supported front desk operations to enhance guest experience.",
        },
        summary:
          "Business administration graduate with hands-on experience in operational support and a passion for teamwork and efficiency.",
      },
    },
    {
      name: "Amber Smith",
      fileType: "Google Document",
      status: "Sent",
      lastEdited: "10/04/2024",
      resumeDetails: {
        email: "asmith@email.com",
        phone: "(234) 567-8901",
        skills: [
          {
            title: "Data Analysis",
            description: "Expert in analyzing and interpreting complex data sets.",
          },
          {
            title: "Project Management",
            description: "Experienced in leading cross-functional teams and delivering projects on schedule.",
          },
        ],
        education: {
          degree: "Bachelor of Science in Data Analytics",
          school: "University of Toronto",
          location: "Toronto, ON",
          graduationDate: "April 2023",
        },
        certification: {
          name: "Data Science Certification",
          details: "Google Analytics",
          date: "2023",
        },
        experience: {
          title: "Data Analyst",
          company: "Tech Solutions Inc",
          location: "Toronto, ON",
          period: "May 2023 - Present",
          details: "Led data analysis projects and created comprehensive reports for stakeholders.",
        },
        summary: "Dedicated data analyst with strong analytical skills and experience in project management.",
      },
    },
    {
      name: "Bennett Anderson",
      fileType: "PDF",
      status: "In Progress",
      lastEdited: "9/30/2024",
      resumeDetails: {
        email: "banderson@email.com",
        phone: "(345) 678-9012",
        skills: [
          {
            title: "Software Development",
            description: "Proficient in multiple programming languages and development methodologies.",
          },
          {
            title: "Technical Leadership",
            description: "Experienced in leading technical teams and mentoring junior developers.",
          },
        ],
        education: {
          degree: "Master of Computer Science",
          school: "University of British Columbia",
          location: "Vancouver, BC",
          graduationDate: "June 2023",
        },
        certification: {
          name: "AWS Solutions Architect",
          details: "Amazon Web Services",
          date: "2023",
        },
        experience: {
          title: "Senior Developer",
          company: "Software Innovations Co",
          location: "Vancouver, BC",
          period: "July 2023 - Present",
          details: "Leading development team in creating innovative software solutions.",
        },
        summary:
          "Experienced software developer with a strong background in technical leadership and cloud architecture.",
      },
    },
  ]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleStatusChange = (status: ResumeItem["status"], index: number) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        status,
      };
      return newData;
    });
  };
  return (
    <div className="w-full px-6 py-4 antialiased">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Resume</h2>
          <p className="text-gray-600 text-sm leading-tight">View and edit your clients&#39; resume.</p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="px-3 py-1.5 border rounded bg-white text-sm font-medium min-w-[150px]"
          >
            <option value="Default">Sorted By: Default</option>
            <option value="NameAsc">Name (A-Z)</option>
            <option value="NameDesc">Name (Z-A)</option>
            <option value="DateNew">Date (Newest First)</option>
            <option value="DateOld">Date (Oldest First)</option>
          </select>

          <button className="bg-spaceCadet text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-opacity-90">
            + Add New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-caribbeanCurrant text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs uppercase text-white font-large tracking-wide">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs uppercase  text-white font-large tracking-wide">
                File Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs uppercase  text-white font-large tracking-wide">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs uppercase  text-white font-large tracking-wide">
                Last Edited
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs uppercase text-white font-large tracking-wide"
              ></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4  text-black font-large">{item.name}</td>
                <td className="px-6 py-4 ">{item.fileType}</td>
                <td className="px-6 py-4">
                  <div className="relative inline-block">
                    <select
                      value={item.status}
                      onChange={(e) => handleStatusChange(e.target.value as ResumeItem["status"], index)}
                      className={`appearance-none px-4 py-1 rounded-md border text-sm font-medium pr-8 ${
                        statusStyles[item.status].button
                      }`}
                    >
                      <option value="Completed">Completed</option>
                      <option value="Sent">Sent</option>
                      <option value="In Progress">In Progress</option>
                    </select>
                    <FaAngleDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-500 pointer-events-none" />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{item.lastEdited}</td>
                <td className="px-6 py-4">
                  <button className="text-black hover:underline font-medium" onClick={() => setSelectedResume(item)}>
                    View Resume
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedResume && <ResumeModal resume={selectedResume} onClose={() => setSelectedResume(null)} />}
    </div>
  );
}
