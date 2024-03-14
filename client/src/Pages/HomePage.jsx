import React, { useEffect, useState } from "react";

import CategoriesSwiper from "../Components/Home/CategoriesSwiper";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faEnvelope,
  faHeadset,
  faTruck,
  faTruckFast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";
import useCheckToken from "../CustomHook/checkToken";

const HomePage = () => {
  const services = [
    { icon: faTruck, title: "Free Cargo" },
    { icon: faCalendarCheck, title: "Return Guarantee" },
    { icon: faHeadset, title: "Live Support" },
    { icon: faEnvelope, title: "Mail Support" },
    { icon: faTruckFast, title: "Fast Cargo" },
  ];

  const [user,setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        setUser(jwtDecode(token))
      }
    }
    fetchUser();
  },[])

  return (
    <>
      <Header />

      <ShoppingCart />

      {user ? (
        <div className="md:container px-8 mt-10">
          <div className="w-full h-[55px] bg-slate-900 text-white font-medium flex items-center justify-start ps-9 text-xl">
            <FontAwesomeIcon icon={faUser} />
            <h3 className="mx-[11px]">
              {user.firstname} {user.lastname}{" "}
            </h3>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Home Top Ctegories & Swiper */}
      <CategoriesSwiper />

      {/* Content */}
      <div className="hidden md:flex md:container px-8 mt-10">
        <div className="w-full h-[180px] bg-slate-950 flex items-center justify-around">
          <div className="flex text-white font-medium text-3xl">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-lg md:text-lg lg:text-2xl xl:text-3xl justify-center mx-4 lg:mx-12"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <h1 className="mt-2 text-center">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="md:container px-8 mt-10">
        {/* SortBy */}
        <div className="w-full h-[60px] bg-slate-950 flex justify-end items-center">
          <p className="text-white text-xl font-medium me-4">Sort By</p>
          <select
            name="sortby"
            id="sortby"
            className="me-3 h-[35px] w-[130px] text-center bg-blue-100"
          >
            <option value="">Price</option>
            <option value="">Stock</option>
            <option value="">Alphabet</option>
          </select>
        </div>

        {/* Products Content */}
        <div className="border border-solid border-gray-300 md:h-[900px] w-full flex flex-wrap  items-start justify-center md:overflow-auto xl:px-3 2xl:px-4">
          {/* Cards */}
          <Card />
        </div>
      </div>

      {/* Line */}
      <div className="md:container px-8">
        <div className="w-full h-[19px] bg-slate-950"></div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
