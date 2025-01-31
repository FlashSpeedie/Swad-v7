import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="coming-soon-container">
      <img
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
        alt="Vegetarian Dish"
        className="coming-soon-image"
      />
      <h1 className="coming-soon-title">Swad - Farm to Table</h1>
      <p className="coming-soon-text">Interesting blogs about #1 Swad - Farm to Table Restaurant on its way. Stay tuned!</p>
      <p className="coming-soon-contact">For inquiries, email us at: blog@swad.com</p>
    </div>
  );
};

export default Blog;
