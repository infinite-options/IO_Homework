import { Box, Button, Grid } from "@mui/material";
import Time from "./Time";
import { useState } from "react";

const Times = ({setTime, selectedTime}) => {
    console.log("SELECTED TIME 3", selectedTime)
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const period = hour < 12 ? 'AM' : 'PM';
            const displayHour = hour % 12 === 0 ? 12 : hour % 12;
            const minutes = minute === 0 ? '00' : minute.toString();
            times.push(displayHour + ':' + minutes + ' ' + period);
        }
    }
    
    const display = times.map((time, index) => (
        <Grid item xs={3} key={index} sx={{mb:"-5px"}}>
            <Time time={time} setTime={setTime} selectedTime={selectedTime}/>
        </Grid>
    ));

    
    return (
        <Box>
            <Grid container spacing={1}>
                {display}
            </Grid>
        </Box>
    );
};

export default Times;
