import React from 'react';
import './Donate.css';
import { assets } from '../../assets/assets';

const Donate = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">Swad - Farm to Table Initiatives</h1>

                <section className="about-section">
                    <img
                        src={assets.celebrate}
                        alt="Vegetarian Dish"
                        className="about-image"
                    />
                    <div>
                        <p className="about-text">
                            Ruzycki Farms is a local family-run farm and a proud supplier of genuine fresh produce rich in nutrients. We at Swad are truly grateful for these wonderful folks who share our passion in growing the Farm-To-Table movement, and hope to continue interesting people of all ages about their environment through our dishes crafted through our partnership with Ruzycki Farms and to keep learning through each experience.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Donate;
