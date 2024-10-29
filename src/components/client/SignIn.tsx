"use client";

import React from 'react';

interface SignInModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-caribbeanCurrant p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Sign In</h2>
          <button
            className="text-white text-xl"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-white">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mt-1 bg-white rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm text-white">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mt-1 bg-white rounded-md border border-gray-300"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 text-blue-600 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-white text-sm">
              Remember Me
            </label>
          </div>
        </form>

        <div className="mt-6">
          <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
            SIGN IN
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-white text-sm">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-400 underline">
              Sign Up
            </a>
          </p>
          <p className="mt-2">
            <a href="#" className="text-blue-400 underline">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;

