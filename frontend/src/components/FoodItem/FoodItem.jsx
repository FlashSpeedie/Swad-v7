import React, { useContext, useState, useEffect } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [isTooltipVisible, setTooltipVisible] = useState(true); // State to handle tooltip visibility
  const [isItemAdded, setItemAdded] = useState(false); // State to track if item is added to the cart

  useEffect(() => {
    // If the item is in the cart, show the "Item added" message
    if (cartItems?.[id] > 0) {
      setItemAdded(true);
    } else {
      setItemAdded(false);
    }
  }, [cartItems, id]);

  const handleAddToCart = (id) => {
    addToCart(id);
    setTooltipVisible(false); // Hide tooltip when item is added
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={image ? image : assets.fallback_image} 
          alt={name || "Food Item"}
          className="food-item-image"
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name || "Unnamed Item"}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description || "No description available."}</p>
        <p className="food-item-category">Category: {category || "Category not available"}</p>
        <p className="food-item-price">{price ? `$${price}` : "Price not available"}</p>
        
        { !isItemAdded && (
          <div
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(id)}
          >
            Add to Cart
          </div>
        )}

        { isItemAdded && (
          <div className="food-item-counter">
            <div className="item-added-message">✔ Item added to the basket</div>
            <img
              onClick={() => handleRemoveFromCart(id)} 
              src={assets.remove_icon_red}
              alt="Remove item"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => handleAddToCart(id)} 
              src={assets.add_icon_green}
              alt="Add item"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
