import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import ScheduleButton from "./ScheduleButton";
import BookingPopUp from "./BookingPopUp";

export default function TimeGrid({ selectedDate, machineName, machineIcon }) {
    const timeIntervals = [];
    const periods = ['am', 'pm'];

   
    for (let periodIndex = 0; periodIndex < 2; periodIndex++) {
        for (let hour = 0; hour < 12; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const period = periods[periodIndex];
                const hourDisplay = hour === 0 ? 12 : hour;
                const timeString = `${hourDisplay}:${minute.toString().padStart(2, '0')} ${period}`;
                timeIntervals.push(timeString);
            }
        }
    }

    const [selectedTimeslot, setSelectedTimeslot] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        selectedTimeslot: null,
        machine: machineName,
        time: "",
        date: selectedDate ? selectedDate.toDateString() : 'No date selected',
        phone: '(123) 456-7890',
        icon: machineIcon
    });

  
    useEffect(() => {
        setBookingDetails(prevDetails => ({
            ...prevDetails,
            date: selectedDate ? selectedDate.toDateString() : 'No date selected'
        }));
    }, [selectedDate]);

  
    const handleTimeslotSelect = (index) => {
        setSelectedTimeslot(index === selectedTimeslot ? null : index);
        setBookingDetails(prevDetails => ({
            ...prevDetails,
            selectedTimeslot: index === selectedTimeslot ? null : index,
            time: timeIntervals[index],
        }));
    };

  
    const handleSchedule = () => {
        if (selectedTimeslot !== null) {
            setPopupOpen(true);
            let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
            const newBooking = { ...bookingDetails };
            bookings.push(newBooking);
            localStorage.setItem("bookings", JSON.stringify(bookings));
        } else {
            console.log('No timeslot selected');
        }
    };


    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="TimeGrid">
            <Grid container spacing={0.5} style={{ marginTop: '10px', width: '100%' }}>
                {timeIntervals.map((time, index) => (
                    <Grid item xs={4} key={index} style={{ marginTop: '0px', width: '100%' }}>
                        <Button
                            variant={index === selectedTimeslot ? "contained" : "outlined"}
                            style={{
                                width: '100%',
                                height: '27px',
                                textTransform: 'none',
                                color: 'Black',
                                backgroundColor: '#D6D5DA',
                                borderRadius: '7px',
                                border: 'none',
                                fontSize: '12px',
                                marginLeft: '7px',
                            }}
                            onClick={() => handleTimeslotSelect(index)}
                        >
                            {time}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <ScheduleButton onClick={handleSchedule} />
            <BookingPopUp open={popupOpen} onClose={handleClosePopup} details={bookingDetails} />
        </div>
    );
}
