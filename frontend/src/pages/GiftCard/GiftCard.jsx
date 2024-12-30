import React, { useState } from 'react';
import './GiftCard.css';

const GiftCard = () => {
    const [showCheckBalancePopup, setShowCheckBalancePopup] = useState(false);
    const [showBuyGiftCardPopup, setShowBuyGiftCardPopup] = useState(false);
    const [balance, setBalance] = useState(null);
    const [giftCardNumber, setGiftCardNumber] = useState('');
    const [recipientInfo, setRecipientInfo] = useState({ name: '', email: '', price: '' });
    const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', cvv: '', expiry: '', fullName: '', email: '' });

    const handleCheckBalance = () => {
        if (giftCardNumber.length === 8) {
            setBalance(`$${(Math.random() * 100).toFixed(2)}`);
        }
    };

    const handleBuyGiftCard = () => {
        // Handle buy gift card logic
    };

    return (
        <div className="gift-card-page">
            <div className="gift-card-container">
                <img src="gift-card-image.jpg" alt="Gift Card" className="gift-card-image" />
                <div className="gift-card-details">
                    <h1>Gift Card</h1>
                    <p>Give the gift of choice with our versatile gift cards.</p>
                    <button onClick={() => setShowBuyGiftCardPopup(true)}>Buy Gift Cards</button>
                    <button onClick={() => setShowCheckBalancePopup(true)}>Check Balance</button>
                </div>
            </div>

            {showCheckBalancePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowCheckBalancePopup(false)}>&times;</span>
                        <h2>Check Balance</h2>
                        <input
                            type="text"
                            value={giftCardNumber}
                            onChange={(e) => setGiftCardNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 8))}
                            placeholder="Enter Gift Card Number"
                        />
                        <button onClick={handleCheckBalance}>Check Balance</button>
                        {balance && <p>Your balance is: {balance}</p>}
                    </div>
                </div>
            )}

            {showBuyGiftCardPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowBuyGiftCardPopup(false)}>&times;</span>
                        <h2>Buy Gift Card</h2>
                        <input
                            type="text"
                            placeholder="Recipient's Full Name"
                            value={recipientInfo.name}
                            onChange={(e) => setRecipientInfo({ ...recipientInfo, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Recipient's Email"
                            value={recipientInfo.email}
                            onChange={(e) => setRecipientInfo({ ...recipientInfo, email: e.target.value })}
                        />
                        <div className="price-buttons">
                            {[25, 50, 75, 100].map((price) => (
                                <button key={price} onClick={() => setRecipientInfo({ ...recipientInfo, price })}>
                                    ${price}
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setShowBuyGiftCardPopup(false)}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiftCard;




// Write  code for gift card page image on the left and to the right a title and paragraph and below that two buttons for Buy Gift Cards and Check Balance and for Check Balnce after clicked it should open a pop up window and everything else the background should be greys and tell the using direct and a autoformat a text entry only for text and number and after fully filled 8 characters and clicked Check Balance a random balance should be showned and also add a cross to close it and proper gaps and then for the Buy gift card a pop up asking recepient info a buttons for the price of the gift card like 25 50 75 100 and for the recepeint info ask for full name email an dprice and then after that click next and then the payment method a card structure should be on top fixed and then below that text entry for card number which auto format s and in the text entry and in the card structure it should show that number with the image of the card provider and then below that ask for the cvv and the expiry month and year which is auto formated and then the ull name and then the email and then a Send button and after clicked a successfull screen make it auto format and also add the css for it below it the entire jsx code