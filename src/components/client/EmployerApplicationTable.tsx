"use client";
import {Application} from "@/actions/GetApplicationsAction";
import {Document, Page} from "react-pdf";
import {pdfjs} from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import {useState} from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function EmployerApplicationTable({applications}: {applications: Application[]}) {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string>();

  const openResumeModal = () => {
    setResumeModalOpen(true);
  };
  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };
  const viewApplication = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const index = Number(e.currentTarget.value);
    setResumeUrl(applications[index].resumeUrl);
    openResumeModal();
  };
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-spaceCadet">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-white">Name</th>
            <th className="px-4 py-3 text-left font-medium text-white">Position</th>
            <th className="px-4 py-3 text-left font-medium text-white">Type</th>
            <th className="px-4 py-3 text-left font-medium text-white">Status</th>
            <th className="px-4 py-3 text-left font-medium text-white"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {applications.map((app, index) => (
            <tr key={index}>
              <td className="px-4 py-4 text-gray-900">{`${app.applicantFirstName} ${app.applicantLastName}`}</td>
              <td className="px-4 py-4 text-gray-900">{app.jobTitle}</td>
              <td className="px-4 py-4 text-gray-900">{app.jobTitle}</td>
              <td className="px-4 py-4">
                <select className="w-36 border rounded-lg border-black text-black" name="" id="" defaultValue="New">
                  <option value="New">🔴 NEW!</option>
                  <option value="Interviewing">🟡 Interviewing</option>
                  <option value="Hired">🟢 Hired</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={(e) => viewApplication(e)}
                  key={index}
                  value={index}
                  className="hover:underline bg-none"
                >
                  View Full Application
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {resumeModalOpen && (
        <div className="fixed z-50 inset-0 overflow-hidden rounded-md flex items-center justify-center bg-black bg-opacity-50">
          <Document
            className="max-w-2xl inset-0 overflow-hidden rounded-md flex-col h-auto items-center justify-center"
            file={resumeUrl}
          >
            <Page className="rounded-md scale-95 overflow-hidden" pageNumber={1}>
              <button
                onClick={closeResumeModal}
                className="bg-caribbeanCurrant w-20 rounded-md mx-8 my-2 float-right text-white"
              >
                Close
              </button>
            </Page>
          </Document>
        </div>
      )}
    </div>
  );
}
