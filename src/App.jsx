import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "../src/pages/login/Login";
import SignUp from "../src/pages/signUp/SignUp";
import Profile from "../src/pages/profile/Profile";
import OrderHistory from "./pages/oderHistory/OrderHistory";
import Checkout from "./pages/checkout/Checkout";
import ContactUs from "./pages/contactUs/ContactUs";
import Cylinder from "./pages/cylinder/Cylinder";
import Pay_deposit from "./pages/pay_deposit/Pay_deposit";
import BottomBar from "./components/bottomBar/BottomBar";
import Order from "./pages/order/Order";
import ScrollToTop from "./utils/scrollToTop";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cylinder" element={<Cylinder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/pay-deposit" element={<Pay_deposit />} />
      </Routes>
      <BottomBar />
    </Router>
  );
}

export default App;
