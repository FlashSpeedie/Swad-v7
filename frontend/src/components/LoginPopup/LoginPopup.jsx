import React, { useContext, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);

    useEffect(() => {
        const autoLogin = async () => {
            const autoLoginData = {
                email: "12345@gmail.com",
                password: "12345@gmail.com",
            };

            try {
                const response = await axios.post(`${url}/api/user/login`, autoLoginData);
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                    setShowLogin(false);
                    window.location.reload();
                } else {
                    console.error("Auto-login failed:", response.data.message || "Unknown error");
                }
            } catch (error) {
                console.error("Auto-login error:", error.message || error);
            }
        };

        autoLogin();
    }, [url, setToken, setShowLogin]);

    return null; 
};



// const LoginPopup = ({ setShowLogin }) => {
//     const { url, setToken } = useContext(StoreContext);

//     const [currState, setCurrState] = useState("Login");
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [passwordStrength, setPasswordStrength] = useState({
//         length: false,
//         uppercase: false,
//         lowercase: false,
//         number: false,
//         specialChar: false
//     });
//     const [errorMessage, setErrorMessage] = useState("");

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData((data) => ({ ...data, [name]: value }));

//         if (name === "password") {
//             calculatePasswordStrength(value);
//         }
//     };

//     const calculatePasswordStrength = (password) => {
//         const strength = {
//             length: password.length > 8,
//             uppercase: /[A-Z]/.test(password),
//             lowercase: /[a-z]/.test(password),
//             number: /[0-9]/.test(password),
//             specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
//         };
//         setPasswordStrength(strength);
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const isPasswordStrong = () => {
//         return Object.values(passwordStrength).every(value => value);
//     };

//     const onLogin = async (event) => {
//         event.preventDefault();

//         if (currState === "Sign Up" && !isPasswordStrong()) {
//             setErrorMessage("Password does not meet the strength requirements.");
//             return;
//         }

//         const endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";
//         const requestUrl = `${url}${endpoint}`;

//         try {
//             const response = await axios.post(requestUrl, data);

//             if (response.data.success) {
//                 setToken(response.data.token);
//                 localStorage.setItem("token", response.data.token);
//                 setShowLogin(false);
//             } else {
//                 setErrorMessage(response.data.message || "An error occurred. Please try again.");
//             }
//         } catch (error) {
//             console.error("Login/Registration error:", error.message || error);
//             setErrorMessage("Unable to connect to the server. Please try again later.");
//         }
//     };

//     return (
//         <div className="login-popup">
//             <form className="login-popup-container" onSubmit={onLogin}>
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img
//                         onClick={() => setShowLogin(false)}
//                         src={assets.cross_icon}
//                         alt="Close"
//                     />
//                 </div>

//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? null : (
//                         <input
//                             name="name"
//                             onChange={onChangeHandler}
//                             value={data.name}
//                             type="text"
//                             placeholder="Your name"
//                             required
//                         />
//                     )}
//                     <input
//                         name="email"
//                         onChange={onChangeHandler}
//                         value={data.email}
//                         type="email"
//                         placeholder="Your email"
//                         required
//                     />
//                     <div className="password-input-container">
//                         <input
//                             name="password"
//                             onChange={onChangeHandler}
//                             value={data.password}
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Password"
//                             required
//                         />
//                         <button
//                             type="button"
//                             onClick={toggleShowPassword}
//                             className="password-toggle-icon"
//                         >
//                             <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                         </button>
//                     </div>
//                     {currState === "Sign Up" && (
//                         <div className="password-strength">
//                             <p>Password Strength:</p>
//                             <ul>
//                                 <li className={passwordStrength.length ? "valid" : "invalid"}>At least 8 characters</li>
//                                 <li className={passwordStrength.uppercase ? "valid" : "invalid"}>At least one uppercase letter</li>
//                                 <li className={passwordStrength.lowercase ? "valid" : "invalid"}>At least one lowercase letter</li>
//                                 <li className={passwordStrength.number ? "valid" : "invalid"}>At least one number</li>
//                                 <li className={passwordStrength.specialChar ? "valid" : "invalid"}>At least one special character</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>

//                 {errorMessage && <p className="error-message">{errorMessage}</p>}

//                 <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

//                 {currState === "Sign Up" && (
//                     <div className="login-popup-condition">
//                         <input type="checkbox" required />
//                         <p>
//                             By continuing, I agree to the <a href="/terms" target="_blank">Terms of Use</a> & <a href="/policy" target="_blank">Privacy Policy</a>.
//                         </p>
//                     </div>
//                 )}

//                 {currState === "Login" ? (
//                     <p>
//                         Create a new account?{" "}
//                         <span onClick={() => setCurrState("Sign Up")}>Click here</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Already have an account?{" "}
//                         <span onClick={() => setCurrState("Login")}>Login here</span>
//                     </p>
//                 )}
//             </form>
//         </div>
//     );
// };

export default LoginPopup;
