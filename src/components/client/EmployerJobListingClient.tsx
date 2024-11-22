'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobListing as JobListingComponent } from "./JobListingDescription";
import { JobListing } from './JobListingMaster';
import { CreateJobListingClient } from './CreateJobListingClient';

type Status = 'Active' | 'Archived' | 'Pending';

const statusStyles = {
  Active: 'bg-green-500',
  Archived: 'bg-red-500',
  Pending: 'bg-yellow-500'
} as const;

export function EmployerJobListingClient({
  user
}: {
  user: { name: string; email: string; image: string };
}) {
  const [listings, setListings] = useState([
    { 
      title: 'Landscaper',
      status: 'Active',
      type: 'Full-Time',
      companyName: 'TechCorp',
      logoUrl: '/company-logo.png',
      salary: 120000,
      location: 'San Francisco, CA',
      date: '2024-02-22',
      jobType: 'Full-Time',
      description: 'Join our team as a landscaper.',
      jobPostingId: 101,
      skills: ['Landscaping', 'Equipment Operation'],
      benefit: ['Health Insurance', 'PTO']
    },
    { 
      title: 'Assistant Manager',
      status: 'Archived',
      type: 'Full-Time',
      companyName: 'DesignCo',
      logoUrl: '/company-logo.png',
      salary: 100000,
      location: 'New York, NY',
      date: '2024-02-21',
      jobType: 'Full-Time',
      description: 'Looking for an experienced assistant manager.',
      jobPostingId: 102,
      skills: ['Management', 'Leadership'],
      benefit: ['401k', 'Insurance']
    },
    { 
      title: 'Assistant Manager',
      status: 'Pending',
      type: 'Full-Time',
      companyName: 'MarketPro',
      logoUrl: '/company-logo.png',
      salary: 90000,
      location: 'Remote',
      date: '2024-02-20',
      jobType: 'Full-Time',
      description: 'Join our management team.',
      jobPostingId: 103,
      skills: ['Management', 'Communication'],
      benefit: ['Remote Work', 'Benefits']
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<JobListing | null>(null);
  const [currentListingIndex, setCurrentListingIndex] = useState<number>(0);
  const [isAddListingModalOpen, setIsAddListingModalOpen] = useState(false);

  const handleViewDetails = (listing: JobListing, index: number) => {
    setSelectedListing(listing);
    setCurrentListingIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedListing(null);
  };

  const closeAddListingModal = () => {
    setIsAddListingModalOpen(false);
  };
  
  const handleStatusChange = (listingId: number, newStatus: Status) => {
    setListings(listings.map(listing => 
      listing.jobPostingId === listingId 
        ? { ...listing, status: newStatus } 
        : listing
    ));
  };

  const nextModal = () => {
    const nextIndex = (currentListingIndex + 1) % listings.length;
    setCurrentListingIndex(nextIndex);
    setSelectedListing(listings[nextIndex]);
  };

  return (
    <div className="p-6 bg-white">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Your Listings</h1>
          <p className="text-sm text-gray-500">View your current job listings</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-white border border-gray-200">
                <SelectValue placeholder="Job Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landscaper">Landscaper</SelectItem>
                <SelectItem value="assistant-manager">Assistant Manager</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px] bg-white border border-gray-200">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-Time</SelectItem>
                <SelectItem value="part-time">Part-Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            className="bg-spaceCadet hover:bg-indigo-800 text-white"
            onClick={() => setIsAddListingModalOpen(true)}
          >
            + Add New Listing
          </Button>
        </div>

        <div className="rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-caribbeanCurrant text-white">
                <th className="text-left p-4 font-medium">Position</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-right p-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
              <tr key={listing.jobPostingId} className="border-b">
                <td className="p-4">{listing.title}</td>
                <td className="p-4">
                  <Select 
                    defaultValue={listing.status} 
                    onValueChange={(value) => handleStatusChange(listing.jobPostingId, value as Status)}
                  >
                    <SelectTrigger className="w-32 px-2 py-1 bg-white border hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${statusStyles[listing.status as Status]}`} />
                        <span>{listing.status}</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          Active
                        </div>
                      </SelectItem>
                      <SelectItem value="Archived">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          Archived
                        </div>
                      </SelectItem>
                      <SelectItem value="Pending">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          Pending
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-4">{listing.type}</td>
                <td className="p-4 text-right">
                  <Button 
                    variant="link" 
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => handleViewDetails(listing, index)}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && selectedListing && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <JobListingComponent 
            jobDetails={selectedListing}
            nextModal={nextModal}
            closeModal={closeModal}
          />
        </div>
      )}

      {isAddListingModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="relative w-full max-w-3xl mx-auto my-8">
            <Button
              className="absolute top-4 right-4 z-50"
              variant="ghost"
              onClick={closeAddListingModal}
            >
              ×
            </Button>
            <CreateJobListingClient />
          </div>
        </div>
      )}
    </div>
  );
}