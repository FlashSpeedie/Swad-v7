import React, { useState } from 'react';
import './Blog.css';
import { assets } from '../../assets/assets';

const blogPosts = [
  {
    title: 'Why Farm-to-Table is Better for You',
    date: 'February 20, 2025',
    excerpt: 'Learn how farm-to-table dining supports healthy eating, sustainable practices, and local farmers.',
    category: 'Health',
    imageUrl: assets.story,
  },
  {
    title: 'Seasonal Ingredients: What\'s Fresh This Spring?',
    date: 'February 18, 2025',
    excerpt: 'Discover the seasonal produce that makes our dishes truly special, straight from the farm to your table.',
    category: 'Seasonal',
    imageUrl: assets.land,
  },
  {
    title: 'The Story Behind Swad: Our Farm-to-Table Mission',
    date: 'February 15, 2025',
    excerpt: 'Read about our mission to bring fresh, locally sourced ingredients to every meal and support sustainable farming.',
    category: 'Mission',
    imageUrl: assets.farm,
  },
  {
    title: 'Our Signature Dishes Made with Local Ingredients',
    date: 'February 10, 2025',
    excerpt: 'Explore our signature dishes that highlight the best of local, organic ingredients.',
    category: 'Dishes',
    imageUrl: assets.blossom,
  },
  {
    title: 'How Swad Supports Local Farmers and Communities',
    date: 'February 5, 2025',
    excerpt: 'Learn how our restaurant partners with local farmers to support communities and provide the best produce.',
    category: 'Community',
    imageUrl: assets.bread,
  },
  {
    title: 'Healthy Eating: The Benefits of Eating Fresh, Local Foods',
    date: 'January 30, 2025',
    excerpt: 'Discover the health benefits of choosing fresh, locally grown produce and how it can improve your well-being.',
    category: 'Health',
    imageUrl: assets.veggies,
  },
];

const categoryBackgrounds = {
  All: '#5cb85c',
  Health: '#2c7d5f',
  Seasonal: '#d9534f',
  Mission: '#5bc0de',
  Dishes: '#f0ad4e',
  Community: '#428bca',
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const backgroundColor = categoryBackgrounds[selectedCategory];

  const filterPosts = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const handleReadMore = (title) => {
    alert(`You clicked "Read More" for: ${title}`);
  };

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Swad - Farm to Table Blog</h1>
        <p>Explore our farm-to-table journey and the freshest ingredients straight from the farm to your plate.</p>
      </header>

      <div className="filters">
        <button
          onClick={() => filterPosts('All')}
          className={`blog-filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => filterPosts('Health')}
          className={`blog-filter-btn ${selectedCategory === 'Health' ? 'active' : ''}`}
        >
          Health
        </button>
        <button
          onClick={() => filterPosts('Seasonal')}
          className={`blog-filter-btn ${selectedCategory === 'Seasonal' ? 'active' : ''}`}
        >
          Seasonal
        </button>
        <button
          onClick={() => filterPosts('Mission')}
          className={`blog-filter-btn ${selectedCategory === 'Mission' ? 'active' : ''}`}
        >
          Mission
        </button>
        <button
          onClick={() => filterPosts('Dishes')}
          className={`blog-filter-btn ${selectedCategory === 'Dishes' ? 'active' : ''}`}
        >
          Dishes
        </button>
        <button
          onClick={() => filterPosts('Community')}
          className={`blog-filter-btn ${selectedCategory === 'Community' ? 'active' : ''}`}
        >
          Community
        </button>
      </div>


      <section className="blog-posts">
        {filteredPosts.map((post) => (
          <article key={post.title} className="blog-post">
            <div className="post-content">
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              {/* <button className="read-more-btn" onClick={() => handleReadMore(post.title)}>
                Read More
              </button> */}
            </div>
            <img src={post.imageUrl} alt="Blog Post" className="post-image" />
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
