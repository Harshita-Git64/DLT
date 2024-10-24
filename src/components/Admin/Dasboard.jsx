import React, { useState } from "react";
import {
  FiUsers,
  FiDollarSign,
  FiTrendingUp,
  FiFileText,
} from "react-icons/fi"; // React icons
import { MdQueryStats } from "react-icons/md"; // React icons for queries
import { GrPieChart } from "react-icons/gr";
import { MdOutlinePersonAddAlt } from "react-icons/md";
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

const SuccessRateChart = () => {
  // Sample data for each time filter
  const dataByWeek = [
    { name: "Sunday", rate: 45 },
    { name: "Monday", rate: 50 },
    { name: "Tuesday", rate: 55 },
    { name: "Wednesday", rate: 60 },
    { name: "Thursday", rate: 62 },
    { name: "Friday", rate: 65 },
    { name: "Saturday", rate: 70 },
  ];

  const dataByMonth = [
    { name: "Week 1", rate: 50 },
    { name: "Week 2", rate: 55 },
    { name: "Week 3", rate: 60 },
    { name: "Week 4", rate: 65 },
  ];

  const dataByYear = [
    { name: "January", rate: 45 },
    { name: "February", rate: 50 },
    { name: "March", rate: 55 },
    { name: "April", rate: 60 },
    { name: "May", rate: 62 },
    { name: "June", rate: 65 },
    { name: "July", rate: 67 },
    { name: "August", rate: 70 },
    { name: "September", rate: 72 },
    { name: "October", rate: 75 },
    { name: "November", rate: 78 },
    { name: "December", rate: 80 },
  ];

  const dataOverall = [
    { name: "2019", rate: 40 },
    { name: "2020", rate: 45 },
    { name: "2021", rate: 50 },
    { name: "2022", rate: 55 },
    { name: "2023", rate: 60 },
  ];

  // State to manage selected time filter and the corresponding data
  const [timeFilter, setTimeFilter] = useState("Year");
  const [chartData, setChartData] = useState(dataByYear);

  // Handler to update chart data based on the selected filter
  const handleTimeFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setTimeFilter(selectedFilter);

    switch (selectedFilter) {
      case "Month":
        setChartData(dataByMonth);
        break;
      case "Year":
        setChartData(dataByYear);
        break;
      case "Overall":
        setChartData(dataOverall);
        break;
      default:
        setChartData(dataByWeek);
        break;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-solid border-neutral-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Average Success Rate of Instructors
        </h2>
        <select
          value={timeFilter}
          onChange={handleTimeFilterChange}
          className="p-2 border rounded-lg shadow-sm focus:outline-none"
        >
          <option value="Week">This Week</option>
          <option value="Month">This Month</option>
          <option value="Year">This Year</option>
          <option value="Overall">Overall (Past 5 Years)</option>
        </select>
      </div>

      <div className="flex items-center">
        <h1 className="text-5xl font-bold text-blue-600 mr-2">755</h1>
        <span className="text-xl">Instructors</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[20, 80]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#F6AD55"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
const WebsiteStats = () => {
  // States for each card's time filter
  const [websiteVisitsFilter, setWebsiteVisitsFilter] = useState("This Month");
  const [sessionDurationFilter, setSessionDurationFilter] =
    useState("This Month");

  // Data for each filter (replace with your actual data)
  const websiteVisitsData = {
    "This Week": 15000,
    "This Month": 50000,
    "This Year": 600000,
    Overall: 3000000,
  };

  const sessionDurationData = {
    "This Week": 5000,
    "This Month": 15000,
    "This Year": 180000,
    Overall: 900000,
  };

  // Handler for changing website visits filter
  const handleWebsiteVisitsFilterChange = (e) => {
    setWebsiteVisitsFilter(e.target.value);
  };

  // Handler for changing session duration filter
  const handleSessionDurationFilterChange = (e) => {
    setSessionDurationFilter(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-4 w-[35%] justify-between">
      {/* Card 1 - Total Website Visits */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[50%] border border-solid border-neutral-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Total Website Visits</h2>
          <select
            value={websiteVisitsFilter}
            onChange={handleWebsiteVisitsFilterChange}
            className="text-gray-500 focus:outline-none bg-transparent"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Overall</option>
          </select>
        </div>
        <div className="flex items-end">
          <h1 className="text-5xl font-bold text-blue-600">
            {websiteVisitsData[websiteVisitsFilter].toLocaleString()}
          </h1>
        </div>
      </div>

      {/* Card 2 - Total Session Duration */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[50%] border border-solid border-neutral-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Total Session Duration:</h2>
          <select
            value={sessionDurationFilter}
            onChange={handleSessionDurationFilterChange}
            className="text-gray-500 focus:outline-none bg-transparent"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Overall</option>
          </select>
        </div>
        <div className="flex items-end">
          <h1 className="text-5xl font-bold text-yellow-500">
            {sessionDurationData[sessionDurationFilter].toLocaleString()}
          </h1>
          <span className="text-lg ml-2">minutes</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dropdownOptions = ["This Week", "This Month", "This Year", "In Total"];

  const Dropdown = () => (
    <select className="bg-transparent text-gray-500 focus:outline-none">
      {dropdownOptions.map((option, index) => (
        <option key={index} value={option} className="text-black">
          {option}
        </option>
      ))}
    </select>
  );

  // booking conversion data
  const conversionDataOptions = {
    "This Week": [
      { name: "Bookings", value: 1750, color: "#facc15" }, // Yellow
      { name: "Unbooked", value: 750, color: "#3b82f6" }, // Blue
    ],
    "This Month": [
      { name: "Bookings", value: 8000, color: "#facc15" },
      { name: "Unbooked", value: 2000, color: "#3b82f6" },
    ],
    "This Year": [
      { name: "Bookings", value: 90000, color: "#facc15" },
      { name: "Unbooked", value: 10000, color: "#3b82f6" },
    ],
    Overall: [
      { name: "Bookings", value: 300000, color: "#facc15" },
      { name: "Unbooked", value: 50000, color: "#3b82f6" },
    ],
  };
  const [selectedOption, setSelectedOption] = useState("This Week");
  const [chartConversionData, setchartConversionData] = useState(
    conversionDataOptions[selectedOption]
  );

  const handleDropdownChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    setchartConversionData(conversionDataOptions[selected]);
  };

  //queriess data----------------------------
  const mockData = [
    {
      id: 1,
      name: "Wade Warren",
      location: "Sydney",
      date: "14 Oct 2024",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Esther Howard",
      location: "Melbourne",
      date: "13 Oct 2024",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-600",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      location: "Brisbane",
      date: "9 Oct 2024",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-600",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      location: "Perth",
      date: "5 Oct 2024",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 5,
      name: "Ronald Richards",
      location: "Adelaide",
      date: "3 Oct 2024",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-600",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      location: "Brisbane",
      date: "9 Oct 2024",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-600",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      location: "Perth",
      date: "5 Oct 2024",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 5,
      name: "Ronald Richards",
      location: "Adelaide",
      date: "3 Oct 2024",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-600",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      location: "Brisbane",
      date: "9 Oct 2024",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-600",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      location: "Perth",
      date: "5 Oct 2024",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 5,
      name: "Ronald Richards",
      location: "Adelaide",
      date: "3 Oct 2024",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-600",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  // revenew graph data.....................
  const dataForYearRevenew = [
    { name: "Jan", totalRevenue: 20, netProfit: -10 },
    { name: "Feb", totalRevenue: 15, netProfit: -5 },
    { name: "Mar", totalRevenue: 22, netProfit: 0 },
    { name: "Apr", totalRevenue: 30, netProfit: 5 },
    { name: "May", totalRevenue: 40, netProfit: 10 },
    { name: "Jun", totalRevenue: 35, netProfit: 8 },
    { name: "Jul", totalRevenue: 50, netProfit: 20 },
    { name: "Aug", totalRevenue: 45, netProfit: 15 },
    { name: "Sep", totalRevenue: 55, netProfit: 22 },
    { name: "Oct", totalRevenue: 60, netProfit: 25 },
    { name: "Nov", totalRevenue: 58, netProfit: 24 },
    { name: "Dec", totalRevenue: 65, netProfit: 30 },
  ];

  const dataForMonthRevenew = [
    { name: "Week 1", totalRevenue: 10, netProfit: -5 },
    { name: "Week 2", totalRevenue: 15, netProfit: 0 },
    { name: "Week 3", totalRevenue: 18, netProfit: 3 },
    { name: "Week 4", totalRevenue: 22, netProfit: 5 },
  ];

  const dataForWeekRevenew = [
    { name: "Mon", totalRevenue: 2, netProfit: -1 },
    { name: "Tue", totalRevenue: 3, netProfit: 0 },
    { name: "Wed", totalRevenue: 5, netProfit: 1 },
    { name: "Thu", totalRevenue: 7, netProfit: 2 },
    { name: "Fri", totalRevenue: 10, netProfit: 5 },
    { name: "Sat", totalRevenue: 8, netProfit: 4 },
    { name: "Sun", totalRevenue: 9, netProfit: 4 },
  ];

  const overallDataRevenew = [
    { name: "2021", totalRevenue: 500, netProfit: 200 },
    { name: "2022", totalRevenue: 600, netProfit: 250 },
    { name: "2023", totalRevenue: 700, netProfit: 300 },
    { name: "2024", totalRevenue: 800, netProfit: 350 },
  ];
  const [selectedDataRevenew, setselectedDataRevenew] =
    useState(dataForYearRevenew);
  const [activeTimeframe, setActiveTimeframe] = useState("thisYear");

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe);
    switch (timeframe) {
      case "thisWeek":
        setselectedDataRevenew(dataForWeekRevenew);
        break;
      case "thisMonth":
        setselectedDataRevenew(dataForMonthRevenew);
        break;
      case "thisYear":
        setselectedDataRevenew(dataForYearRevenew);
        break;
      case "overall":
        setselectedDataRevenew(overallDataRevenew);
        break;
      default:
        setselectedDataRevenew(dataForYearRevenew);
    }
  };

  // diversity graph-------------------------------

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
    <div className="w-full min-h-screen pl-6 pr-10 mb-12">
      <div className="flex flex-col gap-6">
        {/* First Row - 3 Main Cards */}
        <div className="flex justify-between gap-4">
          <div className="w-[30%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
            {/* Icon and Dropdown */}
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary-100 rounded-md">
                <GrPieChart className="text-blue-500 text-xl" />
              </div>
              <Dropdown />
            </div>
            <div className="flex justify-between w-full gap-4">
              <div className="shrink-0">
                <div className="text-gray-500 shrink-0">Total Users</div>
                <div className="text-2xl font-bold">15,000</div>
              </div>
              <div>
                <div className="text-gray-500 shrink-0">New Users</div>
                <div className="flex gap-2">
                  <div className="text-2xl font-bold">525</div>{" "}
                  <span className="text-green-600 flex items-center">
                    +2.06%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-pink-100 rounded-md">
                <MdOutlinePersonAddAlt className="text-pink-500 text-xl" />
              </div>
              <Dropdown />
            </div>
            <div className="flex w-full justify-between">
              <div>
                <div className="text-gray-500">Intructors</div>
                <div className="text-2xl font-bold">1250</div>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="text-gray-500">Active</div>
                  <div className="text-2xl font-bold">1128</div>
                </div>
                <div className="text-green-600 flex items-end">+15%</div>
              </div>
            </div>
          </div>

          <div className="w-[40%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-error-100 rounded-md">
                <FiTrendingUp className="text-red-500 text-xl" />
              </div>
              <Dropdown />
            </div>
            <div className="flex w-full justify-between">
              <div>
                <div className="text-gray-500">All Bookings</div>
                <div className="text-2xl font-bold">3,450</div>
              </div>
              <div>
                <div className="text-gray-500">Pending</div>
                <div className="text-2xl font-bold">575</div>
              </div>
              <div>
                <div className="text-gray-500">Completed</div>
                <div className="flex gap-2">
                  <div className="text-2xl font-bold">2875</div>
                  <div className="text-green-600 flex items-center">
                    +10.03%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - ------------------------------ */}
        <div className="flex gap-4 ">
          <div className="w-[30%] border border-solid border-neutral-100  p-6 rounded-lg bg-white shadow-lg overflow-visible">
            <div className=" w-[95%] ">
              <div className="flex justify-between items-start">
                <div className="w-1/2">
                  <h3 className="text-lg font-semibold">
                    Booking Conversion Rate
                  </h3>
                </div>
                <div>
                  <select
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    className="bg-transparent text-gray-500 border-none focus:outline-none"
                  >
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                    <option>Overall</option>
                  </select>
                </div>
              </div>

              {/* Responsive PieChart */}
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={chartConversionData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={45}
                    outerRadius={70}
                    fill="#82ca9d"
                    paddingAngle={5}
                    label
                  >
                    {chartConversionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              {/* Data Summary */}
              <div className="flex justify-between items-center mt-4">
                {chartConversionData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: data.color }}
                    ></div>
                    <div className="text-sm text-gray-500">{data.name}</div>
                    <div className="font-bold text-gray-900">{data.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-between items-center w-[30%]">
            <div className="w-full h-[50%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-accent-100 rounded-md">
                  <MdQueryStats className="text-purple-500 text-xl" />
                </div>
                <Dropdown />
              </div>
              <div className="text-gray-500">Queries Resolved</div>
              <div className="text-3xl font-bold">1,200</div>
              <div className="text-red-500 text-sm mt-1">
                Unresolved: 15 <span className="text-red-600">-2.01%</span>
              </div>
            </div>
            <div className="w-full h-[50%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-success-100 rounded-md">
                  <FiDollarSign className="text-green-500 text-xl" />
                </div>
                <Dropdown />
              </div>
              <div className="text-gray-500">Total Revenue</div>
              <div className="text-3xl font-bold">$50,000</div>
              <div className="text-gray-500 text-sm mt-1">
                Revenue from Active Bookings: $35,000
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-[40%] mx-auto border border-solid border-neutral-100">
            <h3 className="text-xl font-semibold mb-4">Recent Queries</h3>
            {/* Scrollable container */}
            <div className="space-y-4 overflow-y-scroll max-h-[360px]">
              {mockData.map((query) => (
                <div
                  key={query.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  {/* User info */}
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={query.avatar}
                      alt={query.name}
                    />
                    <div>
                      <div className="text-gray-500 text-sm">
                        {query.location}
                      </div>
                      <div className="font-bold text-gray-800">
                        {query.name}
                      </div>
                    </div>
                  </div>
                  {/* Date and status */}
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">{query.date}</div>
                    <div
                      className={`px-2 py-1 text-sm rounded-lg ${query.statusColor}`}
                    >
                      {query.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* third row cards-------------------------- */}
        <div className="p-4 bg-white shadow-lg rounded-lg border border-solid border-neutral-100">
          <h3 className="text-2xl font-semibold">Revenue</h3>
          <div className="text-blue-600 text-4xl font-bold mt-2">$50,000</div>
          <div className="text-gray-500">1500 Bookings</div>

          {/* Timeframe buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={() => handleTimeframeChange("thisWeek")}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 
            ${
              activeTimeframe === "thisWeek"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            >
              This Week
            </button>
            <button
              onClick={() => handleTimeframeChange("thisMonth")}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 
            ${
              activeTimeframe === "thisMonth"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            >
              This Month
            </button>
            <button
              onClick={() => handleTimeframeChange("thisYear")}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 
            ${
              activeTimeframe === "thisYear"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            >
              This Year
            </button>
            <button
              onClick={() => handleTimeframeChange("overall")}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 
            ${
              activeTimeframe === "overall"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            >
              Overall
            </button>
          </div>

          {/* Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedDataRevenew}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="totalRevenue"
                stroke="#007bff"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="netProfit" stroke="#ffc107" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* 4th roww------------ */}
        <div className="flex gap-6">
          <WebsiteStats />
          <div className="w-[65%] p-6 bg-white shadow-md rounded-lg border border-solid border-neutral-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Student Enrollment</h2>
                <div className="text-blue-600 text-4xl font-bold mt-2">
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
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={selectedDataForDiversity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="male" stackId="a" fill="#007bff" />
                <Bar dataKey="female" stackId="a" fill="#ffc107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* 5th row----------------------- */}
        <SuccessRateChart />
      </div>
    </div>
  );
};

export default Dashboard;
