import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext); 

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={image ? image : assets.fallback_image} 
          alt={name || "Food Item"}
          className="food-item-image"
        />

        {!cartItems?.[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white}
            alt="Add item"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} 
              src={assets.remove_icon_red}
              alt="Remove item"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green}
              alt="Add item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name || "Unnamed Item"}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description || "No description available."}</p>
        <p className="food-item-price">{price ? `$${price}` : "Price not available"}</p>
      </div>
    </div>
  );
};

export default FoodItem;
