import React, { useState } from "react";
import backgroundimg from "../../assets/Images/background.png";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = email.trim() !== "";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-[5vw]"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="bg-[#FFFFFF] p-5 rounded-xl shadow-lg w-full xs:w-[500px]">
        {/* back arrow */}
        <div className="">
          <Link to="/login">
            <GoArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
        </div>
        <div className="px-5 my-16 sm:px-14 sm:mb-12 sm:mt-5">
          {/* title */}
          <h2 className="text-xl font-semibold text-[#333333] text-center mb-6">
            Forgot your Password?
          </h2>
          {/* Instructional text */}
          <p className="text-[#333333] font-Avenir text-sm text-center mb-6">
            Don't worry, happens to all of us. Enter your email below to recover
            your password.
          </p>
          {/* Email input */}
          <div className="mb-4">
            <label className="block text-sm font-Poppins  text-[#666666]">
              Your email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <Link to='/verifycode'>
          <button
            type="submit"
            className={`w-full p-2 text-white py-2 rounded-full transition-all  ${
              isEmailValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isEmailValid}
          >
            Submit
          </button>
          </Link>

          {/* OR dividor */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          {/* Social Login buttons */}
          <div className="flex flex-col space-y-3">
            <button className="bg-white border border-gray-400 hover:bg-gray-200 transition-all shrink-0 w-full text-gray-700 p-2 rounded-full flex gap-2 items-center justify-center">
              <MdFacebook className="h-5 w-5 shrink-0" />
              <span className="">Log in with Facebook</span>
            </button>
            <button className="bg-white border border-gray-400 hover:bg-gray-200 transition-all shrink-0 w-full text-gray-700 p-2 rounded-full flex gap-2 items-center justify-center">
              <FcGoogle className="h-5 w-5 shrink-0" />
              <span>Log in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
