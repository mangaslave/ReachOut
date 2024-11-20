"use client";
import Image from "next/image";
import editIcon from "../../../public/static/images/editIcon.svg";
import locationIcon from "../../../public/static/images/locationIcon.svg";
import emailIcon from "../../../public/static/images/email.svg";
import phoneIcon from "../../../public/static/images/phoneIcon.svg";
import downloadIcon from "../../../public/static/images/downloadIcon.svg";
import { Document } from "react-pdf";
import { useState } from "react";
import { pdfjs } from "react-pdf";
import { Progress } from "../ui/progress";
import checkmark from "../../../public/static/images/complete-checkmark-icon.svg";
import exclamation from "../../../public/static/images/incomplete-exclamation-icon.svg";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url
).toString();

const profileProgressCalculation = (client: {
	id: number;
	firstName: string | null;
	lastName: string | null;
	lastOnline: string;
	email: string | null;
	phoneNumber: string | null;
	city: string | null;
	postalCode: string | null;
	resumeUrl: string | null;
	skills: string[] | null;
}) => {
	const sections = {
		personalInfo: Boolean(
			client.firstName &&
				client.lastName &&
				client.email &&
				client.city &&
				client.postalCode
		),
		resume: Boolean(client.resumeUrl),
		skills: Boolean(client.skills && client.skills.length > 0),
	};

	const completedSections = Object.values(sections).filter(Boolean).length;
	console.log("completed: ", completedSections);
	return Math.round((completedSections / Object.keys(sections).length) * 100);
};

const SectionStatus = ({ isComplete }: { isComplete: boolean }) => {
	return (
		<div className="flex items-center gap-2">
			{isComplete ? (
				<Image src={checkmark} alt="green checkmark" className="w-5 h-5" />
			) : (
				<Image
					src={exclamation}
					alt="red exclamation mark"
					className="w-5 h-5"
				/>
			)}
		</div>
	);
};

export default function ClientProfile({
	closeModal,
	client,
}: {
	closeModal: () => void;
	client: {
		id: number;
		firstName: string | null;
		lastName: string | null;
		lastOnline: string;
		email: string | null;
		phoneNumber: string | null;
		city: string | null;
		postalCode: string | null;
		resumeUrl: string | null;
		skills: string[] | null;
	};
}) {
	const [resumeModalOpen, setResumeModalOpen] = useState(false);
	const openResumeModal = () => {
		setResumeModalOpen(true);
	};

	const clientProgress: number = profileProgressCalculation(client);

	const sections = {
		personalInfo: Boolean(
			client.firstName &&
				client.lastName &&
				client.email &&
				client.city &&
				client.postalCode
		),
		resume: Boolean(client.resumeUrl),
		skills: Boolean(client.skills && client.skills.length > 0),
	};

	return (
		<div className="m-2 bg-white p-4 flex flex-col items-center justify-center max-w-2xl drop-shadow-sm border border-black rounded-lg">
			<div className="flex items-center justify-between w-full mb-4 px-2 py-2">
				<h1 className="font-semibold text-2xl">Profile Details</h1>
				<button className="flex items-center">
					<Image src={editIcon} width={15} height={15} alt="" />
					<p className="mx-2">Edit</p>
				</button>
			</div>
			<Progress
				value={clientProgress}
				className="w-11/12  [&>div]:bg-caribbeanCurrant"
			/>
			<p className="">{clientProgress}% completed</p>
			<div className="flex justify-between">
				<div className="flex flex-col items-center justify-center w-1/2">
					<div className="bg-spaceCadet text-white w-full my-2 mx-4 rounded-sm p-4">
						<ul>
							<li className="flex items-center justify-between">
								<h1 className="text-xl">{`${client.firstName} ${client.lastName}`}</h1>
								<SectionStatus isComplete={sections.personalInfo} />
							</li>
							<li className="flex items-center">
								<Image src={locationIcon} width={15} height={15} alt="" />
								<p className="font-thin p-1 mx-2">{client.city}</p>
							</li>
							<li className="flex items-center">
								<Image src={emailIcon} width={15} height={15} alt="" />
								<p className="font-thin p-1 mx-2">{client.email}</p>
							</li>
							<li className="flex items-center">
								<Image src={phoneIcon} width={15} height={15} alt="" />
								<p className="font-thin p-1 mx-2">{client.phoneNumber}</p>
							</li>
						</ul>
					</div>
					<div className="bg-spaceCadet text-white w-full my-2 mx-4 rounded-sm p-4">
						<div className="flex items-center justify-between">
							<h1 className="text-xl mx-2">Application History</h1>
							<Image src={downloadIcon} width={15} height={15} alt="" />
						</div>
						<div className="rounded-sm border m-2 my-4 p-2">
							<h3 className="text-sm">Machine Operator</h3>
							<p className="my-1 text-xs">Aecon Group - Vancouver, BC</p>
							<p className="mt-4 text-xs italic">Date Applied: 10/01/2024</p>
						</div>
						<div className="rounded-sm border m-2 my-4 p-2">
							<h3 className="text-sm">Construction Part-Time</h3>
							<p className="my-1 text-xs">
								Goldcorn Construction - Langley, BC
							</p>
							<p className="mt-4 text-xs italic">Date Applied: 10/01/2024</p>
						</div>
						<div className="rounded-sm border m-2 my-4 p-2">
							<h3 className="text-sm">Welder Full-Time</h3>
							<p className="my-1 text-xs">Gary&#39;s Welding - Kelowna, BC</p>
							<p className="mt-4 text-xs italic">Date Applied: 10/01/2024</p>
						</div>
					</div>
				</div>
				<ul className="flex flex-col w-1/2 h-auto">
					<li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
						<div className="flex items-center justify-between">
							<h1 className="text-xl">Resume</h1>
							<SectionStatus isComplete={sections.resume} />
						</div>

						<div className="flex items-center py-4">
							<button
								onClick={openResumeModal}
								className="bg-white text-spaceCadet px-4 rounded-md font-thin"
							>
								View Resume
							</button>
							<Image
								src={downloadIcon}
								width={15}
								height={15}
								alt=""
								className="ml-4"
							/>
						</div>
					</li>
					<li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
						<div className="flex items-center justify-between">
							<h1 className="text-xl">Skills & Qualifications</h1>
							<SectionStatus isComplete={sections.skills} />
						</div>
						<p>some skills here idk</p>
					</li>
					{/* Removed b/c it's not info we're going to store in the db, it was just listed in figma */}
					{/* <li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
						<h1 className="text-xl">Record</h1>
					</li>
					<li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
						<h1 className="text-xl">Education</h1>
					</li>
					<li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
						<h1 className="text-xl">Work Experience</h1>
					</li>

					<li className="bg-spaceCadet text-white h-auto my-2 ml-4 rounded-sm p-4">
						<h1 className="text-xl">Referral History</h1>
					</li> */}
				</ul>
			</div>
			<button
				onClick={closeModal}
				className="bg-caribbeanCurrant w-20 rounded-md mx-8 my-2 self-end text-white"
			>
				Close
			</button>
			{resumeModalOpen && (
				<div>
					<Document file={client.resumeUrl} />
				</div>
			)}
		</div>
	);
}
