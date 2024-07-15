import React, { useState, useEffect } from "react";
import './YourBookingsInfo.css';
import washerIcon from '../images/LaundryIcon.png';
import dryerIcon from '../images/DryerIcon.png';
import clubhouseIcon from '../images/ClubhouseIcon.png';
import BBQGrillIcon from '../images/BBQIcon.png';

export default function YourBookingsInfo() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const storedBookings = localStorage.getItem("bookings");
        if (storedBookings) {
            setBookings(JSON.parse(storedBookings));
        }
    }, []);

    const handleCancelBooking = (index) => {
        const updatedBookings = bookings.filter((_, i) => i !== index);
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    };

    const handleReportIssue = () => {
        alert("Issue reported! We will look into it.");
    };

    const getIconSrc = (machineType) => {
        switch (machineType) {
            case 'Washer':
                return washerIcon;
            case 'Dryer':
                return dryerIcon;
            case 'Clubhouse':
                return clubhouseIcon;
            case 'BBQGrill':
                return BBQGrillIcon;
            default:
                return washerIcon; 
        }
    };

    const getMachineClass = (machineType) => {
        switch (machineType) {
            case 'Washer':
                return 'booking-card-washer';
            case 'Dryer':
                return 'booking-card-dryer';
            case 'Clubhouse':
                return 'booking-card-clubhouse';
            case 'BBQGrill':
                return 'booking-card-BBQGrill';
            default:
                return 'booking-card-default'; 
        }
    };

    return (
        <>
            {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                    <div className={`booking-card ${getMachineClass(booking.machine)}`} key={index}>
                        <div className="booking-header">{booking.machine}</div>
                        <div className="booking-content">
                            <div className="booking-icon">
                                <img src={getIconSrc(booking.machine)} alt={booking.machine} />
                            </div>
                            <div className="booking-info">
                                <div className="booking-details">
                                    <p>{`${booking.date}, ${booking.time}`}</p>
                                </div>
                                <div className="booking-actions">
                                    <button className="cancel-btn" onClick={() => handleCancelBooking(index)}>Cancel Booking</button>
                                    <button className="report-btn" onClick={handleReportIssue}>Report an Issue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>You haven't made any bookings yet</p>
            )}
        </>
    );
}
