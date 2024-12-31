import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Or another email service like SendGrid, SES, etc.
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// Helper function to generate a random verification code
const generateVerificationCode = () => {
    return crypto.randomBytes(3).toString('hex'); // Generates a 6-character random code
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("Login failed: User doesn't exist for email:", email);
            return res.json({ success: false, message: "User Doesn't Exist" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Login failed: Invalid credentials for email:", email);
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        const token = createToken(user._id);
        console.log("Login successful for email:", email);
        res.json({ success: true, token });
    } catch (error) {
        console.log("Login error:", error);
        res.json({ success: false, message: "Error" });
    }
};

// Helper function to create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Check whether the user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            console.log("Registration failed: User already exists for email:", email);
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            console.log("Registration failed: Invalid email format for email:", email);
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            console.log("Registration failed: Password is too weak for email:", email);
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate verification code
        const verificationCode = generateVerificationCode();

        // Create the new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            verificationCode, // Store the generated code
            verificationCodeExpires: Date.now() + 3600000, // 1 hour expiry
        });

        // Save the user (but don't verify yet)
        const user = await newUser.save();

        // Send the verification email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification Code',
            text: `Your verification code is: ${verificationCode}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Registration failed: Error sending verification email for email:", email);
                return res.status(500).json({ success: false, message: "Error sending email" });
            }
            console.log("Verification email sent to email:", email);
            return res.status(200).json({ success: true, message: "Verification code sent to your email" });
        });
    } catch (error) {
        console.log("Registration error:", error);
        res.json({ success: false, message: "Error" });
    }
};

// Verify email code
const verifyEmailCode = async (req, res) => {
    const { email, verificationCode } = req.body;

    try {
        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("Verification failed: User not found for email:", email);
            return res.status(400).json({ success: false, message: "User not found" });
        }

        // Debugging: Log both the entered code and the stored code
        console.log("Verification attempt for email:", email);
        console.log("Entered code:", verificationCode); // Log the code entered by the user
        console.log("Stored code:", user.verificationCode); // Log the code stored in the database

        // Check if the verification code matches (case-insensitive and trim whitespace)
        if (user.verificationCode.trim().toLowerCase() !== verificationCode.trim().toLowerCase()) {
            console.log("Verification failed: Invalid code entered for email:", email);
            return res.status(400).json({ success: false, message: "Invalid verification code" });
        }

        // Check if the code has expired
        if (Date.now() > user.verificationCodeExpires) {
            console.log("Verification failed: Code expired for email:", email);
            return res.status(400).json({ success: false, message: "Verification code expired" });
        }

        // Mark the user as verified
        user.verified = true;
        user.verificationCode = null; // Clear the code
        user.verificationCodeExpires = null; // Clear expiry
        await user.save();

        console.log("Verification successful for email:", email); // Log successful verification
        return res.status(200).json({ success: true, message: "Email verified successfully!" });
    } catch (error) {
        console.log("Verification code error for email:", email, error); // Log any errors
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

export { loginUser, registerUser, verifyEmailCode };
