import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { FaSearch, FaFilter, FaTh, FaBars, FaCaretDown } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
// import { BookingCard } from "./AllBookings";
import axios from "./axios";
import { subDays, subMonths, startOfWeek, startOfMonth, startOfYear, isWithinInterval } from 'date-fns';
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

const Test = () => {
  const [sessionData, setSessionData] = useState([]);
  const [sessionDurationFilter, setSessionDurationFilter] = useState("This Week");
  const [totalDuration, setTotalDuration] = useState(0);

  // Fetch the session data from the API
  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await axios('http://13.202.242.185:8055/items/Booking?fields=date_created,duration');
       
        setSessionData(response.data.data);  // Assuming data.data contains the session info
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    fetchSessionData();
  }, []);

  // Filter session data and calculate total duration based on the selected filter
  const calculateTotalDuration = (filter) => {
    const now = new Date();
    let filteredData = [];

    switch (filter) {
      case 'This Week':
        const startOfCurrentWeek = startOfWeek(now);
        filteredData = sessionData.filter((session) =>
          isWithinInterval(new Date(session.date_created), { start: startOfCurrentWeek, end: now })
        );
        break;

      case 'This Month':
        const startOfCurrentMonth = startOfMonth(now);
        filteredData = sessionData.filter((session) =>
          isWithinInterval(new Date(session.date_created), { start: startOfCurrentMonth, end: now })
        );
        break;

      case 'This Year':
        const startOfCurrentYear = startOfYear(now);
        filteredData = sessionData.filter((session) =>
          isWithinInterval(new Date(session.date_created), { start: startOfCurrentYear, end: now })
        );
        break;

      case 'Overall':
      default:
        filteredData = sessionData;  // No filtering for overall
        break;
    }

    // Sum up the duration in hours and convert to minutes
    const totalDurationInMinutes = filteredData.reduce((total, session) => {
      return total + session.duration * 60;  // Convert hours to minutes
    }, 0);

    return totalDurationInMinutes;
  };

  // Recalculate total duration when sessionData or sessionDurationFilter changes
  useEffect(() => {
    const total = calculateTotalDuration(sessionDurationFilter);
    setTotalDuration(total);
  }, [sessionData, sessionDurationFilter]);


  // Student calculations

  const [selectedDataForDiversity, setSelectedDataForDiversity] = useState([]);
  const [timeframeForDiversity, setTimeframeForDiversity] = useState("This Year");

  useEffect(() => {
    fetchDataForDiversity();
  }, []);

  // Fetch data from backend API
  const fetchDataForDiversity = async () => {
    try {
      const response = await fetch(
        "http://13.202.242.185:8055/items/Learner?fields=date_created,user_id.gender"
      );
      const data = await response.json();
      processLearnerData(data.data); // Process the data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Process the data according to timeframe (weekly, monthly, yearly)
  const processLearnerData = (learners) => {
    const weeklyData = [
      { name: "Week 1", male: 0, female: 0 },
      { name: "Week 2", male: 0, female: 0 },
      { name: "Week 3", male: 0, female: 0 },
      { name: "Week 4", male: 0, female: 0 },
    ];
    const monthlyData = [
      { name: "Jan", male: 0, female: 0 },
      { name: "Feb", male: 0, female: 0 },
      { name: "Mar", male: 0, female: 0 },
      { name: "Apr", male: 0, female: 0 },
      { name: "May", male: 0, female: 0 },
      { name: "Jun", male: 0, female: 0 },
      { name: "Jul", male: 0, female: 0 },
      { name: "Aug", male: 0, female: 0 },
      { name: "Sep", male: 0, female: 0 },
      { name: "Oct", male: 0, female: 0 },
      { name: "Nov", male: 0, female: 0 },
      { name: "Dec", male: 0, female: 0 },
    ];
    const yearlyData = {};

    learners.forEach((learner) => {
      const date = new Date(learner.date_created);
      const gender = learner.user_id.gender;
      const year = date.getFullYear();
      const month = date.getMonth();
      const weekNumber = Math.ceil((date.getDate() - 1) / 7); // Calculate week of the month

      // Yearly aggregation
      if (!yearlyData[year]) {
        yearlyData[year] = { name: `${year}`, male: 0, female: 0 };
      }
      if (gender === "male") {
        yearlyData[year].male += 1;
      } else if (gender === "female") {
        yearlyData[year].female += 1;
      }

      // Monthly aggregation
      if (gender === "male") {
        monthlyData[month].male += 1;
      } else if (gender === "female") {
        monthlyData[month].female += 1;
      }

      // Weekly aggregation
      if (gender === "male") {
        weeklyData[weekNumber - 1].male += 1;
      } else if (gender === "female") {
        weeklyData[weekNumber - 1].female += 1;
      }
    });

    setSelectedDataForDiversity(Object.values(yearlyData)); // Default to yearly view
  };

  // Handle timeframe change (This Week, This Month, This Year, Overall)
  const handleTimeframeChangeForDiversity = (event) => {
    const selectedTimeframe = event.target.value;
    setTimeframeForDiversity(selectedTimeframe);

    switch (selectedTimeframe) {
      case "This Week":
        setSelectedDataForDiversity(weeklyData);
        break;
      case "This Month":
        setSelectedDataForDiversity(monthlyData);
        break;
      case "This Year":
        setSelectedDataForDiversity(Object.values(yearlyData));
        break;
      default:
        setSelectedDataForDiversity(Object.values(yearlyData));
    }
  };

  return (
    <div>
    <div className="bg-white p-6 rounded-lg shadow-md h-[50%] border border-solid border-neutral-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total Session Duration:</h2>
        <select
          value={sessionDurationFilter}
          onChange={(e) => setSessionDurationFilter(e.target.value)}
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
          {totalDuration.toLocaleString()}
        </h1>
        <span className="text-lg ml-2">minutes</span>
      </div>
    </div>

    {/* student data graph */}
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
  );
}


export default Test;
