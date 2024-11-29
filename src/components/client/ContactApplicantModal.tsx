"use client";
import {Application} from "@/actions/GetApplicationsAction";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "../ui/dialog";
import {Button} from "../ui/button";
import {FormEvent, useState} from "react";
import {twMerge} from "tailwind-merge";
import validateEmailContent from "@/lib/validations";
import SendEmailAction from "@/actions/SendEmailAction";
import {useSearchParams} from "next/navigation";
import {BsTrash3} from "react-icons/bs";
import {BsTypeH1} from "react-icons/bs";
import {BsTypeH2} from "react-icons/bs";
import {BsTypeH3} from "react-icons/bs";
import {CiTextAlignCenter} from "react-icons/ci";
import {CiTextAlignLeft} from "react-icons/ci";
import {CiTextAlignRight} from "react-icons/ci";
import {MdFormatBold} from "react-icons/md";
import {GoItalic} from "react-icons/go";
import {FiUnderline} from "react-icons/fi";
import {RxTextNone} from "react-icons/rx";
import {HiListBullet} from "react-icons/hi2";
import {MdFormatListNumbered} from "react-icons/md";
import {IoLinkOutline} from "react-icons/io5";
import {CiImageOn} from "react-icons/ci";
import {FaCode} from "react-icons/fa6";
import {CiCircleCheck} from "react-icons/ci";

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
      <DialogContent className="p-0 border-0 max-w-3xl h-5/6">
        <DialogHeader className="text-white my-0">
          <DialogTitle className="bg-ylnMnBlue border-ylnMnBlue rounded-t-md text-white h-[3rem] m-0 flex p-[1rem] border-0">
            New Message
          </DialogTitle>
        </DialogHeader>
        <form action="" encType="text/plain" className="flex flex-col">
          <div className="flex">
            <p className="font-bold  ml-3">Subject:</p>
            <input
              type="text"
              name="name"
              defaultValue="Job Offer"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 border-b focus:outline-none"
            />
          </div>
          <hr className="border-ylnMnBlue focus:outline-none"></hr>
          <div className="flex">
            <p className="font-bold ml-3 pt-3">To:</p>
            <input
              type="email"
              name="email"
              defaultValue={application.applicantEmail as string}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pb-1pt-3 px-3 border-b pt-3  focus:outline-none"
            />
          </div>
          <hr className="border-ylnMnBlue focus:outline-none"></hr>
          <div className="flex flex-col justify-center max-w-3xl">
            <textarea
              name="message"
              rows={21}
              cols={200}
              value={message}
              autoCorrect="on"
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 focus:outline-none pt-3 resize-none"
            />
          </div>

          <div className="flex">
            <div className="flex ml-3">
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-l-md text-sm">
                <BsTypeH1 />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] border-l-0 border-r-0 text-sm">
                <BsTypeH2 />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-r-md text-sm">
                <BsTypeH3 />
              </div>
            </div>

            <div className="flex ml-3">
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-l-md text-sm">
                <CiTextAlignLeft />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] border-l-0 border-r-0 text-sm">
                <CiTextAlignCenter />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-r-md text-sm">
                <CiTextAlignRight />
              </div>
            </div>

            <div className="flex ml-3">
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-l-md text-sm">
                <MdFormatBold />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] border-l-0 text-sm">
                <GoItalic />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] border-l-0 border-r-0 text-sm">
                <FiUnderline />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-r-md text-sm">
                <RxTextNone />
              </div>
            </div>

            <div className="flex ml-3">
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-l-md border-r-none text-sm">
                <HiListBullet />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-r-md border-l-none text-sm">
                <MdFormatListNumbered />
              </div>
            </div>

            <div className="flex ml-3">
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-l-md text-sm">
                <IoLinkOutline />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] border-l-0 border-r-0 text-sm">
                <CiImageOn />
              </div>
              <div className="border-gray-300 border-2 p-[0.25rem] rounded-r-md text-sm">
                <FaCode />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={emailClient}
              disabled={isLoading}
              variant="outline"
              className={twMerge(
                "flex-1 text-white bg-ylnMnBlue hover:bg-spaceCadet m-3 hover:text-white",
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              )}
            >
              Send
            </Button>
            <Button
              onClick={closeModal}
              disabled={isLoading}
              variant="outline"
              className={twMerge(
                "flex-1 bg-none text-spaceCadet text-right border-ylnMnBlue border-2 m-3",
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
              <div className="p-2 text-2xl font-bold">
                <CiCircleCheck />
              </div>
              <h3 className="py-8 text-lg">Email sent successfully!</h3>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
