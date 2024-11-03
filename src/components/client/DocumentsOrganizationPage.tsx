"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

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
}

const statusStyles: StatusStyleMap = {
  "Completed": {
    button: "bg-green-50 hover:bg-green-100 border-green-200",
    dot: "bg-green-500"
  },
  "Sent": {
    button: "bg-gray-50 hover:bg-gray-100 border-gray-200",
    dot: "bg-gray-400"
  },
  "In Progress": {
    button: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    dot: "bg-yellow-400"
  }
} as const;

export function DocumentOrganizationComponent() {
  const [itemsToDisplay, setItemsToDisplay] = useState("10");
  const [sortBy, setSortBy] = useState("Default");
  const [data, setData] = useState<ResumeItem[]>([
    {
      name: "John Doe",
      fileType: "PDF",
      status: "Completed",
      lastEdited: "October 12, 2024 12:00PM",
    },
    {
      name: "Amber Smith",
      fileType: "Google Document",
      status: "Sent",
      lastEdited: "October 04, 2024 1:43PM",
    },
    {
      name: "Bennett Anderson",
      fileType: "PDF",
      status: "In Progress",
      lastEdited: "September 30, 2024 5:23PM",
    },
  ]);
  
  const handleItemsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsToDisplay(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleStatusChange = (index: number, newStatus: ResumeItem['status']) => {
    const newData = [...data];
    newData[index] = { ...newData[index], status: newStatus };
    setData(newData);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Resume</h2>
          <p className="text-gray-600">View and edit your clients' resume.</p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="pl-3 pr-8 py-1 border rounded bg-white text-sm appearance-none"
          >
            <option value="Default">Sorted By: Default</option>
            <option value="NameAsc">Name (A-Z)</option>
            <option value="NameDesc">Name (Z-A)</option>
            <option value="DateNew">Date (Newest First)</option>
            <option value="DateOld">Date (Oldest First)</option>
          </select>
          <button className="bg-spaceCadet text-white hover:bg-ylnMnBlue text-xs px-4 rounded-md h-8">
            + Add New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-caribbeanCurrant text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">File Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Last Edited</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{item.fileType}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative inline-block">
                    <div className={`inline-flex items-center px-3 py-1 rounded-md border text-sm ${statusStyles[item.status].button}`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${statusStyles[item.status].dot}`}></div>
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(index, e.target.value as ResumeItem['status'])}
                        className="bg-transparent border-none appearance-none pr-8 focus:outline-none cursor-pointer"
                      >
                        <option value="Completed">Completed</option>
                        <option value="Sent">Sent</option>
                        <option value="In Progress">In Progress</option>
                      </select>
                      <FaAngleDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{item.lastEdited}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:underline">View Resume</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}   