"use client";
import {Textarea} from "../ui/textarea";
import {Label} from "../ui/label";
import {Button} from "../ui/button";
import {Dispatch, SetStateAction, useState} from "react";

export function JobListingContactInfo({
  nextModal,
  previousModal,
  closeModal,
  setContactFirstName,
  setContactLastName,
  setContactCity,
  setContactEmail,
  setContactPhone,
  contactInfo,
}: {
  nextModal: () => void;
  previousModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setContactFirstName: Dispatch<SetStateAction<string>>;
  setContactLastName: Dispatch<SetStateAction<string>>;
  setContactCity: Dispatch<SetStateAction<string>>;
  setContactEmail: Dispatch<SetStateAction<string>>;
  setContactPhone: Dispatch<SetStateAction<string>>;
  contactInfo: {contactFirstName: string; contactLastName: string; contactCity: string; contactPhone: string};
}) {
  const [firstName, setFirstName] = useState(contactInfo.contactFirstName);
  const [lastName, setLastName] = useState(contactInfo.contactLastName);
  const [cityName, setCityName] = useState(contactInfo.contactCity);
  const [phoneNumber, setPhoneNumber] = useState(contactInfo.contactPhone);

  const moveToNext = () => {
    setContactFirstName(firstName);
    setContactLastName(lastName);
    setContactCity(cityName);
    setContactPhone(phoneNumber);
    // TODO: setContactEmail
    const validData = validateForm();
    if (validData) {
      nextModal();
    } else {
      // TODO: Actually validate this data, notifiy nicely
      alert("Missing information in form");
    }
  };

  function validateForm() {
    if (firstName === "" || lastName === "" || cityName === "" || phoneNumber === "") return false;
    return true;
  }

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
        <Label htmlFor="firstName">First Name</Label>
        <Textarea
          className="resize-none"
          placeholder="First Name"
          defaultValue={contactInfo.contactFirstName.length > 0 ? contactInfo.contactFirstName : ""}
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="lastName">Last Name</Label>
        <Textarea
          className="resize-none"
          placeholder="Last Name"
          defaultValue={contactInfo.contactLastName.length > 0 ? contactInfo.contactLastName : ""}
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="cityName">City</Label>
        <Textarea
          className="resize-none"
          placeholder="City"
          defaultValue={contactInfo.contactCity.length > 0 ? contactInfo.contactCity : ""}
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="phoneNumber">Phone</Label>
        <Textarea
          className="resize-none"
          placeholder="Phone"
          defaultValue={contactInfo.contactPhone.length > 0 ? contactInfo.contactPhone : ""}
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <Button onClick={previousModal} variant="outline" className="py-2 mx-1">
        Go Back
      </Button>
      <Button variant="secondary" className="bg-spaceCadet text-white mt-4" onClick={moveToNext}>
        Next
      </Button>
    </div>
  );
}
