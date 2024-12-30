import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo-container">
        <img src={assets.logo} alt="Logo" className="navbar-logo" />
        <div>
          <p className="navbar-logo-text">Swad</p>
          <p className="navbar-admin-text">Admin</p>
        </div>
      </div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
