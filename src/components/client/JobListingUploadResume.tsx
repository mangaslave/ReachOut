"use client";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "../ui/tabs";
import {Button} from "@/components/ui/button";
import Dropzone from "./DropZone";
import UploadResumeAction from "@/actions/UploadResumeAction";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";

export function JobListingUploadResume({
  nextModal,
  previousModal,
  closeModal,
  setResumeLink,
  setResumeName,
  clientId,
  resumeUrl,
}: {
  nextModal: () => void;
  previousModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setResumeLink: Dispatch<SetStateAction<string>>;
  setResumeName: Dispatch<SetStateAction<string>>;
  clientId: number;
  resumeUrl: string;
}) {
  const [fileData, setFileData] = useState<File>();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [boxChecked, setBoxChecked] = useState(true);

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  const setChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setBoxChecked(e.target.checked);
    if (e.target.checked) {
      setResumeLink(resumeUrl);
    }
  };

  const moveToNext = async () => {
    console.log(boxChecked);
    if (!fileData && !resumeUrl) {
      setErrorModalOpen(true);
      setTimeout(() => {
        setErrorModalOpen(false);
      }, 4000);
      return;
    }
    if (!boxChecked && !fileData) {
      setErrorModalOpen(true);
      setTimeout(() => {
        setErrorModalOpen(false);
      }, 4000);
      return;
    }
    if (fileData) {
      const newResume = await UploadResumeAction({file: fileData, clientId});
      if (newResume.url) {
        setResumeName(newResume.name);
        setResumeLink(newResume.url);
      } else {
        console.log(newResume.message);
        setResumeName("Error loading file; please try again.");
      }
      nextModal();
    } else {
      setResumeLink(resumeUrl);
      setResumeName(`${name}`);
      nextModal();
    }
  };

  const dateTimeAndName = resumeUrl.split("/")[5];
  const date = dateTimeAndName.split("T")[0];
  const name = dateTimeAndName.split("Z-")[1].replaceAll("_", " ");

  return (
    <div
      onClick={closeModal}
      className="max-w-3xl w-full h-full mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
    >
      <div>
        <h1 className="font-bold text-2xl mb-1">Job Listing</h1>
        <span className="text-gray-600">Company name</span>
      </div>

      <div className="border-b border-gray-300 my-4" />

      <h2 className="text-xl font-bold">Upload Resume</h2>

      <div className="w-full mt-4">
        <Tabs defaultValue="new">
          <TabsList className="bg-transparent h-auto border-0 p-0">
            <TabsTrigger
              value="new"
              className="rounded-md hover:bg-ylnMnBlue data-[state=active]:bg-spaceCadet data-[state=active]:text-white"
            >
              New Upload
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900"
            >
              Recent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="mt-4">
            <div className="">
              <div className="flex flex-col items-center justify-center h-[160px]">
                <Dropzone setFileData={setFileData} setResumeName={setResumeName} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-4">
            <div className="border-2 border-dashed border-gray-200 rounded-lg">
              <div className="flex flex-col items-center justify-center h-[160px]">
                {resumeUrl ? (
                  <div className="flex">
                    <input type="checkbox" className="" defaultChecked={true} onChange={(e) => setChangeEvent(e)} />
                    <p className="mx-5">
                      {name}
                      <span className="mx-5">Last Edited: {date}</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Recent uploads will appear here</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Button onClick={previousModal} variant="outline" className="py-2 mx-1">
          Go Back
        </Button>
        <Button onClick={moveToNext} variant="secondary" className="mt-6">
          Next
        </Button>
      </div>
      {errorModalOpen && (
        <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-md shadow-black rounded-lg text-spaceCadet w-96 flex flex-col p-2 items-center justify-center h-auto">
            <h3 className="py-8 text-lg">Please fix the following errors:</h3>
            <p>
              Please select a resume from the recents list, <br /> or upload a new one.
            </p>
            <Button variant="secondary" className="bg-spaceCadet text-white mt-4" onClick={closeErrorModal}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
