import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const VisitorForm = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <div>
      <div className="text-[#001C51] text-3xl font-extrabold  mx-10 h-[100px] bg-white items-center flex">
        <Link to="/">Startup</Link>
      </div>
      <hr></hr>
      {/* steps */}

      <form className="px-24" onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="my-10">
            <h1 className="font-bold text-black text-2xl mt-10">
              Personal Details
            </h1>
            <h1 className="mt-5">
              Provide your basic information and location to get started.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 flex flex-col items-start mt-10">
                <div className="">
                  <span className="text-[#202224] font-semibold text-sm">
                    Profile image{" "}
                  </span>

                  <FaCamera className="relative w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center bg-gray-100" />
                  <button className="relative w-full h-full flex  items-center justify-center"></button>
                </div>
              </div>
              {/* Full name */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                            sm:text-sm p-2"
                  placeholder="Enter your name"
                />
              </div>
              {/* Date of birth */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Date of Birth{" "}
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                ></input>
              </div>
              {/* Mobile Number */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              {/* city */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  City
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></select>
              </div>
              {/* pin code */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Pin code
                </label>
                <input
                  type="text"
                  placeholder="pin code"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              {/* state */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  State
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></select>
              </div>
              {/* Locality */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Locality (Optional)
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Next button */}
            <div className="mt-8 flex justify-end">
              <button
                className="bg-[#2B6BE7] px-10 py-2 text-white rounded-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="font-bold text-black text-2xl mt-10">
              License and Vehicle Details
            </h1>
            <h1 className="mt-5">
              Provide your basic information and location to get started.
            </h1>
            <form className="mt-5">
              <h1 className="font-bold text-[#202224] text-xl">
                License Information
              </h1>

              {/* first row */}
              <div className="flex mt-5 gap-5 w-full ">
                {/* liscense no */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Driver’s License Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your driving license number"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/* license issuing state */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    License Issuing State (Dropdown)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your driving license number"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* second row */}
              <div className="flex mt-3 gap-5 w-full ">
                {/* liscense no */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    License Expiry Date
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/* license issuing state */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    License Type (Manual/Automatic/Both)
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>
              {/* checkboxes */}

              <h1 className="mt-3 text-[#202224] font-semibold">
                Certificate IV in Training and Assessment
              </h1>

              <div className="flex space-x-4 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  No
                </label>
              </div>

              <h1 className="font-bold text-[#202224] text-xl my-5">
                Vehicle Information
              </h1>
              <h1 className="font-semi text-[#202224] my-3 font-semibold">
                Vehicle 1 Details
              </h1>

              <div className="flex mt-5 gap-5 w-full ">
                {/*  Vehicle Make*/}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Make
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/* Vehicle Model */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-5 w-full ">
                {/* Vehicle Year */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Year
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/*  Vehicle Registration Number */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Registration Number
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-5 w-full ">
                {/* Upload Vehicle Registration Documents */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Upload Vehicle Registration Documents
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/* Upload Vehicle Insurance Documents */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Upload Vehicle Insurance Documents
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* Vehicle 2 details */}

              <h1 className="font-semi text-[#202224] my-5 mb-5 font-semibold">
                Vehicle 2 Details
              </h1>

              <div className="flex mt-5 gap-5 w-full ">
                {/*  Vehicle Make*/}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Make
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/* Vehicle Model */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-5 w-full ">
                {/* Vehicle Year */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Year
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/*  Vehicle Registration Number */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Registration Number
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex mt-3 gap-5 w-full ">
                {/* Upload Vehicle Registration Documents */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Upload Vehicle Registration Documents
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                  />
                </div>

                {/* Upload Vehicle Insurance Documents */}
                <div className="">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Upload Vehicle Insurance Documents
                  </label>
                  <input
                    type="text"
                    placeholder="Manual"
                    className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* Add new vehicle */}
              <button className="px-2 py-2 rounded-md w-60 bg-slate-200 mt-6">
                <span>Add new vehicle</span>
              </button>
            </form>

            {/* Next button */}

            <div className="flex justify-end gap-5 my-10">
              <button
                className="px-10 py-2 rounded-md hover:bg-[#2B6BE7] hover:text-white"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-10 py-2 text-white rounded-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          // Experience & Availability
          <div>
            <h1 className="font-bold text-black text-2xl mt-10">
              Experience & Availability
            </h1>
            <h1 className="mt-5">
              Share your teaching experience and availability schedule.
            </h1>
            <div className="flex mt-10 gap-5 w-full ">
              {/* Years of Experience*/}
              <div className="">
                <label className="block text-sm text-[#202224] font-semibold">
                  Years of Experience
                </label>
                <input
                  type="text"
                  placeholder="Date"
                  className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none "
                />
              </div>

              {/*  Available Days (Optional)*/}
              <div className="">
                <label className="block text-sm text-[#202224] font-semibold">
                  Available Days (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Manual"
                  className="mt-1 p-2 w-[500px] border border-[#66666659] rounded-lg focus:outline-none"
                />
              </div>
            </div>

            {/* Back and Next buttons */}

            <div className="flex justify-end gap-5 my-10">
              <button
                className="px-10 py-2 rounded-md hover:bg-[#2B6BE7] hover:text-white"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-10 py-2 text-white rounded-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="font-bold text-black text-2xl mt-10">
              Additional Documents
            </h1>
            <h1 className="mt-5">
              Upload any necessary documents for further review.
            </h1>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {/* National Police Check */}
              <div>
                <label className="block text-sm font-semibold text-[#202224]">
                  Upload National Police Check
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Working with Children Check */}
              <div>
                <label className="block text-sm font-semibold text-[#202224]">
                  Upload Working with Children Check
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Proof of Identity */}
              <div>
                <label className="block text-sm font-semibold text-[#202224]">
                  Upload Proof of Identity
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Proof of Address */}
              <div>
                <label className="block text-sm font-semibold text-[#202224]">
                  Upload Proof of Address
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Qualifications Certificate */}
              <div>
                <label className="block text-sm font-semibold text-[#202224]">
                  Upload Qualifications Certificate
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* next and prev button */}
            <div className="flex justify-end gap-5 my-10">
              <button
                className="px-10 py-2 rounded-md hover:bg-[#2B6BE7] hover:text-white"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-10 py-2 text-white rounded-md"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h1 className="font-bold text-black text-2xl mt-10">
              Describe Yourself
            </h1>
            <h1 className="mt-5">
              Tell us a little about yourself in a few words.
            </h1>
            <div className="mt-10">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-[#202224]"
              >
                A Few Words About You (150-200 characters)
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="I am an experienced driving instructor with a passion for teaching and..."
              />
            </div>

            {/* prev and submit button */}
            <div className="flex justify-end gap-5 my-10">
              <button
                className="px-10 py-2 rounded-md hover:bg-[#2B6BE7] hover:text-white"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-10 py-2 text-white rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default VisitorForm;
