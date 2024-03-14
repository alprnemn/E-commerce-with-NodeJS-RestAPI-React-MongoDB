import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import AddProduct from "../Components/AdminPanel/AddProduct";

import checkisAdmin from "../CustomHook/checkisAdmin";

const AdminPanel = () => {
  
  const {isAdmin} = checkisAdmin();

  return (
    <>
      <Header />

      {/* Forms */}
      <div className="w-full flex flex-col lg:flex-row  items-center justify-around p-10">

        <AddProduct />

        {/* Orders */}
        <div className="w-full md:w-[700px] h-[600px] flex flex-col justify-start items-center bg-slate-950 rounded-3xl my-5 lg:my-0">
          <h1 className="text-white text-3xl my-4">Orders</h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminPanel;
