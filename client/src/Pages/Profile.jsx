import React from "react";

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useCheckToken from "../CustomHook/checkToken";

const Profile = () => {
  const { _id, firstname, lastname, email, city, town, adress } =
    useCheckToken();

  const userOne = [
    { info: "Firstname", value: firstname },
    { info: "Lastname", value: lastname },
    { info: "E-Mail", value: email },
    { info: "Password", value: "*******" },
    { info: "City", value: city },
    { info: "Town", value: town },
    { info: "Adress",value: adress}
  ];

  const orders = [
    {
      orderno: "534543",
      products: [{ name: "Iphone 14" }, { name: "Apple Airpods" }],
      orderdate: "12.05.2023",
      price: 1654,
    },
    {
      orderno: "434533",
      products: [{ name: "MSI Notebook" }],
      orderdate: "12.05.2023",
      price: 634,
    },
    {
      orderno: "932343",
      products: [{ name: "Iphone 14" }],
      orderdate: "12.05.2023",
      price: 834,
    },
    {
      orderno: "932363",
      products: [{ name: "Samsung Galaxy TAB" }],
      orderdate: "12.05.2023",
      price: 834,
    },
    {
      orderno: "422243",
      products: [{ name: "Steelseries Mouse" }],
      orderdate: "12.05.2023",
      price: 234,
    },
  ];

  return (
    <>
      <Header />
      <ShoppingCart />
      {/* Profile */}
      <div className="md:container  mt-10">
        {/* Profile Content */}
        <div className=" w-full h-[1200px] lg:h-[720px] flex flex-col lg:flex-row items-center justify-center rounded-xl ">
          {/* Left Side */}
          <div className="w-full md:5/12 h-full flex flex-col items-center justify-start bg-white md:bg-gray-300 md:me-6">
            <img
              src="https://previews.123rf.com/images/triken/triken1608/triken160800028/61320729-erkek-avatar-profil-resmi-standart-user-avatar-konuk-avatar-sadece-insan-ba%C5%9F%C4%B1-vekt%C3%B6r-%C3%A7izim-beyaz.jpg"
              alt="asd"
              className="w-[250px] h-[250px] rounded-full"
            />

            {/* Informations */}
            <div className="flex w-full md:px-10  text-2xl font-medium justify-center items-center mt-4">
              {/* Info Table */}
              <div className="w-[450px] rounded-xl">
                <table className="w-full text-sm text-gray-950">
                  <tbody className="">
                    {userOne.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-gray-100
                          border-b text-gray-950"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium  whitespace-nowrap"
                          >
                            {item.info}
                          </th>
                          <td className="px-6 py-4">{item.value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RightSide */}
          <div className="w-full md:5/12 h-full flex flex-col items-center justify-start mt-2 md:mt-0  ">
            {/* Info Table */}
            <div className="w-full h-full bg-gray-100 mt-12 lg:mt-0 overflow-auto">
              <table className="w-full text-sm text-gray-950">
                <thead className="text-sm text-white uppercase bg-slate-900">
                  {/* Table Head */}
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3">
                      Order No
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3">
                      Products
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3">
                      Order Date
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3">
                      Order Price
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-gray-100 border-b text-gray-950"
                      >
                        <th
                          scope="row"
                          className="px-4 md:px-6 py-4 font-medium  whitespace-nowrap bg-orange-400"
                        >
                          {item.orderno}
                        </th>
                        <td className="px-4 md:px-6 py-4">
                          {item.products.map((item, index) => {
                            return <p key={index}>{item.name}</p>;
                          })}
                        </td>
                        <td className="px-4 md:px-6 py-4">{item.orderdate}</td>
                        <td className="px-4 md:px-6 py-4 font-medium">
                          {item.price}$
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <small className=" font-medium text-sm ">
                <FontAwesomeIcon
                  className="text-gray-700 mx-1"
                  icon={faInfoCircle}
                />
                Order Created: <b className="text-blue-400">Blue Order</b>,
                Shipped: <b className="text-orange-500">Orange Order</b>, Order
                Delivered:
                <b className="text-green-600"> Green Order</b>
              </small>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
