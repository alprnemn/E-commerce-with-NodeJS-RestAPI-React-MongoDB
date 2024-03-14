import { jwtDecode } from "jwt-decode";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const useCheckToken = () => {

  const navigator = useNavigate();
  
  const {id} = useParams();

  const [_id,set_id] = useState(null);  
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [isAdmin,setIsAdmin] = useState(false)
  const [city, setCity] = useState(null);
  const [town, setTown] = useState(null);
  const [adress, setAdress] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userToken = localStorage.getItem("token");
        if (userToken) {
          const decodedUser = jwtDecode(userToken);
          setUser(decodedUser);
          set_id(decodedUser._id);
          setFirstname(decodedUser.firstname);
          setLastname(decodedUser.lastname);
          setEmail(decodedUser.email);
          setIsAdmin(decodedUser.isAdmin);
          setCity(decodedUser.city);
          setTown(decodedUser.town);
          setAdress(decodedUser.adress);
          if(decodedUser._id !== id){
            navigator("/")
          }
          
        }else{
          navigator("/")
        }
      } catch (error) {
        console.error("Invalid Token",error);
      }
    }
    fetchUser();
  },[]);

  return {user,firstname,lastname,email,isAdmin,city,town,adress};

};

export default useCheckToken;