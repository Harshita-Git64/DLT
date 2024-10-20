import React, { useState } from "react";
import { FaSearch, FaTh, FaBars, FaFilter, FaCaretDown } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { BiReset } from "react-icons/bi";

import { GoArrowLeft } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import ReactModal from "react-modal";

const mockData = [
  {
    id: 1,
    name: "Rakesh Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Ishika Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Accepted",
    date: "2024-10-02",
  },
  {
    id: 3,
    name: "Kunal Sharma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-03",
  },
  {
    id: 4,
    name: "Rohan Verma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Rejected",
    date: "2024-10-03",
  },
  {
    id: 1,
    name: "Rakesh Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Ishika Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Accepted",
    date: "2024-10-02",
  },
  {
    id: 3,
    name: "Kunal Sharma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-03",
  },
  {
    id: 4,
    name: "Rohan Verma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Rejected",
    date: "2024-10-03",
  },
  {
    id: 1,
    name: "Rakesh Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Ishika Mehta",
    phone: "9876543210",
    location: "Mumbai",
    status: "Accepted",
    date: "2024-10-02",
  },
  {
    id: 3,
    name: "Kunal Sharma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Pending",
    date: "2024-10-03",
  },
  {
    id: 4,
    name: "Rohan Verma",
    phone: "9876543210",
    location: "Mumbai",
    status: "Rejected",
    date: "2024-10-03",
  },
];

