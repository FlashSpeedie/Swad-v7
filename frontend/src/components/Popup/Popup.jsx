import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Popup.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

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

  if (location.pathname !== '/') return null;

  return (
    <>
      {isVisible && (
        <div className="popup-wrapper">
          <div className="popup-container">
            <button className="popup-close" onClick={handleClose}>×</button>
            <h2>Free food and drinks, just for you.</h2>
            <p>Earn points for every dollar you spend at Swad. Use your points to redeem free food and drinks, and get access to exclusive offers and events.</p>
            <p>✅ Earn 1 point for every dollar you spend</p>
            <p>🎉 Get a free appetizer on your birthday</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Enter your phone number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={
                    phoneNumber
                      ? `+1 (${phoneNumber.replace(
                          /^(\d{0,3})(\d{0,3})(\d{0,4})$/,
                          (match, p1, p2, p3) =>
                            (p1 ? p1 : '') +
                            (p2 ? `) ${p2}` : p1 && p1.length === 3 ? ')' : '') +
                            (p3 ? `-${p3}` : '')
                        )}`
                      : '+1 '
                  }
                  onChange={e => {
                    let raw = e.target.value.replace(/[^0-9]/g, '');
                    if (raw.startsWith('1')) raw = raw.slice(1);
                    setPhoneNumber(raw.slice(0, 10));
                    setErrorMessage('');
                  }}
                  placeholder="+1 (123) 456 - 7890"
                  maxLength={19}
                  required
                  style={{ width: '100%' }}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="custom-button" type="submit">Sign Up</button>
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
