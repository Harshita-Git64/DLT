import React, { useState } from 'react';
import ReactModal from "react-modal";
import { GoArrowLeft } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaBars, FaCaretDown, FaFilter, FaSearch, FaTh , FaCamera} from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { IoReturnUpBack } from "react-icons/io5";
import { LuReply } from "react-icons/lu";

const EmployeeDetailModal = ({setEmployeeDetailModalOpen}) => {
  return (
    <div>
    <GoArrowLeft
      size={28}
      className="hover:cursor-pointer"
      onClick={() => setEmployeeDetailModalOpen(false)}
    />
    <div className="border border-neutral-100 rounded-lg mt-8 mb-20">
      {/* profile section */}
      <div className="flex justify-between p-4">
        <div className="flex gap-4 items-start">
            <img
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              alt="Employee Avatar"
            ></img>
          <div>
          <div className='font-semibold text-lg'>full name</div>
          <div className='font-semibold text-sm'>Manager</div>
            <button className="px-6 rounded-full text-success-300 border border-success-300 mt-2 text-sm">
             Active
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
              Phone Number 
            </h3>
            <p className="font-poppins text-[#202224]">
              8769234654
            </p>
            
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
              Email Address
            </h3>
            <p className="font-poppins text-[#202224]">
              employee122@gmail.com
            </p>
            
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
              Gender
            </h3>
            <p className="font-poppins text-[#202224]">
             Male
            </p>
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
             Position
            </h3>
            <p className="font-poppins text-[#202224]" >
              Manager
            </p>
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
             Status
            </h3>
            <p className="font-poppins text-[#202224]">
              Active
            </p>
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
              Joining Date
            </h3>
            <p className="font-poppins text-[#202224]">
              12/10/2023
            </p>
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
              Employee ID
            </h3>
            <p className="font-poppins text-[#202224]">4</p>
            <h3 className="font-semibold  font-poppins text-[#000000] mt-4">
             Last Login Date
            </h3>
            <p className="font-poppins text-[#202224]">
              12/10/2024
            </p>
          </div>
        </div>

        <div className="w-full">
          {/*  Permissions */}
         <div className="text-2xl font-bold font-poppins text-secondary-500 p-4">Permissions</div>
         <hr className="border-neutral-100"></hr>
         <div className='px-5 py-5'>
          {/* User Management */}
          <div>
          <div className='font-semibold text-[#202224] text-xl'>User Management</div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>View Users: </span>
            <span>View user details and activity.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Edit User Information: </span>
            <span>Update user profile data.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Ban/Unban Account: </span>
            <span>Restrict or restore user access.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Reset Password: </span>
            <span>Change user password upon request.</span>
          </div>
          </div>
          </div>
           {/* Query and Support Management */}
           <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Query & Support Management</div>
          <div className="flex gap-3 my-3 text-sm">
          <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 font-poppins'>View Queries: </span>
            <span className='font-poppins'>Access all incoming queries.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Accept/Reject Queries: </span>
            <span>Decline Query outcome (approve or reject).</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Assign Queries: </span>
            <span>Allocate queries to specific support staff.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Resolve Queries: </span>
            <span className=''>Mark queries as resolved or follow up.</span>
          </div>
          </div>
           </div>
           {/* Instructor Management */}
          <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Instructor Management</div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Add New Instructor: </span>
            <span>Add profiles for new instructors.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Edit Instructor Information: </span>
            <span>Upload instructor details or availiability.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>View instructor Performance: </span>
            <span>Access performance reports and analytics.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Assign Bookings: </span>
            <span>Manage and assign booking schedules.</span>
          </div>
          </div>
          </div>
          {/* Booking & Payments */}
          <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Booking & Payments</div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Approve Bookings: </span>
            <span>Confirm or modify bookings.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Refund Payments: </span>
            <span>Process payment refunds when necessary.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>View Earning Reports: </span>
            <span>Access financial reports.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Issue Invoices: </span>
            <span>Generate invoices for transactions.</span>
          </div>
          </div>
          </div>
           {/*Role & Permission Management */}
           <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Role & Permission Management</div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Create New Role: </span>
            <span>Define and assign new role categories.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Edit Role Permissions: </span>
            <span>Remove roles that are no longer needed.</span>
          </div>
          </div>
           <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Delete Roles: </span>
            <span>Remove roles that are no longer needed.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Assign Roles: </span>
            <span>Allocate roles to users or team members.</span>
          </div>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    {/* Action Butttons */}
    <div className="flex gap-5 bg-white py-5 fixed bottom-0 w-full">
      <button className="bg-error-200 rounded-md px-8 py-2 text-white transition-colors duration-200 hover:bg-error-300">
        Delete Profile
      </button>
      <button
        className="bg-neutral-300 rounded-md text-white px-8 py-2 transition-colors duration-200 hover:bg-neutral-400"
        onClick={() => setEmployeeDetailModalOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
  )
}
const AllEmployees = ({setAddEmployeeFormOpen}) => { 
 const [viewMode, setViewMode] = useState("grid");
 const [isEmployeeDetailModalOpen, setEmployeeDetailModalOpen] = useState(false);
 const [searchTerm, setSearchTerm] = useState("");
 const [dateFilter, setDateFilter] = useState("");
 const [modalDateOpen, setModalDateOpen] = useState(false);

 const data = [
{
    id:1,
    profileImg:"https://i.pravatar.cc/150?u=2",
    name:"Wade Warren",
    role:"Digital Marketer",
    email:"nannie_west@estrella.tv"
},
{
    id:2,
    profileImg:"https://i.pravatar.cc/150?u=6",
    name:"Jane Cooper",
    role:"Social Media",
    email:"delmer.kling@gmail.com" 
},
{
    id:3,
    profileImg:"https://i.pravatar.cc/150?u=3",
    name:"Cameron Williamson",
    role:"Strategist",
    email:"lucienne.herman@hotmail.com" 
},
{
    id:4,
    profileImg:"https://i.pravatar.cc/150?u=5",
    name:"Rohan Verma",
    role:"Social Media",
    email:"lucienne.herman@hotmail.com" 
},
{
    id:5,
    profileImg:"https://i.pravatar.cc/150?u=6",
    name:"Jane Cooper",
    role:"Social Media",
    email:"delmer.kling@gmail.com" 
},
{
    id:6,
    profileImg:"https://i.pravatar.cc/150?u=2",
    name:"Wade Warren",
    role:"Digital Marketer",
    email:"nannie_west@estrella.tv" 
},
{
    id:7,
    profileImg:"https://i.pravatar.cc/150?u=3",
    name:"Cameron Williamson",
    role:"Strategist",
    email:"lucienne.herman@hotmail.com"   
},
{
    id:8,
    profileImg:"https://i.pravatar.cc/150?u=6",
    name:"Jane Cooper",
    role:"Social Media",
    email:"delmer.kling@gmail.com" 
},
 ]
 const viewEmployeeProfile = () => {
  setEmployeeDetailModalOpen(true)
 }
 const addNewEmployee = () => {
  setAddEmployeeFormOpen(true)
 }
  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
  };
  
 const handleResetFilters = () => {
    setSearchTerm("");
    setDateFilter("");
  };

  const filteredData = data.filter((data) => {
    const searchFilter = searchTerm === "" || data.name.toLowerCase().includes(searchTerm.toLowerCase());
   // const date =  (dateFilter ? data.date === dateFilter : true)
    return searchFilter;
  });

  return (
    <div className="p-6">
    <div className="flex justify-between mb-6 items-center">
      <div className="font-bold text-desk-h-6 font-sans">Employees</div>
      <div className="flex gap-4 items-center">
      <button
       className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg m py-2 px-8 mr-4 font-poppins" onClick={addNewEmployee}
      >
        Add New
      </button>
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
          className="ml-2 bg-transparent focus:outline-none text-neutral-600 w-full"
        />
      </div>
      <div className="mt-4 lg:mt-0 flex items-center gap-7 cursor-pointer">
        <div
          className="flex items-center gap-3 font-semibold font-poppins text-desk-b-3 text-neutral-600"
        //   onClick={() => setIsLessonStatusModalOpen(true)}
        >
          <FaFilter className="mr-2" />
          <div>All</div>
          <FaCaretDown />
        </div>
        <button
            onClick={() => setModalDateOpen(true)}
            className="p-3 flex gap-1 items-center relative font-semibold font-poppins text-desk-b-3 text-neutral-600" 
          >
            <FaFilter className="mr-2" />
            {dateFilter ? `Date: ${dateFilter}` : "Date"}
            <FaCaretDown />
          </button>
        <button
          onClick={handleResetFilters}
          className="text-error-300 px-4 py-2 flex gap-1 items-center font-poppins text-desk-b-2"
        >
          <BiReset />
          Reset Filters
        </button>
      </div>
    </div>
    {viewMode === "grid" ? (
      <div className="mt-10 flex flex-wrap gap-3 gap-y-6 ">
        {filteredData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[235px] p-4 rounded-lg shadow-md border border-solid border-slate-200 flex flex-col"
            >
                  <img
                  className="h-14 w-14 rounded-full shrink-0 object-cover self-center"
                  src={item.profileImg}
                  alt={item.name}
                />
              <div className="mt-3 font-semibold text-center font-poppins text-desk-b-2">
               {item.name}
              </div>
              <div className="mt-4 text-center font-poppins text-desk-b-3 text-neutral-600">
                {item.role}
              </div>
              <div className="mt-4 text-center font-poppins text-desk-b-3 text-neutral-600">
               {item.email}
              </div>
              <button
                className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-3 py-2 font-poppins"  onClick={viewEmployeeProfile}
              >
                View Details
              </button>
            </div>
          );
        })}
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
                    Position
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Email
                  </th>
                  <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left py-5 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((employee) => (
                  <tr key={employee.id} className="border-t border-gray-200">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={employee?.profileImg}
                        alt={employee?.name}
                        className="w-10 h-10 rounded-full mr-8"
                      />
                      <span className="font-medium text-blue-600">
                        {employee?.name}
                        
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {employee?.role}
                    </td>
                    <td className="py-3 px-4">
                      {employee?.email}
                    </td>
                    <td className="py-3 px-4">
                      <span>
                      Active
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-md"
                        onClick={viewEmployeeProfile}
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

     {/* Date Filter Modal */}
     <ReactModal
        isOpen={modalDateOpen}
        onRequestClose={() => setModalDateOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h3 className="text-lg font-bold mb-4">Select Date</h3>
        <input
          type="date"
          value={dateFilter}
          onChange={handleDateFilter}
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setModalDateOpen(false)}
            className="text-gray-700 px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => setModalDateOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
      </ReactModal>

        {/* Employee Detail Modal */}
        <ReactModal
          isOpen={isEmployeeDetailModalOpen}
          onRequestClose={() => setEmployeeDetailModalOpen(false)}
          className="bg-white shadow-lg px-10 pt-5 w-full md:w-4/5 lg:w-8/12 overflow-y-auto"
          overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-20"
        >
          <EmployeeDetailModal
            setEmployeeDetailModalOpen={setEmployeeDetailModalOpen}
          />
        </ReactModal>
  </div>
  )
}
export const AddEmployeeForm = ({setAddEmployeeFormOpen}) =>{
  return (
    <div className="min-h-screen bg-white rounded-lg shadow-lg ">
    <header className="w-full max-w-3xl flex gap-4 items-center mb-8 p-5">
      <LuReply className='text-lg font-bold hover:cursor-pointer' size={25} onClick={() => setAddEmployeeFormOpen(false)}/>
      <h1 className="text-[#202224] text-2xl font-semibold">Add New Employee</h1>
    </header>

    <div className="w-full max-w-3xl bg-white rounded-lg mx-32">
      {/* Profile Photo Section */}
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <FaCamera className="w-8 h-8"/>
          </div>
          <button className="text-[#4379EE] mt-2">Upload Photo</button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-12">
        <div>
          <label className="block text-[#4C4C4C]">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="border border-[#E2E2E2] text-[#B7B7B7] rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-[#4C4C4C]">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="border border-[#E2E2E2] text-[#B7B7B7] rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-[#4C4C4C]">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-[#E2E2E2] text-[#B7B7B7] rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-[#4C4C4C]">Phone Number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="border border-[#E2E2E2] text-[#B7B7B7] rounded-md px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-[#4C4C4C]">Position</label>
          <select className="border border-[#E2E2E2] text-[#B7B7B7]  rounded-md px-4 py-2 w-full">
            <option>Select position</option>
            {/* Add options here */}
          </select>
        </div>
        <div>
          <label className="block text-[#4C4C4C]">Gender</label>
          <select className="border border-[#E2E2E2] text-[#B7B7B7] rounded-md px-4 py-2 w-full">
            <option>Select gender</option>
            {/* Add options here */}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#2B6BE7] text-[#FFFFFF] px-16 py-2 rounded-md">
          Add Now
        </button>
      </div>
    </div>
  </div>
  )
}
export default AllEmployees