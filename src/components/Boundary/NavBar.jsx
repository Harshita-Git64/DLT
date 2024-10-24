import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const location = useLocation();
  if (location.pathname === "/admindashboard") {
    return <AdminNavBar />;
  }

  return (
    <nav className="h-[100px] bg-white">
      <div className="flex justify-between items-center h-full mx-10 md:mx-20">
        <div className="text-[#001C51] text-3xl font-extrabold">
          <Link to="/">Startup</Link>
        </div>
        <div className="hidden lg:flex gap-10 text-[#1E0E62]">
          <div>
            <a href="#">How it works</a>
          </div>
          <div>
            <a href="#">Pricing</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
        </div>
        <div className="">
          <Link to="/login">
            <button className="hidden lg:block bg-[#FFC10C] hover:bg-yellow-500 rounded-full px-7 py-2 font-semibold text-lg">
              Login
            </button>
          </Link>
        </div>

        <div className="block lg:hidden">
          <GiHamburgerMenu
            onClick={() => (sideBar ? setSideBar(false) : setSideBar(true))}
            className="h-8 w-8"
          />
        </div>
      </div>

      {/* Side bar */}
      {sideBar && (
        <div className="h-full w-[350px] fixed right-0 top-0 bg-white p-8 lg:hidden ">
          <IoMdClose
            className="h-5 w-5 text-gray-500"
            onClick={() => setSideBar(false)}
          />

          <Link to="/login">
            <button className="bg-[#FFC10C] hover:bg-yellow-500 rounded-full px-7 py-2 mt-10 font-semibold text-lg">
              Login
            </button>
          </Link>

          <div className="w-full flex flex-col gap-10 mt-14 font-semibold text-xl text-[#1E0E62]">
            <div>
              <a href="#">How it works</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
