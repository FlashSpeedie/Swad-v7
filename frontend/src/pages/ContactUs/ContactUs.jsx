import React, { useState } from "react";
import { IMaskInput } from "react-imask";

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
  };

  return (
    <div>
      {/* Title at the top */}
      <h1 className="about-title" style={{ textAlign: "center" }}>
        Contact Swad
      </h1>

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
              3231 Parkway Plaza,
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

            <div className="contact-social-links">
              <a
                href="https://www.facebook.com/OklahomaTSA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com/oktsa78?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.instagram.com/oktsa78/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="contact-social-line" />
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
                  required
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
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <IMaskInput
                  mask="+{1} (000) 000-0000"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onAccept={(value) =>
                    setData((prev) => ({ ...prev, phone: value }))
                  }
                  placeholder="+1 (___) ___-____"
                  required
  
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
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          ) : (
            <div className="thank-you-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="thank-you-icon"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
                    10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
                    8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 
                    14.17l-2.59-2.58L6 13l4 4 8-8z"
                />
              </svg>
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
