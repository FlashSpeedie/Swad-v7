import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken, url } = useContext(StoreContext);
  const [menu, setMenu] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("menu")) setMenu("Menu");
    else if (currentPath.includes("reserve")) setMenu("Reservation");
    else if (currentPath.includes("contact")) setMenu("Contact Us");
    else if (currentPath.includes("reference")) setMenu("Reference Page");
    else if (currentPath.includes("ai-swad")) setMenu("AI - Swad");
    else setMenu("Home");
  }, [location]);

  useEffect(() => {
    const autoLogin = async () => {
      if (!token) {
        const autoLoginData = {
          email: "12345@gmail.com",
          password: "12345@gmail.com",
        };

        try {
          const response = await axios.post(`${url}/api/user/login`, autoLoginData);
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
          } else {
            console.error("Auto-login failed:", response.data.message || "Unknown error");
          }
        } catch (error) {
          console.error("Auto-login error:", error.message || error);
        }
      }
    };

    autoLogin();
  }, [token, setToken, url]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo-container">
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="navbar-logo" />
          </Link>
          <Link to="/">
            <p className="navbar-logo-text">Swad</p>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              onClick={() => setMenu("Home")}
              className={menu === "Home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/reserve"
              onClick={() => setMenu("Reservation")}
              className={menu === "Reservation" ? "active" : ""}
            >
              Table Reservation
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenu("Contact Us")}
              className={menu === "Contact Us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/reference"
              onClick={() => setMenu("Reference Page")}
              className={menu === "Reference Page" ? "active" : ""}
            >
              Reference Page
            </Link>
          </li>
          {/* <li>
            <Link
              to="/ai-swad"
              onClick={() => setMenu("AI - Swad")}
              className={menu === "AI - Swad" ? "active" : ""}
            >
              AI - Swad
            </Link>
          </li> */}
          

        </ul>
        <div className="navbar-right">
          <div className="navbar-cart-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Basket" className="navbar-cart-icon" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {/* {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" className="navbar-profile-icon" />
              <ul className="nav-profile-dropdown">
                {/* <li onClick={() => navigate("/contact")}>
                  <img src={assets.profile_icon} alt="" />
                  {/* <p>Profile</p>
                </li> </div>
                <hr />
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li> 
              </ul>
            </div>
          )} */}
          <div className="my-orders" onClick={() => navigate("/myorders")}>
            <img src={assets.bag_icon} alt="Basket" />
            <p>My Orders</p>
          </div>

        </div>
        <div className="navbar-hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={`navbar-sidebar ${sidebarOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleSidebar}>
          &times;
        </span>
        <ul>
          <li onClick={() => { navigate("/"); setMenu("Home"); }}>Home</li>
          <li onClick={() => { navigate("/reserve"); setMenu("Reservation"); }}>Table Reservation</li>
          <li onClick={() => { navigate("/contact"); setMenu("Contact Us"); }}>Contact Us</li>
          <li onClick={() => { navigate("/reference"); setMenu("Reference Page"); }}>Reference Page</li>
          <li onClick={() => { navigate("/ai-swad"); setMenu("AI - Swad"); }}>AI - Swad</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
