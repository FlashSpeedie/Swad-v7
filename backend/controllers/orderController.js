import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const frontend_url = process.env.FRONTEND_URL || 'https://yourfrontend.com';

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Basic validation:
    if (!userId || !Array.isArray(items) || items.length === 0 || !amount || !address) {
      return res.status(400).json({ success: false, message: 'Missing or invalid order data' });
    }

    // Save order in DB
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      payment: false,
      status: 'Pending',
      createdAt: new Date(),
    });

    await newOrder.save();

    // Clear user cart (optional)
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // Prepare line items for Stripe Checkout
    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const deliveryCharge = 2.0;
    const taxAmount = amount * 0.045;

    const totalAmountCents = Math.round((amount + deliveryCharge + taxAmount) * 100);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      payment_intent_data: {
        amount: totalAmountCents,
        currency: 'usd',
      },
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    return res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error('Place order error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Server error' });
  }
};

const verifyOrder = async (req, res) => {
  try {
    const { orderId, success } = req.body;

    if (!orderId || typeof success === 'undefined') {
      return res.status(400).json({ success: false, message: 'Missing order verification data' });
    }

    if (success === 'true' || success === true) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true, status: 'Paid' });
      return res.json({ success: true, message: 'Order paid successfully' });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res.json({ success: false, message: 'Order payment canceled' });
    }
  } catch (error) {
    console.error('Verify order error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'Missing userId' });
    }
    const orders = await orderModel.find({ userId });
    return res.json({ success: true, data: orders });
  } catch (error) {
    console.error('User orders error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    return res.json({ success: true, data: orders });
  } catch (error) {
    console.error('List orders error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    if (!orderId || !status) {
      return res.status(400).json({ success: false, message: 'Missing orderId or status' });
    }
    await orderModel.findByIdAndUpdate(orderId, { status });
    return res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    console.error('Update status error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
