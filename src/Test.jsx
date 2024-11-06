import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { FaSearch, FaFilter, FaTh, FaBars, FaCaretDown } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
import { GrPieChart } from "react-icons/gr";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlinePersonAddAlt } from "react-icons/md";
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

  // total users table----------------
 
  const Dropdown = ({ onChange }) => (
    <select
      className="bg-transparent text-gray-500 focus:outline-none"
      onChange={onChange}
      value={selectedFilter}
    >
      {["In Total", "This Week", "This Month", "This Year"].map((option, index) => (
        <option key={index} value={option} className="text-black">
          {option}
        </option>
      ))}
    </select>
  );

  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("In Total"); // Default to Overall
  const [allUsers, setAllUsers] = useState([]);

  // Function to fetch and calculate the total number of users
  const fetchData = async () => {
    try {
      const instructorRes = await axios.get("http://13.202.242.185:8055/items/Instructor");
      const learnerRes = await axios.get("http://13.202.242.185:8055/items/Learner");

      const instructors = instructorRes.data.data;
      const learners = learnerRes.data.data;

      const combinedUsers = [...instructors, ...learners];

      setAllUsers(combinedUsers); // Store all users for later filtering
      calculateUsers("In Total", combinedUsers); // Initial calculation for Overall

    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const calculateUsers = (filter, users) => {
    const currentDate = new Date();

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(currentDate.getDate() - 7);

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() - 1);

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    let filteredUsers = users;

    if (filter === "This Week") {
      filteredUsers = users.filter((user) => new Date(user.date_created) > oneWeekAgo);
    } else if (filter === "This Month") {
      filteredUsers = users.filter((user) => new Date(user.date_created) > oneMonthAgo);
    } else if (filter === "This Year") {
      filteredUsers = users.filter((user) => new Date(user.date_created) > oneYearAgo);
    }

    // Update total users count based on the filter
    setTotalUsers(filteredUsers.length);

    // Example for new users (adjust as necessary, this assumes we're showing weekly new users as an example)
    setNewUsers(filteredUsers.length); // You can refine this for different calculations
  };

  // Handle dropdown change
  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedFilter(selectedOption); // Update selected filter
    calculateUsers(selectedOption, allUsers); // Recalculate users based on selection
  };

  useEffect(() => {
    fetchData();
  }, []);

   // total instructor data----------------
    // State variables specific to instructor stats
  const [instructorFilter, setInstructorFilter] = useState("In Total");
  const [instructorData, setInstructorData] = useState([]);
  const [activeInstructorData, setActiveInstructorData] = useState([]);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [activeInstructors, setActiveInstructors] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);

  // Function to fetch instructor data from API based on selected filter
  const fetchInstructorData = async (filter) => {
    const endpoint = `http://13.202.242.185:8055/items/Instructor`;
    try {
      const response = await axios.get(endpoint);
      const data = response.data.data;

      let filteredData;
      const currentDate = new Date();

      switch (filter) {
        case "This Week":
          filteredData = data.filter((instructor) => {
            const createdDate = new Date(instructor.date_created);
            return createdDate >= new Date(currentDate.setDate(currentDate.getDate() - 7));
          });
          break;
        case "This Month":
          filteredData = data.filter((instructor) => {
            const createdDate = new Date(instructor.date_created);
            return createdDate.getMonth() === currentDate.getMonth() && createdDate.getFullYear() === currentDate.getFullYear();
          });
          break;
        case "This Year":
          filteredData = data.filter((instructor) => {
            const createdDate = new Date(instructor.date_created);
            return createdDate.getFullYear() === currentDate.getFullYear();
          });
          break;
        case "In Total":
        default:
          filteredData = data;
          break;
      }

      return filteredData;
    } catch (error) {
      console.error("Error fetching instructor data:", error);
      return [];
    }
  };

  const handleInstructorFilterChange = async (e) => {
    const filter = e.target.value;
    setInstructorFilter(filter);

    // Fetch filtered instructor data based on the selected filter
    const data = await fetchInstructorData(filter);
    setInstructorData(data);

    // Filter active instructors
    const active = data.filter((instructor) => instructor.Availibility === "Active");
    setActiveInstructorData(active);

    // Update total and active instructor counts
    setTotalInstructors(data.length);
    setActiveInstructors(active.length);

    // Calculate percentage change in active instructors (if applicable)
    const previousActiveCount = 1128; // Placeholder for previous period active count
    setPercentageChange(((active.length - previousActiveCount) / previousActiveCount) * 100);
  };

  useEffect(() => {
    // Fetch instructor data on mount with default filter (In Total)
    const fetchData = async () => {
      const data = await fetchInstructorData("In Total");
      setInstructorData(data);
      const active = data.filter((instructor) => instructor.Availibility === "Active");
      setActiveInstructorData(active);
      setTotalInstructors(data.length);
      setActiveInstructors(active.length);
    };

    fetchData();
  }, []);

  //total booking data-------------

  const [bookingFilter, setBookingFilter] = useState("In Total");
  const [bookingData, setBookingData] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState({ pending: 0, completed: 0, total: 0 });

  // Fetch booking data when the component mounts
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get("http://13.202.242.185:8055/items/Booking");
        const data = response.data.data;
        setBookingData(data);
        calculateBookings(data, bookingFilter);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };
    fetchBookingData();
  }, []);

  // Recalculate bookings whenever the filter changes
  useEffect(() => {
    if (bookingData.length > 0) {
      calculateBookings(bookingData, bookingFilter);
    }
  }, [bookingFilter, bookingData]);

  // Function to calculate bookings based on the selected filter (week, month, year, or total)
  const calculateBookings = (data, filter) => {
    const currentDate = new Date();
    let bookingsCount = { pending: 0, completed: 0, total: 0 };

    // Helper function to check if the booking falls within the selected time range
    const isInTimeRange = (date) => {
      const bookingDate = new Date(date);
      switch (filter) {
        case "This Week":
          return bookingDate >= new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())) && bookingDate <= new Date();
        case "This Month":
          return bookingDate.getMonth() === currentDate.getMonth() && bookingDate.getFullYear() === currentDate.getFullYear();
        case "This Year":
          return bookingDate.getFullYear() === currentDate.getFullYear();
        default:
          return true; // "In Total"
      }
    };

    // Count the bookings based on their status and time range
    data.forEach((booking) => {
      if (isInTimeRange(booking.date_created)) {
        bookingsCount.total += 1;
        if (booking.status === "Pending") {
          bookingsCount.pending += 1;
        } else if (booking.status === "Completed") {
          bookingsCount.completed += 1;
        }
      }
    });

    setFilteredBookings(bookingsCount);
  };

  // Handle the filter change
  const handleBookingFilterChange = (e) => {
    setBookingFilter(e.target.value);
  };

  return (
    <div>
      {/* total session duration */}
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

    {/* total users table */}
    <div className="w-[30%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
      {/* Icon and Dropdown */}
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-secondary-100 rounded-md">
          <GrPieChart className="text-blue-500 text-xl" />
        </div>
        <Dropdown onChange={handleDropdownChange} />
      </div>

      <div className="flex justify-between w-full gap-4">
        <div className="shrink-0">
          <div className="text-gray-500 shrink-0">Total Users</div>
          <div className="text-2xl font-bold">{totalUsers}</div>
        </div>
        <div>
          <div className="text-gray-500 shrink-0">New Users</div>
          <div className="flex gap-2">
            <div className="text-2xl font-bold">{newUsers}</div>
            <span className="text-green-600 flex items-center">+2.06%</span>
          </div>
        </div>
      </div>
    </div>


     {/* total instructor data */}
     <div className="w-[30%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-pink-100 rounded-md">
          <MdOutlinePersonAddAlt className="text-pink-500 text-xl" />
        </div>
        <select 
          className="bg-transparent text-gray-500 focus:outline-none"
          onChange={handleInstructorFilterChange}
          value={instructorFilter}
        >
          {["In Total", "This Week", "This Month", "This Year"].map((option, index) => (
            <option key={index} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <div className="text-gray-500">Instructors</div>
          <div className="text-2xl font-bold">{totalInstructors}</div>
        </div>
        <div className="flex gap-4">
          <div>
            <div className="text-gray-500">Active</div>
            <div className="text-2xl font-bold">{activeInstructors}</div>
          </div>
          <div className={`text-${percentageChange >= 0 ? 'green' : 'red'}-600 flex items-end`}>
            {percentageChange >= 0 ? `+${percentageChange.toFixed(2)}%` : `${percentageChange.toFixed(2)}%`}
          </div>
        </div>
      </div>
    </div>

{/* total booking data */}

 <div className="w-[40%] bg-white shadow-lg rounded-lg p-6 relative border border-solid border-neutral-100">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-error-100 rounded-md">
          <FiTrendingUp className="text-red-500 text-xl" />
        </div>
        <select
          className="bg-transparent text-gray-500 focus:outline-none"
          onChange={handleBookingFilterChange}
          value={bookingFilter}
        >
          {["In Total", "This Week", "This Month", "This Year"].map((option, index) => (
            <option key={index} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <div className="text-gray-500">All Bookings</div>
          <div className="text-2xl font-bold">{filteredBookings.total}</div>
        </div>
        <div>
          <div className="text-gray-500">Pending</div>
          <div className="text-2xl font-bold">{filteredBookings.pending}</div>
        </div>
        <div>
          <div className="text-gray-500">Completed</div>
          <div className="flex gap-2">
            <div className="text-2xl font-bold">{filteredBookings.completed}</div>
            {filteredBookings.completed > 0 && (
              <div className="text-green-600 flex items-center">
                +10.03%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}


export default Test;
