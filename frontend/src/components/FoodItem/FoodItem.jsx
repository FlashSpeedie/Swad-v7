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
  { name: "Angelina J.", stars: 5, text: "The best vegetarian food I've ever had. A must-try!" },
  { name: "Will S.", stars: 4, text: "Delicious and healthy. Perfect for a guilt-free meal." },
  { name: "Scarlett J.", stars: 5, text: "The atmosphere is as wonderful as the food. Highly recommended." },
  { name: "Brad P.", stars: 4, text: "A bit pricey, but the quality of the food justifies it." },
  { "name": "Dwayne J.", "stars": 4, "text": "A solid spot with good options for various dietary needs." },
  { "name": "Beyoncé K.", "stars": 5, "text": "Consistently excellent quality. Their vegetarian dishes are particularly noteworthy." },
  { "name": "Ryan R.", "stars": 3, "text": "Decent food, a bit on the pricier side for the area." },
  { "name": "Taylor S.", "stars": 4, "text": "Enjoyable experience. They have clearly marked vegan choices." },
  { "name": "Zendaya C.", "stars": 5, "text": "A fantastic find for delicious vegetarian fare." },
  { "name": "Chris P.", "stars": 4, "text": "Fresh and flavorful. A good option if you're looking for lighter meals." },
  { "name": "Adele A.", "stars": 3, "text": "The food was okay, but didn't feel like great value for the price." },
  { "name": "Harry S.", "stars": 5, "text": "Impressed with the range and taste of their vegan offerings." },
  { "name": "Jennifer L.", "stars": 4, "text": "Another reliable restaurant with something for everyone." },
  { "name": "Leonardo D.", "stars": 5, "text": "Their vegetarian selection is creative and satisfying." },
  { "name": "Selena G.", "stars": 3, "text": "A mid-range priced restaurant with generally acceptable food." },
  { "name": "Timothée C.", "stars": 4, "text": "Happy to see a place with thoughtful vegan preparations." },
  { "name": "Olivia R.", "stars": 5, "text": "Always a pleasant dining experience here." },
  { "name": "Robert D. J.", "stars": 4, "text": "Enjoyed the unique flavors in their vegetarian dishes." },
  { "name": "Billie E.", "stars": 3, "text": "The cost was a little higher than expected for what we received." },
  { "name": "Dua L.", "stars": 5, "text": "They cater well to vegan diets, which is much appreciated." },
  { "name": "Simu L.", "stars": 4, "text": "A convenient spot with diverse options." },
  { "name": "Florence P.", "stars": 5, "text": "Their vegetarian options make meatless meals exciting." },
  { "name": "Shawn M.", "stars": 3, "text": "Good for a casual meal, but not particularly budget-friendly." },
  { "name": "Camila C.", "stars": 4, "text": "A welcome addition to the vegan scene." },
  { "name": "Idris E.", "stars": 4, "text": "A consistent performer in the local restaurant landscape." },
  { "name": "Anne H.", "stars": 5, "text": "Excellent vegetarian choices that are full of flavor." },
  { "name": "Keanu R.", "stars": 3, "text": "It was fine, but there are other places I prefer for the price." },
  { "name": "Lizzo L.", "stars": 5, "text": "Finally, a restaurant that understands and executes vegan dishes well." },
  { "name": "Tom H.", "stars": 4, "text": "A nice ambiance with varied offerings." },
  { "name": "Saoirse R.", "stars": 4, "text": "Their vegetarian dishes are creative and well-prepared." },
  { "name": "Michael B. J.", "stars": 3, "text": "A decent meal, but the prices seemed a bit inflated." },
  { "name": "Doja C.", "stars": 5, "text": "So happy with the vegan selections available here!" },
  { "name": "Oscar I.", "stars": 4, "text": "A great spot for a weekend meal." },
  { "name": "Margot R.", "stars": 5, "text": "The vegetarian options are satisfying and delicious." },
  { "name": "Bad Bunny", "stars": 3, "text": "Not the cheapest eats, but the quality is generally good." },
  { "name": "Anya T-J.", "stars": 4, "text": "They have good awareness of vegan needs and provide suitable options." },
  { "name": "Pedro P.", "stars": 4, "text": "A pleasant restaurant." },
  { "name": "Emma S.", "stars": 5, "text": "Their vegetarian dishes highlight fresh produce beautifully." },
  { "name": "Austin B.", "stars": 3, "text": "The portions were adequate, but the price point felt a little high." },
  { "name": "Megan T.", "stars": 5, "text": "A reliable place for flavorful vegan meals." },
  { "name": "Dev Patel", "stars": 4, "text": "A solid choice if you're in the area." },
  { "name": "Lupita N.", "stars": 4, "text": "Enjoyed the hearty and well-seasoned vegetarian choices." },
  { "name": "Joaquin P.", "stars": 3, "text": "It was an okay experience, but I've had better value elsewhere." },
  { "name": "Florence W.", "stars": 5, "text": "This restaurant is a gem for vegan diners." },
  { "name": "John L.", "stars": 4, "text": "A decent eatery." },
  { "name": "Cate B.", "stars": 5, "text": "Their vegetarian dishes are creative and delicious." },
  { "name": "Chris H.", "stars": 3, "text": "The prices are moderate, but not particularly budget-friendly." },
  { "name": "Zoe S.", "stars": 4, "text": "A good option for vegan food, with some interesting choices." },
  { "name": "Rami M.", "stars": 4, "text": "A reliable restaurant if you're in the north part of town." },
  { "name": "Naomi C.", "stars": 5, "text": "Their vegetarian offerings are fresh and full of flavor." },
  { "name": "Paul R.", "stars": 3, "text": "While the food was acceptable, the price didn't quite match the experience." },
  { "name": "Awkwafina", "stars": 5, "text": "Excellent vegan options that are clearly labeled and thoughtfully prepared." },
  { "name": "Mahershala A.", "stars": 4, "text": "Another good local find with diverse menu options." },
  { "name": "Brie L.", "stars": 4, "text": "Enjoyed the variety and quality of their vegetarian dishes." },
  { "name": "Daniel K.", "stars": 3, "text": "The food was decent, but felt a little overpriced for what it was." },
  { "name": "Issa R.", "stars": 5, "text": "A go-to spot for tasty vegan meals." },
  { "name": "Kumail N.", "stars": 4, "text": "Contributes positively to the vegetarian scene." },
  { "name": "Constance W.", "stars": 4, "text": "Their vegetarian dishes are both satisfying and flavorful." },
  { "name": "Daveed D.", "stars": 3, "text": "A mid-range restaurant that's okay if you're not on a tight budget." },
  { "name": "Jodie C.", "stars": 5, "text": "Always impressed with the innovative vegan options they offer." },
  { "name": "Oscar A.", "stars": 4, "text": "A convenient location with a good range of choices." },
  { "name": "Lashana L.", "stars": 5, "text": "Their vegetarian dishes are a celebration of fresh vegetables." },
  { "name": "Lakeith S.", "stars": 3, "text": "The food was alright, but the overall value proposition could be better." },
  { "name": "Ariana G.", "stars": 4, "text": "A solid choice for well-prepared vegan cuisine." },
  { "name": "Lin-Manuel M.", "stars": 4, "text": "A good restaurant option in the suburban areas." },
  { "name": "Stephanie H.", "stars": 5, "text": "The vegetarian dishes are hearty and packed with flavor." },
  { "name": "Yahya A-M. II", "stars": 3, "text": "Prices are a little steep for a regular meal." },
  { "name": "Sonequa M-G.", "stars": 5, "text": "A fantastic restaurant that truly caters to vegan preferences." },
  { "name": "Anthony M.", "stars": 4, "text": "A comfortable local spot with varied food options." },
  { "name": "Letitia W.", "stars": 4, "text": "Enjoyed the healthy and tasty vegetarian selections." },
  { "name": "Daniel C.", "stars": 3, "text": "The experience was average, and the price felt a bit high." },
  { "name": "Ruth N.", "stars": 5, "text": "Reliably good vegan food, a great asset to the dining scene." },
  { "name": "Colman D.", "stars": 4, "text": "A decent restaurant representing the local culinary scene." },
  { "name": "Regina K.", "stars": 5, "text": "Their vegetarian preparations are creative and delicious." },
  { "name": "Sterling K. B.", "stars": 3, "text": "Good food, but might be a bit expensive for some." },
  { "name": "Uzo A.", "stars": 4, "text": "They offer a good range of appealing vegan choices." },
  { "name": "Brian T.", "stars": 4, "text": "A solid neighborhood restaurant." },
  { "name": "Viola D.", "stars": 4, "text": "Enjoyed the flavorful and well-prepared vegetarian options." },
  { "name": "Mahershala A.", "stars": 3, "text": "The prices are not the lowest, but the quality is generally consistent." },
  { "name": "Angela B.", "stars": 5, "text": "A must-visit for anyone looking for excellent vegan food in the area." },
  { "name": "Jeffrey W.", "stars": 4, "text": "Another good addition to the diverse food scene." },
  { "name": "Octavia S.", "stars": 5, "text": "Their vegetarian dishes are fresh, vibrant, and delicious." },
  { "name": "Chiwetel E.", "stars": 3, "text": "It was an okay meal, but didn't quite feel worth the price." },
  { "name": "David O.", "stars": 4, "text": "A reliable option for tasty and satisfying vegan meals." },
];

