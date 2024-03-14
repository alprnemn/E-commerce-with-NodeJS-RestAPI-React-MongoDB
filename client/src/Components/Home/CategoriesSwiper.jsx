import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import useFetchData from "../../CustomHook/useFetchData";

const CategoriesSwiper = () => {
  const images = [
    { src: "/images/image1.png" },
    { src: "/images/image2.png" },
    { src: "/images/image3.png" },
    { src: "/images/image4.png" },
    { src: "/images/image5.png" },
  ];
  
  const { data, loading, error } = useFetchData('http://127.0.0.1:5000/categories');

  return (
    <div className="md:container px-8 mt-10 flex bg-white items-center justify-center ">
      {/* Left Side */}
      <div className="w-full md:w-3/12 h-[598px] flex flex-col  border border-solid border-black">
        <Link to={"/products"}>
          <h1 className="border hover:bg-blue-300 border-solid hover:text-black border-blue-950 duration-200 bg-slate-950 text-white text-xl font-medium p-8">
            PRODUCTS
          </h1>
        </Link>
        {loading ? (
          <p className="text-5xl font-medium text-blue-950 mt-10 text-center">Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            {data.map((item, index) => {
              return (
                <Link key={index} to={`/${item.name}`}>
                  <h1 className="border border-solid border-blue-950 bg-white text-slate-950 duration-200 text-xl font-medium p-[27px] hover:bg-blue-300">
                    {item.name}
                  </h1>
                </Link>
              );
            })}
          </>
        )}
      </div>

      {/* Right Side */}
      <Swiper
        style={{ width: "75%", height: "598px" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper hidden md:flex"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.src} className="h-[600px] w-full" alt="asdf" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesSwiper;
