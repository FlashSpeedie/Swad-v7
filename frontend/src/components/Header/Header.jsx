import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="header-contents">
        <h2>
          Elevate Your <span className="highlight-green">Dining Experience!</span>
        </h2>
        <p>
          Choose from our extensive menu of <span className="highlight-green">delicious vegetarian dishes</span>, each one expertly prepared with 
          <span className="highlight-green"> fresh ingredients</span>. We’re dedicated to bringing you 
          <span className="highlight-green"> flavors</span> that inspire and satisfy.
        </p>
        <button onClick={() => window.location.href = '/menu'}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
