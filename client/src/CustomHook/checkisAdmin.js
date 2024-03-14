import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const isAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const checkAdmin = async (request, response) => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigator("/");
      }
      const decodedToken = jwtDecode(token);
      if (!decodedToken.isAdmin) {
        navigator("/");
      }
      setIsAdmin(true)
    };
    checkAdmin();
  },[]);

  return {isAdmin};
};
export default isAdmin;

