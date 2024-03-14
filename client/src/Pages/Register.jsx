import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const navigation = useNavigate();

  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "", 
    isokey : false,
  });  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setRegisterData({ ...registerData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', registerData);
      console.log('Product added successfully:', response.data);
      navigation("/login")
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
      {/* Register */}
      <div className="flex h-screen justify-center items-center bg-slate-900">
        {/* Register Content */}
        <div className="rounded-xl border-white w-[600px] h-[700px] md:h-[700px] flex flex-col bg-slate-950 shadow-[5px_15px_60px_15px_black]">
          <div className="w-full h-[150px] flex justify-center items-center">
            <Link to={"/"} className="hover:scale-110 duration-300">
              <img src="/logos/logo.png" className="h-[180px] w-[180px] text-center" alt="logo" />
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-white font-medium text-center text-3xl">
            Register
          </h1>

          {/* Register Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center">
              {/* Firstname */}
              <div className="mb-5 px-6 w-6/12 flex flex-col justify-center items-start mt-6">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Firstname
                </label>
                <input
                  name="firstname" value={registerData.firstname} onChange={handleChange}
                  type="text"
                  id="firstname"
                  className=" w-full border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              {/* Lastname */}
              <div className="mb-5 px-6 w-6/12 flex flex-col justify-center items-start mt-6">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname" value={registerData.lastname} onChange={handleChange}
                  className="w-full border border-slate-950 text-gray-900 font-medium text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  placeholder="name@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              {/* Email */}
              <div className="mb-5 px-6 w-6/12 flex flex-col justify-center items-start mt-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-medium text-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" value={registerData.email} onChange={handleChange}
                  className=" w-full border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              {/* Username */}
              <div className="mb-5 px-6 w-6/12 flex flex-col justify-center items-start mt-2">
                <label
                  htmlFor="username"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"  value={registerData.username} onChange={handleChange}
                  className=" w-full border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  placeholder="name@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="flex items-center">
              {/* Password */}
              <div className="mb-5 px-6 w-6/12 flex flex-col justify-center items-start mt-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password" value={registerData.password} onChange={handleChange}
                  id="password"
                  className=" w-full border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              {/* ConfirmPassword */}
              <div className="mb-5 px-6 w-6/12 flex flex-col justify-center items-start mt-2">
                <label
                  htmlFor="confirmpassword"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword" value={registerData.confirmpassword} onChange={handleChange}
                  id="confirmpassword"
                  className=" w-full border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  placeholder="name@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="mb-5 px-6 flex justify-start items-center mt-2">
              <input
                name="isokey" checked={registerData.isokey} onChange={handleChange}
                type="checkbox"  
                id="checkbox"
                className="w-[19px] h-[19px]"
                required
              />
              <label
                htmlFor="checkbox"
                className="block mb-2 ms-2 text-md font-medium mt-2 text-white"
              >
                I have read and agree to the terms of use.
              </label>
            </div>

            <div className="flex justify-start ms-5  text-white font-medium">
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-300">
                  Log-in here
                </Link>
              </p>
            </div>

            <div className="flex justify-end items-center mt-7">
              <button className="w-[180px] h-[40px] bg-blue-500 text-white hover:bg-blue-400 font-medium rounded-3xl me-4" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
