import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbar-logo-container">
        <a href="/">
          <img src={assets.logo} alt="Logo" className="navbar-logo" />
        </a>
        <div>
          <a href="/" className="navbar-logo-text">Swad</a>
          <p className="navbar-admin-text">Admin</p>
        </div>
      </div>
      
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
        <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
        <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>Dashboard</a>
        <a href="/add" className={`navbar-item ${location.pathname === '/add' ? 'active' : ''}`}>Add Items</a>
        <a href="/list" className={`navbar-item ${location.pathname === '/list' ? 'active' : ''}`}>List Items</a>
        <a href="/orders" className={`navbar-item ${location.pathname === '/orders' ? 'active' : ''}`}>Orders</a>
        <a href="/message" className={`navbar-item ${location.pathname === '/message' ? 'active' : ''}`}>Messages</a>
      </div>
    </div>
  );
};

export default Navbar;
