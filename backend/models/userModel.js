import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },  // Track if the email is verified
    verificationCode: { type: String, default: null }, // Store the verification code temporarily
    verificationCodeExpires: { type: Date, default: null }, // Optional: set an expiry date for the verification code
    gender: { type: String, required: false }, // Make gender optional
    phone: { type: String, required: false }, // Make phone optional
    birthday: { type: Date, required: false } // Make birthday optional
});


const userModel = mongoose.model("User", userSchema);

export default userModel;
