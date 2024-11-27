"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const resources = [
  {
    title: "Canada Work Opportunity Tax Credit",
    description:
      "Learn about Canada's tax credits for hiring individuals from underrepresented groups, including second-chance candidates.",
    link: "https://www.canada.ca/en/revenue-agency.html",
    category: "Tax Incentives",
  },
  {
    title: "Fair Chance Hiring Employer Engagement Toolkit",
    description:
      "Access a toolkit designed for Canadian employers to implement second-chance hiring practices.",
    link: "https://nationalreentryresourcecenter.org/resources/fair-chance-hiring-employer-engagement-toolkit",
    category: "Hiring Guides",
  },
  {
    title: "Inclusive Hiring Practices by Canadian Human Rights Commission",
    description:
      "Learn about inclusive hiring practices and how to create a fair and supportive workplace for second-chance employees.",
    link: "https://www.chrc-ccdp.gc.ca/en",
    category: "Workplace Preparation",
  },
  {
    title: "Ontario Human Rights Commission Guidelines",
    description:
      "Understand legal considerations and best practices for hiring individuals with criminal records in Ontario.",
    link: "https://www.ohrc.on.ca/en",
    category: "Legal Guidelines",
  },
];

export function EmployerResources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const externalSearchLink = `https://www.google.com/search?q=${encodeURIComponent(
    searchTerm
  )}`;

  return (
    <div className="flex h-screen bg-gray-100 p-6 -mt-3">
      <main className="w-full max-w-4xl mx-auto">
        <div className="mb-6 flex items-center bg-white shadow-sm rounded-lg">
          <span className="px-3 text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search for resources..."
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
  
        {filteredResources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredResources.map((resource, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {resource.title}
                </h2>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caribbeanCurrant font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              No resources found for your search. You can explore related
              information using external search.
            </p>
            <a
              href={externalSearchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caribbeanCurrant font-medium hover:underline"
            >
              Search "{searchTerm}" on Google →
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
