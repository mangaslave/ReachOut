"use client";

import React, {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {FileText} from "lucide-react";
import {Application} from "@/actions/GetApplicationsAction";
import {Document, Page} from "react-pdf";
import {pdfjs} from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import deleteApplicationAction from "@/actions/DeleteApplicationAction";
import {redirect} from "next/navigation";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

interface ModalProps {
  closeModal: () => void;
  application: Application;
  setInterview: (applicationId: number) => void;
}

export function ApplicationModal({closeModal, application, setInterview}: ModalProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeUrl] = useState<string>(application.resumeUrl);

  const deleteApplication = async () => {
    const deleted = await deleteApplicationAction(application.applicationId);
    if (deleted.success) {
      closeModal();
      redirect("/employer/applications");
    } else {
      alert("Error deleting application");
    }
  };

  const interviewClient = () => {
    setInterview(application.applicationId);
    closeModal();
  };
  const openResumeModal = () => {
    setResumeModalOpen(true);
  };
  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };
  const viewApplication = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    openResumeModal();
  };
  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent className="max-w-3xl h-5/6">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold">Applicant Details</DialogTitle>
        </DialogHeader>

        <div className="p-4 space-y-20">
          <div>
            <h1 className="text-3xl font-bold my-2">Contact</h1>
            <p className="text-lg ">{`${application.applicantFirstName} ${application.applicantLastName}`}</p>
            <p className="text-lg">{application.location}, BC</p>
            <p className="text-lg">{application.applicantEmail}</p>
            <p className="text-lg">{application.phoneNumber ? application.phoneNumber : "No Phone Number Provided"}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold my-2">Resume</h1>
            </div>
            <div className="border rounded p-2 flex justify-evenly items-center">
              <FileText className="h-10 w-10 mx-0" />
              <p className="font-sm">{`${application.applicantFirstName}_${application.applicantLastName}_Resume.pdf`}</p>
              <p className="font-sm">{application.appliedDate}</p>
              <Button variant="outline" className="text-sm" onClick={(e) => viewApplication(e)}>
                View Resume
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold my-2">Interview Availability</h1>
            <p className="text-lg">{application.availability}</p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              className="flex-1 text-white bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant hover:text-white"
              onClick={interviewClient}
            >
              Interview
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-spaceCadet hover:bg-ylnMnBlue text-white hover:text-white"
              onClick={deleteApplication}
            >
              Discard
            </Button>
          </div>
          {resumeModalOpen && (
            <Dialog open={resumeModalOpen} onOpenChange={closeModal}>
              <DialogContent>
                <DialogTitle>{`${application.applicantFirstName} ${application.applicantLastName} Resume`}</DialogTitle>
                <div className="fixed z-50 inset-0 rounded-md flex items-center justify-center bg-black bg-opacity-50">
                  <Document
                    className="max-w-2xl inset-0 rounded-md flex-col h-auto items-center justify-center"
                    file={resumeUrl}
                  >
                    <Page className="rounded-md scale-95 overflow-hidden" pageNumber={1}>
                      <button
                        onClick={closeResumeModal}
                        className="bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant w-20 rounded-md mx-8 my-2 float-right text-white hover:text-white hover:scale-105 transition-all ease-in-out"
                      >
                        Close
                      </button>
                    </Page>
                  </Document>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
