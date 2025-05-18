import React, { useState } from "react";
import "./Reserve.css";
import { assets } from "../../assets/assets";

const Reserve = () => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const getTomorrowDateLocal = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    setShowDetailsForm(false);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowDetailsForm(true);
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "").slice(0, 10);
    const formatted = input.replace(/(\d{3})(\d{3})(\d{4})/, (_, p1, p2, p3) => `(${p1}) ${p2}-${p3}`);
    setPhone(formatted);
    if (input.length === 10) document.getElementById("seating").focus();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const generateReservationNumber = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  return (
    <div className="reserve-container">
      <div className="top-section">
        <img className="top-section-image" src={assets.reserve} alt="Garden Seating" />
        <div className="top-section-text">
          <h2>Plant Lovers Beloved Spot to Eat</h2>
          <p>Experience the charm of our garden seating surrounded by lush greenery. A perfect blend of nature and cuisine.</p>
        </div>
      </div>

      {!isConfirmed && (
        <>
          <div className="date-time-section">
            <div className="column">
              <label className="label-text" htmlFor="reservationDate">Date:</label>
              <input
                type="date"
                id="reservationDate"
                value={date}
                onChange={handleDateChange}
                className="input-field"
                min={getTomorrowDateLocal()}
              />
            </div>

            {date && (
              <div className="column">
                <label className="label-text">Time:</label>
                <div className="time-buttons">
                  {["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelection(time)}
                      className={`time-button ${selectedTime === time ? "selected" : ""}`}
                    >
                      <span className="time-text">{time.split(" ")[0]}</span>
                      <span className="time-period">{time.split(" ")[1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {showDetailsForm && (
            <form className="details-form" onSubmit={handleFormSubmit}>
              <h3 className="form-title">Your Details</h3>
              <div className="row">
                <div className="column">
                  <label className="label-text" htmlFor="name">Name:</label>
                  <input type="text" id="name" className="input-field" placeholder="Your Name" required />
                </div>
                <div className="column">
                  <label className="label-text" htmlFor="partySize">Party Size:</label>
                  <input
                    type="number"
                    id="partySize"
                    className="input-field"
                    placeholder="2"
                    required
                    min={1}
                    max={20}
                    onInput={(e) => {
                      let val = parseInt(e.target.value, 10);
                      if (isNaN(val) || val < 1) {
                        e.target.value = 1;
                      } else if (val > 20) {
                        e.target.value = 20;
                      }
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label className="label-text" htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="input-field"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
                <div className="column">
                  <label className="label-text" htmlFor="seating">Seat:</label>
                  <select id="seating" className="input-field">
                    <option value="farm-view">Farm View</option>
                    <option value="garden-table">Garden Table</option>
                    <option value="patio">Patio</option>
                    <option value="greenhouse">Greenhouse</option>
                    <option value="fresh-breeze">Fresh Breeze</option>
                  </select>
                </div>
                <div className="column">
                  <label className="label-text" htmlFor="location">Location:</label>
                  <select id="location" className="input-field" required defaultValue="">
                    <option value="" disabled>Choose a location</option>
                    <option value="Tulsa">Tulsa</option>
                    <option value="Oklahoma City">Oklahoma City</option>
                    <option value="Edmond">Edmond</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <label className="label-text" htmlFor="notes">Notes:</label>
                <textarea id="notes" className="input-field" rows="2" placeholder="Any special requests..." />
              </div>
              <button type="submit" className="form-btn">Reserve Now</button>
            </form>
          )}
        </>
      )}

      {isConfirmed && (
        <div className="confirmation">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
              10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
              8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 
              14.17l-2.59-2.58L6 13l4 4 8-8z" />
          </svg>
          <h3>Reservation Confirmed</h3>
          <p>
            Thank you! Your reservation information has been sent to your
            email, and your reservation number is <b>{generateReservationNumber()}</b>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Reserve;
