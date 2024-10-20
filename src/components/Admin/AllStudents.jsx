import React, { useState } from "react";
import ReactModal from "react-modal";
import { FaBars, FaCaretDown, FaFilter, FaSearch, FaTh } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { BiReset } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
import { BookingCard } from "./AllBookings";

ReactModal.setAppElement("#root");

const testimonialsData = [
  {
    id: "1",
    fullname: "George Wilkinson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "14 Sep 2024",
    description:
      "I had an amazing experience learning to drive with my instructor from this platform.",
  },
  {
    id: "2",
    fullname: "Samantha Roberts",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "20 Sep 2024",
    description:
      "Thanks to my instructor, I passed my driving test on the first try.",
  },
  {
    id: "3",
    fullname: "David Johnson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    date: "02 Oct 2024",
    description:
      "The instructor was very patient and knowledgeable, I highly recommend this platform.",
  },
  {
    id: "4",
    fullname: "Emily Cooper",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    date: "12 Oct 2024",
    description:
      "Great experience overall. The instructor made me feel comfortable and prepared for the test.",
  },
  {
    id: "5",
    fullname: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    date: "14 Oct 2024",
    description:
      "I was nervous about driving but the instructor was calm and helpful.",
  },
  {
    id: "6",
    fullname: "Lisa Grey",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    date: "18 Oct 2024",
    description:
      "I passed my test thanks to the guidance of my instructor. Highly recommend!",
  },
  {
    id: "7",
    fullname: "John Smith",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    date: "20 Oct 2024",
    description:
      "A great service with top-notch instructors who truly care about the students.",
  },
  {
    id: "8",
    fullname: "Sophie Williams",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    date: "22 Oct 2024",
    description:
      "Amazing guidance and instruction. Passed the test on my first attempt!",
  },
];
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
];
const transactionData = [
  {
    transactionId: "TXN1234ABCD",
    date: "2024-10-01",
    amount: 150.5,
    paymentMethod: "Credit Card",
  },
  {
    transactionId: "TXN5678EFGH",
    date: "2024-10-02",
    amount: 75.2,
    paymentMethod: "PayPal",
  },
  {
    transactionId: "TXN9101IJKL",
    date: "2024-10-03",
    amount: 220.0,
    paymentMethod: "Debit Card",
  },
  {
    transactionId: "TXN1121MNOP",
    date: "2024-10-04",
    amount: 450.75,
    paymentMethod: "Bank Transfer",
  },
  {
    transactionId: "TXN3141QRST",
    date: "2024-10-05",
    amount: 300.3,
    paymentMethod: "Cash",
  },
];

