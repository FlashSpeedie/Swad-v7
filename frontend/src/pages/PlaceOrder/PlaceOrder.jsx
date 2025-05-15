import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@gmail.com',
    street: '12345 Test Rd',
    city: 'Oklahoma',
    state: 'Oklahoma',
    zipcode: '73025',
    country: 'United States',
    phone: '4051209327',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    const orderItems = food_list
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({
        ...item,
        quantity: cartItems[item._id],
      }));

    if (orderItems.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount(),
      paymentMethod,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });

      if (response.data.success) {
        if (paymentMethod === 'card') {
          window.location.replace(response.data.session_url);
        } else {
          navigate('/myorders');
        }
      } else {
        alert('Error: ' + (response.data.message || 'An unknown error occurred.'));
      }
    } catch (error) {
      alert('Failed to place the order. Please check your network or try again later.');
      console.error(error);
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token, getTotalCartAmount, navigate]);

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const taxRate = 0.045;
  const taxes = subtotal * taxRate + 0.09;
  const total = subtotal + taxes + deliveryFee;

  return (
    <form onSubmit={placeOrder} className="place-order">
      {/* Form contents unchanged... */}
      <button className="proceed" type="submit">PROCEED TO PAYMENT</button>
    </form>
  );
};

export default PlaceOrder;
