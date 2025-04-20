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
                            Swad was founded in 2010 with a mission to bring fresh, farm-to-table vegetarian dishes to the community. Our journey started in a small kitchen with a big dream: to provide healthy, delicious meals made from locally sourced ingredients from farmers.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Donate;
