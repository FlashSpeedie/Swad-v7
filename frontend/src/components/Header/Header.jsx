import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="Header">
      <div className="header-image-container">
        <img className="top-left-decor" src={assets.dots_bg} alt="top-left-design" />
        <img className="header-main-img" src={assets.header_img} alt="header" />
        <img className="bottom-right-decor" src={assets.dots_bg} alt="bottom-right-design" />
      </div>
      <div className="header-contents">
        <h1>
          Elevate Your <span className="highlight-green">Dining Experience!</span>
        </h1>
        <p>
          Choose from our extensive menu of delicious vegetarian dishes, each one expertly prepared with
          fresh ingredients. We’re dedicated to bringing you flavors that inspire and satisfy.
        </p>
        <button onClick={() => window.location.href = '#explore-menu'}>View Menu</button>
      </div>
    </div>

  );
};

export default Header;
