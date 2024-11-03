"use client";
import React from 'react';

interface ResumeDetails {
  email: string;
  phone: string;
  skills: Array<{
    title: string;
    description: string;
  }>;
  education: {
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
  };
  certification: {
    name: string;
    details: string;
    date: string;
  };
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    details: string;
  };
  summary: string;
}

interface ResumeItem {
  name: string;
  fileType: string;
  status: "Completed" | "Sent" | "In Progress";
  lastEdited: string;
  resumeDetails: ResumeDetails;
}

interface ResumeModalProps {
  resume: ResumeItem;
  onClose: () => void;
}

export function ResumeModal({ resume, onClose }: ResumeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{resume.name}</h2>
            <p className="text-gray-600">{resume.resumeDetails.email}</p>
            <p className="text-gray-600">{resume.resumeDetails.phone}</p>
          </div>
          <button 
            className="bg-spaceCadet text-white px-4 py-2 rounded hover:bg-ylnMnBlue"
            onClick={onClose}
          >
            Edit Resume
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc pl-5 space-y-2">
              {resume.resumeDetails.skills.map((skill, index) => (
                <li key={index}>
                  <span className="font-medium">{skill.title}:</span> {skill.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <div>
              <p className="font-medium">{resume.resumeDetails.education.degree}</p>
              <p>{resume.resumeDetails.education.school}, {resume.resumeDetails.education.location}</p>
              <p className="text-gray-600">Graduated: {resume.resumeDetails.education.graduationDate}</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Certification</h3>
            <div>
              <p className="font-medium">{resume.resumeDetails.certification.name}</p>
              <p>{resume.resumeDetails.certification.details}</p>
              <p className="text-gray-600">Certified in {resume.resumeDetails.certification.date}</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <div>
              <p className="font-medium">{resume.resumeDetails.experience.title}</p>
              <p>{resume.resumeDetails.experience.company}, {resume.resumeDetails.experience.location}</p>
              <p className="text-gray-600">{resume.resumeDetails.experience.period}</p>
              <p className="mt-2">{resume.resumeDetails.experience.details}</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p>{resume.resumeDetails.summary}</p>
          </section>
        </div>
      </div>
    </div>
  );
}