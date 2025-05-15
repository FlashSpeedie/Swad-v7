import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';
import Stripe from "stripe";
import jwt from 'jsonwebtoken';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = 'https://swad-sv13.onrender.com';

const placeOrder = async (req, res) => {
  try {
    // Securely decode user ID from token
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { items, amount, address, paymentMethod } = req.body;

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      payment: paymentMethod === 'card' ? false : true,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    if (paymentMethod === 'card') {
      const line_items = items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

      const deliveryCharge = 2.00;
      const taxAmount = amount * 0.045;
      const totalAmountCents = Math.round((amount + deliveryCharge + taxAmount) * 100);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        payment_intent_data: {
          amount: totalAmountCents,
          currency: "usd",
        },
        success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
      });

      return res.json({ success: true, session_url: session.url });
    } else {
      return res.json({ success: true, message: "Order placed with COD" });
    }
  } catch (error) {
    console.error("Order placement error:", error);
    return res.status(500).json({ success: false, message: error.message || "Error placing order" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const userOrders = async (req, res) => {
  try {
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    const orders = await orderModel.find({ userId: decoded.id });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
