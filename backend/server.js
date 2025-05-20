import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import mongoose from "mongoose"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit'

// app config
const app = express()
const port = process.env.PORT || 4000;
dotenv.config();
console.log('Cloudinary Config:', process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter) 
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
