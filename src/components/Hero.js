import React, { useState } from "react";
import WasherAccordion from "./WasherAccordion";
import DryerAccordion from "./DryerAccordion";
import ClubhouseAccordion from "./ClubhouseAccordion";
import BBQgrillAccordion from "./BBQgrillAccordion";
import YourBookingsInfo from "./YourBookingsInfo"; 

export default function Hero() {
  const [showBookings, setShowBookings] = useState(false);

  const handleShowBookings = () => {
    setShowBookings(true);
  };

  const handleShowAvailableBookings = () => {
    setShowBookings(false);
  };

  return (
    <div className="container">
      <section className="hero--content">
        <h2 className="hero--title">SELECT A SERVICE & DATE</h2>
        <div className="bookings--info">
          <button className="available--btn" onClick={handleShowAvailableBookings}>
            Available Bookings
          </button>
          <button className="booking-btn" onClick={handleShowBookings}>
            Your Bookings
          </button>
        </div>

        {showBookings ? (
          <YourBookingsInfo /> 
        ) : (
          <>
            <WasherAccordion />
            <DryerAccordion />
            <ClubhouseAccordion />
            <BBQgrillAccordion />
          </>
        )}
      </section>
    </div>
  );
}
