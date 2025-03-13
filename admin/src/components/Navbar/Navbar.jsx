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
          <p className="navbar-logo-text">Swad</p>
          <p className="navbar-admin-text">Admin</p>
        </div>
      </div>
      
      <div className="navbar-hamburger" onClick={toggleMenu}></div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
        <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
        <div className={`hamburger-bar ${isMenuOpen ? 'active' : ''}`} />
      </div>

      {/* Navbar Menu */}
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>Dashboard</a>
        <a href="/add" className={`navbar-item ${location.pathname === '/add-items' ? 'active' : ''}`}>Add Items</a>
        <a href="/list" className={`navbar-item ${location.pathname === '/list-items' ? 'active' : ''}`}>List Items</a>
        <a href="/orders" className={`navbar-item ${location.pathname === '/orders' ? 'active' : ''}`}>Orders</a>
        <a href="/sales" className={`navbar-item ${location.pathname === '/sales-report' ? 'active' : ''}`}>Sales Report</a>
        <a href="/message" className={`navbar-item ${location.pathname === '/messages' ? 'active' : ''}`}>Messages</a>
      </div>
    </div>
  );
};

export default Navbar;
