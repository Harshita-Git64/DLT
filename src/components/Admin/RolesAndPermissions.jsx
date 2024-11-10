import React, { useState } from 'react';
import { FaBars, FaCaretDown, FaFilter, FaSearch, FaTh } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import ReactModal from "react-modal";
import { GoArrowLeft } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { LuReply } from "react-icons/lu";

const RolesAndPermissionModal = ({setPermissionModalOpen}) => {
  return (
    <div>
    <GoArrowLeft
      size={28}
      className="hover:cursor-pointer"
      onClick={() => setPermissionModalOpen(false)}
    />
    <div className="border border-neutral-100 rounded-lg mt-8 mb-20">
      {/* profile section */}
      <div className="flex justify-between p-4">
        <div>
          <div className='font-semibold text-lg'>Manager</div>
            <button className="px-6 rounded-full text-success-300 border border-success-300 mt-2 text-sm">
            5 Active
            </button>
        </div>

        <HiDotsHorizontal size={22} className="hover:cursor-pointer" />
      </div>
      <hr className="border-neutral-100"></hr>
      <div className="flex">
        <div className="border-r-2 border-neutral-100 ">
          {/* Personal details */}
          <div className="p-4 text-sm">
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
             Status 
            </h3>
            <p className="font-poppins text-[#202224]">
              Active
            </p>
            
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
              Creation Date
            </h3>
            <p className="font-poppins text-[#202224]">
              12/10/2024
            </p>
            
            <h3 className="font-semibold font-poppins text-[#000000] mt-4">
             Active Assigned Users
            </h3>
            <p className="font-poppins text-[#202224]">
             2
            </p>
          </div>
        </div>

        <div className="w-full">
          {/*  Permissions */}
          <div className='flex justify-between items-center m-4'>
          <div className="text-2xl font-bold font-poppins text-secondary-500 ">Permissions</div>
          <FaRegEdit size={20} className='hover:cursor-pointer'/>
          </div>
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

         {/* Assigned Users */}
         <hr></hr>
         <div className="text-2xl font-bold font-poppins text-secondary-500 p-5">Assigned Users</div>
         <hr></hr>
         <div className='m-5 text-sm'>
          <div className='font-semibold'>John Doe</div>
          <div>Active</div>
          <div>john22@gmail.com</div>
          <div>Last Login: February 1,2024</div>
         </div>

        </div>
      </div>
    </div>
    {/* Action Butttons */}
    <div className="flex gap-5 bg-white py-5 fixed bottom-0 w-full">
      <button className="bg-error-200 rounded-md px-8 py-2 text-white transition-colors duration-200 hover:bg-error-300">
        Delete Role
      </button>
      <button
        className="bg-neutral-300 rounded-md text-white px-8 py-2 transition-colors duration-200 hover:bg-neutral-400"
        onClick={() => setPermissionModalOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
  )
}

const RolesAndPermissions = ({setNewRoleOpen}) => {
 const [viewMode, setViewMode] = useState("grid");
 const [searchTerm, setSearchTerm] = useState("");
 const [isPermissionModalOpen, setPermissionModalOpen] = useState(false);
 const data = [
{
    id:1,
    role:"Admin",
    assignedUser:"5",
    status:"Active" 
},
{
    id:2,
    role:"Support Staff",
    assignedUser:"8",
    status:"Active" 
},
{
    id:3,
    role:"Manager",
    assignedUser:"3",
    status:"Active" 
},
{
    id:4,
    role:"Strategist",
    assignedUser:"10",
    status:"Active" 
},
{
    id:5,
    role:"Manager",
    assignedUser:"3",
    status:"Active" 
},
{
    id:6,
    role:"Admin",
    assignedUser:"5",
    status:"Active" 
},
{
    id:7,
    role:"Strategist",
    assignedUser:"10",
    status:"Active" 
},
{
    id:8,
    role:"Support Staff",
    assignedUser:"8",
    status:"Active" 
},
 ]

 const addNewRole = () => {
  setNewRoleOpen(true)
 }
 const viewRolesAndPermissions = () => {
  setPermissionModalOpen(true)
 }
 const filteredData = data.filter((data) => {
      const searchFilter =
      searchTerm === "" ||
      data.role.toLowerCase().includes(searchTerm.toLowerCase());
      return searchFilter;
  });
 const handleResetFilters = () => {
    setSearchTerm("");
  };

  return (
    <div className="p-6">
    <div className="flex justify-between mb-6 items-center">
      <div className="font-bold text-desk-h-6 font-sans">Roles & Permissions</div>
      <div className="flex gap-4 items-center">
      <button
       className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg m py-2 px-8 mr-4 font-poppins" onClick={addNewRole}
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
              <div className="mt-3 font-semibold text-center font-poppins text-desk-b-2">
               {item.role}
              </div>
              <div className="flex items-center justify-between mt-4 font-poppins text-desk-b-3 text-neutral-600">
                <div className="font-semibold">Assigned Users:</div>
                <div>{item.assignedUser}</div>
              </div>
              <div className="flex items-center justify-between mt-4 text-desk-b-3 text-neutral-600 font-poppins">
                <div className="font-semibold">Status:</div>
                <div>{item.status}</div>
              </div>
              <button
                className="bg-[#2B6BE7] cursor-pointer w-full text-white rounded-lg mt-5 py-2 font-poppins"
                onClick={viewRolesAndPermissions}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="p-4 mt-8">
        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full bg-white">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-center py-5 px-4 uppercase font-semibold text-sm">
                  Position
                </th>
                <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                  Assigned Users
                </th>
                <th className="text-left py-5 px-4 uppercase font-semibold text-sm">
                 Status
                </th>
                <th className="text-left py-5 px-4"></th>
              </tr>
            </thead>
            <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                   
                    <td className="py-3 px-4 text-center">
                      {item?.role}
                    </td>
                    <td className="py-3 px-4 ">
                      {item?.assignedUser}
                    </td>
                    <td className="py-3 px-4">
                      <span>
                      Active
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-md"
                        onClick={viewRolesAndPermissions}
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

   {/* Roles And Permission Modal */}
       <ReactModal
          isOpen={isPermissionModalOpen}
          onRequestClose={() => setPermissionModalOpen(false)}
          className="bg-white shadow-lg px-10 pt-5 w-full md:w-4/5 lg:w-8/12 overflow-y-auto"
          overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-20"
        >
          <RolesAndPermissionModal
            setPermissionModalOpen={setPermissionModalOpen}
          />
        </ReactModal>
  </div>
  )
}

export const AddNewRole = ({setNewRoleOpen}) => {
  return(
    <div>
    <div className="flex gap-4 items-center mb-8 p-5">
      <LuReply className='text-lg font-bold hover:cursor-pointer' size={25} onClick={() => setNewRoleOpen(false)}/>
      <h1 className="text-[#202224] text-2xl font-semibold">Add New Role</h1>
    </div>
     
     <div className='grid grid-cols-2 gap-10 mx-7'>
      {/* Role name */}
     <div>
      <label className='text-neutral-800 text-sm font-semibold block'>Role/Position Name</label>
      <input type='text' className='focus:outline-none border rounded-md p-2 w-full mt-1' ></input>
     </div>
     {/* Description */}
     <div>
      <label className='text-neutral-800 text-sm font-semibold block'>Description</label>
      <input type='text' className='focus:outline-none border rounded-md p-2 w-full mt-1' ></input>
     </div>
     </div>

      <div className='m-7 '>
        {/* User Management */}
          <div className='font-semibold text-[#202224] text-xl'>User Management</div>
          <div className='grid grid-cols-2 text-sm'>
          <div className="flex gap-3 my-3">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>View Users: </span>
            <span>View user details and activity.</span>
          </div>
          </div>
          <div className="flex gap-3 my-3">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Edit User Information: </span>
            <span>Update user profile data.</span>
          </div>
          </div>
          <div className="flex gap-3">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Ban/Unban Account: </span>
            <span>Restrict or restore user access.</span>
          </div>
          </div>
          <div className="flex gap-3">
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
          <div className='grid grid-cols-2'>
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
          <div className="flex gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Assign Queries: </span>
            <span>Allocate queries to specific support staff.</span>
          </div>
          </div>
          <div className="flex gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Resolve Queries: </span>
            <span className=''>Mark queries as resolved or follow up.</span>
          </div>
          </div>
          </div>
          </div>
         
          {/* Instructor Management */}
          <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Instructor Management</div>
          <div className='grid grid-cols-2'>
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
          <div className="flex items-center gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>View instructor Performance: </span>
            <span>Access performance reports and analytics.</span>
          </div>
          </div>
          <div className="flex gap-3 text-sm items-center">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Assign Bookings: </span>
            <span>Manage and assign booking schedules.</span>
          </div>
          </div>
          </div>
          </div>

          {/* Booking & Payments */}
          <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Booking & Payments</div>
          <div className='grid grid-cols-2'>
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
          <div className="flex gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>View Earning Reports: </span>
            <span>Access financial reports.</span>
          </div>
          </div>
          <div className="flex gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Issue Invoices: </span>
            <span>Generate invoices for transactions.</span>
          </div>
          </div>
          </div>
          </div>

           {/*Role & Permission Management */}
           <div className='mt-8'>
          <div className='font-semibold text-[#202224] text-xl'>Role & Permission Management</div>
          <div className='grid grid-cols-2'>
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
           <div className="flex gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Delete Roles: </span>
            <span>Remove roles that are no longer needed.</span>
          </div>
          </div>
          <div className="flex gap-3 text-sm">
            <input type="checkbox"/>
          <div className=''>
            <span className='font-semibold text-neutral-800 '>Assign Roles: </span>
            <span>Allocate roles to users or team members.</span>
          </div>
          </div>
          </div>
          </div>

      </div>

      <div className="flex bg-white mx-7 w-full">
      <button className="bg-secondary-400 rounded-md px-12 py-2 text-white transition-colors duration-200 hover:bg-secondary-600">
        Create Role
      </button>
    </div>

    </div>
  )
}

export default RolesAndPermissions