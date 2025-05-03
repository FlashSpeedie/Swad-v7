import React, { useState } from "react";
import InputMask from "react-input-mask"; // Import InputMask

import "./ContactUs.css";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Optionally reset form or add further logic
  };

  return (
    <div>
      {/* Title at the top */}
      <h1 className="about-title" style={{ textAlign: "center" }}>Contact Swad</h1>

      <div className="contact-container">
        {/* Contact Details Section on the left */}
        <div className="contact-details">
          {/* Email */}
          <div className="contact-box">
            <div className="contact-box-icon">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                alt="Email"
              />
            </div>
            <p className="contact-box-title">Email</p>
            <p className="contact-box-detail">contact@swad.com</p>
          </div>

          {/* Phone */}
          <div className="contact-box">
            <div className="contact-box-icon">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                alt="Phone"
              />
            </div>
            <p className="contact-box-title">Phone</p>
            <p className="contact-box-detail">+1 (405) 372-SWAD</p>
          </div>

          {/* Location */}
          <div className="contact-box">
            <div className="contact-box-icon">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                alt="Location"
              />
            </div>
            <p className="contact-box-title">Main Location</p>
            <p className="contact-box-detail">
              3231 Desi Corner
              <br />
              Oklahoma City, OK
            </p>
          </div>

          {/* Socials */}
          <div className="contact-box">
            <div className="contact-box-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/18437/18437188.png"
                alt="Socials"
              />
            </div>
            <p className="contact-box-title">Socials</p>
            <div className="social-links">
              <a href="https://www.facebook.com/OklahomaTSA/">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                  alt="Facebook"
                />
              </a>
              <a href="https://twitter.com/oktsa78?lang=en">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                  alt="Twitter"
                />
              </a>
              <a href="https://www.instagram.com/oktsa78/?hl=en">
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Connect with us</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <InputMask
                  mask="+1 (999) 999 - 9999"
                  required
                  name="phone"
                  onChange={handleChange}
                  value={data.phone}
                  placeholder="Phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  value={data.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          ) : (
            <div className="thank-you-message">
              <img
                src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                alt="Thank you icon"
                className="thank-you-icon"
              />
              <p>
                Thank you for contacting us! One of our team members will connect
                with you as soon as possible.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
