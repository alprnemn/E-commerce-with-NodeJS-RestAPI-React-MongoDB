import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import Card from "../Components/Card/Card";
import { Link } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";

const Monitors = () => {
    const categories = [
        { name: "Computers" ,to : "/computers"},
        { name: "Phones" ,to:"/phones"},
        { name: "Tablets" ,to:"/tablets"},
        { name: "Monitors" ,to:"/monitors"},
        { name: "Accessories" ,to:"/accessories"},
        { name: "Electronics",to:"/electronics"},
    ];
  return (
    <>
      <Header />

      <ShoppingCart />

      {/* Products */}
      <div className="md:container px-8 mt-10">
        {/* Header Products Categories & Sort By */}
        <div className="w-full h-[100px] md:h-[60px] bg-slate-950 flex justify-between items-center text-white text-xl font-medium">
          {/* Categories */}
          <div className="flex flex-col ms-3 md:hidden items-center">
            <p className=" font-medium text-xl me-4 mb-2">Categories</p>
            <select
              name="sortby"
              id="sortby"
              className="me-3 h-[30px] w-[130px] text-center bg-blue-100 text-gray-950"
            >
              {categories.map((item, index) => {
                return (
                  <option key={index} value="">
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="hidden md:flex h-full items-center justify-start ">
            {categories.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.to}
                  className="flex items-center justify-center h-full border-r-2  hover:bg-blue-400"
                >
                  <h1 className=" px-1 lg:px-2 lg:text-lg xl:px-4 text-sm xl:text-2xl  ">
                    {item.name}{" "}
                    <FontAwesomeIcon className="text-sm" icon={faAngleDown} />
                  </h1>
                </Link>
              );
            })}
          </div>

          {/* Sort By */}
          <div className="flex items-center flex-col md:flex-row me-2 ">
            <p className=" font-medium text-center text-xl md:text-sm xl:text-xl me-4 mb-2">
              Sort By
            </p>
            <select
              name="sortby"
              id="sortby"
              className="me-3 h-[30px] w-[130px] text-center bg-blue-100 text-gray-950"
            >
              <option value="">Price</option>
              <option value="">Stock</option>
              <option value="">Alphabet</option>
            </select>
          </div>
        </div>

        {/* Products Content */}
        <div className="border border-solid border-gray-300 md:h-[900px] w-full flex flex-wrap  items-start justify-center md:overflow-auto xl:px-3 2xl:px-4">
          {/* Cards */}
          <Card category="Monitors" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Monitors;
