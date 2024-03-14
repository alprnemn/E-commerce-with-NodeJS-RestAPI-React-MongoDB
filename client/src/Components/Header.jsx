import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faRightFromBracket,
  faUser,
  faPhone,
  faLocationDot,
  faInfo,
  faQuestion,
  faCartShopping,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useCheckToken from "../CustomHook/checkToken";
import { jwtDecode } from "jwt-decode";

const Header = () => {

  const [user,setUser] = useState(null)
  const [isAdmin,setisAdmin] = useState(null);

  const icons = [
    { icon: faHouse, name: "Home", href: "/" },
    { icon: faChartSimple, name: "Stats", href: "/stats" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token")
  }
  
  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token");
      if(token){
        const decodedToken = jwtDecode(token);
        if(decodedToken) {
          setisAdmin(decodedToken.isAdmin)
          setUser(decodedToken)
        }
      }
    }
    checkAdmin();
  },[])

  return (
    <>
      {/* Header Container */}
      <div className="hidden w-full h-[36px]  bg-slate-800 md:flex items-center justify-between">
        {/* Phones */}
        <div className="container flex items-center justify-between text-white">
          <div className="">
            <FontAwesomeIcon className="text-white" icon={faPhone} />
            <a href="#" className="inline-block ms-1 hover:text-blue-400">
              +90 312 542 34 32
            </a>
            <FontAwesomeIcon className="text-white ms-7" icon={faPhone} />
            <a href="#" className="inline-block  hover:text-blue-400">
              +90 312 542 65 53
            </a>
          </div>

          <div className="">
            <a href="#" className="inline-block me-9 hover:text-blue-400 ">
              <FontAwesomeIcon className="me-1" icon={faLocationDot} />
              Location
            </a>
            <a href="#" className="inline-block me-9 hover:text-blue-400 ">
              <FontAwesomeIcon className="me-1" icon={faInfo} />
              About
            </a>
            <a href="#" className="inline-block me-2 hover:text-blue-400 ">
              <FontAwesomeIcon className="me-1" icon={faQuestion} />
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full h-[85px] bg-slate-950 flex ">
        {/* Navbar Items */}
        <div className="md:container px-8 flex w-full justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <div className=" h-full flex items-center justify-start">
              <p className="text-white font-medium text-4xl lg:text-5xl shadow-md ">
                TJ-X
              </p>
            </div>
          </Link>
          {/* Search */}
          <form className=" hidden w-4/12 md:flex items-center justify-start">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-blue-950 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-950 text-md font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Search product"
                required
              />
            </div>
          </form>

          {user ? (
            <div className="hidden md:flex items-center justify-end">
              <ul className=" h-full flex items-center justify-end">
              { isAdmin ? <Link to={`/admin-panel`}>
                  <li className="flex flex-col group items-center mx-4 text-lg hover:scale-110  duration-200">
                    <FontAwesomeIcon
                      className="text-white text-xl group-hover:text-blue-300 "
                      icon={faScrewdriverWrench}
                    />
                    <p className="text-white group-hover:text-blue-300">
                      Admin
                    </p>
                  </li>
                </Link> : "" }
              

                {icons.map((item, index) => {
                  return (
                    <Link key={index} to={item.href}>
                      <li className="flex flex-col group items-center mx-4 text-lg hover:scale-110  duration-200">
                        <FontAwesomeIcon
                          className="text-white text-xl group-hover:text-blue-300 "
                          icon={item.icon}
                        />
                        <p className="text-white group-hover:text-blue-300">
                          {item.name}
                        </p>
                      </li>
                    </Link>
                  );
                })}
                <Link to={`/profile/${user._id}`}>
                  <li className="flex flex-col group items-center mx-4 text-lg hover:scale-110  duration-200">
                    <FontAwesomeIcon
                      className="text-white text-xl group-hover:text-blue-300 "
                      icon={faUser}
                    />
                    <p className="text-white group-hover:text-blue-300">
                      Profile
                    </p>
                  </li>
                </Link>
                <a href="/" onClick={handleLogout}>
                  <li className="flex flex-col group items-center mx-4 text-lg hover:scale-110  duration-200">
                    <FontAwesomeIcon
                      className="text-white text-xl group-hover:text-blue-300 "
                      icon={faRightFromBracket}
                    />
                    <p className="text-white group-hover:text-blue-300">
                      Logout
                    </p>
                  </li>
                </a>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-center">
              <Link to={"/login"}>
                <button className="bg-blue-600 hover:bg-blue-500 font-medium text-white w-[120px] h-[40px] me-7">
                  Log-in
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="bg-orange-500 hover:bg-orange-400 font-medium text-white w-[120px] h-[40px]">
                  Sign-Up
                </button>
              </Link>
            </div>
          )}

          {/* Buttons */}

          {/* Shopping Cart For Mobile Screens  */}
          <div className="flex items-center md:hidden">
            <Link
              className=" text-3xl relative text-white inline-block items-center justify-center cursor-pointer"
              to={"/payment"}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute top-[-6px] right-[-4px] text-white text-sm bg-red-500 rounded-full w-4 h-4 flex justify-center items-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
