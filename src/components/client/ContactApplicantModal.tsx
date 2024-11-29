"use client";
import {Application} from "@/actions/GetApplicationsAction";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "../ui/dialog";
import {Button} from "../ui/button";
import {FormEvent, useState} from "react";
import {twMerge} from "tailwind-merge";
import validateEmailContent from "@/lib/validations";
import SendEmailAction from "@/actions/SendEmailAction";
import {useSearchParams} from "next/navigation";

export default function ContactApplicantModal({
  closeModal,
  application,
  activeUser,
}: {
  closeModal: () => void;
  application: Application;
  activeUser: {
    name: string;
    email: string;
    image: string;
  };
}) {
  const params = useSearchParams();
  const currentName = params.get("name");
  const currentEmail = params.get("email");
  const currentMessage = params.get("message");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(currentName ? currentName : activeUser.name);
  const [email, setEmail] = useState(currentEmail ? currentEmail : activeUser.email);
  const [message, setMessage] = useState(currentMessage ? currentMessage : "");
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const emailClient = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const valid = validateEmailContent(name, email, message);
    if (!valid.success) {
      alert(`Error: ${valid.error}`);
      setName(name);
      setEmail(email);
      setMessage(message);
      setIsLoading(false);
      return;
    }
    const emailSent = await SendEmailAction(name, email, message);
    if (!emailSent.success) {
      alert(emailSent.message);
      setName(name);
      setEmail(email);
      setMessage(message);
      setIsLoading(false);
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
    setSuccessModalOpen(true);
    setTimeout(() => {
      setSuccessModalOpen(false);
      closeModal();
    }, 3000);
  };

  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Email {`${application.applicantFirstName} ${application.applicantLastName}`}</DialogTitle>
        </DialogHeader>

        <form action="" onSubmit={emailClient} encType="text/plain" className="flex flex-col justify-between py-6">
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="name" className="py-1 text-lg">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="dark:bg-gray-800 rounded-md border-solid focus:border-gray-500 border-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <label htmlFor="email" className="py-1 text-lg">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="dark:bg-gray-800 rounded-md border-solid focus:border-gray-500 border-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-center max-w-3xl">
            <label htmlFor="message" className="py-1 text-lg">
              Message
            </label>
            <textarea
              name="message"
              rows={8}
              cols={200}
              value={message}
              autoCorrect="on"
              onChange={(e) => setMessage(e.target.value)}
              required
              className="dark:bg-gray-800 rounded-md border-solid focus:border-gray-500 border-2 w-full resize-none"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onSubmit={emailClient}
              disabled={isLoading}
              variant="outline"
              className={twMerge(
                "flex-1 text-white hover:text-white bg-caribbeanCurrant hover:bg-darkCarribbeanCurrant",
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              )}
            >
              Send
            </Button>
            <Button
              onSubmit={closeModal}
              disabled={isLoading}
              variant="outline"
              className={twMerge(
                "flex-1 bg-spaceCadet hover:bg-ylnMnBlue text-white hover:text-white",
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              )}
            >
              Discard
            </Button>
          </div>
        </form>
        {successModalOpen && (
          <div className="fixed z-50 py-4 inset-0 flex pt-56 items-start justify-center bg-black bg-opacity-50">
            <div className="bg-white shadow-md shadow-black rounded-lg text-spaceCadet w-96 flex items-center justify-center h-24">
              <h3 className="py-8 text-lg">Email sent successfully! ✅</h3>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
