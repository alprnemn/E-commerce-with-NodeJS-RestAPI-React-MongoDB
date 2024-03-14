import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../CustomHook/useFetchData";


const Card = (props) => {

  const category = props.category;
  
  const { data, loading, error } = useFetchData("http://127.0.0.1:5000/products",category);

  return (
      <>
        {loading ? (
          <p className="text-5xl font-medium text-blue-950 mt-10">Loading...</p>
        ) : error ? (
          <p className="text-3xl text-red-600"  >Error: {error.message}</p>
        ) : (
          <>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-12/12 w-[270px] lg:w-[260px] xl:w-[280px] 2xl:w-[340px] h-[350px] md:h-[360px] mx-4 xl:mx-8 2xl:mx-12 mt-3 flex flex-col items-center justify-start"
                >
                  {/* Card Image */}
                  <div className="w-full h-[220px] relative">
                    <img
                      className="w-full h-full"
                      src={`${item.image}`}
                      alt="prductimage"
                    />
                    {/* Best Seller Icon */}
                    {item.bestseller ? <div className="absolute top-0 left-2 -rotate-6">
                      <img
                        src="/icons/best-seller.png"
                        className="w-[120px] h-[90px]"
                        alt="best"
                      />
                    </div> : ""
                    }
                    
                  </div>
                  {/* Product Name */}
                  <h3 className="font-bold text-center ">{item.name}</h3>
                  {/* Product Price */}
                  <p className="text-lg font-medium text-gray-600">
                    {item.price}$
                  </p>
                  <div className="w-full flex justify-center mt-5">
                    {/* Add To Cart */}
                    <button className="w-5/12 h-[40px] bg-blue-950  hover:bg-blue-600  rounded-lg text-white">
                      Add to Card
                    </button>

                    {/* Details */}
                    <Link
                      className="w-5/12 h-[40px] text-sm md:text-md  mx-3 "
                      to={`/product/${item._id}`}
                    >
                      <button className="w-full h-full bg-orange-500 hover:bg-orange-600 rounded-lg text-white">
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </>
  );
};

export default Card;