const foodItemReviews = {
  "Spaghetti Aglio e Olio": [
    { name: "Cristiano R.", stars: 5, text: "Best vegetarian food I've ever tasted! Absolutely delicious." },
    { name: "Serena W.", stars: 4, text: "Fresh ingredients and fantastic flavors. Highly recommend!" },
  ],
  "Mediterranean Quinoa Salad": [
    { name: "Elon M.", stars: 3, text: "Good variety but some dishes could be spicier." },
    { name: "Emma W.", stars: 5, text: "Amazing experience, my go-to spot for healthy meals." },
  ],
  "Avocado Chickpea Salad": [
    { name: "LeBron J.", stars: 4, text: "Really enjoyed the vegan options, very flavorful." },
    { name: "Oprah W.", stars: 5, text: "Incredible! The flavors are vibrant and the service is impeccable." },
  ],
  "Grilled Veggie Caesar Salad": [
    { name: "Tom H.", stars: 4, text: "Great food, but the restaurant was a bit noisy." },
    { name: "Angelina J.", stars: 5, text: "The best vegetarian food I've ever had. A must-try!" },
  ],
  "Spinach and Apple Salad": [
    { name: "Will S.", stars: 4, text: "Delicious and healthy. Perfect for a guilt-free meal." },
    { name: "Scarlett J.", stars: 5, text: "The atmosphere is as wonderful as the food. Highly recommended." },
  ],
  "Roasted Beet and Goat Cheese Salad": [
    { name: "Brad P.", stars: 4, text: "A bit pricey, but the quality of the food justifies it." },
    { name: "Dwayne J.", stars: 4, text: "A solid spot with good options for various dietary needs." },
  ],
  "Vegan Sushi Rolls": [
    { name: "Beyoncé K.", stars: 5, text: "Consistently excellent quality. Their vegetarian dishes are particularly noteworthy." },
    { name: "Ryan R.", stars: 3, text: "Decent food, a bit on the pricier side for the area." },
  ],
  "Vegan Chocolate Mousse": [
    { name: "Taylor S.", stars: 4, text: "Enjoyable experience. They have clearly marked vegan choices." },
    { name: "Zendaya C.", stars: 5, text: "A fantastic find for delicious vegetarian fare." },
  ],
  "Grilled Veggie and Hummus Sandwich": [
    { name: "Chris P.", stars: 4, text: "Fresh and flavorful. A good option if you're looking for lighter meals." },
    { name: "Adele A.", stars: 3, text: "The food was okay, but didn't feel like great value for the price." },
  ],
  "Carrot Cake with Cream Cheese Frosting": [
    { name: "Harry S.", stars: 5, text: "Impressed with the range and taste of their vegan offerings." },
    { name: "Jennifer L.", stars: 4, text: "Another reliable restaurant with something for everyone." },
  ],
  "Penne Arrabbiata": [
    { name: "Leonardo D.", stars: 5, text: "Their vegetarian selection is creative and satisfying." },
    { name: "Selena G.", stars: 3, text: "A mid-range priced restaurant with generally acceptable food." },
  ],
  "Lentil and Vegetable Broth Soup": [
    { name: "Timothée C.", stars: 4, text: "Happy to see a place with thoughtful vegan preparations." },
    { name: "Olivia R.", stars: 5, text: "Always a pleasant dining experience here." },
  ],
  "Caprese Spring Rolls": [
    { name: "Robert D. J.", stars: 4, text: "Enjoyed the unique flavors in their vegetarian dishes." },
    { name: "Billie E.", stars: 3, text: "The cost was a little higher than expected for what we received." },
  ],
  "Vegetarian Egg Rolls": [
    { name: "Dua L.", stars: 5, text: "They cater well to vegan diets, which is much appreciated." },
    { name: "Simu L.", stars: 4, text: "A convenient spot with diverse options." },
  ],
  "Twin Tomato Tortilla Burritos": [
    { name: "Florence P.", stars: 5, text: "Their vegetarian options make meatless meals exciting." },
    { name: "Shawn M.", stars: 3, text: "Good for a casual meal, but not particularly budget-friendly." },
  ],
  "Chocolate Raspberry Layer Cake": [
    { name: "Camila C.", stars: 4, text: "A welcome addition to the vegan scene." },
    { name: "Idris E.", stars: 4, text: "A consistent performer in the local restaurant landscape." },
  ],
  "Lemon Hazelnut Pound Cake": [
    { name: "Anne H.", stars: 5, text: "Excellent vegetarian choices that are full of flavor." },
    { name: "Keanu R.", stars: 3, text: "It was fine, but there are other places I prefer for the price." },
  ],
  "Velvet Cream Cake with Berry Frosting": [
    { name: "Lizzo L.", stars: 5, text: "Finally, a restaurant that understands and executes vegan dishes well." },
    { name: "Tom H.", stars: 4, text: "A nice ambiance with varied offerings." },
  ],
  "Almond Joy Cake": [
    { name: "Saoirse R.", stars: 4, text: "Their vegetarian dishes are creative and well-prepared." },
    { name: "Michael B. J.", stars: 3, text: "A decent meal, but the prices seemed a bit inflated." },
  ],
  "Pesto Primavera": [
    { name: "Doja C.", stars: 5, text: "So happy with the vegan selections available here!" },
    { name: "Oscar I.", stars: 4, text: "A great spot for a weekend meal." },
  ],
  "Creamy Garlic Sauce Egg Noodles": [
    { name: "Margot R.", stars: 5, text: "The vegetarian options are satisfying and delicious." },
    { name: "Bad Bunny", stars: 3, text: "Not the cheapest eats, but the quality is generally good." },
  ],
  "Spicy Vietnamese Soup": [
    { name: "Anya T-J.", stars: 4, text: "They have good awareness of vegan needs and provide suitable options." },
    { name: "Pedro P.", stars: 4, text: "A pleasant restaurant." },
  ],
  "Miso Ramen": [
    { name: "Emma S.", stars: 5, text: "Their vegetarian dishes highlight fresh produce beautifully." },
    { name: "Austin B.", stars: 3, text: "The portions were adequate, but the price point felt a little high." },
  ],
  "Sesame Garlic Udon": [
    { name: "Megan T.", stars: 5, text: "A reliable place for flavorful vegan meals." },
    { name: "Dev Patel", stars: 4, text: "A solid choice if you're in the area." },
  ],
  "Stir Fry Pad Thai": [
    { name: "Lupita N.", stars: 4, text: "Enjoyed the hearty and well-seasoned vegetarian choices." },
    { name: "Joaquin P.", stars: 3, text: "It was an okay experience, but I've had better value elsewhere." },
  ],
  "Asparagus Wild Mix": [
    { name: "Florence W.", stars: 5, text: "This restaurant is a gem for vegan diners." },
    { name: "John L.", stars: 4, text: "A decent eatery." },
  ],
  "Vegan Burger": [
    { name: "Cate B.", stars: 5, text: "Their vegetarian dishes are creative and delicious." },
    { name: "Chris H.", stars: 3, text: "The prices are moderate, but not particularly budget-friendly." },
  ],
  "Paprika Vegetable Skewers": [
    { name: "Zoe S.", stars: 4, text: "A good option for vegan food, with some interesting choices." },
    { name: "Rami M.", stars: 4, text: "A reliable restaurant if you're in the north part of town." },
  ],
  "Swad Loaf": [
    { name: "Naomi C.", stars: 5, text: "Their vegetarian offerings are fresh and full of flavor." },
    { name: "Paul R.", stars: 3, text: "While the food was acceptable, the price didn't quite match the experience." },
  ],
  "Avocado Toast with Roasted Tomatoes": [
    { name: "Awkwafina", stars: 5, text: "Excellent vegan options that are clearly labeled and thoughtfully prepared." },
    { name: "Mahershala A.", stars: 4, text: "Another good local find with diverse menu options." },
  ],
  "Caprese Sandwich": [
    { name: "Brie L.", stars: 4, text: "Enjoyed the variety and quality of their vegetarian dishes." },
    { name: "Daniel K.", stars: 3, text: "The food was decent, but felt a little overpriced for what it was." },
  ],
  "Mushroom and Swiss Melt": [
    { name: "Issa R.", stars: 5, text: "A go-to spot for tasty vegan meals." },
    { name: "Kumail N.", stars: 4, text: "Contributes positively to the vegetarian scene." },
  ],
  "Falafel Pita": [
    { name: "Constance W.", stars: 4, text: "Their vegetarian dishes are both satisfying and flavorful." },
    { name: "Daveed D.", stars: 3, text: "A mid-range restaurant that's okay if you're not on a tight budget." },
  ],
  "Apple Cinnamon Crumble": [
    { name: "Jodie C.", stars: 5, text: "Always impressed with the innovative vegan options they offer." },
    { name: "Oscar A.", stars: 4, text: "A convenient location with a good range of choices." },
  ],
  "Lemon Poppy Seed Slices": [
    { name: "Lashana L.", stars: 5, text: "Their vegetarian dishes are a celebration of fresh vegetables." },
    { name: "Lakeith S.", stars: 3, text: "The food was alright, but the overall value proposition could be better." },
  ],
  "Coconut Chia Pudding": [
    { name: "Ariana G.", stars: 4, text: "A solid choice for well-prepared vegan cuisine." },
    { name: "Lin-Manuel M.", stars: 4, text: "A good restaurant option in the suburban areas." },
  ],
  "Raspberry Almond Tart": [
    { name: "Stephanie H.", stars: 5, text: "The vegetarian dishes are hearty and packed with flavor." },
    { name: "Yahya A-M. II", stars: 3, text: "Prices are a little steep for a regular meal." },
  ],
  "Sweet Potato and Black Bean Tortilla Wraps": [
    { name: "Sonequa M-G.", stars: 5, text: "A fantastic restaurant that truly caters to vegan preferences." },
    { name: "Anthony M.", stars: 4, text: "A comfortable local spot with varied food options." },
  ],
  "Ricotta and Parmesan Cheese Ravioli": [
    { name: "Letitia W.", stars: 4, text: "Enjoyed the healthy and tasty vegetarian selections." },
    { name: "Daniel C.", stars: 3, text: "The experience was average, and the price felt a bit high." },
  ],
  "Swiss Mac and Cheese": [
    { name: "Ruth N.", stars: 5, text: "Reliably good vegan food, a great asset to the dining scene." },
    { name: "Colman D.", stars: 4, text: "A decent restaurant representing the local culinary scene." },
  ],
};

