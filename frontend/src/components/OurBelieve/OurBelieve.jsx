import React from 'react';
import './OurBelieve.css';

const OurBelieve = () => {
    return (
        <section className="our-believe">
            <header className="section-header">
                <h1>About Our Beliefs, Mission, Goal and Approach</h1>
            </header>
            <div className="container">
                <div className="block block1">
                    <h2>Our Belief</h2>
                    <p>
                        At Swad, we believe in the farm-to-table philosophy.
                        We source the freshest ingredients directly from local farms to ensure
                        that every dish we serve is of the highest quality. Our commitment to
                        sustainability and supporting local farmers is at the heart of everything we do.
                    </p>
                </div>
                <div className="block block2">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide our customers with an exceptional dining experience
                        by offering delicious, high-quality food made from the freshest ingredients.
                        We strive to create a welcoming atmosphere where everyone feels at home.
                    </p>
                </div>
                <div className="block block3">
                    <h2>Our Goal</h2>
                    <p>
                        Our goal is to be a leader in the farm-to-table movement, inspiring other restaurants to adopt sustainable practices and support local farmers. We aim to make a positive impact on our community and the environment.
                    </p>
                </div>
                <div className="block block4">
                    <h2>Our Approach</h2>
                    <p>
                        We approach the farm-to-table movement through our growing collaborative relationships with local sustainable farms and by our increasing number of employees that contribute to an encouraging yet skilled and professional workplace.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurBelieve;
