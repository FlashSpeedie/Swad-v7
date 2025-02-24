import React, { useState } from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Why Farm-to-Table is Better for You',
    date: 'February 20, 2025',
    excerpt: 'Learn how farm-to-table dining supports healthy eating, sustainable practices, and local farmers.',
    category: 'Health',
    imageUrl: 'https://placehold.co/400',
  },
  {
    title: 'Seasonal Ingredients: What\'s Fresh This Spring?',
    date: 'February 18, 2025',
    excerpt: 'Discover the seasonal produce that makes our dishes truly special, straight from the farm to your table.',
    category: 'Seasonal',
    imageUrl: 'https://placehold.co/400',
  },
  {
    title: 'The Story Behind Swad: Our Farm-to-Table Mission',
    date: 'February 15, 2025',
    excerpt: 'Read about our mission to bring fresh, locally sourced ingredients to every meal and support sustainable farming.',
    category: 'Mission',
    imageUrl: 'https://placehold.co/400',
  },
  {
    title: 'Our Signature Dishes Made with Local Ingredients',
    date: 'February 10, 2025',
    excerpt: 'Explore our signature dishes that highlight the best of local, organic ingredients.',
    category: 'Dishes',
    imageUrl: 'https://placehold.co/400',
  },
  {
    title: 'How Swad Supports Local Farmers and Communities',
    date: 'February 5, 2025',
    excerpt: 'Learn how our restaurant partners with local farmers to support communities and provide the best produce.',
    category: 'Community',
    imageUrl: 'https://placehold.co/400',
  },
  {
    title: 'Healthy Eating: The Benefits of Eating Fresh, Local Foods',
    date: 'January 30, 2025',
    excerpt: 'Discover the health benefits of choosing fresh, locally grown produce and how it can improve your well-being.',
    category: 'Health',
    imageUrl: 'https://placehold.co/400',
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterPosts = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory === 'All'
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
        <button onClick={() => filterPosts('All')}>All</button>
        <button onClick={() => filterPosts('Health')}>Health</button>
        <button onClick={() => filterPosts('Seasonal')}>Seasonal</button>
        <button onClick={() => filterPosts('Mission')}>Mission</button>
        <button onClick={() => filterPosts('Dishes')}>Dishes</button>
        <button onClick={() => filterPosts('Community')}>Community</button>
      </div>

      <section className="blog-posts">
        {filteredPosts.map((post) => (
          <article key={post.title} className="blog-post">
            <div className="post-content">
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <button
                className="read-more-btn"
                onClick={() => handleReadMore(post.title)}
              >
                Read More
              </button>
            </div>
            <img src={post.imageUrl} alt="Blog Post" className="post-image" />
          </article>
        ))}
      </section>

      <footer className="blog-footer">
        <p>&copy; 2025 Swad - Farm to Table. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
