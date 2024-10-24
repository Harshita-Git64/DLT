import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { FaSearch, FaFilter, FaTh, FaBars, FaCaretDown } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
import { BookingCard } from "./AllBookings";
import axios from "../../axios";

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

export const InstructorDetailModal = ({
  setModalInstructorDetailOpen,
  selectedInstructorDetails,
}) => {
  const { first_name, last_name, phoneNumber, email, location, date_of_birth } =
    selectedInstructorDetails[0]?.user_id;

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
        onClick={() => setModalInstructorDetailOpen(false)}
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
              <h1 className="font-bold text-2xl">
                {first_name} {last_name}
              </h1>
              <div className="flex gap-1 ">
                <span>
                  <HiLocationMarker size={20} />
                </span>
                <span className="text-sm">{location}</span>
              </div>
              <button className="px-6 rounded-full text-success-300 border border-success-300 mt-2 text-sm">
                {selectedInstructorDetails[0].Availibility}
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
              <div className="font-bold mt-4">Phone Number</div>
              <div>{phoneNumber}</div>
              <div className="font-bold mt-4">Email Address</div>
              <div>{email}</div>
              <div className="font-bold mt-4">Date of Birth</div>
              <div className="">{date_of_birth}</div>
              <div className="font-bold mt-4">License Expiry Date</div>
              <div className="">02/04/2020</div>
              <div className="font-bold mt-4">Years of Experience</div>
              <div className="">3 years</div>
              <div className="font-bold mt-4">Last Active Date</div>
              <div>02/10/2024</div>
              <div className="font-bold mt-4">Location</div>
              <div>Sydney,xyz</div>
              <div>Postcode,2000</div>
              <div>Area,abc</div>
              <div className="font-bold mt-4">Date Joined</div>
              <div>02/10/2024</div>
            </div>
            <hr className="border-neutral-100"></hr>

            <div className="p-4 text-sm">
              <div className="font-bold mt-4">Statistics</div>
              <div className="font-bold mt-4">Total Lessons Conducted </div>
              <div>150 Lessons</div>
              <div className="font-bold mt-4">Total Hours Taught</div>
              <div>300 Hours</div>
              <div className="font-bold mt-4">Student Ratings</div>
              <div className="">4.8/5 Stars</div>
              <div className="font-bold mt-4">Number of Reviews</div>
              <div className="">45 Reviews</div>
              <div className="font-bold mt-4">Approval Rate</div>
              <div className="">95%</div>
              <div className="font-bold mt-4">Cancellation Rate</div>
              <div>3%</div>
            </div>
          </div>

          <div className="w-full">
            {/* License Details */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold text-secondary-500">
                License and Certification Information
              </h2>
              <div className="text-sm">
                <div className="font-bold mt-4">Driver’s License Number</div>
                <div>{selectedInstructorDetails[0].License_number}</div>
                <div className="font-bold mt-4">License Issuing State</div>
                <div>{selectedInstructorDetails[0].License_Issuing_state}</div>
                <div className="font-bold mt-4">License Expiry Date</div>
                <div>{selectedInstructorDetails[0].License_expiry_date}</div>
                <div className="font-bold mt-4">License Type</div>
                <div>{selectedInstructorDetails[0].License_type}</div>
                <div className="font-bold mt-4">
                  Certificate IV in Training and Assessment
                </div>
                <div>{selectedInstructorDetails[0].Certified_in_training}</div>
              </div>
            </div>
            <hr className="border-neutral-100 my-5"></hr>
            {/* Vehicle Information */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold text-secondary-500">
                Vehicle Information
              </h2>
              {selectedInstructorDetails[0].vehicle.map(
                (vehicleInfo, index) => (
                  <div className="text-sm" key={vehicleInfo.id}>
                    <div className="font-bold mt-4 text-lg">
                      Vehicle {index + 1} Details
                    </div>
                    <div className="font-bold mt-4">Vehicle Make</div>
                    <div>{vehicleInfo.Company}</div>
                    <div className="font-bold mt-4">Vehicle Model</div>
                    <div>{vehicleInfo.Model}</div>
                    <div className="font-bold mt-4">Vehicle Year</div>
                    <div>{vehicleInfo.Year}</div>
                    <div className="font-bold mt-4">
                      Vehicle Registration Numbe{" "}
                    </div>
                    <div>{vehicleInfo.Registration_number}</div>
                    <div className="flex mt-4 gap-3">
                      <div>
                        <div className="font-bold">
                          Vehicle Registration Documents
                        </div>
                        <div className="h-20 w-20 rounded-md bg-slate-300"></div>
                      </div>
                      <div>
                        <div className="font-bold">
                          Vehicle Insurance Documents
                        </div>
                        <div className="h-20 w-20 rounded-md bg-slate-300"></div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <hr className="border-neutral-100 my-5"></hr>
            {/* Additional Documents */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold text-secondary-500">
                Additional Documents
              </h2>
              <div className="flex mt-4 gap-3">
                <div>
                  <div className="font-bold">National Police Check</div>
                  <div className="h-20 w-20 rounded-md bg-slate-300"></div>
                </div>

                <div>
                  <div className="font-bold">Working with Children Check</div>
                  <div className="h-20 w-20 rounded-md bg-slate-300"></div>
                </div>
              </div>
            </div>
            <hr className="border-neutral-100 my-5"></hr>
            {/* Self Description */}
            <div className="p-4 px-6">
              <h2 className="text-2xl font-bold text-secondary-500">
                Self Description
              </h2>
              <div className="text-sm mt-4">
                {selectedInstructorDetails[0].Self_description}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-neutral-100"></hr>
        {/* Pricing Plans */}
        <div className="p-4">
          <div className="text-2xl font-bold text-secondary-500 my-2">
            Pricing Plans
          </div>
          {/* Cards */}
          <div className="flex gap-3 my-3">
            {/* Basic plan */}
            <div className="rounded-xl px-5 py-5 border shadow-lg text-center text-sm w-64">
              <div className="font-bold text-lg">Basic</div>
              <div className="mt-2">Monthly Charge</div>
              <div className="mt-2 font-bold text-3xl text-secondary-500">
                $300
              </div>
              <hr className="my-3"></hr>
              <div className="">
                <h3>Duration: 5 lessons(1 hour each)</h3>
                <h3 className="mt-3">
                  Basic driving skills(starting stopping,turning)
                </h3>
                <h3 className="mt-3">Introduction to road signs and rules</h3>
                <h3 className="mt-3">City driving preparation</h3>
                <h3 className="mt-3">Regular feedback and progress tracking</h3>
                <h3 className="mt-3">
                  Bonus: 1 free mock driving test at the end of the package
                </h3>
              </div>
            </div>
            {/* Standard plan */}
            <div className="rounded-xl px-5 py-5 border shadow-lg text-center text-sm w-64">
              <div className="font-bold text-lg">Standard</div>
              <div className="mt-2">Monthly Charge</div>
              <div className="mt-2 font-bold text-3xl text-secondary-500">
                $550
              </div>
              <hr className="my-3"></hr>
              <div className="">
                <h3>Duration: 10 lessons(1 hour each)</h3>
                <h3 className="mt-3">
                  Advanced driving techniques (lane changes, merging)
                </h3>
                <h3 className="mt-3">Highway driving</h3>
                <h3 className="mt-3">Parking skills (parallel, reverse)</h3>
                <h3 className="mt-3">
                  Comprehensive feedback after each lesson
                </h3>
                <h3 className="mt-3">Bonus: 2 free mock driving tests</h3>
                <h3 className="mt-3">Flexible scheduling</h3>
              </div>
            </div>
            {/* Premium plan */}
            <div className="rounded-xl px-5 py-5 border shadow-lg text-center text-sm w-64">
              <div className="font-bold text-lg">Premium</div>
              <div className="mt-2">Monthly Charge</div>
              <div className="mt-2 font-bold text-3xl text-secondary-500">
                $900
              </div>
              <hr className="my-3"></hr>
              <div className="">
                <h3>Duration: 15 Lessons (1 hour each)</h3>
                <h3 className="mt-3">
                  All advanced driving techniques (city, highway, night driving)
                </h3>
                <h3 className="mt-3">Defensive driving strategies</h3>
                <h3 className="mt-3">
                  Emergency maneuvers (braking, swerving)
                </h3>
                <h3 className="mt-3">Access to exclusive driving workshops</h3>
                <h3 className="mt-3">
                  Bonus: Free test-day support (vehicle + instructor presence)
                </h3>
                <h3 className="mt-3">
                  Priority scheduling for lessons and test day
                </h3>
              </div>
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
        {/* Stastistics details */}
        <div className="p-4">
          <div className="text-2xl font-bold text-secondary-500 my-2">
            Stastistics
          </div>
        </div>

        <hr className="border-neutral-100"></hr>
        {/*Testimonials*/}
        <div className="p-4">
          <div className="text-2xl font-bold text-secondary-500">
            Testimonials
          </div>

          <div>
            {selectedInstructorDetails[0].ratings.map((data) => {
              const formattedDate = new Date(
                data.date_updated
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });
              return (
                data.Reviews && (
                  <div
                    key={data.id}
                    className="rounded-md border border-gray-300 p-3 my-4 shadow-sm"
                  >
                    <div className="text-neutral-800">{data.Reviews}</div>
                    <div className="flex gap-3 items-center mt-3">
                      <img
                        src={data.avatar}
                        className="w-12 h-12 rounded-full"
                      ></img>
                      <div>
                        <div className="font-semibold text-sm">
                          {data.Given_by.user_id.first_name}{" "}
                          {data.Given_by.user_id.last_name}
                        </div>
                        <div className="text-xs">{formattedDate}</div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
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
          onClick={() => setModalInstructorDetailOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
const AllInstructors = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalInstructorDetailOpen, setModalInstructorDetailOpen] =
    useState(false);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [selectedInstructorId, setSelectedInstructorId] = useState(null);
  const [selectedInstructorDetails, setSelectedInstructorDetails] =
    useState(null);

  const getInstructors = async () => {
    try {
      //API for fetching all instructors
      const response = await axios(
        "items/Instructor?fields=id,Availibility,Experience,is_ban,user_id.id,user_id.first_name,user_id.last_name,user_id.email,user_id.phoneNumber,user_id.location,user_id.profileImg,user_id.status"
      );
      const instructorData = response.data;
      setInstructorDetails(instructorData.data);
    } catch (error) {
      console.log("error in fetching data", error);
    }
  };
  //
  const handleViewprofile = async (instructorId) => {
    try {
      //API for fetching instructor detail by Id
      setSelectedInstructorId(instructorId);
      const response = await axios(
        `items/Instructor?fields=*,user_id.*,booking.*,booking.learner.user_id.first_name,booking.learner.user_id.last_name,vehicle.*,ratings.*,ratings.Given_by.user_id.first_name,ratings.Given_by.user_id.last_name,ratings.Given_by.user_id.profileImg,vehicle.*&filter[id]=${instructorId}`
      );
      const instructorData = response.data;
      setSelectedInstructorDetails(instructorData.data);
      console.log("instructorData", selectedInstructorDetails);
      setModalInstructorDetailOpen(true);
    } catch (error) {}
  };

  useEffect(() => {
    getInstructors();
  }, []);

  useEffect(() => {
    if (selectedInstructorId) {
    }
  }, [selectedInstructorId]);

  const instructors = [
    {
      id: 1,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 6,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 7,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 8,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 9,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 10,
      name: "Rakesh Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Active",
      experience: "3-5 years",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 11,
      name: "Ishika Mehta",
      phone: "9876543210",
      location: "Mumbai",
      availability: "onLeave",
      experience: "1-3 years",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 12,
      name: "Kunal Sharma",
      phone: "9876543210",
      location: "Mumbai",
      availability: "Inactive",
      experience: "Less than 1 year",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    // Add more instructors here
  ];

  // Filter instructors based on search term, experience, and availability
  const filteredInstructors = instructorDetails.filter((instructor) => {
    //const {first_name,last_name,location,phoneNumber,email } = instructor.userid;
    // return (
    //   instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    //   (!selectedExperience || instructor.experience === selectedExperience) &&
    //   (!selectedAvailability ||
    //     instructor.availability === selectedAvailability)
    // );
    return (
      instructor?.user_id?.first_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (!selectedExperience || instructor.Experience === selectedExperience) &&
      (!selectedAvailability ||
        instructor.Availibility === selectedAvailability)
    );
  });
  console.log("result", filteredInstructors);

  // Clear all filters
  const clearFilters = () => {
    setSelectedExperience("");
    setSelectedAvailability("");
    setSearchTerm("");
  };

  return (
    <div className="flex-grow bg-white px-4 py-2 overflow-scroll">
      {/* heading */}
      <div className="flex justify-between">
        <div className="text-desk-h-6 font-sans font-bold">Instructors</div>
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
      {/* Header with Search and Filters */}
      <div className="flex justify-between items-center py-4 px-4 my-3">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[50%] border border-solid border-neutral-100">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 bg-transparent focus:outline-none text-neutral-600 w-full"
          />
        </div>

        {/* Filters and View Mode */}
        <div className="flex items-center gap-4">
          <button
            className="flex gap-1 items-center  px-4 py-2"
            onClick={() => setIsAvailabilityModalOpen(true)}
          >
            <FaFilter className="mr-2" />
            <span className="font-semibold font-poppins text-desk-b-3 text-neutral-600">
              Availability{" "}
            </span>
            <FaCaretDown />
          </button>
          <button
            className="flex gap-1 items-center  px-4 py-2"
            onClick={() => setIsExperienceModalOpen(true)}
          >
            <span className="font-semibold font-poppins text-desk-b-3 text-neutral-600">
              Experience
            </span>
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
      {/* Instructor Cards */}
      {viewMode === "grid" ? (
        <div className="p-4 ">
          <div className="flex flex-wrap gap-3 min-h-fit max-h-fit gap-y-6">
            {filteredInstructors.map((instructor) => {
              const {
                first_name,
                last_name,
                location,
                phoneNumber,
                profileImg,
                email,
              } = instructor.user_id;

              return (
                <div
                  key={instructor.id}
                  className="bg-white min-w-[23%] shadow-md rounded-lg p-4 flex  flex-col items-center relative border border-solid border-neutral-100 shrink-0"
                >
                  <div className="">
                    <img
                      src={profileImg}
                      alt={first_name}
                      className="w-14 h-14 rounded-full object-cover object-center"
                    />

                    {/* Status Indicator */}
                    <span
                      className={`absolute top-2 right-3 w-3 h-3 rounded-full ${
                        instructor.Availibility === "Active"
                          ? "bg-green-400 text-green-800"
                          : instructor.Availibility === "onLeave"
                          ? "bg-yellow-400 text-red-800"
                          : "bg-red-400 text-red-800"
                      }`}
                    ></span>
                  </div>
                  <h3 className="mt-3 font-semibold font-poppins text-desk-b-2 ">
                    {first_name} {last_name}
                  </h3>
                  <div className="pt-2 w-full font-poppins text-desk-b-3 text-neutral-600">
                    <p className="text-gray-500 w-full flex justify-between mb-2">
                      <strong className="font-semibold">Phone: </strong>{" "}
                      <p>{phoneNumber}</p>
                    </p>
                    <p className="text-gray-500 w-full flex justify-between">
                      <strong className="font-semibold">Location:</strong>{" "}
                      <p>{location}</p>
                    </p>
                  </div>
                  <button
                    className="w-full mt-4 bg-secondary-400 text-white py-2 px-4 rounded-md"
                    onClick={() => handleViewprofile(instructor.id)}
                  >
                    View Profile
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-center py-5 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Phone Number
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Location
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left py-5 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredInstructors.map((instructor) => (
                  <tr key={instructor.id} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={instructor.profileImage}
                        alt={instructor.name}
                        className="w-10 h-10 rounded-full mr-8"
                      />
                      <span className="font-medium text-blue-600">
                        {instructor.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">{instructor.phone}</td>
                    <td className="py-3 px-4">{instructor.location}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-md text-sm  ${
                          instructor.availability === "Active"
                            ? "bg-green-100 text-green-800"
                            : instructor.availability === "onLeave"
                            ? "bg-yellow-100 text-red-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {instructor.availability}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-md"
                        onClick={() => setModalInstructorDetailOpen(true)}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Experience Filter Modal */}
      <ReactModal
        isOpen={isExperienceModalOpen}
        onRequestClose={() => setIsExperienceModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Experience Level</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Less than 1 year",
            "1-3 years",
            "3-5 years",
            "More than 5 years",
          ].map((experience) => (
            <button
              key={experience}
              onClick={() => setSelectedExperience(experience)}
              className={`px-4 py-2 rounded-full ${
                selectedExperience === experience
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {experience}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsExperienceModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsExperienceModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>
      {/* Availability Filter Modal */}
      <ReactModal
        isOpen={isAvailabilityModalOpen}
        onRequestClose={() => setIsAvailabilityModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Availability</h3>
        <div className="flex flex-wrap gap-2">
          {["Active", "Inactive", "onLeave"].map((availability) => (
            <button
              key={availability}
              onClick={() => setSelectedAvailability(availability)}
              className={`px-4 py-2 rounded-full ${
                selectedAvailability === availability
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {availability}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsAvailabilityModalOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsAvailabilityModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </ReactModal>
      {/* Instructor Full Detail Modal */}
      <ReactModal
        isOpen={modalInstructorDetailOpen}
        onRequestClose={() => setModalInstructorDetailOpen(false)}
        className="bg-white shadow-lg px-10 pt-5 w-full md:w-4/5 lg:w-8/12 overflow-y-auto"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end"
      >
        <InstructorDetailModal
          setModalInstructorDetailOpen={setModalInstructorDetailOpen}
          selectedInstructorDetails={selectedInstructorDetails}
        />
      </ReactModal>
    </div>
  );
};

export default AllInstructors;
