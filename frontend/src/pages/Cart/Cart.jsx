import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, updateCartItem } = useContext(StoreContext);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = getTotalCartAmount();
  const discountAmount = subtotal * (discount / 100);
  const deliveryFee = 2;
  const taxRate = 0.045;
  const taxes = (subtotal - discountAmount) * taxRate + 0.09;
  const total = subtotal - discountAmount + taxes + deliveryFee;

  const navigate = useNavigate();

  const handlePromoCode = () => {
    if (promoCode === 'SLC 2025' && !promoApplied) {
      setDiscount(20);
      setPromoApplied(true);
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Cart Total</h2>
        <hr />
        <div className="cart-items-title">
          <p>Item Name</p>
          {/* <p>Title</p> */}
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-items">
                  {/* <img src={`${url}/images/${item.image}`} alt="" /> */}
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    className="quantity-input"
                    value={cartItems[item._id]}
                    onChange={(e) => updateCartItem(item._id, parseInt(e.target.value) || 0)}
                  />
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <div className="cart-total-summary">
            <span className="label">Subtotal</span>
            <span className="value">${subtotal.toFixed(2)}</span>
          </div>
          <hr />
          {promoApplied && (
            <div className="promo-applied">
              <span>20% Coupon Applied</span>
            </div>
          )}
          {!promoApplied && (
            <div className="cart-promocode">
              <input
                type="text"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoCode}>Apply</button>
            </div>
          )}
          <div className="cart-total-summary">
            <span className="label">Discount</span>
            <span className="value">-${discountAmount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="cart-total-summary">
            <span className="label">Delivery Fee</span>
            <span className="value">${deliveryFee.toFixed(2)}</span>
          </div>
          <hr />
          <div className="cart-total-summary">
            <span className="label">Taxes (4.5%)</span>
            <span className="value">${taxes.toFixed(2)}</span>
          </div>
          <hr />
          <div className="cart-total-summary total">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
