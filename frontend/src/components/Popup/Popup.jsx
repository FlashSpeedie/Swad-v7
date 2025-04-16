import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem('popupClosed');
    if (closed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('popupClosed', 'true');
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('popupClosed', 'true');
      }, 2000);
    }
  };

  return (
    <>
      {isVisible && (
        <div className="popup-wrapper">
          <div className="popup-container">
            <button className="popup-close" onClick={handleClose}>×</button>
            <h2>Free food and drinks, just for you.</h2>
            <p>Earn points for every dollar you spend at Game Day Grill. Use your points to redeem free food and drinks, and get access to exclusive offers and events.</p>
            <p>✅ Earn 1 point for every dollar you spend</p>
            <p>🥤 Get a free drink when you sign up</p>
            <p>🎉 Get a free appetizer on your birthday</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Enter your phone number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  maxLength={10}
                  required
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Sign Up</button>
              </form>
            ) : (
              <div className="thank-you-message">
                <p>Thank you for signing up! 🎉</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
