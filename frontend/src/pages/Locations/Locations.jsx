// Locations.jsx
import React from 'react';
import './Locations.css';
import { assets } from '../../assets/assets';

const locations = [
  {
    city: 'Oklahoma City',
    hours: [
      'Mon, Wed, Thu, Sun: 4pm - 10pm',
      'Friday and Saturday: 12pm - 2am',
      'Tuesday: Closed',
    ],
    phone: '+1 (405) 372-3922',
    address: '3231 Parkway Plaza, Oklahoma City, OK',
    image: assets.oklahoma_city, // Replace with OKC image
    reverse: false,
  },
  {
    city: 'Edmond',
    hours: [
      'Mon, Wed, Thu, Sun: 4pm - 10pm',
      'Friday and Saturday: 12pm - 2am',
      'Tuesday: Closed',
    ],
    phone: '+1 (405) 289-1932',
    address: '3814 S. Broadway, Edmond, OK',
    image: assets.edmond_city, // Replace with Edmond image
    reverse: true,
  },
  {
    city: 'Tulsa',
    hours: [
      'Mon, Wed, Thu, Sun: 4pm - 10pm',
      'Friday and Saturday: 12pm - 2am',
      'Tuesday: Closed',
    ],
    phone: '+1 (918) 323-1832',
    address: '2481 E. 15th St., Tulsa, OK',
    image: assets.norman_city, // Replace with Tulsa image
    reverse: false,
  },
];

const Locations = () => {
  return (
    <div className="swad-locations-wrapper">
      {locations.map((loc, index) => (
        <div
          className={`swad-location-card ${
            loc.reverse ? 'swad-reverse' : ''
          }`}
          key={index}
        >
          <div className="swad-location-text">
            <h2 className="swad-city">{loc.city}</h2>

            <div className="swad-detail-block">
              <p className="swad-detail-title">
                <img
                  src={assets.clock}
                  alt="Hours Icon"
                  style={{
                    width: '25px',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                    position: 'relative',
                    top: '-2px', // Adjust this value as needed
                  }}
                />
                Hours
              </p>
              {loc.hours.map((line, i) => (
                <p key={i} className="swad-detail-line">{line}</p>
              ))}
            </div>

            <div className="swad-detail-block">
              <p className="swad-detail-title">
                <img
                  src={assets.phone}
                  alt="Phone Icon"
                  style={{
                    width: '25px',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                    position: 'relative',
                    top: '-2px', // Adjust this value as needed
                  }}
                />
                Phone
              </p>
              <p className="swad-detail-line">{loc.phone}</p>
            </div>

            <div className="swad-detail-block">
              <p className="swad-detail-title">
                <img
                  src={assets.locations}
                  alt="Address Icon"
                  style={{
                    width: '25px',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                    position: 'relative',
                    top: '-2px', // Adjust this value as needed
                  }}
                />
                Address
              </p>
              <p className="swad-detail-line">{loc.address}</p>
            </div>
          </div>

          <div className="swad-location-image-wrapper">
            <img
              src={loc.image}
              alt={`Game Day Grill in ${loc.city}`}
              className="swad-location-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
