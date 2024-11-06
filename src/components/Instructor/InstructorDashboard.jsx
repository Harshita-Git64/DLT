import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { SiClockify } from "react-icons/si";
import { PiListBulletsBold } from "react-icons/pi";
import { FaListCheck } from "react-icons/fa6";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { PiNotebookBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import AllStudents from "../Admin/AllStudents";
import AllBookings from "../Admin/AllBookings";
import Earnings from "./Earning";
import Schedule from "./Schedule";
import Dashboard from "./Dashboard";

const InstructorDashboard = () => {
  // State management
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-white text-neutral-1000 w-full md:w-[20%] p-4  md:flex-col justify-between fixed md:relative bottom-0 md:bottom-auto z-10 md:z-auto border-r border-solid border-neutral-100 hidden md:flex">
        <div>
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around border-b border-solid border-neutral-100 pb-4">
            <button
              onClick={() => setActiveTab("Dashboard")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Dashboard" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <SiClockify className="w-5 h-5" />
              <span className="hidden md:block">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("Students")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Students" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <FaRegHeart className="w-5 h-5" />
              <span className="hidden md:block">Students</span>
            </button>
            <button
              onClick={() => setActiveTab("Bookings")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Bookings" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <PiListBulletsBold className="w-5 h-5" />
              <span className="hidden md:block">Bookings</span>
            </button>
            <button
              onClick={() => setActiveTab("Schedule")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Schedule" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <PiNotebookBold className="w-5 h-5" />
              <span className="hidden md:block">Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab("Inbox")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Inbox" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <HiOutlineChatAlt2 className="w-5 h-5" />
              <span className="hidden md:block">Inbox</span>
            </button>
          </div>
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around border-b border-solid border-neutral-100 py-6">
            <button
              onClick={() => setActiveTab("Earning")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Earning" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <FaDollarSign className="w-5 h-5" />
              <span className="hidden md:block">Earnings</span>
            </button>
          </div>
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around py-4">
            <button
              onClick={() => setActiveTab("Settings")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Settings" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <IoSettingsOutline className="w-5 h-5" />
              <span className="hidden md:block">Settings</span>
            </button>
            <button
              onClick={() => setActiveTab("Logout")}
              className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-lg ${
                activeTab === "Logout" ? "bg-secondary-400 text-white" : ""
              }`}
            >
              <BiLogOut className="w-5 h-5" />
              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:w-[75%] overflow-y-scroll mb-10">
        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Students" && <AllStudents />}
        {activeTab === "Bookings" && <AllBookings />}
        {activeTab === "Earning" && <Earnings />}
        {activeTab === "Schedule" && <Schedule />}
      </div>
    </div>
  );
};

export default InstructorDashboard;
