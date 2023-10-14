import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../functions/requestMethods";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userSlice";

const Login = () => {
  // MISCELLANEOUS
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // USER
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // PASSWORD VISIBILITY
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  // REACT TOAST
  const toastId = React.useRef(null);

  // FUNCTION THAT HANDLES THE CHANGE OF FORM DATA
  const handleFormDataChange = (e, dataType) => {
    if (dataType === "email") {
      setEmail(e.target.value);
    }
    if (dataType === "password") {
      setPassword(e.target.value);
    }
  };
  // END OF FUNCTION THAT HANDLES THE CHANGE OF FORM DATA

  // FUNCTION FOR CONFIRM PASSWORD TOGGLE

  const handleToggleConfirmPassword = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };
  // END OF FUNCTION FOR CONFIRM PASSWORD TOGGLE

  // FUNCTION TO HANDLE USER LOGIN
  const handleUserLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    toastId.current = toast("Please wait...", {
      autoClose: 3000,
      isLoading: true,
    });
    console.log(user);

    try {
      await axios
        .post(`${BASE_URL}/user/login`, user)
        .then((res) => {
          toast.update(toastId.current, {
            render: "Login succesful! Please wait while we redirect you.",
            type: "success",
            autoClose: 2000,
            isLoading: false,
          });
          dispatch(loginSuccess(res?.data));
        })
        .then(() => {
          setEmail("");
          setPassword("");
          setTimeout(() => {
            navigate("/");
          }, 2500);
        });
    } catch (error) {
      console.log(error.message);
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
  // ENDN OF FUNCTION TO HANDLE USER LOGIN

  return (
    <div className="h-screen bg-gray-100  flex flex-col py-12  sm:px-6 lg:px-8">
      <ToastContainer />

      <div className="h-auto bg-white rounded-lg  mx-auto px-4 py-8 mt-8 sm:w-full sm:max-w-md sm:px-10">
        <h1 className="text-center text-3xl font-bold mt-2 mb-4 text-blue-500">
          Login{" "}
        </h1>
        <form className="space-y-6" onSubmit={handleUserLogin}>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none  focus:border-blue-300 placeholder-slate-400 "
                onChange={(e) => handleFormDataChange(e, "email")}
                value={email}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 "
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                name="password"
                required
                placeholder="User Password"
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none  focus:border-blue-300 placeholder-slate-400 "
                value={password}
                onChange={(e) => handleFormDataChange(e, "password")}
              />
              {isConfirmPasswordVisible ? (
                <AiOutlineEye
                  className="absolute right-6 top-3 cursor-pointer"
                  onClick={handleToggleConfirmPassword}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-6 top-3 cursor-pointer"
                  onClick={handleToggleConfirmPassword}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" flex mt-1 items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="mr-2"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <Link to={"/forgotPassword"}>
              <div className="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700">
                Forgot password?
              </div>
            </Link>
          </div>
          <button
            type="subimt"
            className="w-full text-center bg-blue-600 text-white rounded-md py-2 font-semibold"
          >
            Submit
          </button>
          <div className="text-sm">
            Don't have an account?
            <Link to={"/signup"}>
              <span className="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700 ml-1">
                Sign up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
