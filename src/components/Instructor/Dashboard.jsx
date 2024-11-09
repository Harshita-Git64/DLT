import React, { useState, useEffect } from "react";
import { FaChartPie, FaClock, FaListAlt } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const UpcomingLessons = () => {
  const lessons = [
    {
      city: "Sydney",
      date: "14 Oct 2024",
      name: "Wade Warren",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      city: "Melbourne",
      date: "13 Oct 2024",
      name: "Esther Howard",
      status: "Accepted",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      city: "Brisbane",
      date: "9 Oct 2024",
      name: "Brooklyn Simmons",
      status: "Rejected",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      city: "Adelaide",
      date: "9 Oct 2024",
      name: "Guy Hawkins",
      status: "Accepted",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      city: "Perth",
      date: "8 Oct 2024",
      name: "Adelaide Richardson",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      city: "Perth",
      date: "8 Oct 2024",
      name: "Adelaide Richardson",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      city: "Perth",
      date: "8 Oct 2024",
      name: "Adelaide Richardson",
      status: "Pending",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-600",
    Accepted: "bg-green-100 text-green-600",
    Rejected: "bg-red-100 text-red-600",
  };
  return (
    <div className="w-[42%] p-4 bg-white rounded-lg shadow-lg border border-solid border-slate-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Lessons</h2>
      <div className="space-t-4 overflow-y-auto max-h-[340px] scrollbar-thin scrollbar-thumb-gray-300">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <img
                src={lesson.image}
                alt={lesson.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {lesson.city}
                </h3>
                <p className="text-sm text-gray-600">{lesson.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{lesson.date}</p>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  statusStyles[lesson.status]
                }`}
              >
                {lesson.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const LessonBooking = () => {
  const dataForYearForDiversity = [
    { name: "Jan", male: 30, female: 20 },
    { name: "Feb", male: 25, female: 15 },
    { name: "Mar", male: 35, female: 25 },
    { name: "Apr", male: 40, female: 30 },
    { name: "May", male: 28, female: 20 },
    { name: "Jun", male: 33, female: 22 },
    { name: "Jul", male: 40, female: 30 },
    { name: "Aug", male: 38, female: 28 },
    { name: "Sep", male: 42, female: 32 },
    { name: "Oct", male: 50, female: 35 },
    { name: "Nov", male: 55, female: 38 },
    { name: "Dec", male: 60, female: 40 },
  ];

  const dataForMonthForDiversity = [
    { name: "Week 1", male: 10, female: 5 },
    { name: "Week 2", male: 15, female: 7 },
    { name: "Week 3", male: 18, female: 9 },
    { name: "Week 4", male: 20, female: 10 },
  ];

  const dataForWeekForDiversity = [
    { name: "Mon", male: 3, female: 2 },
    { name: "Tue", male: 4, female: 3 },
    { name: "Wed", male: 5, female: 4 },
    { name: "Thu", male: 6, female: 5 },
    { name: "Fri", male: 7, female: 5 },
    { name: "Sat", male: 8, female: 6 },
    { name: "Sun", male: 9, female: 6 },
  ];

  const overallDataForDiversity = [
    { name: "2019", male: 400, female: 300 },
    { name: "2020", male: 450, female: 350 },
    { name: "2021", male: 500, female: 400 },
    { name: "2022", male: 550, female: 450 },
    { name: "2023", male: 600, female: 500 },
  ];

  const [selectedDataForDiversity, setSelectedDataForDiversity] = useState(
    dataForYearForDiversity
  );
  const [timeframeForDiversity, setTimeframeForDiversity] =
    useState("This Year");
  const handleTimeframeChangeForDiversity = (event) => {
    const selectedTimeframe = event.target.value;
    setTimeframeForDiversity(selectedTimeframe);

    switch (selectedTimeframe) {
      case "This Week":
        setSelectedDataForDiversity(dataForWeekForDiversity);
        break;
      case "This Month":
        setSelectedDataForDiversity(dataForMonthForDiversity);
        break;
      case "This Year":
        setSelectedDataForDiversity(dataForYearForDiversity);
        break;
      case "Overall":
        setSelectedDataForDiversity(overallDataForDiversity);
        break;
      default:
        setSelectedDataForDiversity(dataForYearForDiversity);
    }
  };
  return (
    <div className="w-[56%] p-6 px-4 lg:px-6 bg-white shadow-md rounded-lg border border-solid border-neutral-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Student Enrollment</h2>
          <div className="text-blue-600 text-2xl lg:text-3xl font-bold mt-2 mb-4">
            5000 Students
          </div>
        </div>
        <div>
          {/* Dropdown for selecting timeframe */}
          <select
            className="border border-gray-300 p-2 rounded-md shadow-sm"
            value={timeframeForDiversity}
            onChange={handleTimeframeChangeForDiversity}
          >
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
            <option value="Overall">Overall</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="107%" height={300} className={"-ml-[2.5vw]"}>
        <BarChart data={selectedDataForDiversity}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" stackId="a" fill="#007bff" />
          <Bar dataKey="female" stackId="a" fill="#ffc107" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

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
      {/* --------------2nd row --------------- */}
      <div className="flex justify-between mt-6">
        <UpcomingLessons />
        <LessonBooking />
      </div>
    </div>
  );
};

export default Dashboard;
