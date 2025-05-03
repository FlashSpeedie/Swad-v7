import React, { useState } from 'react';
import './Donate.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Donate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true); // Set the form as submitted
    };

    const handleNavigate = () => {
        window.location.href = 'https://www.ruzyckifarmstore.com'; // Navigate to Google
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title"> Farm to Table Initiatives</h1>

                <section className="about-section">
                    <img
                        src={assets.intiatives}
                        alt="Vegetarian Dish"
                        className="about-image"
                    />
                    <div>
                        <p className="about-text">
                            Ruzycki Farms is a local family-run farm and a proud supplier of genuine fresh produce rich in nutrients. We at Swad are truly grateful for these wonderful folks who share our passion in growing the Farm-To-Table movement, and hope to continue interesting people of all ages about their environment through our dishes crafted through our partnership with Ruzycki Farms and to keep learning through each experience.
                        </p>
                        <button
                            className="navigate-button"
                            onClick={handleNavigate}
                        >
                            Learn More
                        </button>
                    </div>
                </section>                            Thank you for contributing to the farm-to-table movement!


                <div className="contribute-section">
                    {isSubmitted ? (
                        <p className="thank-you-message">
                        </p>
                    ) : (
                        <>
                            <p className="contribute-text">
                                If you would like to contribute to the farm-to-table movement, please fill out the form below to help and contribute vegetables from farm to table.
                            </p>
                            <form className="contribute-form" onSubmit={handleSubmit}>
                                <div className="name-form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="contributers-name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mail-form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        className="contributers-email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mssge-form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        className="contributers-message"
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Donate;
