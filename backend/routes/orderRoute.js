import express from "express"
import authMiddleware from './../middleware/auth.js';
import { placeOrder, verifyOrder, userOrders,listOrders,updateStatus } from "../controllers/orderController.js";
import rateLimit from 'express-rate-limit';

const orderRouter = express.Router();

const userOrdersLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrdersLimiter,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status', updateStatus)

export default orderRouter;