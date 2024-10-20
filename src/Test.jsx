import React, { useState } from "react";
import { FaUser, FaCalendar, FaHome } from "react-icons/fa";
import Test2 from "./Test2";
const App = () => {
  // State management
  const [activeTab, setActiveTab] = useState("Instructors");
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/* Sidebar */}
      {/* <div className=" bg-gray-800 text-white w-full md:w-[20%] p-4 flex md:flex-col justify-between fixed md:relative bottom-0 md:bottom-auto z-10 md:z-auto">
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full justify-around">
          <button
            onClick={() => setActiveTab("Home")}
            className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-full ${
              activeTab === "Home" ? "bg-yellow-500 text-black" : ""
            }`}
          >
            <FaHome />
            <span className="hidden md:block">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("Instructors")}
            className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-full ${
              activeTab === "Instructors" ? "bg-yellow-500 text-black" : ""
            }`}
          >
            <FaUser />
            <span className="hidden md:block">Instructors</span>
          </button>
          <button
            onClick={() => setActiveTab("Bookings")}
            className={`flex items-center justify-center md:justify-start space-x-2 md:space-x-4 w-full px-4 py-2 rounded-full ${
              activeTab === "Bookings" ? "bg-yellow-500 text-black" : ""
            }`}
          >
            <FaCalendar />
            <span className="hidden md:block">Bookings</span>
          </button>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="w-[100%%] overflow-y-scroll">
        <Test2 />
      </div>
    </div>
  );
};

export default App;
