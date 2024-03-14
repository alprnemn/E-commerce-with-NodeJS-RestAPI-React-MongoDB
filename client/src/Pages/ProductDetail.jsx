import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faTruck } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import { useParams } from "react-router-dom";
import useFetchData from "../CustomHook/useFetchData";

const ProductDetail = () => {

  let { id } = useParams();

  const {data , loading , error} = useFetchData("http://127.0.0.1:5000/products/",null,id)

  return (
    <>
      <Header />

      <ShoppingCart />

      {loading ? (
        <p className="text-5xl font-medium text-slate-950 mt-10 text-center">Loading...</p>
      ) : error ? (
        <p className="text-3xl text-red-600">Error: {error.message}</p>
      ) : (
        <>
          <div className="md:container px-8 mt-10">
            {/* Product Detail Content */}
            <div className="border-2 border-solid border-gray-300 w-full h-[1350px] lg:h-[650px] flex flex-col lg:flex-row items-center justify-center rounded-xl p-4">
              {/* Left Side */}
              <div className="w-8/12 lg:w-5/12 h-full  rounded-xl mx-4">
                {/* Image */}
                <img src={data.image} alt="product" className="w-full h-5/6" />

                {/* Title */}
                <h1 className="text-3xl text-center font-medium text-gray-950">
                  {data.name}
                </h1>
              </div>

              {/* Right Side */}
              <div className="w-8/12 lg:w-5/12 h-full  flex flex-col mt-4 md:mt-0 justify-start items-start rounded-xl mx-4 relative ">
                {/* Price */}
                <p className="text-5xl font-medium text-gray-800 ms-5 my-4">
                  {data.price}$
                </p>

                {/* Description */}
                <p className="text-xl text-gray-800 ms-5">{data.description}</p>

                {/* + - Buttons */}
                <div className="flex text-white font-medium ms-5 mt-8">
                  <button className="w-[45px] h-[40px] text-3xl font-medium flex items-center justify-center bg-orange-500 rounded-xl">
                    -
                  </button>
                  <p className="text-blue-950 mx-3 text-3xl">1</p>
                  <button className="w-[45px] h-[40px] text-3xl font-medium flex items-center justify-center bg-orange-500 rounded-xl">
                    +
                  </button>
                </div>

                {/* Free Shipping */}
                <div className="w-full h-[60px] border-solid border-2 ms-5 mt-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-md md:text-3xl text-gray-600"
                    icon={faTruck}
                  />
                  <h3 className="text-md md:text-2xl ms-2 text-gray-600">
                    Free Shipping
                  </h3>
                </div>

                {/* 30-Days Return Policy */}
                <div className="w-full h-[60px] border-solid border-2 ms-5 mt-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-md md:text-3xl text-gray-600"
                    icon={faCalendarDays}
                  />
                  <h3 className="text-md md:text-2xl ms-2 text-gray-600">
                    30-days Return Policy
                  </h3>
                </div>

                {/* Create Order Button */}
                <button className="absolute right-1 bottom-1 w-[160px] h-[50px] md:w-[200px] md:h-[50px] rounded-2xl bg-green-500 hover:bg-green-600">
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;
