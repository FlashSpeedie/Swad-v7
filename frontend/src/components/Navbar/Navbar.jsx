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
    else if (currentPath.includes("locations")) setMenu("Locations");
    else if (currentPath.includes("reference")) setMenu("Reference Page");
    else if (currentPath.includes("ai-swad")) setMenu("AI - Swad");
    else setMenu("Home");
  }, [location]);

  // Commented out auto-login functionality

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
              Book a Table
            </Link>
          </li>
          <li>
            <Link
              to="/locations"
              onClick={() => setMenu("Locations")}
              className={menu === "Locations" ? "active" : ""}
            >
              Locations
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
        </ul>
        <div className="navbar-right">
          <div className="navbar-cart-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Basket" className="navbar-cart-icon" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <div className="my-orders" onClick={() => navigate("/myorders")}>
            <img src={assets.bag_icon} alt="Basket" />
            <p>My Orders</p>
          </div>

          {/* {!token ? (
            <Link to="/user">
              <button className="signin-button">Sign In</button>
            </Link>
          ) : (
            <div className="logout-button" onClick={logout}>
              <img src={assets.logout_icon} alt="Logout" />
              <p>Logout</p>
            </div>
          )} */}
        </div>

        <div className="navbar-hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={`navbar-sidebar ${sidebarOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleSidebar}>&times;</span>
        <ul>
          <li onClick={() => { navigate("/"); setMenu("Home"); toggleSidebar(); }}>Home</li>
          <li onClick={() => { navigate("/reserve"); setMenu("Reservation"); toggleSidebar(); }}>Table Reservation</li>
          <li onClick={() => { navigate("/locations"); setMenu("Locations"); toggleSidebar(); }}>Locations</li>
          <li onClick={() => { navigate("/reference"); setMenu("Reference Page"); toggleSidebar(); }}>Reference Page</li>
          <li onClick={() => { navigate("/myorders"); setMenu("My Orders"); toggleSidebar(); }}>My Orders</li>
          {/* {!token ? (
            <li onClick={() => { navigate("/user"); setMenu("Sign In"); toggleSidebar(); }}>Sign In</li>
          ) : (
            <li onClick={() => { logout(); setMenu("Logout"); toggleSidebar(); }}>Logout</li>
          )} */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
