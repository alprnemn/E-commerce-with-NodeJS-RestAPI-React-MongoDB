import axios from "axios";
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigation = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        loginData
      );
      localStorage.setItem("token", response.data);
      navigation("/")
    } catch (error) {
      console.error("Authentication failed:", error);
      localStorage.removeItem("token");
    }
  };

  return (
    <>
      {/* Login */}
      <div className="flex h-screen justify-center items-center bg-slate-900">
        {/* Login Content */}
        <div className=" rounded-xl border-white w-[400px] h-[550px] flex flex-col bg-slate-950 shadow-[5px_15px_60px_15px_black]">
          <div className="w-full h-[150px] flex justify-center items-center">
            <Link to={"/"} className="hover:scale-110 duration-300">
              <img
                src="/logos/logo.png"
                className="h-[180px] w-[180px] text-center"
                alt="logo"
              />
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-white font-medium text-center text-3xl">
            Log-In
          </h1>
          {/* Login Form */}
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="mb-5 px-6 flex flex-col justify-center items-start mt-6">
              {/* Username */}
              <label
                htmlFor="username"
                className="block mb-2 text-md font-medium text-white"
              >
                Username
              </label>
              {/* Username Ipnut */}
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                id="username"
                className=" w-8/12 border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5 px-6 flex flex-col justify-center items-start mt-2">
              {/* Password */}
              <label
                htmlFor="password"
                className="block mb-2 text-md font-medium text-white"
              >
                Password
              </label>
              {/* Password Input */}
              <input
                name="password"
                value={loginData.password}
                onChange={handleChange}
                type="password"
                id="loginpassword"
                className=" w-8/12 border border-slate-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                placeholder="name@gmail.com"
                required
              />
            </div>

            {/* Text */}
            <div className="flex justify-start ms-5 text-white font-medium">
              <p>
                Dont have an account?{" "}
                <Link to={"/register"} className="text-blue-300">
                  Register here
                </Link>
              </p>
            </div>

            {/* Login Button */}
            <div className="flex justify-end items-center mt-7">
              <button className="w-[150px] h-[40px] bg-blue-500 text-white hover:bg-blue-400 font-medium rounded-3xl me-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
