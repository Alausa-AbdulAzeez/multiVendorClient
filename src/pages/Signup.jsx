import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  // FUNCTIONALITIES FOR PASSWORD TOGGLE
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  // END OF FUNCTIONALITIES FOR PASSWORD TOGGLE

  // FUNCTIONALITIES FOR CONFIRM PASSWORD TOGGLE
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleToggleConfirmPassword = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };
  // END OF FUNCTIONALITIES FOR CONFIRM     PASSWORD TOGGLE

  return (
    <div className="flex flex-col items-center h-screen py-8 bg-gray-50 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold ">Sign up</h1>
      <form className="bg-white rounded-lg  mx-auto px-4 py-8 mt-8 sm:w-full sm:max-w-md sm:px-10 space-y-6">
        <div className="flex flex-col ">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
          />
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
          />
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
          />
          {isPasswordVisible ? (
            <AiOutlineEye
              className="absolute right-6 top-9 cursor-pointer"
              onClick={handleTogglePassword}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-6 top-9 cursor-pointer"
              onClick={handleTogglePassword}
            />
          )}
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
          />
          {isConfirmPasswordVisible ? (
            <AiOutlineEye
              className="absolute right-6 top-9 cursor-pointer"
              onClick={handleToggleConfirmPassword}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-6 top-9 cursor-pointer"
              onClick={handleToggleConfirmPassword}
            />
          )}
        </div>
        <button className="bg-blue-500 w-full rounded py-2 font-semibold text-sm text-white hover:bg-blue-600">
          Submit
        </button>
        <div className="text-sm">
          Already have an account?
          <span>
            <Link
              to={"/login"}
              className="ml-2 text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sign in
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
