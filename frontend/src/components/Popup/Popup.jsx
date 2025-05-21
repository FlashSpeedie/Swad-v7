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
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label htmlFor="phoneNumber" style={{ textAlign: 'center' }}>Enter your phone number:</label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <span style={{
                    border: '1px solid #ccc',
                    borderRight: 'none',
                    borderRadius: '6px 0 0 6px',
                    background: '#f8f8f8',
                    padding: '10px 12px',
                    fontSize: '1rem',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>+1</span>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={
                      phoneNumber
                        ? `(${phoneNumber.replace(
                            /^(\d{0,3})(\d{0,3})(\d{0,4})$/,
                            (match, p1, p2, p3) =>
                              (p1 ? p1 : '') +
                              (p2 ? `) ${p2}` : p1 && p1.length === 3 ? ')' : '') +
                              (p3 ? `-${p3}` : '')
                          )}`
                        : ''
                    }
                    onChange={e => {
                      let raw = e.target.value.replace(/[^0-9]/g, '');
                      setPhoneNumber(raw.slice(0, 10));
                      setErrorMessage('');
                    }}
                    placeholder="(123) 456 - 7890"
                    maxLength={16}
                    required
                    style={{
                      width: '40%',
                      minWidth: '120px',
                      margin: '12px 0',
                      textAlign: 'center',
                      border: '1px solid #ccc',
                      borderLeft: 'none',
                      borderRadius: '0 6px 6px 0',
                      height: '40px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
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
