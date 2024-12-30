import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <header className="blog-header">
                <h1>Welcome to Swad's Blog</h1>
                <p>Your source for the latest news and recipes from our vegetarian restaurant</p>
            </header>
            <section className="blog-content">
                <article className="blog-post">
                    <img src="https://via.placeholder.com/800x400" alt="Delicious vegetarian dish" />
                    <h2>Our Latest Recipe</h2>
                    <p>Discover the secrets behind our delicious vegetarian dishes. This week, we're sharing our recipe for a mouth-watering vegetable curry...</p>
                </article>
                <article className="blog-post">
                    <img src="https://via.placeholder.com/800x400" alt="Fresh ingredients" />
                    <h2>Fresh Ingredients</h2>
                    <p>At Swad, we believe in using only the freshest ingredients. Learn more about our sourcing practices and how we ensure the highest quality...</p>
                </article>
            </section>
        </div>
    );
}

export default Blog;


