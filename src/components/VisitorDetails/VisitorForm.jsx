import React, { useState } from "react";
import { Link } from "react-router-dom";
//import react icons
import { FaCamera } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import axios from "../../axios";

const VisitorForm = () => {
  
  const [currentStep, setCurrentStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    profileimg: null,
    fullname: "", // Full name of the user
    phone_number: "", // Mobile number
    city: "", // City (dropdown)
    state: "", // State (dropdown)
    date_of_birth: "", // Date of birth (calendar input)
    email: "", // Email address
    pincode: "", // Pincode (ZIP code)
    locality: "", // Locality or area of residence
  });

  const [vehicleDetails, setVehicleDetails] = useState({
    license_number: "", // Driver’s License Number
    license_issue_state: "", // License Issuing State (Dropdown)
    license_expiry_date: "", // License Expiry Date
    license_type: "", // License Type (Manual/Automatic/Both)
    training_certificate: "", // Certificate IV in Training and Assessment (Yes/No)
    vehicle_company: "", // Vehicle Make
    vehicle_model: "", // Vehicle Model
    vehicle_year: "", // Vehicle Year
    vehicle_registration_no: "", // Vehicle Registration Number
    vehicle_registration_document: null, // Vehicle Registration Document (File)
    vehicle_insurance_document: null, // Vehicle Insurance Document (File)
  });


  const [documentDetails, setDocumentDetails] = useState({
    police_check: null, // Upload National Police Check
    children_check: null, // Working with Children Check
    identity_proof: null, // Proof of Identity
    address_proof: null, // Proof of Address
    qualification_cert: null, // Qualifications Certificate
  });

  const [experienceDetails, setExperienceDetails] = useState({
    experience: "", // Years of Experience (dropdown)
    available_days: "", // Available Days (optional - could be a multi-select or array of strings)
    description: "", // Describe Yourself (text input)
  });
  
  const formData = {
    ...personalDetails,
    ...vehicleDetails,
    ...documentDetails,
    ...experienceDetails

  }
  // Function to handle personal details for Step 1
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

   //  Function to handle text, dropdown, and checkbox inputs for Step 2
   const handleVehicleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value,
    });
  };

  // Function to handle file uploads (vehicle registration and insurance documents) for Step 2
  const handleVehicleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setVehicleDetails({
      ...vehicleDetails,
      [name]: file,
    });
  };
  // Function to handle file uploads for Step 4
  const handleDocumentFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setDocumentDetails({
      ...documentDetails,
      [name]: file,
    });
  };

