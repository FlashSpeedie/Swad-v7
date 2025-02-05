import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js';
import mongoose from "mongoose";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from 'dotenv';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;
console.log('Cloudinary Config:', process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);
dotenv.config();
console.log('Cloudinary Config:', process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.get("/", (req, res) => {
    res.send("API Working");
});

// Start Server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});



// mongodb+srv://greatstack:33858627@cluster0.4rl5y.mongodb.net/?