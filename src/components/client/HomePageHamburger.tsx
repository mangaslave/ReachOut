// import Image from "next/image";
import React from "react";
import Link from "next/link";

interface HamburgerModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const HamburgerModal: React.FC<HamburgerModalProps> = ({showModal, setShowModal}) => {
  if (!showModal) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className="md:hidden fixed mt-24 inset-0 z-50" onClick={handleClickOutside}>
      {showModal && (
        <div className="bg-white rounded-lg float-right shadow-lg w-48 h-32">
          <ul className="flex flex-col justify-between h-full">
            <li className="flex justify-center items-center border-b border-spaceCadet">
              <Link
                aria-label="case managers"
                href="/"
                className="text-spaceCadet font-bold text-base md:hidden inline-block hover:text-caribbeanCurrant"
              >
                Case Managers
              </Link>
            </li>
            <li className="flex justify-center items-center border-b border-spaceCadet">
              <Link
                aria-label="Job Seekers"
                href="/"
                className="text-spaceCadet font-bold text-base md:hidden inline-block hover:text-caribbeanCurrant"
              >
                Job Seekers
              </Link>
            </li>
            <li className="flex justify-center items-center border-b border-spaceCadet">
              <Link
                aria-label="Employers"
                href="/"
                className="text-spaceCadet font-bold text-base md:hidden inline-block hover:text-caribbeanCurrant"
              >
                Employers
              </Link>
            </li>
            <li className="flex justify-center items-center border-b border-spaceCadet">
              <Link
                aria-label="About"
                href="/about"
                className="text-spaceCadet text-base font-bold md:hidden inline-block hover:text-caribbeanCurrant"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerModal;
