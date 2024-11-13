"use client";
import {Textarea} from "../ui/textarea";
import {Label} from "../ui/label";
import {Button} from "../ui/button";
import Link from "next/link";
import {JobApplication} from "@/app/job-listing/page";
import {Dispatch, SetStateAction, useState} from "react";

export function JobListingContactInfo({
  nextModal,
  closeModal,
  setContactFirstName,
  setContactLastName,
  setContactCity,
  setContactEmail,
  setContactPhone,
}: {
  nextModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setContactFirstName: Dispatch<SetStateAction<string>>;
  setContactLastName: Dispatch<SetStateAction<string>>;
  setContactCity: Dispatch<SetStateAction<string>>;
  setContactEmail: Dispatch<SetStateAction<string>>;
  setContactPhone: Dispatch<SetStateAction<string>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cityName, setCityName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const moveToNext = () => {
    setContactFirstName(firstName);
    setContactLastName(lastName);
    setContactCity(cityName);
    setContactPhone(phoneNumber);
    // TODO: setContactEmail
    nextModal();
  };

  return (
    <div
      onClick={closeModal}
      className="max-w-3xl w-full h-full mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">Job Listing</h1>
          <span className="text-gray-600">Company name</span>
        </div>
      </div>

      <div className="border-b border-caribbeanCurrant my-4" />
      <h2 className="text-xl font-bold text-spaceCadet">Contact Information</h2>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">First Name</Label>
        <Textarea
          className="resize-none"
          placeholder="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">Last Name</Label>
        <Textarea
          className="resize-none"
          placeholder="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">City</Label>
        <Textarea
          className="resize-none"
          placeholder="City"
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="message">Phone</Label>
        <Textarea
          className="resize-none"
          placeholder="Phone"
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <Button variant="secondary" className="bg-spaceCadet text-white mt-4" onClick={moveToNext}>
        Next
      </Button>
    </div>
  );
}
