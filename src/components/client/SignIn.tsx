import Image from "next/image";
import React, { useState } from "react";
import MatchesModal from "./WhichMatches";
import Link from "next/link";

interface SignInModalProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
	showModal,
	setShowModal,
}) => {
	const [showSignUpModal, setShowSignUpModal] = useState(false);

	if (!showModal && !showSignUpModal) return null;

	const handleClickOutside = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			setShowModal(false);
			setShowSignUpModal(false);
		}
	};

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			onClick={handleClickOutside}
		>
			{showModal && !showSignUpModal && (
				<div className="bg-caribbeanCurrant p-8 py-20 rounded-lg shadow-lg w-96 max-w-md">
					<div className="text-center mb-6">
						<h2 className="text-white text-3xl font-bold">Sign In</h2>
					</div>

					<div className="text-center mb-6">
						<div className="flex justify-center space-x-4 mt-4">
							<button className="p-2 rounded-full">
								<Image
									src="/static/images/google-icon.svg"
									alt="Google"
									width={40}
									height={40}
								/>
							</button>
							<button className="p-2 rounded-full">
								<Image
									src="/static/images/windows-icon.svg"
									alt="Windows"
									width={40}
									height={40}
								/>
							</button>
							<button className="p-2 rounded-full">
								<Image
									src="/static/images/apple-icon.svg"
									alt="Apple"
									width={40}
									height={40}
								/>
							</button>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<form className="space-y-4 mx-auto">
							<div>
								<label className="block text-sm text-white">Email</label>
								<input
									type="email"
									placeholder="Email"
									className="w-52 p-2 mt-1 bg-white rounded-md border border-gray-300"
								/>
							</div>
							<div>
								<label className="block text-sm text-white">Password</label>
								<input
									type="password"
									placeholder="Password"
									className="w-52 p-2 mt-1 bg-white rounded-md border border-gray-300"
								/>
							</div>
							<div className="flex items-center">
								<input
									type="checkbox"
									id="remember-me"
									className="w-4 h-4 text-white-600 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 text-white text-sm"
								>
									Remember Me
								</label>
							</div>
						</form>
					</div>

					<div className="mt-6 flex justify-center">
						<button className="font-bold w-40 py-2 rounded-md bg-spaceCadet text-white hover:bg-ylnMnBlue">
							<Link href="/dashboard">Sign In</Link>
						</button>
					</div>

					<div className="text-center mt-4">
						<p className="text-white text-sm">
							Don’t have an account?{" "}
							<button
								onClick={() => {
									setShowModal(false);
									setShowSignUpModal(true);
								}}
								className="text-white underline"
							>
								Sign Up
							</button>
						</p>
						<p className="mt-2">
							<a href="#" className="text-white underline">
								Forgot your password?
							</a>
						</p>
					</div>
				</div>
			)}

			{showSignUpModal && (
				<MatchesModal
					showModal={showSignUpModal}
					setShowModal={setShowSignUpModal}
				/>
			)}
		</div>
	);
};

export default SignInModal;
