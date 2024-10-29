"use client";
import Image from "next/image";
import editIcon from "../../../public/editIcon.svg";
import locationIcon from "../../../public/locationIcon.svg";
import emailIcon from "../../../public/email.svg";
import phoneIcon from "../../../public/phoneIcon.svg";
import downloadIcon from "../../../public/downloadIcon.svg";

export default function ClientProfile() {
  return (
    <div className="m-2 flex flex-col items-center justify-center max-w-xl drop-shadow-sm border border-black rounded-lg">
      <div className="flex items-center justify-between w-full mb-4 px-8 py-2">
        <h1 className="font-semibold">Profile Details</h1>
        <button className="flex items-center">
          <Image src={editIcon} width={15} height={15} alt="" />
          <p className="font-thin mx-2">Edit</p>
        </button>
      </div>
      <div className="w-11/12 h-3 border border-black rounded-full overflow-hidden ">
        <div className="h-full bg-caribbeanCurrant rounded-full w-1/3"></div>
      </div>
      <p className="font-thin">31% completed</p>
      <div className="flex justify-between">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="bg-spaceCadet text-white w-full my-2 mx-4 rounded-sm p-4">
            <ul>
              <li className="flex items-center">
                <h1 className="font-semibold">Gregory Wick</h1>
              </li>
              <li className="flex items-center">
                <Image src={locationIcon} width={15} height={15} alt="" />
                <p className="font-thin p-1 mx-2">Burnaby, BC</p>
              </li>
              <li className="flex items-center">
                <Image src={emailIcon} width={15} height={15} alt="" />
                <p className="font-thin p-1 mx-2">gregorywick@gmail.com</p>
              </li>
              <li className="flex items-center">
                <Image src={phoneIcon} width={15} height={15} alt="" />
                <p className="font-thin p-1 mx-2">(604) 783-8879</p>
              </li>
            </ul>
          </div>
          <div className="bg-spaceCadet text-white w-full my-2 mx-4 rounded-sm p-4">
            <div className="flex items-center">
              <h1 className="font-semibold mx-4">Application History</h1>
              <Image src={downloadIcon} width={15} height={15} alt="" />
            </div>
            <div className="rounded-sm border m-2 my-4 p-2">
              <h3 className="font-medium">Machine Operator</h3>
              <p className="font-thin">Aecon Group - Vancouver, BC</p>
              <p className="font-thin">Date Applied: 10/01/2024</p>
            </div>
            <div className="rounded-sm border m-2 my-4 p-2">
              <h3 className="font-medium">Machine Operator</h3>
              <p className="font-thin">Aecon Group - Vancouver, BC</p>
              <p className="font-thin">Date Applied: 10/01/2024</p>
            </div>
            <div className="rounded-sm border m-2 my-4 p-2">
              <h3 className="font-medium">Machine Operator</h3>
              <p className="font-thin">Aecon Group - Vancouver, BC</p>
              <p className="font-thin">Date Applied: 10/01/2024</p>
            </div>
          </div>
        </div>
        <ul className="flex flex-col w-1/2 h-auto">
          <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
            <h1 className="font-semibold">Resume</h1>
            <div className="flex items-center">
              <button className="bg-white text-spaceCadet px-4 rounded-md font-thin">View Resume</button>
              <Image src={downloadIcon} width={15} height={15} alt="" className="ml-4" />
            </div>
          </li>
          <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
            <h1 className="font-semibold">Record</h1>
          </li>
          <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
            <h1 className="font-semibold">Education</h1>
          </li>
          <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
            <h1 className="font-semibold">Work Experience</h1>
          </li>
          <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
            <h1 className="font-semibold">Skills/Qualifications</h1>
          </li>
          <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
            <h1 className="font-semibold">Referral History</h1>
          </li>
        </ul>
      </div>
      <button className="bg-caribbeanCurrant w-20 rounded-md mx-8 my-2 self-end text-white">Close</button>
    </div>
  );
}
