import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'; // Import StoreContext

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext); // Use StoreContext

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} alt={`${name}`} className="food-item-image" />
        
        {!cartItems[id] ? (
          <img 
            className='add' 
            onClick={() => addToCart(id)} // Fix onClick: Wrap it in a function
            src={assets.add_icon_white} 
            alt="Add item" 
          />
        ) : (
          <div className='food-item-counter'>
            <img 
              onClick={() => removeFromCart(id)} // Fix onClick: Wrap it in a function
              src={assets.remove_icon_red} 
              alt="Remove item" 
            />
            <p>{cartItems[id]}</p>
            <img 
              onClick={() => addToCart(id)} // Fix onClick: Wrap it in a function
              src={assets.add_icon_green} 
              alt="Add item" 
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