export const StudentDetailModal = ({ setModalStudentDetailOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;

  const currentTestimonials = testimonialsData.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  // Handle the next and previous page toggles
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [currentBookingPage, setCurrentBookingPage] = useState(1);
  const bookingsPerPage = 3;

  const totalBookingPages = Math.ceil(bookingData.length / bookingsPerPage);
  const bookingCardstartIndex = (currentBookingPage - 1) * bookingsPerPage;

  const currentBookings = bookingData.slice(
    bookingCardstartIndex,
    bookingCardstartIndex + bookingsPerPage
  );

  // Handle the next and previous page toggles
  const nextBookingsPage = () => {
    if (currentBookingPage < totalBookingPages) {
      setCurrentBookingPage(currentBookingPage + 1);
    }
  };

  const prevBookingsPage = () => {
    if (currentBookingPage > 1) {
      setCurrentBookingPage(currentBookingPage - 1);
    }
  };

  return (
    <div>
      <GoArrowLeft
        size={28}
        className="hover:cursor-pointer"
        onClick={() => setModalStudentDetailOpen(false)}
      />
      <div className="border border-neutral-100 rounded-lg mt-8 mb-20">
        {/* profile section */}
        <div className="flex justify-between p-4">
          <div className="flex gap-4 items-start">
            <img
              src="https://randomuser.me/api/portraits/men/8.jpg"
              className="w-16 h-16 rounded-full"
            ></img>

            <div>
              <h1 className="font-bold text-2xl">John Doe</h1>
              <div className="flex gap-1 mt-2">
                <span>
                  <HiLocationMarker size={20} />
                </span>
                <span className="text-sm">Sydney</span>
              </div>
              <button className="px-6 rounded-full text-success-300 border border-success-300 mt-2 text-sm">
                Active
              </button>
            </div>
          </div>

          <HiDotsHorizontal size={22} className="hover:cursor-pointer" />
        </div>
        <hr className="border-neutral-100"></hr>

        <div className="flex">
          {/* Personal details */}
          <div className="border-r-2 border-neutral-100 p-4 text-sm">
            <div>
              <div className="font-bold">Date of Birth</div>
              <div className="">02/04/1994</div>
            </div>
            <div>
              <div className="font-bold mt-4">Phone Number</div>
              <div>+61 400 123 455</div>
            </div>
            <div>
              <div className="font-bold mt-4">Email Address</div>
              <div>Instructor@example.com</div>
            </div>

            <div className="font-bold mt-4">Location</div>
            <div>Sydney,xyz</div>
            <div>Postcode,2000</div>
            <div>Area,abc</div>

            <div className="font-bold mt-4">Date Joined</div>
            <div>02/10/2024</div>
            <div className="font-bold mt-4">Last Active Date</div>
            <div>02/10/2024</div>
          </div>

          {/* transaction table */}
          <div className="w-full p-4 px-6">
            <h2 className="text-2xl font-bold text-secondary-500">
              Transactions
            </h2>

            <div className="border border-neutral-100 rounded-lg mt-5">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-neutral-100">
                    <th className="px-3 py-3 ">Transaction ID</th>
                    <th className="px-3 py-3 ">Date</th>
                    <th className="px-3 py-3">Amount</th>
                    <th className="py-3">Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((data) => (
                    <tr key={data.transactionId} className=" text-sm">
                      <td className="px-4 py-4 font-bold border-b">
                        {data.transactionId}
                      </td>
                      <td className="px-4 py-4 border-b">{data.date}</td>
                      <td className="px-4 py-4 border-b">{data.amount}</td>
                      <td className="px-4 py-4 border-b">
                        {data.paymentMethod}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr className="border-neutral-100"></hr>
        {/* Bookings details */}
        <div className="p-4">
          <div className="text-2xl font-bold text-secondary-500 my-2">
            Bookings
          </div>

          <div className="flex space-x-3 gap-3 my-5">
            {currentBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>

          <div className="flex items-end w-full justify-end space-x-5 my-5 mt-8">
            <div className="flex justify-center space-x-2 ">
              {[...Array(totalBookingPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentBookingPage(i + 1)}
                  className={`h-7 w-7 text-gray-500  ${
                    currentBookingPage === i + 1
                      ? "bg-black text-white rounded-full"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            {/* pagination buttons */}
            <div>
              <button className="py-2 px-4 rounded-l-lg border bg-slate-50 hover:bg-slate-100">
                <FaAngleLeft
                  onClick={prevBookingsPage}
                  className={`${
                    currentBookingPage === 1 ? "text-gray-500" : ""
                  }`}
                />
              </button>
              <button className="py-2 px-4 rounded-r-lg border bg-slate-50 hover:bg-slate-100">
                <FaAngleRight
                  onClick={nextBookingsPage}
                  className={`${
                    currentBookingPage === totalBookingPages
                      ? "text-gray-500"
                      : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-neutral-100"></hr>
        <div className=" p-4">
          <div className="text-2xl font-bold text-secondary-500">
            Testimonials
          </div>

          <div>
            {currentTestimonials.map((data) => (
              <div
                key={data.id}
                className="rounded-md border border-gray-300 p-3 my-4 shadow-sm"
              >
                <div className="text-neutral-800">{data.description}</div>
                <div className="flex gap-3 items-center mt-3">
                  <img
                    src={data.avatar}
                    className="w-12 h-12 rounded-full"
                  ></img>
                  <div>
                    <div className="font-semibold text-sm">{data.fullname}</div>
                    <div className="text-xs">{data.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* pagination buttons */}
          <div className="flex items-end w-full justify-end space-x-5 my-5 mt-8">
            <div className="flex justify-center space-x-2 ">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-7 w-7 text-gray-500  ${
                    currentPage === i + 1
                      ? "bg-black text-white rounded-full"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div>
              <button className="py-2 px-4 rounded-l-lg border bg-slate-50 hover:bg-slate-100">
                <FaAngleLeft
                  onClick={prevPage}
                  className={`${currentPage === 1 ? "text-gray-500" : ""}`}
                />
              </button>
              <button className="py-2 px-4 rounded-r-lg border bg-slate-50 hover:bg-slate-100">
                <FaAngleRight
                  onClick={nextPage}
                  className={`${
                    currentPage === totalPages ? "text-gray-500" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-5 bg-white py-5 fixed bottom-0 w-full">
        <button className="bg-error-200 rounded-md px-8 py-2 text-white transition-colors duration-200 hover:bg-error-300">
          Ban Account
        </button>
        <button
          className="bg-neutral-300 rounded-md text-white px-8 py-2 transition-colors duration-200 hover:bg-neutral-400"
          onClick={() => setModalStudentDetailOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const AllStudents = () => {
  const [isLessonStatusModalOpen, setIsLessonStatusModalOpen] = useState(false);
  const [isEnrolledDateModalOpen, setIsEnrolledDateModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [lessonStatus, setLessonStatus] = useState("All");
  const [enrolledDate, setEnrolledDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      phone: "123-456-7890",
      lession_status: "Ongoing",
      active_lessons: 5,
      enrolledDate: "2023-08-10",
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      lession_status: "Scheduled",
      active_lessons: 3,
      enrolledDate: "2023-07-01",
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
    },
    {
      name: "Michael Johnson",
      phone: "555-555-5555",
      lession_status: "Ongoing",
      active_lessons: 2,
      enrolledDate: "2023-06-15",
      profil: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      phone: "444-444-4444",
      lession_status: "Scheduled",
      active_lessons: 4,
      enrolledDate: "2023-09-05",
      profil: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "William Brown",
      phone: "222-222-2222",
      lession_status: "Ongoing",
      active_lessons: 6,
      enrolledDate: "2023-05-20",
      profil: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Sophia Wilson",
      phone: "333-333-3333",
      lession_status: "Scheduled",
      active_lessons: 1,
      enrolledDate: "2023-10-01",
      profil: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "John Doe",
      phone: "123-456-7890",
      lession_status: "Ongoing",
      active_lessons: 5,
      enrolledDate: "2023-08-10",
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      lession_status: "Scheduled",
      active_lessons: 3,
      enrolledDate: "2023-07-01",
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
    },
    {
      name: "Michael Johnson",
      phone: "555-555-5555",
      lession_status: "Ongoing",
      active_lessons: 2,
      enrolledDate: "2023-06-15",
      profil: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      phone: "444-444-4444",
      lession_status: "Scheduled",
      active_lessons: 4,
      enrolledDate: "2023-09-05",
      profil: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "William Brown",
      phone: "222-222-2222",
      lession_status: "Ongoing",
      active_lessons: 6,
      enrolledDate: "2023-05-20",
      profil: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Sophia Wilson",
      phone: "333-333-3333",
      lession_status: "Scheduled",
      active_lessons: 1,
      enrolledDate: "2023-10-01",
      profil: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "John Doe",
      phone: "123-456-7890",
      lession_status: "Ongoing",
      active_lessons: 5,
      enrolledDate: "2023-08-10",
      profil:
        "https://wallpapers.com/images/hd/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      lession_status: "Scheduled",
      active_lessons: 3,
      enrolledDate: "2023-07-01",
      profil:
        "https://imgcdn.stablediffusionweb.com/2024/4/16/16c82bf2-1f13-437d-9090-90759c843a26.jpg",
    },
    {
      name: "Michael Johnson",
      phone: "555-555-5555",
      lession_status: "Ongoing",
      active_lessons: 2,
      enrolledDate: "2023-06-15",
      profil: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Emily Davis",
      phone: "444-444-4444",
      lession_status: "Scheduled",
      active_lessons: 4,
      enrolledDate: "2023-09-05",
      profil: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "William Brown",
      phone: "222-222-2222",
      lession_status: "Ongoing",
      active_lessons: 6,
      enrolledDate: "2023-05-20",
      profil: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Sophia Wilson",
      phone: "333-333-3333",
      lession_status: "Scheduled",
      active_lessons: 1,
      enrolledDate: "2023-10-01",
      profil: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ]);

  const [modalStudentDetailOpen, setModalStudentDetailOpen] = useState(false);

  const handleResetFilters = () => {
    setLessonStatus("All");
    setEnrolledDate("");
    setSearchTerm("");
  };

  const filteredStudents = students.filter((student) => {
    const lessonFilter =
      lessonStatus === "All" || student.lession_status === lessonStatus;

    const enrolledDateFilter =
      !enrolledDate || new Date(student.enrolledDate) >= new Date(enrolledDate);

    const searchFilter =
      searchTerm === "" ||
      student.name.toLowerCase().includes(searchTerm.toLowerCase());

    return lessonFilter && enrolledDateFilter && searchFilter;
  });

  return (
    <div className="w-full px-5">
      <div className="flex justify-between">
        <div className="text-4xl font-bold">Students</div>
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
      <div className="lg:flex items-center justify-between mt-5">
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 bg-transparent focus:outline-none text-neutral-600"
          />
        </div>
        <div className="mt-4 lg:mt-0 flex items-center gap-7 cursor-pointer">
          <div
            className="flex items-center gap-3 font-semibold font-poppins text-desk-b-3 text-neutral-600"
            onClick={() => setIsLessonStatusModalOpen(true)}
          >
            <FaFilter className="mr-2" />
            <div>{lessonStatus}</div>
            <FaCaretDown />
          </div>

          <div
            className="flex items-center gap-3 font-semibold font-poppins text-desk-b-3 text-neutral-600"
            onClick={() => setIsEnrolledDateModalOpen(true)}
          >
            <div>Enrolled Date</div>
            <FaCaretDown />
          </div>

          <button
              onClick={handleResetFilters}
              className="text-error-300 px-4 py-2 flex gap-1 items-center"
            >
              <BiReset />
              Reset Filters
            </button>
        </div>
      </div>
      {viewMode === "grid" ? (
        <div className="mt-10 flex flex-wrap justify-between gap-2 gap-y-5">
          {filteredStudents.map((item, index) => (
            <div
              key={index}
              className="w-[240px] p-3 rounded-lg shadow-md border border-solid border-slate-200 flex flex-col"
            >
              <img
                className="h-16 w-16 rounded-full shrink-0 object-cover self-center"
                src={item.profil}
                alt={item.name}
              />
              <div className="mt-3 text-lg font-semibold text-center">
                {item.name}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Phone:</div>
                <div>{item.phone}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Lesson Status:</div>
                <div>{item.lession_status}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-slate-600">Active Lessons:</div>
                <div>{item.active_lessons}</div>
              </div>
              <button
                className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-5 py-2 text-lg"
                onClick={() => setModalStudentDetailOpen(true)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone Number
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Lesson Status
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Active Lessons
                  </th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={student.profil}
                        alt={student.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <span className="font-medium text-blue-600">
                        {student.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">{student.phone}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          student.lession_status === "Ongoing"
                            ? "bg-green-100 text-green-800"
                            : student.lession_status === "Scheduled"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {student.lession_status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{student.active_lessons}</td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={() => setModalStudentDetailOpen(true)}>
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

      {/* Lesson Status Modal */}
      <ReactModal
        isOpen={isLessonStatusModalOpen}
        onRequestClose={() => setIsLessonStatusModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Lesson Status</h3>
        <div className="flex flex-wrap gap-2">
          {["All", "Ongoing", "Scheduled"].map((status) => (
            <button
              key={status}
              onClick={() => setLessonStatus(status)}
              className={`px-4 py-2 rounded-full ${
                lessonStatus === status
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
            onClick={() => setIsLessonStatusModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsLessonStatusModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>

      {/* Enrolled Date Modal */}
      <ReactModal
        isOpen={isEnrolledDateModalOpen}
        onRequestClose={() => setIsEnrolledDateModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Enrolled Date</h3>
        <input
          type="date"
          value={enrolledDate}
          onChange={(e) => setEnrolledDate(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsEnrolledDateModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsEnrolledDateModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>
      {/* Student Full Detail Modal */}
      <ReactModal
        isOpen={modalStudentDetailOpen}
        onRequestClose={() => setModalStudentDetailOpen(false)}
        className="bg-white shadow-lg px-10 pt-5  w-full md:w-4/5 lg:w-8/12 overflow-y-auto"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end"
      >
        <StudentDetailModal
          setModalStudentDetailOpen={setModalStudentDetailOpen}
        />
      </ReactModal>
    </div>
  );
};

export default AllStudents;
