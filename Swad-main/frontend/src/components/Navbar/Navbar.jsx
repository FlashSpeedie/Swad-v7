import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const {getTotalCartAmount,token,setToken} =useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <div className="navbar-logo-container">
      <Link to ='/'><img src={assets.logo} alt="Logo" className="navbar-logo" /></Link>

      <Link to ='/'><p className="navbar-logo-text">Swad</p></Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link to='/menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</Link>
        </li>
        <li>
          <Link to='/reserve' onClick={() => setMenu("Reservation")} className={menu === "Reservation" ? "active" : ""}>Table Reservation</Link>
        </li>
        <li>
          <Link to='/contact' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</Link>
        </li>
        
      </ul>

      <div className="navbar-right">
        <div className="navbar-cart-icon">
        <Link to ='/cart'><img src={assets.basket_icon} alt="Basket" className="navbar-cart-icon"/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" className="navbar-profile-icon" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/contact')} src={assets.profile_icon}><img src={assets.profile_icon} alt="" /><p>Profile</p></li>
              <hr />
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
        
      </div>
    </div>
  );
};

export default Navbar;