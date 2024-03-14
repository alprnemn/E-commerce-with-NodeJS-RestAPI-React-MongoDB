import React, { useState } from "react";
import useFetchData from "../../CustomHook/useFetchData";
import axios from "axios";

const AddProduct = () => {

    const { data, loading, error } = useFetchData(
        "http://127.0.0.1:5000/categories"
    );

    const [formData, setFormData] = useState({
        productname: '',
        productimage: '',
        productdescription: '',
        productprice: '',
        productcategory: '',
        isbestseller: false, 
      });    

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:5000/product/create', formData);
          console.log('Product added successfully:', response.data);
        } catch (error) {
          console.error('Error adding product:', error);
        }
      };


  return (
    <>
      {/* Add Product Form */}
      <div className="w-full md:w-[400px] h-[700px] flex flex-col justify-start items-center bg-slate-950 rounded-3xl my-5 lg:my-0">
        <h1 className="text-white text-3xl my-4">Add Product</h1>
        {/* Form Add Product */}
        <form onSubmit={handleSubmit} method="post" action="/home">
          <div className="mb-5 px-6 flex flex-col justify-center items-start mt-4">
            {/* Product Name */}
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-white"
            >
              Product Name
            </label>
            {/* Product Name Input */}
            <input
              type="text"
              name="productname"
              value={formData.productname}
              onChange={handleChange}
              id="productnameadd"
              className="w-11/12 border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              placeholder="productname"
              required
            />
          </div>
          <div className="mb-5 px-6 flex flex-col justify-center items-start mt-4">
            {/* Product Image */}
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-white"
            >
              Product Image Link
            </label>
            {/* Product Image Input */}
            <input
              type="text"
              name="productimage"
              id="productimage" value={formData.productimage} onChange={handleChange}
              className="w-11/12 border font-medium border-slate-950 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              placeholder="productname"
              required
            />
          </div>
          <div className="mb-5 px-6 flex flex-col justify-center items-start mt-2">
            {/* Product Description */}
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-white"
            >
              Description
            </label>
            {/* Product Description Input */}
            <input
              name="productdescription"
              type="textarea"
              id="productdescription" value={formData.productdescription} onChange={handleChange}
              className=" w-11/12 h-[60px] border border-slate-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              placeholder="description"
              required
            />
          </div>

          {/* Product Price */}
          <div className="mb-5 px-6 flex flex-col justify-center items-start mt-2">
            {/* Product Price */}
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-white"
            >
              Price
            </label>
            {/* Product Price Input */}
            <input
              name="productprice"
              type="number" value={formData.productprice} onChange={handleChange}
              id="productprice"
              className=" w-11/12 border border-slate-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              placeholder="description"
              required
            />
          </div>
          {/* Product Category */}
          <div className="mb-5 px-6 flex flex-col justify-center items-start mt-2">
            {/* Product Category */}
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-white"
            >
              Porduct Category
            </label>
            {/* Product Category Input */}
            <select name="productcategory" id="productcategory" value={formData.productcategory} onChange={handleChange}>
              {loading ? (
                <option value="">Loading...</option>
              ) : error ? (
                <option value="">Error</option>
              ) : (
                <>
                  {data.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })}
                </>
              )}
            </select>
          </div>

          {/* Text */}
          <div className="mb-5 px-6 flex justify-start items-center mt-2">
            <input
              name="isbestseller" checked={formData.isbestseller} onChange={handleChange}
              type="checkbox"
              id="isbestseller"
              className="w-[19px] h-[19px]"
              
            />
            <label
              htmlFor="checkbox"
              className="block mb-2 ms-2 text-md font-medium mt-2 text-white"
            >
              bestseller
            </label>
          </div>

          {/* Login Button */}
          <div className="flex justify-end items-center mt-2">
            <button
              type="submit"
              className="w-[150px] h-[40px] bg-blue-500 text-white hover:bg-blue-400 font-medium rounded-3xl me-4"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
