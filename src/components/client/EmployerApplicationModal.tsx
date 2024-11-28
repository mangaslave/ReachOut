"use client";

import React from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {FileText} from "lucide-react";
import {Application} from "@/actions/GetApplicationsAction";

interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  applications: Application[];
}

export function ApplicationModal({isOpen, setOpen, applications}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Applicant Details</DialogTitle>
        </DialogHeader>

        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium">Applicant Name</h3>
            <p className="text-sm text-gray-600">Ariana Grande</p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Contact</h3>
            <p className="text-sm text-gray-600">ariana@gmail.com</p>
            <p className="text-sm text-gray-600">179-120-2093</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <h3 className="text-sm font-medium">Resume</h3>
            </div>
            <div className="border rounded p-2">
              <Button variant="outline" className="w-full text-sm">
                View Resume
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Availability</h3>
            <p className="text-sm text-gray-600">November 25 2024</p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1 bg-teal-600 hover:bg-teal-700">Interview</Button>
            <Button variant="outline" className="flex-1 bg-red-500">
              Discard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
