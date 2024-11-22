"use client";
import {Textarea} from "../ui/textarea";
import {Label} from "../ui/label";
import {Button} from "../ui/button";
import {Dispatch, SetStateAction, useState} from "react";
import {JobListing} from "./JobListingMaster";
import {validEmail, validPhoneNumber} from "@/lib/validations";
import {twMerge} from "tailwind-merge";

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
  jobDetails,
}: {
  nextModal: () => void;
  previousModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setContactFirstName: Dispatch<SetStateAction<string>>;
  setContactLastName: Dispatch<SetStateAction<string>>;
  setContactCity: Dispatch<SetStateAction<string>>;
  setContactEmail: Dispatch<SetStateAction<string>>;
  setContactPhone: Dispatch<SetStateAction<string>>;
  contactInfo: {
    contactFirstName: string;
    contactLastName: string;
    contactCity: string;
    contactPhone: string;
    contactEmail: string;
  };
  jobDetails: JobListing | null;
}) {
  const [firstName, setFirstName] = useState(contactInfo.contactFirstName);
  const [lastName, setLastName] = useState(contactInfo.contactLastName);
  const [cityName, setCityName] = useState(contactInfo.contactCity);
  const [phoneNumber, setPhoneNumber] = useState(contactInfo.contactPhone);
  const [email, setEmail] = useState(contactInfo.contactEmail);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [cityNameError, setCityNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const moveToNext = () => {
    setContactFirstName(firstName);
    setContactLastName(lastName);
    setContactCity(cityName);
    setContactPhone(phoneNumber);
    setContactEmail(email);
    const validData = validateForm();
    if (validData) {
      nextModal();
    } else {
      setErrorModalOpen(true);
      setTimeout(() => {
        setErrorModalOpen(false);
      }, 4000);
    }
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  function validateForm() {
    setErrors([]);
    let newErrors = [];
    console.log(firstName, lastName, email, phoneNumber, cityName);
    const phone = validPhoneNumber.safeParse(phoneNumber);
    console.log(phone);
    if (!phone.success) {
      newErrors.push(`Invalid Phone Number`);
      setPhoneNumberError(true);
    }
    const emailAddress = validEmail.safeParse(email);
    if (!emailAddress.success) {
      newErrors.push(`Invalid email`);
      setEmailError(true);
    }
    if (firstName.length < 2) {
      newErrors.push(`First name must be at least 2 characters long`);
      setFirstNameError(true);
    }
    if (lastName.length < 2) {
      newErrors.push(`Last name must be at least 2 characters long`);
      setLastNameError(true);
    }
    if (cityName.length < 4) {
      newErrors.push(`City must be at least 4 characters long`);
      setCityNameError(true);
    }
    console.log(newErrors);
    if (newErrors.length === 0) {
      return true;
    } else {
      setErrors(newErrors);
      return false;
    }
  }

  return (
    <div
      onClick={closeModal}
      className="max-w-3xl w-full h-full mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">{jobDetails?.title}</h1>
          <span className="text-gray-600">{jobDetails?.companyName}</span>
        </div>
      </div>

      <div className="border-b border-caribbeanCurrant my-4" />
      <h2 className="text-xl font-bold text-spaceCadet">Contact Information</h2>

      <div className="flex justify-between">
        <div className="grid w-96 gap-1.5 mt-6 mr-6">
          <Label htmlFor="firstName">First Name</Label>
          <Textarea
            className={twMerge("resize-none", firstNameError ? "border-red-600 hover:border-red-800" : "")}
            placeholder="First Name"
            defaultValue={contactInfo.contactFirstName.length > 0 ? contactInfo.contactFirstName : ""}
            id="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
              setFirstNameError(false);
            }}
          />
        </div>

        <div className="grid w-96 gap-1.5 mt-6">
          <Label htmlFor="lastName">Last Name</Label>
          <Textarea
            className={twMerge("resize-none", lastNameError ? "border-red-600 hover:border-red-800" : "")}
            placeholder="Last Name"
            defaultValue={contactInfo.contactLastName.length > 0 ? contactInfo.contactLastName : ""}
            id="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
              setLastNameError(false);
            }}
          />
        </div>
      </div>
      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="cityName">City</Label>
        <Textarea
          className={twMerge("resize-none", cityNameError ? "border-red-600 hover:border-red-800" : "")}
          placeholder="City"
          defaultValue={contactInfo.contactCity.length > 0 ? contactInfo.contactCity : ""}
          id="cityName"
          onChange={(e) => {
            setCityName(e.target.value);
            setCityNameError(false);
          }}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="phoneNumber">Phone</Label>
        <Textarea
          className={twMerge("resize-none", phoneNumberError ? "border-red-600 hover:border-red-800" : "")}
          placeholder="Phone"
          defaultValue={contactInfo.contactPhone.length > 0 ? contactInfo.contactPhone : ""}
          id="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setPhoneNumberError(false);
          }}
        />
      </div>

      <div className="grid w-full gap-1.5 mt-6">
        <Label htmlFor="email">E-mail</Label>
        <Textarea
          className={twMerge("resize-none", emailError ? "border-red-600 hover:border-red-800" : "")}
          placeholder="E-mail"
          defaultValue={contactInfo.contactEmail.length > 0 ? contactInfo.contactEmail : ""}
          id="phoneNumber"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
        />
      </div>

      <Button onClick={previousModal} variant="outline" className="py-2 mx-1">
        Go Back
      </Button>
      <Button variant="secondary" className="bg-spaceCadet text-white mt-4" onClick={moveToNext}>
        Next
      </Button>
      {errorModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-md shadow-black rounded-lg text-spaceCadet w-96 flex flex-col p-2 items-center justify-center h-auto">
            <h3 className="py-8 text-lg">Please fix the following errors:</h3>
            {errors.map((err) => {
              return <p key={errors.indexOf(err)}>{err}</p>;
            })}
            <Button variant="secondary" className="bg-spaceCadet text-white mt-4" onClick={closeErrorModal}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
