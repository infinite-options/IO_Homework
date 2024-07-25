import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, Typography, Checkbox, FormControlLabel } from '@mui/material';
import RebookIcon from "../images/rebooktenants.png";

export default function DialogBox({ open, onClose, bookings }) {
    
    const groupedBookings = bookings.reduce((acc, booking) => {
        if (!acc[booking.date]) {
            acc[booking.date] = [];
        }
        acc[booking.date].push({
            id: booking.id, 
            name: booking.name,
            bookedTime: `${booking.fromtime} - ${booking.totime}`
        });
        return acc;
    }, {});

    
    const [selectedBookings, setSelectedBookings] = useState({});

    const handleCheckboxChange = (date, id) => {
        setSelectedBookings(prev => ({
            ...prev,
            [date]: {
                ...prev[date],
                [id]: !prev[date]?.[id]
            }
        }));
    };

    const handleSubmit = () => {
        
        const selected = Object.entries(selectedBookings).flatMap(([date, ids]) =>
            Object.entries(ids)
                .filter(([id, isSelected]) => isSelected)
                .map(([id]) => ({ date, id }))
        );
        console.log("Selected bookings:", selected);
        
        onClose(); 
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="dialog--title">
                <img className="Dialogrebookimg" src={RebookIcon} alt='rebook' />
                <h2 className='Dialogrebooktext'>Rebook Tenants</h2>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    {Object.entries(groupedBookings).map(([date, bookingsForDate], index) => (
                        <Grid item xs={12} key={index}>
                            <Typography variant="h6" style={{ marginBottom: '10px' }}>{date}</Typography>
                            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                                <Grid item xs={6} style={{ fontWeight: 'bold' }}>Name</Grid>
                                <Grid item xs={6} style={{ fontWeight: 'bold' }}>Booked Time</Grid>
                                {bookingsForDate.map((booking) => (
                                    <React.Fragment key={booking.id}>
                                        <Grid item xs={6}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={!!selectedBookings[date]?.[booking.id]}
                                                        onChange={() => handleCheckboxChange(date, booking.id)}
                                                    />
                                                }
                                                label={booking.name}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>{booking.bookedTime}</Grid>
                                    </React.Fragment>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Save & Continue</Button>
            </DialogActions>
        </Dialog>
    );
}
