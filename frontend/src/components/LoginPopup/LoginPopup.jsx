import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Login"); // "Login" or "Sign Up"
    const [isVerified, setIsVerified] = useState(false); // For email verification
    const [verificationCode, setVerificationCode] = useState(""); // For user-entered code
    const [serverCode, setServerCode] = useState(""); // Code sent to email
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        birthday: "",
        phone: "",
        gender: ""
    });

    const [passwordStrength, setPasswordStrength] = useState(0);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "password") {
            // Check password strength
            let strength = 0;
            if (value.length >= 8) strength++;
            if (/[a-z]/.test(value)) strength++;
            if (/[A-Z]/.test(value)) strength++;
            if (/[0-9]/.test(value)) strength++;
            if (/[@$!%*?&#]/.test(value)) strength++;
            setPasswordStrength(strength);
        }

        setData((data) => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();

        if (currState === "Login") {
            // Login API
            const response = await axios.post(`${url}/api/user/login`, data);

            if (response.data.success) {
                setToken(response.data.token);
                if (isLocalStorageAvailable()) {
                    localStorage.setItem("token", response.data.token);
                } else {
                    console.error("LocalStorage is not available");
                }
                setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } else if (currState === "Sign Up") {
            // Registration API
            const response = await axios.post(`${url}/api/user/register`, data);

            if (response.data.success) {
                alert("Verification code sent to your email.");
                setServerCode(response.data.verificationCode); // Simulated code from backend
                setIsVerified(false); // Set to true after successful verification
            } else {
                alert(response.data.message);
            }
        }
    };

    const onVerifyCode = () => {
        if (verificationCode === serverCode) {
            alert("Email verified successfully!");
            setIsVerified(true);
        } else {
            alert("Invalid code. Please try again.");
        }
    };

    // Function to check if localStorage is available
    function isLocalStorageAvailable() {
        try {
            const testKey = '__test__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true; // localStorage is available
        } catch (e) {
            return false; // localStorage is not available
        }
    }

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="Close"
                    />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <>
                            <input
                                name="name"
                                onChange={onChangeHandler}
                                value={data.name}
                                type="text"
                                placeholder="Your name"
                                required
                            />
                            <input
                                name="birthday"
                                onChange={onChangeHandler}
                                value={data.birthday}
                                type="date"
                                placeholder="Your birthday"
                                required
                            />
                            <input
                                name="phone"
                                onChange={onChangeHandler}
                                value={data.phone}
                                type="tel"
                                placeholder="Your phone number"
                                required
                            />
                            <select
                                name="gender"
                                onChange={onChangeHandler}
                                value={data.gender}
                                required
                            >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </>
                    )}
                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your email"
                        required
                    />
                    <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    {currState === "Sign Up" && (
                        <div className="password-strength">
                            <div
                                className={`strength-bar ${passwordStrength >= 1 ? "filled" : ""}`}
                            ></div>
                            <div
                                className={`strength-bar ${passwordStrength >= 2 ? "filled" : ""}`}
                            ></div>
                            <div
                                className={`strength-bar ${passwordStrength >= 3 ? "filled" : ""}`}
                            ></div>
                            <div
                                className={`strength-bar ${passwordStrength >= 4 ? "filled" : ""}`}
                            ></div>
                            <div
                                className={`strength-bar ${passwordStrength === 5 ? "filled" : ""}`}
                            ></div>
                        </div>
                    )}
                </div>

                {currState === "Sign Up" && !isVerified ? (
                    <>
                        <input
                            name="verificationCode"
                            onChange={(e) => setVerificationCode(e.target.value)}
                            value={verificationCode}
                            type="text"
                            placeholder="Enter verification code"
                            required
                        />
                        <button type="button" onClick={onVerifyCode}>
                            Verify Code
                        </button>
                    </>
                ) : null}

                <button type="submit" disabled={currState === "Sign Up" && (!isVerified || passwordStrength < 5)}>
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>

                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("Sign Up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
