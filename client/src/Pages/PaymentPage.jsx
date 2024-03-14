import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";

const PaymentPage = () => {
  const orders = [
    {
      img: "https://cdn.pixabay.com/photo/2017/08/21/15/37/laptop-2665794_960_720.jpg",
      name: "Laptop 32GB RAM RDY-241124",
      quantity: 1,
      orderPrice: 132,
    },
    {
      img: "https://previews.123rf.com/images/alexeyboldin/alexeyboldin1802/alexeyboldin180200029/97410209-perspective-view-new-apple-iphone-x-smartphone-isolated-on-white-background.jpg",
      name: "Mouse Steeseries Rival320",
      quantity: 2,
      orderPrice: 32,
    },
    {
      img: "https://st2.depositphotos.com/2234329/6638/i/450/depositphotos_66386337-stock-photo-apple-silver-ipad-air-2.jpg",
      name: "Keyboard Mecahnic Apple From India",
      quantity: 1,
      orderPrice: 332,
    },
    {
      img: "https://st2.depositphotos.com/2234329/6638/i/450/depositphotos_66386337-stock-photo-apple-silver-ipad-air-2.jpg",
      name: "Keyboard Mecahnic Apple From India",
      quantity: 1,
      orderPrice: 332,
    },
    {
      img: "https://st2.depositphotos.com/2234329/6638/i/450/depositphotos_66386337-stock-photo-apple-silver-ipad-air-2.jpg",
      name: "Keyboard Mecahnic Apple From India",
      quantity: 1,
      orderPrice: 332,
    },
  ];

  return (
    <>
      <Header />

      <div className="md:container">
        <div className="w-full flex justify-center items-center mt-10">
          {/* Products */}
          <div className="w-full md:w-12/12 h-full bg-gray-100 mt-12 lg:mt-0 overflow-auto">
            <table className="w-full text-sm text-gray-950">
              <thead className="text-sm text-white uppercase bg-slate-950 ">
                {/* Table Head */}
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Order Price
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {/* MAPPING ORDERS */}
                {orders.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-gray-100 border-b text-gray-950 text-xs md:text-lg font-medium"
                    >
                      {/* PRODUCT IMAGE */}
                      <th
                        scope="row"
                        className="px-4 md:px-6 py-4 font-medium  whitespace-nowrap flex justify-center"
                      >
                        <img
                          src={item.img}
                          className="w-[45px] h-[35px] md:w-[65px] md:h-[45px]"
                          alt="asd"
                        />
                      </th>

                      {/* NAME */}
                      <td className="px-4 md:px-6 py-4 ">{item.name}</td>

                      {/* BUTTONS QUANTITY */}
                      <td className="px-4 md:px-6 py-4 text-center flex justify-center">
                        <button className="w-[28px] h-[26px] md:w-[34px] md:h-[34px] flex items-center justify-center bg-orange-500 rounded-full">
                          -
                        </button>
                        <p className="text-blue-950 mx-3 text-md">
                          {item.quantity}
                        </p>
                        <button className="w-[28px] h-[26px] md:w-[34px] md:h-[34px] flex items-center justify-center bg-orange-500 rounded-full">
                          +
                        </button>
                      </td>

                      {/* ORDER PRICE */}
                      <td className="px-4 md:px-6 py-4 text-center ">
                        {item.orderPrice}$
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Total Price */}
            <div className="flex justify-end font-medium text-lg me-4 mt-5">
              <p>Total Price : 123.28$</p>
            </div>
            {/* Button */}
            <div className="flex justify-end">
              <button className="w-[170px] h-[40px] my-4 me-2 bg-green-500 hover:bg-green-400 rounded-xl font-medium text-md ">
                Create Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
