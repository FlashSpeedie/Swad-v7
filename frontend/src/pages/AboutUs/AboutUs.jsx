import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5em', margin: '0 0 20px 0' }}>About Swad - Farm to Table</h1>
      
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="Vegetarian Dish"
          style={{ width: '50%', maxWidth: '300px', height: 'auto', marginRight: '20px' }}
        />
        <div>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            Swad was founded in 2010 with a mission to bring fresh, farm-to-table vegetarian dishes to the community. Our journey started in a small kitchen with a big dream: to provide healthy, delicious meals made from locally sourced ingredients.
          </p>
        </div>
      </section>
      
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            Over the years, Swad has grown into a beloved restaurant known for its commitment to sustainability and quality. We believe in supporting local farmers and using organic produce to create dishes that are not only tasty but also good for the environment.
          </p>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            Join us on our journey and experience the best of farm-to-table dining. For more information, visit our <a href="https://www.swad.com">website</a>.
          </p>
          <p style={{ fontSize: '1em', margin: '10px 0' }}>
            For inquiries, email us at: contact@swad.com
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="Vegetarian Dish"
          style={{ width: '50%', maxWidth: '300px', height: 'auto', marginLeft: '20px' }}
        />
      </section>
      
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="Vegetarian Dish"
          style={{ width: '50%', maxWidth: '300px', height: 'auto', marginRight: '20px' }}
        />
        <div>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            Swad was created by a group of passionate food enthusiasts who wanted to make a difference in the way people eat. They started with a single location, focusing on quality and sustainability.
          </p>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            Through word of mouth and a growing reputation for delicious, healthy food, Swad slowly expanded to three locations. Each new restaurant maintained the same commitment to farm-to-table principles and community support.
          </p>
          <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
            Today, Swad is one of the most favorite restaurant locations, attracting visitors from many states. People come from far and wide to experience the unique flavors and sustainable dining that Swad offers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
