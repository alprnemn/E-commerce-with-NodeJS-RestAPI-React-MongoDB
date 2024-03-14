import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openShoppingCard = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {/* Shopping Cart Icon */}
      <div
        className="text-4xl z-10 text-gray-800 hidden md:flex fixed top-[51px] right-4 bg-green-500 rounded-full w-[56px] h-[56px] items-center justify-center cursor-pointer"
        onClick={openShoppingCard}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="absolute top-[1px] right-1 text-white text-sm bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
          3
        </div>
      </div>

      {/* Shopiing Card Content */}
      <div
        className={`fixed z-10 top-[122px] w-[290px] h-[580px] right-[-290px] ${
          isCartOpen ? "right-[12px]" : "0"
        } duration-300 ease-in-out rounded-md bg-slate-950 md:flex flex-col p-4 hidden `}
      >
        {/* Title */}
        <div className="flex h-[40px] ps-2 items-center justify-start">
          <h1 className="text-white font-medium">Shooping Cart</h1>
        </div>

        {/* Sopping Card Items */}
        <div className="w-full h-[470px] overflow-auto p-2">

          {/* Item */}
          <div className="w-full h-[95px] flex bg-gray-100 rounded-md mt-2">
            {/* Image */}
            <img
              src="https://cdn.pixabay.com/photo/2017/08/21/15/37/laptop-2665794_960_720.jpg"
              className="w-[80px] h-full"
              alt="asd"
            />
            {/* Content */}
            <div className="w-full flex items-center justify-center flex-col">
              {/* Title */}
              <h3 className="font-medium text-sm text-center text-blue-950">
                Comuter JaaaaS Jaso
              </h3>
              {/* Price */}
              <p className="font-medium">120$</p>
              {/* Remove Product */}
              <FontAwesomeIcon icon={faCancel} className="text-red-500 text-md cursor-pointer mt-2" />
            </div>
          </div>

        </div>

        {/* Prices */}
        <div className="flex flex-col items-center justify-center font-medium h-[40px] text-white">
            Total Price : 126.54 $
        </div>

        {/* Button */}
        <div className="flex items-center justify-center">
          <Link to={"/payment"}>
              <button className="w-[170px] h-[40px] bg-green-500 hover:bg-green-400 rounded-xl font-medium text-md ">Create Order</button>
          </Link>
        </div>

      </div>
    </>
  );
};

export default ShoppingCart;
