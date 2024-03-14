import React, { useState, useEffect } from "react";
import Header from "../Components/Header";

import axios from "axios";

const Deneme = () => {

  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "", 
    isokey : false,
  });  


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setRegisterData({ ...registerData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', registerData);
      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };


  // const [formData, setFormData] = useState({
  //   categoryname: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     await axios.post("http://127.0.0.1:5000/category/create", formData);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Post error:", error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <Header />

      <div className="w-[600px] h-[700px] bg-blue-300 ms-[500px] mt-[50px] flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col" >
          <input type="text" name="firstname" value={registerData.firstname} onChange={handleChange} />
          <input type="text" name="lastname" value={registerData.lastname} onChange={handleChange} />
          <input type="email" name="email" value={registerData.email} onChange={handleChange} />
          <input type="text" name="username" value={registerData.username} onChange={handleChange} />
          <input type="password" name="password" value={registerData.password} onChange={handleChange} />
          <input type="password" name="confirmpassword" value={registerData.confirmpassword} onChange={handleChange} />
          <input type="checkbox" name="isokey" id="isokey" checked={registerData.isokey} onChange={handleChange} />
          <button type="submit" >
            Submit
          </button>
        </form>
        
      </div>
    </>
  );
};

export default Deneme;
