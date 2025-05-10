import React, { useState } from "react";
import "./Reserve.css";
import { assets } from "../../assets/assets";

const Reserve = () => {
  const [date, setDate] = useState("");
  const [isValidDate, setIsValidDate] = useState(true);
  const [selectedTime, setSelectedTime] = useState("");
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const today = new Date().toISOString().split("T")[0];

    setDate(selectedDate);
    if (selectedDate.length === 10) {
      if (selectedDate >= today) {
        setIsValidDate(true);
        setShowDetailsForm(false);
      } else {
        setIsValidDate(false);
      }
    } else {
      setIsValidDate(true);
    }
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowDetailsForm(true);
  };

  const handlePhoneChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 10) input = input.slice(0, 10);

    const formattedPhone = input.replace(
      /(\d{3})(\d{3})(\d{4})/,
      (match, p1, p2, p3) => `(${p1}) ${p2}-${p3}`
    );

    setPhone(formattedPhone);

    if (input.length === 10) {
      document.getElementById("seating").focus();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="reserve-container">
      <div className="top-section">
        {/* Left and Right Decorative Images */}
        {/* <img
          className="left-decor"
          src={assets.dots_bg}
          alt="Left Decor"
        /> */}

        {/* Main Section */}
        <img
          className="top-section-image"
          src={assets.reserve}
          alt="Beautiful Garden Seating"
        />
        {/* <img
          className="right-decor"
          src={assets.dots_bg}
          alt="right-decor"
        /> */}
        <div className="top-section-text">
          <h2>Plant Lovers Beloved Spot to Eat</h2>
          <p>
            Experience the serenity and charm of our garden seating area. Surrounded by lush greenery, this space offers
            a tranquil dining experience for you and your loved ones. A perfect blend of nature and cuisine awaits!
          </p>
        </div>
      </div>

      {!isConfirmed && (
        <>
          <div className="date-time-section">
            <div className="column">
              <label className="label-text" htmlFor="reservationDate">
                Date:
              </label>
              <input
                type="date"
                id="reservationDate"
                name="reservationDate"
                value={date}
                onChange={handleDateChange}
                className={`input-field ${!isValidDate ? "error" : ""}`}
              />
              {!isValidDate && (
                <p className="error-text">Please select a future date.</p>
              )}
            </div>

            {isValidDate && date && (
              <div className="column">
                <label className="label-text">Time:</label>
                <div className="time-buttons">
                  {["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].map(
                    (time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelection(time)}
                        className={`time-button ${selectedTime === time ? "selected" : ""
                          }`}
                      >
                        <span className="time-text">{time.split(" ")[0]}</span>
                        <span className="time-period">{time.split(" ")[1]}</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {showDetailsForm && (
            <div className="details-form">
              <h3 className="form-title">Your Details</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="column">
                    <label className="label-text" htmlFor="name">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="column">
                    <label className="label-text" htmlFor="partySize">
                      Party Size:
                    </label>
                    <input
                      type="number"
                      id="partySize"
                      name="partySize"
                      className="input-field"
                      placeholder="2"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label className="label-text" htmlFor="phone">
                      Phone:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="input-field"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  <div className="column">
                    <label className="label-text" htmlFor="seating">
                      Seat:
                    </label>
                    <select id="seating" name="seating" className="input-field">
                      <option value="farm-view">Farm View</option>
                      <option value="garden-table">Garden Table</option>
                      <option value="patio">Patio</option>
                      <option value="greenhouse">Greenhouse</option>
                      <option value="fresh-breeze">Fresh Breeze</option>
                    </select>
                  </div>
                  <div className="column">
                    <label className="label-text" htmlFor="location">
                      Location:
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="input-field"
                    >
                      <option value="" disabled selected>
                        Choose a location
                      </option>
                      <option value="Tulsa">Tulsa</option>
                      <option value="Oklahoma City">Oklahoma City</option>
                      <option value="Edmond">Edmond</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <label className="label-text" htmlFor="notes">
                    Notes:
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    className="input-field"
                    rows="2"
                    placeholder="Any special requests..."
                  ></textarea>
                </div>
                <button type="submit" className="form-btn">
                  Reserve Now
                </button>
              </form>
            </div>
          )}
        </>
      )}

      {isConfirmed && (
        <div id="reservationConfirmation" className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="text-green-500 mx-auto"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
            ></path>
          </svg>
          <h3 className="text-3xl font-semibold text-coolGray-900 mb-2">
            Reservation Confirmed
          </h3>
          <p className="text-coolGray-500 mb-4">
            Thank you! Your reservation has been confirmed.
          </p>
        </div>
      )}
    </div>
  );
};

export default Reserve;
