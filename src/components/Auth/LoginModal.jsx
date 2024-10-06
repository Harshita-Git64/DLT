import React, { useState } from "react";
import backgroundimg from "../../assets/Images/background.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-[5vw]"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="bg-[#FFFFFF] p-5 rounded-xl shadow-lg w-full xs:w-[500px]">
        {/* close button */}
        <div className="flex justify-end">
          <Link to="/instructorpage">
            <IoMdClose className="h-5 w-5 text-gray-500" />
          </Link>
        </div>
        <h2 className="text-xl font-semibold text-center text-[#333333] mb-4 mt-10 sm:mt-4">
          Log in
        </h2>
        <form className="xs:px-5 sm:px-14">
          {/* Email field */}
          <div className="">
            <label className="block text-sm font-Poppins  text-[#666666]">
              Your email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password field*/}
          <div className="relative mt-3">
            <label className="block text-sm font-[Poppins] text-[#666666]">
              Your password
            </label>
            <button
              type="button"
              className="absolute right-0 top-1 text-gray-500 "
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-[#66666659] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* forgot password */}
          <div className="text-right mb-5">
            <Link
              to="/forgotpassword"
              className="underline text-sm text-bg-[#111111] font-family-[Poppins]"
            >
              Forgot password?
            </Link>
          </div>
          {/* login button */}
          <button
            type="submit"
            className={`w-full p-2 text-white py-2 rounded-full transition-all ${
              isFormValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Log in
          </button>
        </form>

        <div className="mb-16 my-6 xs:px-5 sm:px-14 sm:mb-12">
          {/* OR */}
          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* social logins */}
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

export default LoginModal;
