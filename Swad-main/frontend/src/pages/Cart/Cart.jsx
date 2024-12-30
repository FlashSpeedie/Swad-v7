import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = 2;
  const taxRate = 0.045; // 4.5% tax rate
  const taxes = (subtotal * taxRate) + 0.09 ;
  const total = subtotal + taxes + deliveryFee;
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-items">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
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
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-summary">
              <span className="label">Subtotal</span>
              <span className="value">${subtotal.toFixed(2)}</span>
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
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code add it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;