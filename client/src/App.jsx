import { Route, Routes } from "react-router-dom";

// Routes
import HomePage from "./Pages/HomePage";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductDetail from "./Pages/ProductDetail";
import Profile from "./Pages/Profile";
import PaymentPage from "./Pages/PaymentPage";
import Products from "./Pages/Products";
import Deneme from "./Pages/Deneme";
import AdminPanel from "./Pages/AdminPanel";
import Computers from "./Pages/Computers";
import Phones from "./Pages/Phones";
import Tablets from "./Pages/Tablets";
import Monitors from "./Pages/Monitors";
import Accessories from "./Pages/Accessories";
import Electronics from "./Pages/Electronics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/Computers" element={<Computers/>} />
        <Route path="/Phones" element={<Phones />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/Monitors" element={<Monitors />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/deneme" element={<Deneme />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
