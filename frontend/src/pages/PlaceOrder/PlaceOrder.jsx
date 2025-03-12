import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import InputMask from 'react-input-mask';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  // State for form data
  const [data, setData] = useState({
    firstName: "Test",
    lastName: "User",
    email: "testuser@gmail.com",
    street: "12345 Test Rd",
    city: "Oklahoma City",
    state: "Oklahoma",
    zipcode: "73025",
    country: "United States",
    phone: "4051209327",
  });

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle order placement
  const placeOrder = async (event) => {
    event.preventDefault();

    const orderItems = food_list
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({
        ...item,
        quantity: cartItems[item._id],
      }));

    if (orderItems.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2, // Adding delivery fee
      paymentMethod,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });

      if (response.data.success) {
        if (paymentMethod === "card") {
          const { session_url } = response.data;
          window.location.replace(session_url);
        } else {
          navigate('/myorders');
        }
        return;
      } else {
        alert("Error: " + (response.data.message || "An unknown error occurred."));
      }
    } catch (error) {
      alert("Failed to place the order. Please check your network or try again later.");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token, getTotalCartAmount, navigate]);

  // Calculate cart totals
  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const taxRate = 0.045; // 4.5% tax rate
  const taxes = (subtotal * taxRate) + 0.09;
  const total = subtotal + taxes + deliveryFee;

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First name"
            pattern="[A-Za-z]+"
            onInput={(e) => (e.target.value = e.target.value.replace(/[^A-Za-z]/g, ''))}
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last name"
            pattern="[A-Za-z]+"
            onInput={(e) => (e.target.value = e.target.value.replace(/[^A-Za-z]/g, ''))}
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
            pattern="[A-Za-z]+"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
            readOnly
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
            pattern="\d*"
            maxLength="5"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
            readOnly
          />
        </div>
        <InputMask
          mask="+1 (999) 999 - 9999"
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
        />
        <p>* To the actual users they have to fill in the First Name, Last Name, Email Address, Street, City, Zip Code, and their phone number.</p>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr />
            <div>
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <hr />
            <div>
              <span>Taxes (4.5%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <hr />
            <div className="total">
              <span><b>Total</b></span>
              <span><b>${total.toFixed(2)}</b></span>
            </div>
          </div>
          <button className="proceed" type="submit">PROCEED TO PAYMENT</button>
        </div>
        <div className="payment-method">
          <p className="title">Payment Method (Test Mode)</p>
          <div className="payment-options">
            <p>Email: testuser@gmail.com (Any Email)</p>
            <p>Card Number: 4242 4242 4242 4242 (This is the dummy card)</p>
            <p>MM/YY: 03/29 (Can be any date after today)</p>
            <p>CVC: 231 (Any Numbers)</p>
            <p>Zip Code: 12345 (Any Zip Code)</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
