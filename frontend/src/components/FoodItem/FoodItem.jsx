import React, { useContext, useState, useEffect } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [isTooltipVisible, setTooltipVisible] = useState(true);
  const [isItemAdded, setItemAdded] = useState(cartItems?.[id] > 0); // Initialize based on current cart state

  useEffect(() => {
    if (cartItems?.[id] > 0) {
      setItemAdded(true);
    } else {
      setItemAdded(false);
    }
  }, [cartItems, id]);

  const handleAddToCart = (id) => {
    console.log('handleAddToCart called for id:', id);
    if (cartItems[id] < 20) {
      addToCart(id);
      setTooltipVisible(false); // Optionally, hide tooltip
      console.log('Added item to cart. Updated cartItems:', cartItems); // Debug after adding
    }
  };

  const handleRemoveFromCart = (id) => {
    console.log('handleRemoveFromCart called for id:', id);
    removeFromCart(id);
    setTooltipVisible(true); // Show tooltip when item is removed
    console.log('Removed item from cart. Updated cartItems:', cartItems); // Debug after removing
  };

  console.log('Rendering FoodItem component. isItemAdded:', isItemAdded); // Debug rendering state

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
          <p>{name || 'Unnamed Item'}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description || 'No description available.'}</p>
        <p className="food-item-category">Category: {category || 'Category not available'}</p>
        <p className="food-item-price">{price ? `$${price}` : 'Price not available'}</p>

        {!isItemAdded && (
          <div className="add-to-cart-btn" onClick={() => handleAddToCart(id)}>
            Add to Cart
          </div>
        )}

        {isItemAdded && (
          <div className="food-item-counter">
            <a
              href="/cart"
              className="item-added-message"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src={assets.basket_icon}
                alt="Cart"
                className="cart-icon"
                style={{ marginRight: '5px' }}
              />
              Go to Basket
            </a>
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
              style={{ cursor: cartItems[id] >= 20 ? 'not-allowed' : 'pointer' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
