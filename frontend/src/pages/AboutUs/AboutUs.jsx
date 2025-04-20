import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Swad - Farm to Table</h1>

        <section className="about-section">
          <img
            src={assets.celebrate}
            alt="Vegetarian Dish"
            className="about-image"
          />
          <div>
            <p className="about-text">
              Swad was founded in 2010 with a mission to bring fresh, farm-to-table vegetarian dishes to the community. Our journey started in a small kitchen with a big dream: to provide healthy, delicious meals made from locally sourced ingredients from farmers.
            </p>
          </div>
        </section>

        <section className="about-section">
          <img
            src={assets.farmer}
            alt="Vegetarian Dish"
            className="about-image"
          />
          <p className="about-text">
            Over the years, Swad has grown into a beloved restaurant known for our commitment to sustainability and quality. We believe in supporting local farmers and using organic produce to create dishes that are not only tasty but also good for the environment.

            Join us on our journey and experience the best of farm-to-table dining. For more information, visit our <a href="https://swad-sv13.onrender.com/blog"><b>Blog Page</b></a>.

            For inquiries, email us at: <b>contact@swad.com</b>
          </p>
        </section>

        <section className="about-section">
          <img
            src={assets.food}
            alt="Vegetarian Dish"
            className="about-image"
          />
          <div>
            <p className="about-text">
            Swad was founded by passionate food enthusiasts dedicated to quality and sustainability. Starting with one location, we expanded to three through word of mouth and a strong reputation for healthy, delicious food. Now a popular destination, Swad attracts visitors from many states. The name "Swad," meaning taste, flavor, and relish in Hindi, reflects our restaurant's mission.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
