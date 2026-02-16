import React, { useContext, useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar align-items-center">
      <Link to="/">
        <img src={assets.logo} className="logo" alt=""></img>
      </Link>
      <ul className="navbar-menu ">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={`nav-link ${menu === "Home" ? "active" : ""} `}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={`nav-link ${menu === "Menu" ? "active" : ""}`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={`nav-link ${menu === "Mobile-app" ? "active" : ""}`}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-us")}
          className={`nav-link ${menu === "Contact-us" ? "active" : ""}`}
        >
          Contact-us
        </a>
      </ul>
      <div className="navbar-right d-flex">
        <img src={assets.search_icon}></img>
        <div className="navbar-search-icon position-relative">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon}></img>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dote"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sing in</button>
      </div>
    </div>
  );
};

export default Navbar;
