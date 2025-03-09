import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='navbar'>
      <div className="navbar-logo-container">
        <img src={assets.logo} alt="Logo" className="navbar-logo" />
        <div>
          <p className="navbar-logo-text">Swad</p>
          <p className="navbar-admin-text">Admin</p>
        </div>
      </div>
      <div className="navbar-menu">
        <a href="/dashboard" className={`navbar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</a>
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
