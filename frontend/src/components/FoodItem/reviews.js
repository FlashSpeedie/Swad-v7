// reviews.js
const allReviews = Array.from({ length: 200 }, (_, index) => ({
  username: `User${index + 1}`,
  rating: (Math.floor(Math.random() * 5) + 1), // 1 to 5
  comment: `This is a sample review #${index + 1}`,
}));

// Hash function: produces consistent numeric hash for each string
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Main function to get 5 fixed reviews for a food item
export function getReviewsForFood(foodId) {
  const hash = hashString(foodId);
  const startIndex = hash % (allReviews.length - 5);
  return allReviews.slice(startIndex, startIndex + 5);
}
