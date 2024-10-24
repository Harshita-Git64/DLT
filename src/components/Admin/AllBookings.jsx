import React, { useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaBars, FaCaretDown, FaFilter, FaSearch, FaTh } from "react-icons/fa";
import ReactModal from "react-modal";
import { GoArrowLeft } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import Modal from "react-modal";
const bookingData = [
  {
    id: "#AU-BK-2024-00123",
    instructor: "Robert Fox",
    learner: "Leslie Alexander",
    bookingDate: "2024-10-02",
    packageType: "Standard",
    sessionFee: "$550",
    instructorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "#AU-BK-2024-00124",
    instructor: "Jacob Jones",
    learner: "Courtney Henry",
    bookingDate: "2024-09-15",
    packageType: "Premium",
    sessionFee: "$750",
    instructorAvatar: "https://randomuser.me/api/portraits/men/2.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "#AU-BK-2024-00125",
    instructor: "Wade Warren",
    learner: "Jane Cooper",
    bookingDate: "2024-09-30",
    packageType: "Basic",
    sessionFee: "$450",
    instructorAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "#AU-BK-2024-00126",
    instructor: "Albert Flores",
    learner: "Theresa Webb",
    bookingDate: "2024-08-21",
    packageType: "Standard",
    sessionFee: "$500",
    instructorAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "#AU-BK-2024-00127",
    instructor: "Darlene Robertson",
    learner: "Eleanor Pena",
    bookingDate: "2024-09-12",
    packageType: "Standard",
    sessionFee: "$520",
    instructorAvatar: "https://randomuser.me/api/portraits/men/5.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "#AU-BK-2024-00128",
    instructor: "Arlene McCoy",
    learner: "Brooklyn Simmons",
    bookingDate: "2024-10-04",
    packageType: "Basic",
    sessionFee: "$400",
    instructorAvatar: "https://randomuser.me/api/portraits/men/6.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "#AU-BK-2024-00129",
    instructor: "Savannah Nguyen",
    learner: "Kristin Watson",
    bookingDate: "2024-08-10",
    packageType: "Premium",
    sessionFee: "$780",
    instructorAvatar: "https://randomuser.me/api/portraits/men/7.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: "#AU-BK-2024-00130",
    instructor: "Marvin McKinney",
    learner: "Annette Black",
    bookingDate: "2024-07-27",
    packageType: "Standard",
    sessionFee: "$550",
    instructorAvatar: "https://randomuser.me/api/portraits/men/8.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: "#AU-BK-2024-00131",
    instructor: "Cameron Williamson",
    learner: "Floyd Miles",
    bookingDate: "2024-09-03",
    packageType: "Basic",
    sessionFee: "$490",
    instructorAvatar: "https://randomuser.me/api/portraits/men/9.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: "#AU-BK-2024-00132",
    instructor: "Jerome Bell",
    learner: "Ronald Richards",
    bookingDate: "2024-10-09",
    packageType: "Premium",
    sessionFee: "$800",
    instructorAvatar: "https://randomuser.me/api/portraits/men/10.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: "#AU-BK-2024-00133",
    instructor: "Jenny Wilson",
    learner: "Kathryn Murphy",
    bookingDate: "2024-08-30",
    packageType: "Standard",
    sessionFee: "$550",
    instructorAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: "#AU-BK-2024-00134",
    instructor: "Kristin Watson",
    learner: "Esther Howard",
    bookingDate: "2024-10-11",
    packageType: "Basic",
    sessionFee: "$470",
    instructorAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
    learnerAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

// Modal Custom Styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const BookingDetailModal = ({ setBookingDetailModalOpen }) => {
  return (
    <div>
      <GoArrowLeft
        size={28}
        className="hover:cursor-pointer"
        onClick={() => setBookingDetailModalOpen(false)}
      />
      <div className="border border-neutral-100 rounded-lg mt-8 mb-20">
        {/* profile section */}
        <div className="flex justify-between p-4">
          <div className="flex gap-4 items-start">
            <div className="flex">
              <img
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg -mr-4 z-10"
                src="https://randomuser.me/api/portraits/men/1.jpg"
              ></img>

              <img
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                src="https://randomuser.me/api/portraits/women/1.jpg"
              ></img>
            </div>
            <div>
              <div className="flex gap-1 ">
                <span className="font-semibold">Instructor:</span>
                <span className="">Robert Fox</span>
              </div>
              <div className="flex gap-1 mt-1">
                <span className="font-semibold">Learner:</span>
                <span className="">Lasie Alexander</span>
              </div>
              <button className="px-6 rounded-full text-success-300 border border-success-300 mt-2 text-sm">
                Ongoing
              </button>
            </div>
          </div>

          <HiDotsHorizontal size={22} className="hover:cursor-pointer" />
        </div>
        <hr className="border-neutral-100"></hr>

        <div className="flex">
          <div className="border-r-2 border-neutral-100 ">
            {/* Personal details */}
            <div className="p-4 text-sm">
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Booking ID
              </h3>
              <p className="font-poppins text-[#202224]">#AU-BK-2024-00123</p>
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Instructor Name
              </h3>
              <p className="font-poppins text-[#202224]">Robert Fox</p>
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Learner Name
              </h3>
              <p className="font-poppins text-[#202224]">Leslie Alexander</p>
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Date of Booking
              </h3>
              <p className="font-poppins text-[#202224]">20 Sept 2024</p>
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Package Type
              </h3>
              <p className="font-poppins text-[#202224]">Standard Package</p>
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Number of Lessons
              </h3>
              <p className="font-poppins text-[#202224]">10</p>
              <h3 className="font-semibold font-poppins text-[#000000] mt-4">
                Lessons Taken
              </h3>
              <p className="font-poppins text-[#202224]">4</p>
              <h3 className="font-semibold  font-poppins text-[#000000] mt-4">
                Duration (length of each lesson)
              </h3>
              <p className="font-poppins text-[#202224]">1 hour</p>
            </div>
          </div>

          <div className="w-full">
            {/*  Booking Information */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold font-poppins text-secondary-500">
                Booking Information
              </h2>
              <div className="text-sm">
                <div className="font-bold mt-4 font-poppins">Package Type</div>
                <div>Standard Package</div>
                <div className="font-bold mt-4">Package Price</div>
                <div>$550</div>
                <div className="font-bold mt-4">Payment Status</div>
                <div>Paid</div>
                <div className="font-bold mt-4">Payment Method</div>
                <div>Credit Card</div>
              </div>
            </div>
            <hr className="border-neutral-100 my-3"></hr>
            {/* Additional Details */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold text-secondary-500">
                Additional Details
              </h2>
              <div className="text-sm">
                <div className="font-bold mt-4 font-poppins">
                  Instructor Contact
                </div>
                <div>555-444-333</div>
                <div className="font-bold mt-4">Instructor Email</div>
                <div>xyz@gmail.com</div>
                <div className="font-bold mt-4">Learner Contact</div>
                <div>555-444-333</div>
                <div className="font-bold mt-4">Learner Email</div>
                <div>xyz@gmail.com</div>
              </div>
            </div>
            <hr className="border-neutral-100 my-3"></hr>
            {/* Notes */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold text-secondary-500">Notes</h2>
              <div className="text-sm">
                <div className="font-bold mt-4 font-poppins">
                  Special Requests
                </div>
                <div>Please provide an automatic vehicle</div>
                <div className="font-bold mt-4">Instructor Comments</div>
                <div>
                  Learner is progressing well,recommended focusing on parallel
                  parking in the next lesson.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Action Butttons */}
      <div className="flex gap-5 bg-white py-5 fixed bottom-0 w-full">
        <button className="bg-error-200 rounded-md px-8 py-2 text-white transition-colors duration-200 hover:bg-error-300">
          Ban Account
        </button>
        <button
          className="bg-neutral-300 rounded-md text-white px-8 py-2 transition-colors duration-200 hover:bg-neutral-400"
          onClick={() => setBookingDetailModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const BookingCard = ({ booking, setBookingDetailModalOpen }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[23%] flex flex-col justify-between items-center border border-solid border-neutral-100">
      <div className="flex justify-center mb-4">
        <img
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg -mr-4 z-10"
          src={booking.instructorAvatar}
          alt="Instructor Avatar"
        />
        <img
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg "
          src={booking.learnerAvatar}
          alt="Learner Avatar"
        />
      </div>

      <h2 className="font-semibold text-center mb-5">{booking.id}</h2>

      <div className="w-full">
        <p className="font-semibold flex w-full justify-between mb-2 font-poppins text-gray-500 text-desk-b-3">
          Instructor: <span className="font-normal text-black">{booking.instructor}</span>
        </p>
        <p className="font-semibold flex w-full justify-between mb-2 text-gray-500 text-desk-b-3">
          Learner: <span className="font-normal text-black">{booking.learner}</span>
        </p>
        <p className="font-semibold flex w-full justify-between shrink-0 mb-2 text-gray-500 text-desk-b-3">
          Date:{" "}
          <span className="font-normal shrink-0 text-black">
            {new Date(booking.bookingDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </p>
        <p className="font-semibold flex w-full justify-between mb-2 text-gray-500 text-desk-b-3">
          Package Type:{" "}
          <span className="font-normal text-black">{booking.packageType}</span>
        </p>
        <p className="font-semibold flex w-full justify-between mb-2 text-gray-500 text-desk-b-3">
          Session Fee: <span className="font-normal text-black">{booking.sessionFee}</span>
        </p>
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
        onClick={() => setBookingDetailModalOpen(true)}
      >
        View Details
      </button>
    </div>
  );
};

const AllBookings = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(bookingData);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [isBookingDetailModalOpen, setBookingDetailModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  // Date Filter
  const handleDateFilter = (date) => {
    setSelectedDate(date);
    setIsDateModalOpen(false);
  };

  // Package Filter
  const handlePackageFilter = (packageType) => {
    setSelectedPackage(packageType);
    setIsPackageModalOpen(false);
  };

  // Search Filter Function
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = bookingData.filter(
      (booking) =>
        booking.instructor.toLowerCase().includes(searchTerm) ||
        booking.learner.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  // Apply both date and package filters
  const applyFilters = () => {
    const filtered = bookingData.filter((booking) => {
      const dateCondition = selectedDate
        ? new Date(booking.bookingDate) >= new Date(selectedDate)
        : true;
      const packageCondition = selectedPackage
        ? booking.packageType === selectedPackage
        : true;
      return dateCondition && packageCondition;
    });
    setFilteredData(filtered);
  };
  const clearFilters = () => {
    setSelectedDate("");
    setSelectedPackage("");
    setSearchTerm("");
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-desk-h-6 font-sans ">Bookings</h1>
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

      <div className="">
        <div className="flex justify-between items-center mb-12">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="ml-2 w-full bg-transparent focus:outline-none text-neutral-600"
            />
          </div>

          {/* Filters */}
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setIsDateModalOpen(true)}
              className="flex gap-3 bg-transparent items-center font-semibold font-poppins text-desk-b-3 text-neutral-600"
            >
              <FaFilter className="mr-2" />
              Date Filter
              <FaCaretDown />
            </button>
            <button
              onClick={() => setIsPackageModalOpen(true)}
              className="flex items-center gap-3 font-semibold font-poppins text-desk-b-3 text-neutral-600 bg-transparent"
            >
              Package Filter
              <FaCaretDown />
            </button>
            <button
              onClick={clearFilters}
              className="text-error-300 px-4 py-2 flex gap-1 items-center"
            >
              <BiReset />
              Reset Filters
            </button>
          </div>
        </div>

        {/* Date Filter Modal */}
        <ReactModal
          isOpen={isDateModalOpen}
          onRequestClose={() => setIsDateModalOpen(false)}
          className="bg-white rounded-lg shadow-lg p-6 z-[999999]"
          overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[999999]"
        >
          <h3 className="text-lg font-bold mb-4">Select Date</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateFilter(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsDateModalOpen(false)}
              className="text-gray-700 px-4 py-2 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={applyFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Apply Date Filter
            </button>
          </div>
        </ReactModal>

        {/* Package Filter Modal */}
        <ReactModal
          isOpen={isPackageModalOpen}
          onRequestClose={() => setIsPackageModalOpen(false)}
          className="bg-white rounded-lg shadow-lg p-6 z-[999999]"
          overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[999999]"
        >
          <h3 className="text-lg font-bold mb-4">Select Package</h3>
          <div className="flex flex-wrap gap-2">
            {["Basic", "Standard", "Premium"].map((pkg) => (
              <button
                key={pkg}
                className={`px-4 py-2 rounded-full ${
                  selectedPackage === pkg
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handlePackageFilter(pkg)}
              >
                {pkg} Plan
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsPackageModalOpen(false)}
              className="text-gray-700 px-4 py-2 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={applyFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Apply Package Filter
            </button>
          </div>
        </ReactModal>

        {/* Booking Detail Modal */}
        <ReactModal
          isOpen={isBookingDetailModalOpen}
          onRequestClose={() => setBookingDetailModalOpen(false)}
          className="bg-white shadow-lg px-10 pt-5 w-full md:w-4/5 lg:w-8/12 overflow-y-auto"
          overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-20"
        >
          <BookingDetailModal
            setBookingDetailModalOpen={setBookingDetailModalOpen}
          />
        </ReactModal>

        {/* Booking Cards */}
        {viewMode === "grid" && filteredData.length > 0 ? (
          <div className="flex gap-5 gap-y-6 flex-wrap">
            {filteredData.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                setBookingDetailModalOpen={setBookingDetailModalOpen}
              />
            ))}
          </div>
        ) : (
          <div className="p-4">
            <div className="overflow-x-auto rounded-xl border">
              <table className="min-w-full bg-white">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-center py-5 px-4 uppercase font-semibold text-sm ">
                      Instructor
                    </th>
                    <th className="text-center py-5 px-4 uppercase font-semibold text-sm">
                      Learner
                    </th>
                    <th className="text-left py-5 uppercase font-semibold text-sm">
                      Booking Date
                    </th>
                    <th className="text-center py-5 uppercase font-semibold text-sm">
                      Package Type
                    </th>
                    <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                      Session Fee
                    </th>
                    <th className="text-left py-5 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((booking) => (
                    <tr key={booking.id} className="border-t border-gray-200">
                      <td className="py-3 px-4 flex items-center">
                        <img
                          src={booking.instructorAvatar}
                          alt={booking.instructor}
                          className="w-10 h-10 rounded-full mr-8"
                        />
                        <span className="font-medium text-blue-600">
                          {booking.instructor}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <img
                          src={booking.learnerAvatar}
                          alt={booking.learner}
                          className="w-10 h-10 rounded-full mr-4 inline-block"
                        />
                        {booking.learner}
                      </td>
                      <td className="py-3 px-4">
                        {new Date(booking.bookingDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </td>
                      <td className="py-3 px-4">{booking.packageType}</td>
                      <td className="py-3 px-4">{booking.sessionFee}</td>
                      <td className="py-3 px-4">
                        <button
                          className="bg-blue-500 text-white py-2 px-4 rounded-md"
                          onClick={() => setBookingDetailModalOpen(true)}
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
      </div>
    </div>
  );
};

export default AllBookings;
