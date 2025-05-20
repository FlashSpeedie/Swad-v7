// FoodItem.jsx
import { useContext, useState, useEffect, useMemo } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const reviews = [
  { name: "Cristiano R.", stars: 5, text: "Best vegetarian food I've ever tasted! Absolutely delicious." },
  { name: "Serena W.", stars: 4, text: "Fresh ingredients and fantastic flavors. Highly recommend!" },
  { name: "Elon M.", stars: 3, text: "Good variety but some dishes could be spicier." },
  { name: "Emma W.", stars: 5, text: "Amazing experience, my go-to spot for healthy meals." },
  { name: "LeBron J.", stars: 4, text: "Really enjoyed the vegan options, very flavorful." },
  { name: "Oprah W.", stars: 5, text: "Incredible! The flavors are vibrant and the service is impeccable." },
  { name: "Tom H.", stars: 4, text: "Great food, but the restaurant was a bit noisy." },
  { name: "Angelina J.", stars: 5, text: "The best vegetarian lasagna I've ever had. A must-try!" },
  { name: "Will S.", stars: 4, text: "Delicious and healthy. Perfect for a guilt-free meal." },
  { name: "Scarlett J.", stars: 5, text: "The atmosphere is as wonderful as the food. Highly recommended." },
  { name: "Brad P.", stars: 4, text: "A bit pricey, but the quality of the food justifies it." },
];

// Generate emoji stars dynamically
const starEmojis = (count) => '⭐'.repeat(count) + '☆'.repeat(5 - count);

const ReviewModal = ({ reviews, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <div className="review-modal-overlay" onClick={onClose}>
      <div className="review-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup-close"
          onClick={onClose}
          aria-label="Close review modal"
        >
          &times;
        </button>
        <h2 className="review-modal-title">Reviews</h2>
        <div className="review-content">
          <p className="reviewer-name">{currentReview.name}</p>
          <p className="review-stars">{starEmojis(currentReview.stars)}</p>
          <p className="review-text">"{currentReview.text}"</p>
        </div>
      </div>
    </div>
  );
};

const FoodItem = ({ id, name, price, description, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [isItemAdded, setItemAdded] = useState(cartItems?.[id] > 0);
  const [showReviews, setShowReviews] = useState(false);

  // Pick 5 random reviews for each FoodItem instance
  const randomReviews = useMemo(() => {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }, [id]);

  useEffect(() => {
    setItemAdded(cartItems?.[id] > 0);
  }, [cartItems, id]);

  const handleAddToCart = (id) => {
    if ((cartItems[id] || 0) < 20) {
      addToCart(id);
    }
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const openReviews = () => setShowReviews(true);
  const closeReviews = () => setShowReviews(false);

  return (
    <>
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
            <img
              src={assets.rating_starts}
              alt="Rating stars"
              className="rating-stars"
              onClick={openReviews}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openReviews(); }}
              aria-label="Open reviews popup"
            />
          </div>
          <p className="food-item-desc">{description || 'No description available.'}</p>
          <p className="food-item-category">Category: {category || 'Category not available'}</p>
          <p className="food-item-list">
            {name?.toLowerCase().includes('vegan') || category === 'Specials' ? 'Vegan' : 'Vegetarian'}
          </p>

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
                style={{ cursor: cartItems[id] >= 20 ? 'not-allowed' : 'pointer' }}
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
      {showReviews && <ReviewModal reviews={randomReviews} onClose={closeReviews} />}
    </>
  );
};

export default FoodItem;
