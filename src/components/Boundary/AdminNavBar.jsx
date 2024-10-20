import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle, FaSearch } from "react-icons/fa";

function AdminNavBar() {
  return (
    <nav className="h-[100px] bg-white">
      <div className="flex justify-between items-center h-full mx-10 md:mx-20">
        {/* Startup */}
        <div className="text-[#001C51] text-3xl font-extrabold">
          <Link to="/">Startup</Link>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-[500px] border border-solid border-neutral-100 mr-4">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 bg-transparent focus:outline-none text-neutral-600"
            />
          </div>

          <IoNotifications className="h-6 w-6" />
          <FaUserCircle className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
