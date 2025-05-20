import React, { useState } from 'react';
import './Donate.css';
import { assets } from '../../assets/assets';

const Donate = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    const handleNavigate = () => {
        window.location.href = 'https://www.ruzyckifarmstore.com';
    };

    return (
        <div className="donate-container">
            <div className="donate-header-section">
                <h1 className="donate-title">Farm to Table Initiatives</h1>
                <section className="donate-info-section">
                    <img
                        src={assets.intiatives}
                        alt="Farm produce"
                        className="donate-image"
                    />
                    <div className="donate-description">
                        <p style={{ fontSize: '1.2rem' }}>
                            Ruzycki Farms is a local family-run farm and a proud supplier of nutrient-rich fresh produce. Our collaboration promotes the Farm-To-Table movement, offering wholesome meals and raising awareness of sustainable agriculture. We are thankful for their continued partnership and your support.
                        </p>
                        <button className="donate-learn-button" onClick={handleNavigate}>
                            Learn More
                        </button>
                    </div>
                </section>
            </div>

            <div className="donate-form-section">
                {isSubmitted ? (
                    <p className="donate-thank-you">Thank you for supporting our mission!</p>
                ) : (
                    <>
                        <p className="donate-form-description">
                            Want to help contribute to our farm-to-table efforts? Fill out the form below to get in touch or donate produce.
                        </p>
                        <form className="donate-form" onSubmit={handleSubmit}>
                            <div className="donate-form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="donate-input"
                                />
                            </div>
                            <div className="donate-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="donate-input"
                                />
                            </div>
                            <div className="donate-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="donate-textarea"
                                ></textarea>
                            </div>
                            <button type="submit" className="donate-submit-button">
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Donate;
