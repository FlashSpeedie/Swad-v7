// Locations.jsx
import React from 'react';
import './Locations.css';

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
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', // Replace with OKC image
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
    image: 'https://images.unsplash.com/photo-1600891971815-1fe9d8c6f1ef', // Replace with Edmond image
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
    image: 'https://images.unsplash.com/photo-1600891984683-c3d6f82f52b0', // Replace with Tulsa image
    reverse: false,
  },
];

const Locations = () => {
  return (
    <div className="gameday-locations-wrapper">
      {locations.map((loc, index) => (
        <div
          className={`gameday-location-card ${
            loc.reverse ? 'gameday-reverse' : ''
          }`}
          key={index}
        >
          <div className="gameday-location-text">
            <h2 className="gameday-city">{loc.city}</h2>

            <div className="gameday-detail-block">
              <p className="gameday-detail-title">⏰ Hours</p>
              {loc.hours.map((line, i) => (
                <p key={i} className="gameday-detail-line">{line}</p>
              ))}
            </div>

            <div className="gameday-detail-block">
              <p className="gameday-detail-title">📞 Phone</p>
              <p className="gameday-detail-line">{loc.phone}</p>
            </div>

            <div className="gameday-detail-block">
              <p className="gameday-detail-title">📍 Address</p>
              <p className="gameday-detail-line">{loc.address}</p>
            </div>
          </div>

          <div className="gameday-location-image-wrapper">
            <img
              src={loc.image}
              alt={`Game Day Grill in ${loc.city}`}
              className="gameday-location-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
