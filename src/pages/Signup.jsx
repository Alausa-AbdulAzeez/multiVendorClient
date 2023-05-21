import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BASE_URL } from "../functions/requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  // FORM DATA
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // END OF FORM DATA

  // REACT TOAST
  const toastId = React.useRef(null);

  // FUNCTION THAT HANDLES THE CHANGE OF FORM DATA
  const handleFormDataChange = (e, dataType) => {
    if (dataType === "name") {
      setName(e.target.value);
    }
    if (dataType === "email") {
      setEmail(e.target.value);
    }
    if (dataType === "password") {
      setPassword(e.target.value);
    }
    if (dataType === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };

  // END OF FUNCTION THAT HANDLES THE CHANGE OF FORM DATA

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
  // END OF FUNCTIONALITIES FOR CONFIRM PASSWORD TOGGLE

  // FUNCTION TO REGISTER USER
  const handleSignUp = async (e) => {
    e.preventDefault();
    // header config
    const configuration = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    // FORM DETAILS SETTING FUNCTIONALITIES

    const formDetails = new FormData();

    formDetails.append("name", name);
    formDetails.append("email", email);
    formDetails.append("password", password);

    // END OF FORM DETAILS SETTING FUNCTIONALITIES

    toastId.current = toast("Please wait...", {
      autoClose: 3000,
      isLoading: true,
    });

    try {
      if (password === confirmPassword) {
        await axios
          .post(`${BASE_URL}/user/register`, formDetails, configuration)
          .then((res) => console.log(res))
          .then(() => {
            toast.update(toastId.current, {
              render: "Candidate scheduled succesfully!",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
          });
      } else {
        throw new Error("Passwords do not match");
      }
    } catch (error) {
      console.log(error.message);
      console.log("error");
      toast.update(toastId.current, {
        type: "error",
        autoClose: 3000,
        isLoading: false,
        render: `${
          error?.response?.data?.title ||
          error?.response?.data?.description ||
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong, please try again"
        }`,
      });
    }
  };
  // END OF FUNCTION TO REGISTER USER

  return (
    <div className="flex flex-col items-center h-screen py-8 bg-gray-50 sm:px-6 lg:px-8">
      <ToastContainer />
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
            id="fullName"
            placeholder="John Doe"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
            onChange={(e) => handleFormDataChange(e, "name")}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="example@gmail.com"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
            onChange={(e) => handleFormDataChange(e, "email")}
          />
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
            onChange={(e) => handleFormDataChange(e, "password")}
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
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-200 p-2 mt-1 text-sm focus:outline-none focus:border-blue-300 rounded"
            onChange={(e) => handleFormDataChange(e, "confirmPassword")}
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
        <button
          className="bg-blue-500 w-full rounded py-2 font-semibold text-sm text-white hover:bg-blue-600"
          onClick={handleSignUp}
        >
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
