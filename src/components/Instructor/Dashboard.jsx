import React, { useState, useEffect } from "react";
import { FaChartPie, FaClock, FaListAlt } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("This Week");
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const [data, setData] = useState({
    earnings: { total: "$15,000", recent: "$525", growth: "+2.06%" },
    hours: { total: 125, weekly: 15 },
    bookings: { total: 345, pending: 25, completed: 320, growth: "+10.03%" },
  });

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    setShowDropdown(false); // Close dropdown on selection

    // Logic to change data based on the selected timeframe
    if (newTimeframe === "This Month") {
      setData({
        earnings: { total: "$60,000", recent: "$2,100", growth: "+8.45%" },
        hours: { total: 500, weekly: 60 },
        bookings: {
          total: 1400,
          pending: 100,
          completed: 1300,
          growth: "+5.30%",
        },
      });
    } else if (newTimeframe === "This Year") {
      setData({
        earnings: { total: "$700,000", recent: "$50,000", growth: "+15.00%" },
        hours: { total: 7000, weekly: 120 },
        bookings: {
          total: 17000,
          pending: 200,
          completed: 16500,
          growth: "+12.50%",
        },
      });
    } else {
      setData({
        earnings: { total: "$15,000", recent: "$525", growth: "+2.06%" },
        hours: { total: 125, weekly: 15 },
        bookings: {
          total: 345,
          pending: 25,
          completed: 320,
          growth: "+10.03%",
        },
      });
    }
  };

  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Dropdown = () => (
    <div className="relative inline-block text-left dropdown">
      <button
        className="inline-flex items-center text-gray-500 hover:text-gray-700"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          toggleDropdown();
        }}
      >
        {timeframe} <MdExpandMore className="ml-1" />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {["This Week", "This Month", "This Year"].map((option) => (
            <button
              key={option}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleTimeframeChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Earnings Card */}
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between border border-solid border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <FaChartPie className="text-3xl text-blue-500" />
            <Dropdown />
          </div>
          <h3 className="text-gray-600 font-medium">Total Earnings</h3>
          <p className="text-2xl font-bold text-gray-800">
            {data.earnings.total}
          </p>
          <div className="flex justify-between items-center text-gray-600">
            <span>Recent</span>
            <span className="font-medium text-gray-800">
              {data.earnings.recent}
            </span>
            <span className="text-green-500 text-sm">
              {data.earnings.growth}
            </span>
          </div>
        </div>

        {/* Hours Card */}
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between border border-solid border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <FaClock className="text-3xl text-yellow-500" />
            <Dropdown />
          </div>
          <h3 className="text-gray-600 font-medium">Total Hours Taught:</h3>
          <p className="text-2xl font-bold text-gray-800">{data.hours.total}</p>
          <div className="flex justify-between items-center text-gray-600">
            <span>Hours This Week</span>
            <span className="font-medium text-gray-800">
              {data.hours.weekly}
            </span>
          </div>
        </div>

        {/* Bookings Card */}
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between border border-solid border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <FaListAlt className="text-3xl text-yellow-500" />
            <Dropdown />
          </div>
          <h3 className="text-gray-600 font-medium">All Bookings</h3>
          <p className="text-2xl font-bold text-gray-800">
            {data.bookings.total}
          </p>
          <div className="flex justify-between items-center text-gray-600">
            <div>
              <span>Pending</span>
              <p className="font-medium text-gray-800">
                {data.bookings.pending}
              </p>
            </div>
            <div>
              <span>Completed</span>
              <p className="font-medium text-gray-800">
                {data.bookings.completed}
                <span className="text-green-500 text-sm ml-2">
                  {data.bookings.growth}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
