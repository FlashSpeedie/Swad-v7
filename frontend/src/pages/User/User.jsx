import React, { useContext, useEffect, useState } from "react";
import "./User.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const { token, setToken, url } = useContext(StoreContext);
    const [view, setView] = useState(token ? "profile" : "login");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/"); // Redirect to "/" if the user is already logged in
        }
    }, [token, navigate]);

    useEffect(() => {
        if (token && view !== "profile") {
            setView("profile");
            fetchProfile();
        }
    }, [token]);

    const fetchProfile = async () => {
        try {
            const response = await axios.get(`${url}/api/user/profile`, {
                headers: { token },
            });
            const { name, email, password } = response.data.user;
            setFormData({ name, email, password });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((f) => ({ ...f, [name]: value }));
    };

    const handleLoginOrRegister = async (e) => {
        e.preventDefault();
        const endpoint = view === "login" ? "/api/user/login" : "/api/user/register";
        try {
            const response = await axios.post(`${url}${endpoint}`, formData);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setView("profile");
                fetchProfile();
                navigate("/"); // Redirect to "/" after successful login
            } else {
                setErrorMessage(response.data.message || "Something went wrong.");
            }
        } catch (err) {
            setErrorMessage("Failed to connect. Try again.");
        }
    };

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        setView("login");
        setFormData({ name: "", email: "", password: "" });
        navigate("/");
    };

    return (
        <div className="account-container">
            <form className="account-form" onSubmit={handleLoginOrRegister}>
                <h2>{view === "login" ? "Login" : view === "register" ? "Register" : "My Profile"}</h2>

                {(view === "register" || view === "profile") && (
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={view === "profile"}
                        required
                    />
                )}
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={view === "profile"}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={view === "profile"}
                    required
                />

                {errorMessage && <p className="error">{errorMessage}</p>}

                {view === "profile" ? (
                    <button type="button" onClick={logout}>Logout</button>
                ) : (
                    <>
                        <button type="submit">{view === "login" ? "Login" : "Register"}</button>
                        {view === "login" ? (
                            <p>
                                Not a member?{" "}
                                <span className="link" onClick={() => setView("register")}>
                                    Register here
                                </span>
                            </p>
                        ) : (
                            <p>
                                Already a member?{" "}
                                <span className="link" onClick={() => setView("login")}>
                                    Login here
                                </span>
                            </p>
                        )}
                    </>
                )}
            </form>
        </div>
    );
};

export default AccountPage;