const QueriesComponent = () => {
  const [data, setData] = useState(mockData);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [modalStatusOpen, setModalStatusOpen] = useState(false);
  const [modalDateOpen, setModalDateOpen] = useState(false);
  const [modalFullDetailOpen, setModalFullDetailOpen] = useState(false);
  const [modalRejectApplicationOpen, setModalRejectApplicationOpen] =useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setModalStatusOpen(false);
  };

  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
    setModalDateOpen(false);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setDateFilter("");
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || item.status === statusFilter) &&
      (dateFilter ? item.date === dateFilter : true)
    );
  });

  return (
    <div className="p-6">
      {/* Header and Search Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Queries</h1>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            <FaTh className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex space-x-4 justify-between mb-6">
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="ml-2 bg-transparent focus:outline-none text-neutral-600"
          />
        </div>
        <div className="flex space-x-4 text-slate-600">
          <button
            onClick={() => setModalDateOpen(true)}
            className="p-3 flex gap-1 items-center relative font-semibold font-poppins text-desk-b-3 text-neutral-600" 
          >
            <FaFilter className="mr-2" />
            {dateFilter ? `Date: ${dateFilter}` : "Date"}
            {dateFilter && (
              <span className="absolute top-0 right-0 p-1 text-xs text-blue-600">
                Active
              </span>
            )}
            <FaCaretDown />
          </button>

          <button
            onClick={() => setModalStatusOpen(true)}
            className={`p-3 rounded-lg font-semibold font-poppins text-desk-b-3 text-neutral-600 ${
              statusFilter === "Pending"
                ? "text-yellow-700 bg-yellow-100"
                : statusFilter === "Accepted"
                ? "text-green-700 bg-green-100"
                : statusFilter === "Rejected"
                ? "text-red-700 bg-red-100"
                : "text-gray-700 bg-gray-100"
            } flex gap-1 items-center bg-white `}
          >
            {" "}
            Status: {statusFilter}
            <FaCaretDown />
          </button>

          <button
            onClick={resetFilters}
            className="text-error-300 px-4 py-2 flex gap-1 items-center font-poppins text-desk-b-3"
          >
            <BiReset />
            Reset Filters
          </button>

        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="py-6">
          <div className="w-full flex flex-wrap justify-between space-3 gap-y-4">
            {filteredData.map((query) => (
              <div
                key={query.id}
                className="relative w-[240px] border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="">
                    <img
                      src={`https://i.pravatar.cc/150?u=${query.id}`}
                      alt={query.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <span
                      className={`absolute top-2 right-3 h-3 w-3 rounded-full ${
                        query.status === "Accepted"
                          ? "bg-green-400 text-green-800"
                          : query.status === "Pending"
                          ? "bg-yellow-400 text-yellow-800"
                          : "bg-red-700 text-red-800"
                      }`}
                    ></span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-lg mb-2">{query.name}</h2>
                  <div className="text-sm text-gray-600">
                    <p className="flex w-full justify-between mb-2">
                      <strong>Query ID:</strong> <p>Q20241015</p>
                    </p>
                    <p className="flex w-full justify-between mb-2">
                      <strong>Phone:</strong> {query.phone}
                    </p>
                    <p className="flex w-full justify-between mb-2">
                      <strong>Location:</strong> {query.location}
                    </p>
                    <p className="flex w-full justify-between mb-2">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`${
                          query.status === "Accepted"
                            ? " text-green-800"
                            : query.status === "Pending"
                            ? " text-yellow-800"
                            : " text-red-800"
                        }`}
                      >
                        {query.status}
                      </span>
                    </p>
                  </div>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition-colors duration-200"
                    onClick={() => setModalFullDetailOpen(true)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone Number
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((instructor) => (
                  <tr key={instructor.id} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      {/* Replace the following with profileImage if available */}
                      <img
                        src={`https://i.pravatar.cc/150?u=${instructor.id}`}
                        alt={instructor.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <span className="font-medium text-blue-600">
                        {instructor.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">{instructor.phone}</td>
                    <td className="py-3 px-4">{instructor.location}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          instructor.status === "Accepted"
                            ? "bg-green-100 text-green-800"
                            : instructor.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {instructor.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="text-white focus:outline-none bg-secondary-400 py-2 px-4 rounded-md transition-colors duration-200"
                        onClick={() => setModalFullDetailOpen(true)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Query Status Modal */}
      <ReactModal
        isOpen={modalStatusOpen}
        onRequestClose={() => setModalStatusOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Query Status</h3>
        <div className="flex flex-wrap gap-2">
          {["All", "Pending", "Accepted", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusFilter(status)}
              className={`px-4 py-2 rounded-full ${
                statusFilter === status
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setModalStatusOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setModalStatusOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
      </ReactModal>

      {/* Date Filter Modal */}
      <ReactModal
        isOpen={modalDateOpen}
        onRequestClose={() => setModalDateOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Date</h3>
        <input
          type="date"
          value={dateFilter}
          onChange={handleDateFilter}
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setModalDateOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setModalDateOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
      </ReactModal>

      {/* Reject Application Modal */}
      <ReactModal
        isOpen={modalRejectApplicationOpen}
        onRequestClose={() => setModalRejectApplicationOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
        shouldCloseOnOverlayClick={false}
      >
        <div className>
          <h2 className="font-semibold mb-4 font-poppins text-[#202224]">
            Are you sure you want to reject this application?
          </h2>
          <p className="text-[#202224] text-xs font-poppins italic mb-4">
            Please provide a reason for rejecting this instructor's application.
          </p>
          <div className="mb-4">
            <label
              htmlFor="reason"
              className="block font-poppins text-[#202224]"
            >
              Select Rejection Reason
            </label>
            <select
              id="reason"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#FFFFFF] rounded-md shadow-sm focus:outline-none  sm:text-sm"
            >
              <option>Select Rejection Reason</option>
              <option>
                The visitor does not meet the necessary qualifications for the
                instructor role.
              </option>
              <option>
                The visitor lacks the required or preferred teaching or driving
                experience.
              </option>
              <option>
                The documents provided (license, certifications, etc.) were
                invalid or unverifiable.
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="details"
              className="block font-poppins text-[#202224]"
            >
              Provide any additional details or clarification (optional)
            </label>
            <textarea
              id="details"
              rows="5"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-start">
            <button className="bg-[#EE6055] text-[#FFFFFF] px-4 text-sm rounded-md hover:bg-red-700">
              Reject Application
            </button>
            <button
              className="ml-4 bg-[#B7B7B7] text-[#FFFFFF] px-4 text-sm  py-2 rounded-md hover:bg-gray-400"
              onClick={() => setModalRejectApplicationOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ReactModal>

      {/* Personal Detail Modal */}
      <ReactModal
        isOpen={modalFullDetailOpen}
        onRequestClose={() => setModalFullDetailOpen(false)}
        className="bg-white shadow-lg px-10 pt-5 w-full md:w-4/5 lg:w-8/12  overflow-y-auto"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-40"
      >
        <div className="bg-white">
          <GoArrowLeft
            className="h-6 w-6 hover:cursor-pointer"
            onClick={() => setModalFullDetailOpen(false)}
          />
          <h1 className="font-bold text-black text-3xl mt-8">
            Personal Details
          </h1>

          {/* Profile Photo */}
          <div className="h-20 w-20 rounded-full bg-slate-50 mt-5 ml-2"></div>
          <p>Profile Photo</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 ">
            {/* Full name */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
                placeholder="Enter your name"
                disabled
              />
            </div>
            {/* Date of birth */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Date of Birth{" "}
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                name="dateofbirth"
                disabled
              ></input>
            </div>
            {/* phone number */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                name="mobileno"
                disabled
              />
            </div>
            {/* Email */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                name="email"
                disabled
              />
            </div>
          </div>
          <hr className="my-10"></hr>
          <h1 className="font-bold text-black text-3xl">Location Details</h1>
          <div className="grid grid-cols-2 gap-x-5 mt-5">
            {/* city */}
            <div>
              <label className="block text-sm text-[#202224] font-semibold">
                City
              </label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                name="city"
                disabled
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
                disabled
              />
            </div>
            {/* state */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                State
              </label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                name="state"
                disabled
              >
                <option value="">Select State</option>
                <option value="State1">State1</option>
                <option value="State2">State2</option>
              </select>
            </div>
            {/* Locality */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Locality (Optional)
              </label>
              <input
                type="text"
                placeholder=""
                name="locality"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                disabled
              />
            </div>
          </div>
          <hr className="my-10"></hr>
          <h1 className="font-bold text-black text-3xl">
            License and Certification Details
          </h1>
          <div className="grid grid-cols-2 gap-x-5 ">
            {/* license Number*/}
            <div className="mt-5">
              <label className="block text-sm text-[#202224] font-semibold">
                Driver’s License Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="licenseNumber"
                placeholder="Driver’s License Number"
                disabled
              />
            </div>
            {/* license issuing state */}
            <div className="mt-5">
              <label className="block text-sm text-[#202224] font-semibold">
                License Issuing State (Dropdown)
              </label>
              <select
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="licenseState"
                disabled
              >
                <option value="">Select License Issuing State</option>
                <option value="State1">State1</option>
                <option value="State2">State2</option>
              </select>
            </div>
            {/* expiry date */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                License Expiry Date
              </label>
              <input
                type="date"
                placeholder="Date"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none "
                name="licenseExpiryDate"
                disabled
              />
            </div>
            {/* license type */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                License Type (Manual/Automatic/Both)
              </label>
              <select
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="licenseType"
                disabled
              >
                <option value="">Select License Type</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* checkboxes */}
            <div className="mt-3">
              <h1 className="text-[#202224] font-semibold">
                Certificate IV in Training and Assessment
              </h1>

              <div className="flex space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="certificateIV"
                    value="Yes"
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="certificateIV"
                    value="No"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <hr className="my-10"></hr>
          {/* Experience and Availability */}
          <h1 className="font-bold text-black text-3xl">
            Experience and Availability
          </h1>
          <div className="grid grid-cols-2 gap-x-5 mt-4">
            {/* Years of Experience */}
            <div className="">
              <label className="block text-sm text-[#202224] font-semibold">
                Years of Experience
              </label>
              <select
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="yearsOfExperience"
              >
                <option value="">Select Experience</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            {/*  Available Days (Optional)*/}
            <div className="">
              <label className="block text-sm text-[#202224] font-semibold">
                Available Days (Optional)
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="availableDays"
                disabled
              />
            </div>
          </div>
          <hr className="my-10"></hr>
          {/* Vehicle Information */}
          <h1 className="font-bold text-black text-3xl">Vehicle Information</h1>
          <div className="grid grid-cols-2 gap-x-5 mt-4">
            {/*  Vehicle Make*/}
            <div className="">
              <label className="block text-sm text-[#202224] font-semibold">
                Vehicle Make
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="vehicleMake"
                placeholder=""
                disabled
              />
            </div>

            {/* Vehicle Model */}
            <div className="">
              <label className="block text-sm text-[#202224] font-semibold">
                Vehicle Model
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="vehicleModel"
                placeholder=""
                disabled
              />
            </div>
            {/* Vehicle Year */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Vehicle Year
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="vehicleYear"
                placeholder=""
                disabled
              />
            </div>

            {/*  Vehicle Registration Number */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Vehicle Registration Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none"
                name="vehicleRegNumber"
                placeholder=""
                disabled
              />
            </div>
            {/* Registration Documents */}
            <div className="mt-3">
              <label
                className="block text-sm text-[#202224] font-semibold"
                htmlFor="vehicleRegDoc"
              >
                Upload Vehicle Registration Documents
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="vehicleRegDoc"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {vehicleDetails.vehicleRegDoc ? (
                        <p className="text-center text-sm text-gray-700">
                          {vehicleDetails.vehicleRegDoc.name}
                        </p>
                      ) : (
                        <span className="text-sm">Upload Image</span>
                      )} */}
                  Img123.png
                </label>
                {/* Hidden File Input */}
                <input
                  type="file"
                  id="vehicleRegDoc"
                  name="vehicleRegDoc"
                  accept="image/*,.pdf"
                  className="hidden"
                  disabled
                />
              </div>
            </div>

            {/* Insurance Documents */}
            <div className="mt-3">
              <label
                className="block text-sm text-[#202224] font-semibold"
                htmlFor="vehicleInsuranceDoc"
              >
                Upload Vehicle Insurance Documents
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="vehicleInsuranceDoc"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {vehicleDetails.vehicleInsuranceDoc ? (
                        <p className="text-center text-sm text-gray-700">
                          {vehicleDetails.vehicleInsuranceDoc.name}
                        </p>
                      ) : (
                        <span className="text-sm">Upload Image</span>
                      )} */}
                  Img123.png
                </label>
                {/* Hidden File Input */}
                <input
                  type="file"
                  id="vehicleInsuranceDoc"
                  name="vehicleInsuranceDoc"
                  accept="image/*,.pdf"
                  className="hidden"
                  disabled
                />
              </div>
            </div>
            {/* Add vehicle button */}
            <button className="px-3 py-2 flex items-center gap-3 rounded-md bg-slate-200 mt-6 border border-gray-50">
              <span className="text-gray-500">
                <FaPlus />
              </span>
              <span>Add New Vehicle</span>
            </button>
          </div>

          <hr className="my-10"></hr>
          {/* Additional Documents */}
          <h1 className="font-bold text-black text-3xl">
            Additional Documents
          </h1>
          <div className="grid grid-cols-2 gap-x-5 mt-4">
            {/* National Police Check */}

            <div className="w-full">
              <label className="block text-sm text-[#202224] font-semibold">
                Upload National Police Check
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="policeCheck"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {documentDetails.policeCheck ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.policeCheck.name}
                      </p>
                    ) : (
                      <span className="text-sm">Upload Image</span>
                    )} */}
                  Img1234.png
                </label>
                {/* Hidden File Input */}
                <input
                  id="policeCheck"
                  type="file"
                  className="hidden"
                  name="policeCheck"
                  accept="image/*,.pdf"
                  disabled
                />
              </div>
            </div>

            {/* Working with Children Check */}
            <div className="w-full">
              <label className="block text-sm text-[#202224] font-semibold">
                Working with Children Check{" "}
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="childrenCheck"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {documentDetails.childrenCheck ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.childrenCheck.name}
                      </p>
                    ) : (
                      <span>Upload Image</span>
                    )} */}
                  Img1234.png
                </label>
                {/* Hidden File Input */}
                <input
                  type="file"
                  className="hidden"
                  id="childrenCheck"
                  name="childrenCheck"
                  accept="image/*,.pdf"
                  disabled
                />
              </div>
            </div>

            {/* Proof of Identity */}
            <div className="mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Upload Proof of Identity
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="proofOfIdentity"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {documentDetails.proofOfIdentity ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.proofOfIdentity.name}
                      </p>
                    ) : (
                      <span>Upload Image</span>
                    )} */}
                  Img1234.png
                </label>
                {/* Hidden File Input */}
                <input
                  id="proofOfIdentity"
                  type="file"
                  className="hidden"
                  name="proofOfIdentity"
                  accept="image/*,.pdf"
                  disabled
                />
              </div>
            </div>

            {/* Proof of Address */}
            <div className="w-full mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Upload Proof of Address
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="proofOfAddress"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {documentDetails.proofOfAddress ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.proofOfAddress.name}
                      </p>
                    ) : (
                      <span className="text-sm">Upload Image</span>
                    )} */}
                  Img1234.png
                </label>
                {/* Hidden File Input */}
                <input
                  id="proofOfAddress"
                  type="file"
                  className="hidden"
                  name="proofOfAddress"
                  accept="image/*,.pdf"
                  disabled
                />
              </div>
            </div>

            {/* Qualifications Certificate */}
            <div className="w-full mt-3">
              <label className="block text-sm text-[#202224] font-semibold">
                Upload Qualifications Certificate
              </label>
              <div className="flex flex-col items-center justify-center mt-1 w-full">
                {/* Custom Label acting as Button */}
                <label
                  htmlFor="qualificationCert"
                  className="cursor-pointer w-full p-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50"
                >
                  {/* {documentDetails.qualificationCert ? (
                      <p className="text-center text-sm text-gray-700">
                        {documentDetails.qualificationCert.name}
                      </p>
                    ) : (
                      <span className="text-sm">Upload Image</span>
                    )} */}
                  Img1234.png
                </label>
                {/* Hidden File Input */}
                <input
                  id="qualificationCert"
                  type="file"
                  className="hidden"
                  name="proofOfAddress"
                  accept="image/*,.pdf"
                  disabled
                />
              </div>
            </div>
          </div>
          <hr className="my-10"></hr>
          {/* Experience and Availability */}
          <h1 className="font-bold text-black text-3xl">
            Description (Tell Us About Yourself)
          </h1>
          <div className="mt-5 mb-20">
            <label
              htmlFor="description"
              className="block text-sm text-[#202224] font-semibold"
            >
              A Few Words About You (150-200 characters)
            </label>
            <textarea
              id="description"
              name="selfdescription"
              rows="10"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="I am an experienced driving instructor with a passion for teaching and..."
              disabled
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-5 bg-white py-5 fixed bottom-0 w-full">
            <button className="bg-secondary-400 rounded-md text-white px-8 py-2 transition-colors duration-200 hover:bg-secondary-500">
              Accept
            </button>
            <button
              className="bg-error-200 rounded-md px-8 py-2 text-white transition-colors duration-200 hover:bg-error-300"
              onClick={() => setModalRejectApplicationOpen(true)}
            >
              Reject
            </button>
            <button
              className="bg-neutral-300 rounded-md text-white px-8 py-2 transition-colors duration-200 hover:bg-neutral-400"
              onClick={() => setModalFullDetailOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default QueriesComponent;
