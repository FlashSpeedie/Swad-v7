// FoodItem.jsx
import React, { useContext, useState, useEffect } from 'react';
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
  { name: "Jennifer A.", stars: 5, text: "Consistently excellent. I've never had a bad meal here." },
  { name: "Dwayne J.", stars: 4, text: "Good for both dine-in and takeout. The staff is friendly." },
  { name: "Meryl S.", stars: 5, text: "The flavors are so unique and well-balanced. A culinary delight." },
  { name: "Leonardo D.", stars: 4, text: "Nice ambiance and great food. I'll definitely be back." },
  { name: "Nicole K.", stars: 5, text: "The desserts are as amazing as the main courses. Save room for them!" },
  { name: "Robert D.", stars: 4, text: "A solid choice for vegetarians. The menu is extensive." },
  { name: "Julia R.", stars: 5, text: "The service is outstanding. They make you feel right at home." },
  { name: "Chris H.", stars: 4, text: "Good location and easy to get to. The food is consistently good." },
  { name: "Natalie P.", stars: 5, text: "The freshness of the ingredients shines through in every dish." },
  { name: "Barack O.", stars: 4, text: "Enjoyed the meal, but the portions could be larger." },
  { name: "Michelle O.", stars: 5, text: "A wonderful dining experience. The staff is very attentive." },
  { name: "George C.", stars: 4, text: "A bit crowded, but the food is worth the wait." },
  { name: "Taylor S.", stars: 5, text: "The avocado toast is a must-try! So flavorful and fresh." },
  { name: "Ryan R.", stars: 4, text: "Great spot for a healthy lunch. The salads are excellent." },
  { name: "Adele A.", stars: 5, text: "The vegan curry was out of this world. Highly recommend!" },
  { name: "Tom H.", stars: 4, text: "Nice atmosphere and friendly staff. Food was good." },
  { name: "Emma S.", stars: 5, text: "The quinoa bowl was delicious and filling. Will be back!" },
  { name: "Chris E.", stars: 4, text: "Good vegetarian options, but a bit pricey." },
  { name: "Jennifer L.", stars: 5, text: "The smoothies are amazing! Perfect for a healthy treat." },
  { name: "David B.", stars: 4, text: "Enjoyed the food, but the service was a bit slow." },
  { name: "Angelina J.", stars: 5, text: "The best vegetarian pizza I've ever had!" },
  { name: "Will S.", stars: 4, text: "Great for a casual meal. The wraps are tasty." },
  { name: "Scarlett J.", stars: 5, text: "The ambiance is lovely and the food is fantastic." },
  { name: "Brad P.", stars: 4, text: "Good food, but the parking is a bit difficult." },
  { name: "Jennifer A.", stars: 5, text: "Consistently delicious food and great service." },
  { name: "Dwayne J.", stars: 4, text: "Good for takeout. The portions are generous." },
  { name: "Meryl S.", stars: 5, text: "The flavors are incredible. A true culinary experience." },
  { name: "Leonardo D.", stars: 4, text: "Nice place for a date. The atmosphere is romantic." },
  { name: "Nicole K.", stars: 5, text: "The desserts are to die for! So delicious." },
  { name: "Robert D.", stars: 4, text: "A good choice for vegetarians. Wide variety of dishes." },
  { name: "Julia R.", stars: 5, text: "The service is exceptional. Highly recommend this place." },
  { name: "Chris H.", stars: 4, text: "Convenient location and good food. Will visit again." },
  { name: "Natalie P.", stars: 5, text: "The freshness of the ingredients is evident in every bite." },
  { name: "Barack O.", stars: 4, text: "Enjoyed the meal, but the noise level was a bit high." },
  { name: "Michelle O.", stars: 5, text: "A fantastic dining experience. The staff is very friendly." },
  { name: "George C.", stars: 4, text: "A bit crowded, but the food is worth the wait." },
  { name: "Sarah M.", stars: 5, text: "The lentil soup is amazing! So comforting and flavorful." },
  { name: "Michael B.", stars: 4, text: "Good vegetarian burgers. The fries are also great." },
  { name: "Jessica P.", stars: 5, text: "The pasta primavera was delicious. Highly recommended." },
  { name: "Kevin H.", stars: 4, text: "Nice atmosphere, but the lighting was a bit dim." },
  { name: "Amanda R.", stars: 5, text: "The veggie tacos are incredible! So fresh and tasty." },
  { name: "Brian L.", stars: 4, text: "Good food, but the prices are a bit high." },
  { name: "Stephanie W.", stars: 5, text: "The salads are always fresh and delicious." },
  { name: "Jason D.", stars: 4, text: "Enjoyed the meal, but the service was a bit slow." },
  { name: "Rebecca G.", stars: 5, text: "The best vegetarian chili I've ever had!" },
  { name: "Eric S.", stars: 4, text: "Great for a quick lunch. The wraps are very tasty." },
  { name: "Kimberly J.", stars: 5, text: "The ambiance is wonderful and the food is excellent." },
  { name: "Andrew P.", stars: 4, text: "Good food, but the parking is a bit challenging." },
  { name: "Elizabeth A.", stars: 5, text: "Consistently delicious food and great service." },
  { name: "Christopher D.", stars: 4, text: "Good for takeout. The portions are very generous." },
  { name: "Michelle S.", stars: 5, text: "The flavors are amazing. A true culinary delight." },
  { name: "Daniel L.", stars: 4, text: "Nice place for a date. The atmosphere is romantic." },
  { name: "Emily R.", stars: 5, text: "The stuffed bell peppers were amazing! So flavorful." },
  { name: "Jacob M.", stars: 4, text: "Good vegetarian options, but the menu could be more diverse." },
  { name: "Sophia L.", stars: 5, text: "The vegan chocolate cake is a must-try! Absolutely divine." },
  { name: "Ethan C.", stars: 4, text: "Nice ambiance and friendly staff. Food was good overall." },
  { name: "Olivia P.", stars: 5, text: "The Buddha bowl was delicious and filling. Will definitely return." },
  { name: "Alexander K.", stars: 4, text: "Good for a healthy meal, but a bit pricey." },
  { name: "Isabella G.", stars: 5, text: "The fresh juices are amazing! Perfect for a refreshing treat." },
  { name: "William D.", stars: 4, text: "Enjoyed the food, but the service was a bit slow and inattentive." },
  { name: "Mia S.", stars: 5, text: "The best vegetarian sushi I've ever had!" },
  { name: "James F.", stars: 4, text: "Great for a casual meal. The sandwiches are very tasty." },
  { name: "Charlotte H.", stars: 5, text: "The atmosphere is lovely and the food is outstanding." },
  { name: "Benjamin P.", stars: 4, text: "Good food, but the parking situation is a bit difficult." },
  { name: "Amelia A.", stars: 5, text: "Consistently delicious food and excellent service." },
  { name: "Henry J.", stars: 4, text: "Good for takeout. The portions are quite generous." },
  { name: "Evelyn S.", stars: 5, text: "The flavors are incredible. A true culinary experience." },
  { name: "Michael D.", stars: 4, text: "Nice place for a date. The atmosphere is quite romantic." },
  { name: "Abigail K.", stars: 5, text: "The desserts are to die for! So incredibly delicious." },
  { name: "Daniel R.", stars: 4, text: "A good choice for vegetarians. Wide variety of dishes." },
  { name: "Madison R.", stars: 5, text: "The service is exceptional. Highly recommend this establishment." },
  { name: "David H.", stars: 4, text: "Convenient location and good food. Will definitely visit again." },
  { name: "Emily P.", stars: 5, text: "The freshness of the ingredients is evident in every single bite." },
  { name: "Joseph O.", stars: 4, text: "Enjoyed the meal, but the noise level was a bit too high." },
  { name: "Chloe O.", stars: 5, text: "A fantastic dining experience. The staff is incredibly friendly." },
  { name: "Andrew C.", stars: 4, text: "A bit crowded, but the food is absolutely worth the wait." },
  { name: "Grace T.", stars: 5, text: "The roasted vegetable medley was superb! So flavorful." },
  { name: "Samuel B.", stars: 4, text: "Good vegetarian burgers. The sweet potato fries are also great." },
  { name: "Lily P.", stars: 5, text: "The spinach and ricotta cannelloni was delicious. Highly recommend." },
  { name: "Owen H.", stars: 4, text: "Nice atmosphere, but the lighting was a bit too dim for my liking." },
  { name: "Ella R.", stars: 5, text: "The black bean burgers are incredible! So fresh and tasty." },
  { name: "Gabriel L.", stars: 4, text: "Good food, but the prices are a bit on the higher side." },
  { name: "Scarlett W.", stars: 5, text: "The salads are always fresh, crisp, and delicious." },
  { name: "Nathan D.", stars: 4, text: "Enjoyed the meal, but the service was a bit slow and inattentive." },
  { name: "Aria G.", stars: 5, text: "The best vegetarian chili I've ever had in my life!" },
  { name: "Ryan S.", stars: 4, text: "Great for a quick lunch. The wraps are very, very tasty." },
  { name: "Hazel J.", stars: 5, text: "The ambiance is wonderful, and the food is simply excellent." },
  { name: "Adam P.", stars: 4, text: "Good food, but the parking situation is a bit challenging." },
  { name: "Eleanor A.", stars: 5, text: "Consistently delicious food and excellent service." },
  { name: "Isaac D.", stars: 4, text: "Good for takeout. The portions are quite generous." },
  { name: "Luna S.", stars: 5, text: "The flavors are truly amazing. A true culinary delight." },
  { name: "Jack L.", stars: 4, text: "Nice place for a date. The atmosphere is quite romantic." },
  { name: "Zoey K.", stars: 5, text: "The desserts are to die for! So incredibly delicious." },
  { name: "Caleb R.", stars: 4, text: "A good choice for vegetarians. Wide variety of dishes." },
  { name: "Penelope R.", stars: 5, text: "The service is exceptional. Highly recommend this establishment." },
  { name: "Matthew H.", stars: 4, text: "Convenient location and good food. Will definitely visit again." },
  { name: "Victoria P.", stars: 5, text: "The freshness of the ingredients is evident in every single bite." },
  { name: "Joseph O.", stars: 4, text: "Enjoyed the meal, but the noise level was a bit too high." },
  { name: "Audrey O.", stars: 5, text: "A fantastic dining experience. The staff is incredibly friendly." },
  { name: "Andrew C.", stars: 4, text: "A bit crowded, but the food is absolutely worth the wait." },
  { name: "Sebastian V.", stars: 5, text: "The stuffed portobello mushrooms were divine!" },
  { name: "Aurora Y.", stars: 4, text: "Great for a healthy brunch.  The avocado toast is top-notch." },
  { name: "Theodore X.", stars: 5, text: "The vegan paella was an explosion of flavor.  Highly recommended." },
  { name: "Hazel W.", stars: 4, text: "Nice and cozy atmosphere.  Food was tasty and well-prepared." },
  { name: "Finn U.", stars: 5, text: "The lentil soup was incredibly comforting and satisfying." },
  { name: "Nova Q.", stars: 4, text: "Good options, but the service could be a bit more attentive." },
  { name: "Jasper Z.", stars: 5, text: "The raw vegan cheesecake was a revelation!  So creamy and delicious." },
  { name: "Ivy T.", stars: 4, text: "Enjoyed the meal, but the portions were a little on the smaller side." },
  { name: "Silas S.", stars: 5, text: "The best vegetarian tacos I've ever had.  Full of flavor!" },
  { name: "Willow R.", stars: 4, text: "Great spot for a casual lunch.  The salads are fresh and vibrant." },
  { name: "Atticus N.", stars: 5, text: "The ambiance is perfect for a relaxed dinner.  Food is superb." },
  { name: "Clara O.", stars: 4, text: "Good food, but parking can be a bit of a challenge." },
  { name: "Milo P.", stars: 5, text: "Consistently excellent food and friendly, attentive service." },
  { name: "Phoebe M.", stars: 4, text: "Good for takeout.  The orders are always accurate and ready quickly." },
  { name: "Leo L.", stars: 5, text: "The flavors are truly exceptional.  A must-visit for vegetarians." },
  { name: "Hazel K.", stars: 4, text: "Nice place for a date.  The lighting and atmosphere are very romantic." },
  { name: "Oscar J.", stars: 5, text: "The desserts are simply divine!  Make sure to save some room." },
  { name: "Violet I.", stars: 4, text: "A solid choice for vegetarian dining.  A wide variety of options." },
  { name: "Felix H.", stars: 5, text: "The service is outstanding.  The staff are friendly and knowledgeable." },
  { name: "Luna G.", stars: 4, text: "Convenient location and consistently good food.  Highly recommended." },
  { name: "Theodore F.", stars: 5, text: "The freshness of the ingredients is evident in every single dish." },
  { name: "Eleanor E.", stars: 4, text: "Enjoyed the meal, but the noise level was a bit high for my liking." },
  { name: "Sebastian D.", stars: 5, text: "A fantastic dining experience.  The staff are incredibly welcoming." },
  { name: "Penelope C.", stars: 4, text: "A bit crowded, but the food is definitely worth the wait." },
  { name: "Arthur B.", stars: 5, text: "The mushroom risotto was cooked to perfection!" },
  { name: "Genevieve A.", stars: 4, text: "Good for a healthy brunch. The smoothies are delicious." },
  { name: "Henry Z.", stars: 5, text: "The vegan lasagna was rich, flavorful, and satisfying." },
  { name: "Clara Y.", stars: 4, text: "Nice and cozy atmosphere. Food was tasty and well-prepared." },
  { name: "William X.", stars: 5, text: "The black bean soup was hearty and flavorful." },
  { name: "Alice W.", stars: 4, text: "Good options, but the service could be a bit more attentive." },
  { name: "Samuel V.", stars: 5, text: "The raw vegan chocolate tart was incredible!" },
  { name: "Grace U.", stars: 4, text: "Enjoyed the meal, but the portions were a little small." },
  { name: "Isaac T.", stars: 5, text: "The best vegetarian tacos I've ever had!" },
  { name: "Olivia S.", stars: 4, text: "Great spot for a casual lunch. The salads are fresh and vibrant." },
  { name: "Owen R.", stars: 5, text: "The ambiance is perfect for a relaxed dinner. Food is superb." },
  { name: "Nora Q.", stars: 4, text: "Good food, but parking can be a bit of a challenge." },
  { name: "Jasper P.", stars: 5, text: "Consistently excellent food and friendly, attentive service." },
  { name: "Luna O.", stars: 4, text: "Good for takeout. The orders are always accurate and ready quickly." },
  { name: "Finn N.", stars: 5, text: "The flavors are truly exceptional. A must-visit for vegetarians." },
  { name: "Hazel M.", stars: 4, text: "Nice place for a date. The lighting and atmosphere are very romantic." },
  { name: "Milo L.", stars: 5, text: "The desserts are simply divine! Make sure to save some room." },
  { name: "Clara K.", stars: 4, text: "A solid choice for vegetarian dining. A wide variety of options." },
  { name: "Atticus J.", stars: 5, text: "The service is outstanding. The staff are friendly and knowledgeable." },
  { name: "Willow I.", stars: 4, text: "Convenient location and consistently good food. Highly recommended." },
  { name: "Silas H.", stars: 5, text: "The freshness of the ingredients is evident in every single dish." },
  { name: "Ivy G.", stars: 4, text: "Enjoyed the meal, but the noise level was a bit high for my liking." },
  { name: "Nova F.", stars: 5, text: "A fantastic dining experience. The staff are incredibly welcoming." },
  { name: "Theodore E.", stars: 4, text: "A bit crowded, but the food is definitely worth the wait." },
  { name: "Aurora D.", stars: 5, text: "The spinach and artichoke dip was heavenly!" },
  { name: "Sebastian C.", stars: 4, text: "Great for a healthy brunch. The avocado toast is a must-try." },
  { name: "Genevieve B.", stars: 5, text: "The vegan curry was bursting with flavor and perfectly spiced." },
  { name: "Arthur A.", stars: 4, text: "Nice and cozy atmosphere. The food was well-prepared and tasty." },
  { name: "Penelope Z.", stars: 5, text: "The lentil soup was incredibly comforting and satisfying." },
  { name: "Liam H.", stars: 5, text: "The best vegetarian restaurant I've ever been to. The food is amazing!" },
  { name: "Olivia K.", stars: 4, text: "Great food and service. Highly recommend this place." },
  { name: "Noah M.", stars: 5, text: "The vegan options are delicious. I will definitely be back!" },
  { name: "Emma S.", stars: 4, text: "Nice atmosphere and friendly staff. Good food overall." },
  { name: "Oliver R.", stars: 5, text: "The salads are always fresh and tasty. A great choice for lunch." },
  { name: "Ava W.", stars: 4, text: "Good vegetarian dishes, but the prices are a bit high." },
  { name: "Elijah C.", stars: 5, text: "The smoothies are fantastic! Perfect for a healthy treat." },
  { name: "Sophia L.", stars: 4, text: "Enjoyed the food, but the service was a little slow." },
  { name: "William P.", stars: 5, text: "The best vegetarian pizza I've ever had. Highly recommend!" },
  { name: "Isabella G.", stars: 4, text: "Great for a casual meal. The wraps are very tasty and filling." },
  { name: "James F.", stars: 5, text: "The ambiance is lovely and the food is outstanding. A must-visit!" },
  { name: "Mia D.", stars: 4, text: "Good food, but the parking can be a bit challenging." },
  { name: "Benjamin O.", stars: 5, text: "Consistently delicious food and excellent service. Top-notch!" },
  { name: "Charlotte A.", stars: 4, text: "Good for takeout. The portions are quite generous and satisfying." },
  { name: "Lucas I.", stars: 5, text: "The flavors are incredible. A true culinary experience. Highly recommended!" },
  { name: "Amelia B.", stars: 4, text: "Nice place for a date. The atmosphere is romantic and inviting." },
  { name: "Henry V.", stars: 5, text: "The desserts are to die for! So delicious and decadent." },
  { name: "Evelyn T.", stars: 4, text: "A good choice for vegetarians. Wide variety of dishes to choose from." },
  { name: "Samuel N.", stars: 5, text: "The service is exceptional. Highly recommend this place for a great meal." },
  { name: "Abigail Y.", stars: 4, text: "Convenient location and good food. Will definitely visit again soon." },
  { name: "David E.", stars: 5, text: "The freshness of the ingredients is evident in every single bite. Superb!" },
  { name: "Harper R.", stars: 4, text: "Enjoyed the meal, but the noise level was a bit high for my liking." },
  { name: "Joseph U.", stars: 5, text: "A fantastic dining experience. The staff is incredibly friendly and welcoming." },
  { name: "Theodore Q.", stars: 4, text: "A bit crowded, but the food is absolutely worth the wait. Highly recommend!" },
  { name: "Sofia X.", stars: 5, text: "The stuffed bell peppers were amazing! So flavorful and perfectly cooked." },
  { name: "Jackson Z.", stars: 4, text: "Good vegetarian burgers. The sweet potato fries are also great and crispy." },
  { name: "Ella J.", stars: 5, text: "The spinach and ricotta cannelloni was delicious. Highly recommended dish!" },
  { name: "Sebastian G.", stars: 4, text: "Nice atmosphere, but the lighting was a bit too dim for a perfect ambiance." },
  { name: "Aria K.", stars: 5, text: "The black bean burgers are incredible! So fresh, tasty, and satisfying." },
  { name: "Owen F.", stars: 4, text: "Good food, but the prices are a bit on the higher side. Worth it though." },
  { name: "Lily P.", stars: 5, text: "The salads are always fresh, crisp, and delicious. A healthy choice!" },
  { name: "Nathan B.", stars: 4, text: "Enjoyed the meal, but the service was a bit slow and inattentive at times." },
  { name: "Grace H.", stars: 5, text: "The best vegetarian chili I've ever had in my entire life! Amazing!" },
  { name: "Ryan T.", stars: 4, text: "Great for a quick lunch. The wraps are very, very tasty and convenient." },
  { name: "Chloe N.", stars: 5, text: "The ambiance is wonderful, and the food is simply excellent. Top-notch!" },
  { name: "Adam L.", stars: 4, text: "Good food, but the parking situation is a bit challenging to navigate." },
  { name: "Eleanor Y.", stars: 5, text: "Consistently delicious food and excellent service. Highly recommend it!" },
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
      {showReviews && <ReviewModal reviews={reviews} onClose={closeReviews} />}
    </>
  );
};

export default FoodItem;
