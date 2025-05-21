import React, { useRef, useState, useEffect } from 'react';
import './ExploreMenu.css';
import { assets, menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null);
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(false);

  const scrollMenu = (direction) => {
    const scrollAmount = direction === 'right' ? 200 : -200;
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const updateScrollVisibility = () => {
    const menu = menuRef.current;
    if (menu) {
      const scrollLeft = menu.scrollLeft;
      const maxScrollLeft = menu.scrollWidth - menu.clientWidth;

      setScrollLeftVisible(scrollLeft > 5);
      setScrollRightVisible(scrollLeft < maxScrollLeft - 5);
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      updateScrollVisibility();
      menu.addEventListener('scroll', updateScrollVisibility);
    }

    window.addEventListener('resize', updateScrollVisibility);

    return () => {
      if (menu) menu.removeEventListener('scroll', updateScrollVisibility);
      window.removeEventListener('resize', updateScrollVisibility);
    };
  }, []);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Menu</h1>
      <div className="explore-menu-list-container">
        {scrollLeftVisible && (
          <div className="scroll-arrow left" onClick={() => scrollMenu('left')}>
            <div className="arrow-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 4L8 12L16 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}

        <div className="explore-menu-list-wrapper">
          <div className="explore-menu-list" ref={menuRef}>
            {menu_list.map((item, index) => (
              <div
                key={index}
                className="explore-menu-list-item"
                onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className={category === item.menu_name ? 'active' : ''}
                />
                <p>{item.menu_name}</p>
              </div>
            ))}
          </div>
        </div>

        {scrollRightVisible && (
          <div className="scroll-arrow right" onClick={() => scrollMenu('right')}>
            <div className="arrow-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 4L16 12L8 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <hr />
      <p className="explore-menu-text">
        * Select a category to view its items. Click again to view all.
      </p>
      <div className="key" style={{ display: 'flex', gap: '16px', marginTop: '8px', alignItems: 'center' }}>
        <div className="key-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={assets.vegetarian}
            alt="Vegetarian"
            style={{
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              width: '32px',
              height: '32px',
            }}
          />
          <span>Vegetarian</span>
        </div>
        <div className="key-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={assets.logo}
            alt="Vegan"
            style={{
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              width: '32px',
              height: '32px',
            }}
          />
          <span>Vegan</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
