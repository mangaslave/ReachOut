"use client";

import React, { useState } from "react";
import SignUpModal from "./signup"; 

interface MatchesModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const MatchesModal: React.FC<MatchesModalProps> = ({ showModal, setShowModal }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      setShowSignUpModal(false); 
    }
  };

  const handleSignUp = () => {
    setShowSignUpModal(true); 
  };

  return (
    <>
      {showModal && !showSignUpModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-caribbeanCurrant p-8 py-20 rounded-lg shadow-lg w-96 max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-white text-3xl font-bold">Which Matches You Best?</h2>
            </div>

            <div className="space-y-4 flex flex-col items-center">
                <div>
                    <button
                        onClick={handleSignUp}
                        className="w-52 p-2 mt-1 bg-white rounded-md border border-gray-300 text-black "
                    >
                        I’m a job seeker.
                    </button>
                </div>
              
                <div>
                    <button
                        onClick={handleSignUp}
                        className="w-52 p-2 mt-1 bg-white rounded-md border border-gray-300 text-black "
                    >
                        I’m a nonprofit worker.
                    </button>
                </div>
              
                <div>
                    <button
                        onClick={handleSignUp}
                        className="w-52 p-2 mt-1 bg-white rounded-md border border-gray-300 text-black "
                    >
                        I’m an employer.
                    </button>
                </div>
              
            </div>
          </div>
        </div>
      )}

      {/* SignUp Modal */}
      {showSignUpModal && (
        <SignUpModal showModal={showSignUpModal} setShowModal={setShowSignUpModal} />
      )}
    </>
  );
};

export default MatchesModal;

