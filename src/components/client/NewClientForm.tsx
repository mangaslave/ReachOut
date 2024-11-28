"use client";

import {AddClientAction} from "@/actions/AddClientAction";
import React, {useState} from "react";
import AddNewClientModal from "./AddNewClientModal";
import {redirect} from "next/navigation";

export default function AddNewClientForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    email: "",
    phoneNumber: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      city: formData.city,
      postalCode: formData.postalCode,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    };

    console.log("data", data);

    try {
      const response = await AddClientAction(data);
      setStatus("Success");
      setModalMessage(response.message);
      setModalOpen(true);
      setFormData({
        firstName: "",
        lastName: "",
        city: "",
        postalCode: "",
        email: "",
        phoneNumber: "",
      });
      setTimeout(() => {
        redirect("/organization/clients");
      }, 4000);
    } catch (error) {
      console.error("An error occurred:", error);
      setStatus("Error");
      setModalMessage("An error occurred while adding the client.");
      setModalOpen(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add New Client</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number (if applicable)</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={() => {
              setFormData({
                firstName: "",
                lastName: "",
                city: "",
                postalCode: "",
                email: "",
                phoneNumber: "",
              });
              redirect("/organization/clients");
            }}
            className="mr-4 bg-gray-300 hover:bg-gray-200 text-black py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button type="submit" className="bg-spaceCadet hover:bg-ylnMnBlue text-white py-2 px-4 rounded">
            {"Add Client"}
          </button>
        </div>
      </form>
      {modalOpen && <AddNewClientModal status={status} message={modalMessage} onClose={closeModal} />}
    </>
  );
}
