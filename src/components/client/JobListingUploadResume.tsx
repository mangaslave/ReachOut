"use client";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "../ui/tabs";
import {Button} from "@/components/ui/button";
import {FileUploader} from "react-drag-drop-files";
import Link from "next/link";
import Dropzone from "./DropZone";

const fileTypes = ["PDF", "DOCX"];

export function JobListingUploadResume({
  nextModal,
  closeModal,
}: {
  nextModal: () => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
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
                <Dropzone />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-4">
            <div className="border-2 border-dashed border-gray-200 rounded-lg">
              <div className="flex flex-col items-center justify-center h-[160px]">
                <p className="text-sm text-gray-500">Recent uploads will appear here</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* <Link href="/job-listing/interview-availability"> */}
        <Button onClick={nextModal} variant="secondary" className="mt-6">
          Next
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
}
