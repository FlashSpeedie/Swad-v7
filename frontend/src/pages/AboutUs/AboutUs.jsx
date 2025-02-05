import React, { useState } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = e.target.value.replace(/\D/g, '').slice(0, 10);
    
    if (formattedNumber.length <= 3) {
      setPhoneNumber(formattedNumber);
    } else if (formattedNumber.length <= 6) {
      setPhoneNumber(`(${formattedNumber.slice(0, 3)}) ${formattedNumber.slice(3)}`);
    } else {
      setPhoneNumber(`(${formattedNumber.slice(0, 3)}) ${formattedNumber.slice(3, 6)}-${formattedNumber.slice(6, 10)}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <h1>Welcome to Swad</h1>
        <p>
          Swad is a family-owned and operated vegetarian restaurant, dedicated to serving the freshest and healthiest plant-based dishes in town. Our mission is to provide a welcoming and sustainable dining experience that nourishes both body and soul.
        </p>
        <p>
          Our chefs are passionate about creating innovative and delicious meals using locally sourced ingredients. We believe that food should be a source of joy and connection, and we strive to make every meal a special occasion.
        </p>
        <button onClick={() => alert('Learn more about our mission and values.')}>Learn More</button>
      </div>
      <div className="about-us-image">
          <img src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us Image" />
      </div>
      <div className="about-us-text">
        <h2>Our Story</h2>
        <p>
          Swad was founded by a passionate foodie and environmentalist who wanted to bring healthy and sustainable dining to the community. With a focus on locally sourced ingredients and creative menu options, we aim to make every meal a celebration of flavor and nutrition.
        </p>
        <p>
          Our team is dedicated to providing exceptional service and ensuring that every guest feels welcome and cared for. We believe that food should be a source of joy and connection, and we strive to make every meal a special occasion.
        </p>
        <button onClick={() => alert('Meet our wonderful team of chefs and service staff.')}>Meet Our Team</button>
      </div>
      <div className="about-us-image">
        <img src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us Image" />
      </div>
      <div className="rewards-container">
        <h2>Join Our Rewards Program</h2>
        {submitted ? (
          <div className="success-message">Thank you! Your phone number has been submitted successfully.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="phone-number">Enter your phone number:</label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="(123) 456-7890"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
