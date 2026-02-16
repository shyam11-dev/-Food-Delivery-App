import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPoput from "./Components/LoginPopup/LoginPoput";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPoput setShowLogin={setShowLogin} /> : <></>}
      <div className="container">
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