// Move to the previous step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("items/queries", formData);
      console.log('Data posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set image for preview
      };
      reader.readAsDataURL(file); // Convert image to base64 URL
    } else {
      alert("Please upload a valid image file.");
    }
  };
  console.log("image is:", selectedImage);

  const steps = [
    "Personal Details",
    "License & Vehicle Details",
    "Experience & Availability",
    "Additional Documents",
    "Describe Yourself",
  ];

  return (
    <div>
      <div className="text-[#001C51] text-3xl font-extrabold  px-24 h-[100px] bg-white items-center flex">
        <Link to="/">Startup</Link>
      </div>
      <hr></hr>

     
      <div className="flex justify-between items-center my-2 px-16  w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            // <div key={index} className="flex items-center">
             
            //   <div
            //     className={`flex items-center justify-center w-7 h-7 rounded-full border 
            //     ${isCompleted ? "border-green-500" : "border-blue-500"}
            //     ${
            //       isCurrent
            //         ? "bg-blue-500 text-white border-blue-500"
            //         : "text-blue-500"
            //     }`}
            //   >
            //     {isCompleted ? (
            //       <span className="text-green-500">
            //         <MdDone />
            //       </span>
            //     ) : (
            //       <span>{stepNumber}</span>
            //     )}
            //   </div>

            //   Step Name
            //   <span className="ml-2 text-xs text-[#202224] font-semibold">
            //     {step}
            //   </span>

            //   Connector Line
            //   {index < steps.length - 1 && (
            //     <FaChevronRight className="text-gray-300 mx-10" />
            //   )}
            // </div>
            
            <div key={index} className="flex justify-center items-center w-full">
             {/* numbers */}
            <div
              className={`flex items-center justify-center  w-7 h-7 rounded-full border 
              ${isCompleted ? "border-green-500" : "border-blue-500"}
              ${
                isCurrent
                  ? "bg-blue-500 text-white border-blue-500"
                  : "text-blue-500"
              }`}
            >
              {isCompleted ? (
                <span className="text-green-500">
                  <MdDone />
                </span>
              ) : (
                <span>{stepNumber}</span>
              )}
            </div>

            {/* Step Name */}
            <span className="ml-2 text-xs text-[#202224] font-semibold ">
              {step}
            </span>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <FaChevronRight className="text-gray-300" />
            )}
          </div>
          );
        })}
      </div>
      
      <hr className="mx-16"></hr>

      <form className="flex w-full px-10 sm:px-14 md:px-20 lg:px-28" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="my-10 w-full">
            <h1 className="font-bold text-black text-2xl sm:text-3xl mt-10">
              Personal Details
            </h1>
            <h1 className="mt-5 text-[#202224]">
              Provide your basic information and location to get started.
            </h1>
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 gap-6">
              {/* <div className="col-span-2 flex flex-col items-start mt-10">
                <div className="">
                  <span className="text-[#202224] font-semibold text-sm">
                    Profile image{" "}
                  </span>
                  <div className="bg-slate-200 flex items-center justify-center p-8 rounded-full">
                    <FaCamera className="relative w-8 h-8 flex justify-center items-center" />
                  </div>
                  <button className="relative w-full h-full flex  items-center justify-center"></button>
                </div>
              </div> */}

              <div className="col-span-2 flex flex-col items-start mt-8">
                <span className="text-[#202224] font-semibold text-sm">
                  Profile image{" "}
                </span>
                {/* Profile Picture Frame */}
                <label
                  htmlFor="profile-pic-upload"
                  className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer mt-1"
                >
                  {selectedImage ? (
                    // Show the uploaded image
                    <img
                      src={selectedImage}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    // Show the camera icon if no image is selected
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 ">
                      <FaCamera className="text-gray-500" size={24} />
                    </div>
                  )}
                </label>

                {/* Hidden File Input */}
                <input
                  id="profile-pic-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              {/* Full name */}
              <div className="">
                <label className="block text-sm text-[#202224] font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                  placeholder="Enter your name"
                  value={personalDetails.fullname}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-red-500 hidden">full name</p>
              </div>
              {/* Date of birth */}
              <div className="">
                <label className="block text-sm text-[#202224] font-semibold">
                  Date of Birth{" "}
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  name="date_of_birth"
                  value={personalDetails.date_of_birth}
                  onChange={handleInputChange}
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  name="phone_number"
                  value={personalDetails.phone_number}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"  
                  maxlength="10"
                  required
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  name="email"
                  value={personalDetails.email}
                  onChange={handleInputChange}
                />
              </div>
              {/* city */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  City
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  name="city"
                  value={personalDetails.city}
                  onChange={handleInputChange}
                >
                  <option value="">Select City</option>
                  <option value="City1">City1</option>
                  <option value="City2">City2</option>
                </select>
              </div>
              {/* pin code */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Pin code
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  name="pincode"
                  placeholder="Pincode"
                  value={personalDetails.pincode}
                  onChange={handleInputChange}
                />
              </div>
              {/* state */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  State
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  name="state"
                  value={personalDetails.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  <option value="State1">State1</option>
                  <option value="State2">State2</option>
                </select>
              </div>
              {/* Locality */}
              <div>
                <label className="block text-sm text-[#202224] font-semibold">
                  Locality (Optional)
                </label>
                <input
                  type="text"
                  placeholder=""
                  name="locality"
                  value={personalDetails.locality}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Next button */}
            <div className="mt-10 flex justify-end">
              <button
                className="bg-[#2B6BE7] px-6 py-2 text-white text-sm rounded-md flex items-center gap-3 "
                onClick={nextStep}
              >
                Next
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="w-full">
            <h1 className="font-bold text-black text-2xl sm:text-3xl mt-10">
              License and Vehicle Details
            </h1>
            <h1 className="mt-5 text-[#202224]">
              Provide your basic information and location to get started.
            </h1>
            <form className="mt-5 ">
              <h1 className="font-extrabold text-[#202224] text-xl my-5">
                License Information
              </h1>

              <div className="sm:grid sm:grid-cols-2 gap-6">
                {/* license no */}
                <div className="w-full">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Driver’s License Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="license_number"
                    placeholder="Driver’s License Number"
                    value={vehicleDetails.license_number}
                    onChange={handleVehicleInputChange}
                  />
                </div>

                {/* license issuing state */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    License Issuing State (Dropdown)
                  </label>
                  <select
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="license_issue_state"
                    value={vehicleDetails.license_issue_state}
                    onChange={handleVehicleInputChange}
                  >
                    <option value="">Select License Issuing State</option>
                    <option value="State1">State1</option>
                    <option value="State2">State2</option>
                  </select>
                </div>
              </div>

              <div className="sm:flex sm:mt-4 gap-5 w-full">
                {/* expiry date */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    License Expiry Date
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none "
                    name="license_expiry_date"
                    value={vehicleDetails.license_expiry_date}
                    onChange={handleVehicleInputChange}
                  />
                </div>

                {/* license type */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    License Type (Manual/Automatic/Both)
                  </label>
                  <select
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="license_type"
                    value={vehicleDetails.license_type}
                    onChange={handleVehicleInputChange}
                  >
                    <option value="">Select License Type</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
              {/* checkboxes */}

              <h1 className="mt-3 text-[#202224] font-semibold">
                Certificate IV in Training and Assessment
              </h1>

              <div className="flex space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="training_certificate"
                    value="Yes"
                    checked={vehicleDetails.training_certificate === "Yes"}
                    onChange={handleVehicleInputChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="training_certificate"
                    value="No"
                    checked={vehicleDetails.training_certificate === "No"}
                    onChange={handleVehicleInputChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>

              <h1 className="font-extrabold text-[#202224] text-xl my-5">
                Vehicle Information
              </h1>
              <h1 className="text-[#202224] my-3 font-bold">
                Vehicle 1 Details
              </h1>

              <div className="sm:flex mt-5 gap-5 w-full">
                {/*  Vehicle Make*/}
                <div className="w-full">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Make
                  </label>
                 
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="vehicle_company"
                    placeholder=""
                    value={vehicleDetails.vehicle_company}
                    onChange={handleVehicleInputChange}
                  />
                </div>

                {/* Vehicle Model */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Model
                  </label>
                   <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="vehicle_model"
                    placeholder=""
                    value={vehicleDetails.vehicle_model}
                    onChange={handleVehicleInputChange}
                  />
                </div>
              </div>

              <div className="sm:flex mt-3 gap-5 w-full ">
                {/* Vehicle Year */}
                <div className="w-full">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Year
                  </label>
                   <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="vehicle_year"
                    placeholder=""
                    value={vehicleDetails.vehicle_year}
                    onChange={handleVehicleInputChange}
                  />
                </div>

                {/*  Vehicle Registration Number */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Registration Number
                  </label>
                   <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                    name="vehicle_registration_no"
                    placeholder=""
                    value={vehicleDetails.vehicle_registration_no}
                    onChange={handleVehicleInputChange}
                  />
                </div>
              </div>

              <div className="sm:flex mt-3 gap-5 w-full ">
                {/* Registration Documents */}
                <div className="w-full">
                  <label
                    className="block text-sm text-[#202224] font-semibold"
                    htmlFor="vehicle_registration_document"
                  >
                    Upload Vehicle Registration Documents
                  </label>
                  <div className="flex flex-col items-center justify-center mt-1 w-full">
                    {/* Custom Label acting as Button */}
                    <label
                      htmlFor="vehicle_registration_document"
                      className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                    >
                      {vehicleDetails.vehicle_registration_document ? (
                        <p className="text-center text-sm text-gray-700">
                          {vehicleDetails.vehicle_registration_document.name}
                        </p>
                      ) : (
                        <span className="text-sm">Upload Image</span>
                      )}
                    </label>
                    {/* Hidden File Input */}
                    <input
                      type="file"
                      id="vehicle_registration_document"
                      name="vehicle_registration_document"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={handleVehicleFileChange}
                    />
                  </div>
                </div>

                {/* Insurance Documents */}
                <div className="w-full mt-3 sm:mt-0">
                  <label
                    className="block text-sm text-[#202224] font-semibold"
                    htmlFor="vehicle_insurance_document"
                  >
                    Upload Vehicle Insurance Documents
                  </label>
                  <div className="flex flex-col items-center justify-center mt-1 w-full">
                    {/* Custom Label acting as Button */}
                    <label
                      htmlFor="vehicle_insurance_document"
                      className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                    >
                      {vehicleDetails.vehicle_insurance_document ? (
                        <p className="text-center text-sm text-gray-700">
                          {vehicleDetails.vehicle_insurance_document.name}
                        </p>
                      ) : (
                        <span className="text-sm">Upload Image</span>
                      )}
                    </label>
                    {/* Hidden File Input */}
                    <input
                      type="file"
                      id="vehicle_insurance_document"
                      name="vehicle_insurance_document"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={handleVehicleFileChange}
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle 2 details */}

              <h1 className="text-[#202224] my-5 mb-5 font-bold">
                Vehicle 2 Details
              </h1>

              <div className="sm:flex mt-5 gap-5 w-full ">
                {/*  Vehicle Make*/}
                <div className="w-full">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Make
                  </label>
                  <select className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"></select>
                </div>

                {/* Vehicle Model */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Model
                  </label>
                  <select className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"></select>
                </div>
              </div>

              <div className="sm:flex mt-3 gap-5 w-full ">
                {/* Vehicle Year */}
                <div className="w-full">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Year
                  </label>
                  <select className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"></select>
                </div>

                {/*  Vehicle Registration Number */}
                <div className="w-full mt-3 sm:mt-0">
                  <label className="block text-sm text-[#202224] font-semibold">
                    Vehicle Registration Number
                  </label>
                  <select className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"></select>
                </div>
              </div>

              <div className="sm:flex mt-3 gap-5 w-full">
                {/* Upload Vehicle Registration Documents */}
                <div className="w-full">
                  <label
                    className="block text-sm text-[#202224] font-semibold"
                    htmlFor="vehicle_registration_document"
                  >
                    Upload Vehicle Registration Documents
                  </label>
                  <div className="flex flex-col items-center justify-center mt-1 w-full">
                    {/* Custom Label acting as Button */}
                    <label
                      htmlFor="vehicle_registration_document"
                      className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                    >
                      {vehicleDetails.vehicle_registration_document ? (
                        <p className="text-center text-sm text-gray-700">
                          {vehicleDetails.vehicle_registration_document.name}
                        </p>
                      ) : (
                        <span className="text-sm">Upload Image</span>
                      )}
                    </label>
                    {/* Hidden File Input */}
                    <input
                      type="file"
                      id="vehicle_registration_document"
                      name="vehicle_registration_document"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={handleVehicleFileChange}
                    />
                  </div>
                </div>

                {/* Upload Vehicle Insurance Documents */}
                 <div className="w-full mt-3 sm:mt-0">
                  <label
                    className="block text-sm text-[#202224] font-semibold"
                    htmlFor="vehicle_insurance_document"
                  >
                    Upload Vehicle Insurance Documents
                  </label>
                  <div className="flex flex-col items-center justify-center mt-1 w-full">
                    {/* Custom Label acting as Button */}
                    <label
                      htmlFor="vehicle_insurance_document"
                      className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                    >
                      {vehicleDetails.vehicle_insurance_document ? (
                        <p className="text-center text-sm text-gray-700">
                          {vehicleDetails.vehicle_insurance_document.name}
                        </p>
                      ) : (
                        <span className="text-sm">Upload Image</span>
                      )}
                    </label>
                    {/* Hidden File Input */}
                    <input
                      type="file"
                      id="vehicle_insurance_document"
                      name="vehicle_insurance_document"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={handleVehicleFileChange}
                    />
                  </div>
                </div>
              </div>

              {/* Add new vehicle */}
              <button className="px-3  py-2 flex items-center gap-3 rounded-md bg-slate-200 mt-6 border border-gray-50">
                <span className="text-gray-500">
                  <FaPlus />
                </span>
                <span>Add New Vehicle</span>
              </button>
            </form>

            {/*Prev and Next button */}
            <div className="flex justify-end gap-10 my-10">
              <button className="text-sm" onClick={prevStep}>
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-6 py-2 text-white text-sm rounded-md flex items-center gap-3 "
                onClick={nextStep}
              >
                Next
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          // Experience & Availability
          <div className="w-full">
            <h1 className="font-bold text-black text-2xl sm:text-3xl mt-10">
              Experience & Availability
            </h1>
            <h1 className="mt-5">
              Share your teaching experience and availability schedule.
            </h1>
            <div className="sm:flex mt-10 gap-5 w-full ">
              {/* Years of Experience*/}
              <div className="w-full">
                <label className="block text-sm text-[#202224] font-semibold">
                  Years of Experience
                </label>
                <select
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                  name="experience"
                  value={experienceDetails.experience}
                  onChange={(e) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      experience: e.target.value,
                    })
                  }
                >
                  <option value="">Select Experience</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/*  Available Days (Optional)*/}
              <div className="w-full mt-3 sm:mt-0">
                <label className="block text-sm text-[#202224] font-semibold">
                  Available Days (Optional)
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                  name="available_days"
                  value={experienceDetails.available_days}
                  onChange={(e) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      available_days: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Back and Next buttons */}

            <div className="flex justify-end gap-10 my-10">
              <button className="text-sm" onClick={prevStep}>
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-6 py-2 text-white text-sm rounded-md flex items-center gap-3 "
                onClick={nextStep}
              >
                Next
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="w-full">
            <h1 className="font-bold text-black text-2xl sm:text-3xl mt-10">
              Additional Documents
            </h1>
            <h1 className="mt-5">
              Upload any necessary documents for further review.
            </h1>

            <div className="sm:grid sm:grid-cols-2 gap-6 mt-10">
              {/* National Police Check */}

              <div className="w-full">
                <label className="block text-sm text-[#202224] font-semibold">
                  Upload National Police Check
                </label>
                <div className="flex flex-col items-center justify-center mt-1 w-full">
                  {/* Custom Label acting as Button */}
                  <label
                    htmlFor="police_check"
                    className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                  >
                    {documentDetails.police_check ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.police_check.name}
                      </p>
                    ) : (
                      <span className="text-sm">Upload Image</span>
                    )}
                  </label>
                  {/* Hidden File Input */}
                  <input
                    id="police_check"
                    type="file"
                    className="hidden"
                    name="police_check"
                    accept="image/*,.pdf"
                    onChange={handleDocumentFileChange}
                  />
                </div>
              </div>

              {/* Working with Children Check */}
              <div className="w-full mt-3 sm:mt-0">
                <label className="block text-sm text-[#202224] font-semibold">
                  Working with Children Check{" "}
                </label>
                <div className="flex flex-col items-center justify-center mt-1 w-full">
                  {/* Custom Label acting as Button */}
                  <label
                    htmlFor="children_check"
                    className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                  >
                    {documentDetails.children_check ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.children_check.name}
                      </p>
                    ) : (
                      <span>Upload Image</span>
                    )}
                  </label>
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    className="hidden"
                    id="children_check"
                    name="children_check"
                    accept="image/*,.pdf"
                    onChange={handleDocumentFileChange}
                  />
                </div>
              </div>

              {/* Proof of Identity */}
              <div className="w-full mt-3 sm:mt-0">
                <label className="block text-sm text-[#202224] font-semibold">
                  Upload Proof of Identity
                </label>
                <div className="flex flex-col items-center justify-center mt-1 w-full">
                  {/* Custom Label acting as Button */}
                  <label
                    htmlFor="identity_proof"
                    className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                  >
                    {documentDetails.identity_proof ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.identity_proof.name}
                      </p>
                    ) : (
                      <span>Upload Image</span>
                    )}
                  </label>
                  {/* Hidden File Input */}
                  <input
                    id="identity_proof"
                    type="file"
                    className="hidden"
                    name="identity_proof"
                    accept="image/*,.pdf"
                    onChange={handleDocumentFileChange}
                  />
                </div>
              </div>

              {/* Proof of Address */}
              <div className="w-full mt-3 sm:mt-0">
                <label className="block text-sm text-[#202224] font-semibold">
                  Upload Proof of Address
                </label>
                <div className="flex flex-col items-center justify-center mt-1 w-full">
                  {/* Custom Label acting as Button */}
                  <label
                    htmlFor="address_proof"
                    className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                  >
                    {documentDetails.address_proof ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.address_proof.name}
                      </p>
                    ) : (
                      <span className="text-sm">Upload Image</span>
                    )}
                  </label>
                  {/* Hidden File Input */}
                  <input
                    id="address_proof"
                    type="file"
                    className="hidden"
                    name="address_proof"
                    accept="image/*,.pdf"
                    onChange={handleDocumentFileChange}
                  />
                </div>
              </div>

              {/* Qualifications Certificate */}
              <div className="w-full mt-3 sm:mt-0">
                <label className="block text-sm text-[#202224] font-semibold">
                  Upload Qualifications Certificate
                </label>
                <div className="flex flex-col items-center justify-center mt-1 w-full">
                  {/* Custom Label acting as Button */}
                  <label
                    htmlFor="qualification_cert"
                    className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                  >
                    {documentDetails.qualification_cert ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.qualification_cert.name}
                      </p>
                    ) : (
                      <span className="text-sm">Upload Image</span>
                    )}
                  </label>
                  {/* Hidden File Input */}
                  <input
                    id="qualification_cert"
                    type="file"
                    className="hidden"
                    name="address_proof"
                    accept="image/*,.pdf"
                    onChange={handleDocumentFileChange}
                  />
                </div>
              </div>
            </div>

            {/* next and prev button */}
            <div className="flex justify-end gap-10 my-10">
              <button className="text-sm" onClick={prevStep}>
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-6 py-2 text-white text-sm rounded-md flex items-center gap-3 "
                onClick={nextStep}
              >
                Next
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="w-full">
            <h1 className="font-bold text-black text-2xl sm:text-3xl mt-10">
              Describe Yourself
            </h1>
            <h1 className="mt-5">
              Tell us a little about yourself in a few words.
            </h1>
            <div className="mt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-[#202224]"
              >
                A Few Words About You (150-200 characters)
              </label>
              <textarea
                id="description"
                name="description"
                rows="8"
                value={experienceDetails.description}
                onChange={(e) =>
                  setExperienceDetails({
                    ...experienceDetails,
                    description: e.target.value,
                  })
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                placeholder="I am an experienced driving instructor with a passion for teaching and..."
              />
            </div>

            {/* prev and submit button */}
            <div className="flex justify-end gap-10 my-10">
              <button className="text-sm" onClick={prevStep}>
                Back
              </button>
              <button
                className="bg-[#2B6BE7] px-6 text-sm py-2 text-white rounded-md"
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