const starEmojis = (count) => '⭐'.repeat(count) + '☆'.repeat(5 - count);

const ReviewModal = ({ reviews, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!reviews || reviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews && reviews.length > 0 ? reviews[currentIndex] : null;

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
          {currentReview ? (
            <>
              <p className="reviewer-name">{currentReview.name}</p>
              <p className="review-stars">{starEmojis(currentReview.stars)}</p>
              <p className="review-text">"{currentReview.text}"</p>
            </>
          ) : (
            <p className="review-text" style={{ textAlign: 'center', fontStyle: 'italic' }}>
              No reviews yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const FoodItem = ({ id, name, price, description, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [isItemAdded, setItemAdded] = useState((cartItems?.[id] || 0) > 0);
  const [showReviews, setShowReviews] = useState(false);

  // Use hardcoded reviews if available, else show "no reviews yet"
  const itemReviews = useMemo(() => {
    if (foodItemReviews[name]) {
      return foodItemReviews[name];
    }
    return [];
  }, [name]);

  useEffect(() => {
    setItemAdded((cartItems?.[id] || 0) > 0);
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
          <p className="food-item-list" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {isVegan ? (
              <>
                Vegan
                <img
                  src={assets.vegan}
                  alt="Vegan"
                  style={{ width: 20, height: 20, marginLeft: 4 }}
                />
              </>
            ) : (
              <>
                <img
                  src={assets.vegetarian}
                  alt="Vegetarian"
                  style={{ width: 20, height: 20, marginRight: 4 }}
                />
                Vegetarian
              </>
            )}
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
              <p>{cartItems[id] || 0}</p>
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
      {showReviews && <ReviewModal reviews={itemReviews} onClose={closeReviews} />}
    </>
  );
};

export default FoodItem;
