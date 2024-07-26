import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";

const Day = ({persons, maintenanceHours, showMaintenance, showClosed, closedHours}) => {
    const statusColors = {
        "Complete": "#C5EFA4",
        "Incomplete": "#F07B78",
        "-": "#435DAE",
        "Maintenance": "#A52A2A"
    };
    

    const intervals = new Array(19).fill(null).map(() => ({ status: null, color: "white", firstName: "", lastName:"",height: "31px" }));

    const getIndexFromTime = (time) => {
        const [hourMinute, period] = time.split(" ");
        let [hour, minute] = hourMinute.split(":").map(Number);
        if (period === "PM" && hour !== 12) {
            hour += 12;
        }
        if (period === "AM" && hour === 12) {
            hour = 0;
        }
        const totalMinutes = (hour * 60) + (minute || 0);
        const base = 9 * 60;
        return (totalMinutes - base) / 30;
    };
    if(persons) {
        persons.forEach(person => {
            let height = 0
            const startIndex = getIndexFromTime(person.start);
            const endIndex = getIndexFromTime(person.end);
            const [firstName, lastName] = person.name.split(" ")
            for(let i = startIndex; i < endIndex; i++) {
                height+=31;
            }
            const newHeight= String(height) + "px";
            let index=startIndex+1
            
            intervals[startIndex] = { status: person.status, color: statusColors[person.status], firstName: firstName, lastName: lastName, height:newHeight};
            while(index < endIndex) {
                intervals[index] = { status: person.status, color: statusColors[person.status], firstName: "", height:"0px"};
                index++;
            }
        });
    }
    if(showMaintenance) {
        maintenanceHours.forEach(hour => {
            let height = 0
            const startIndex = getIndexFromTime(hour.start);
            const endIndex = getIndexFromTime(hour.end);
            for(let i = startIndex; i < endIndex; i++) {
                height+=31;
            }
            const newHeight= String(height) + "px";
            let index=startIndex+1
            
            intervals[startIndex] = { status: hour.status, color: statusColors[hour.status], firstName: null, lastName: null, height:newHeight};
            while(index < endIndex) {
                intervals[index] = { status: hour.status, color: statusColors[hour.status], firstName: null, height:"0px"};
                index++;
            }
        });
    }
    
    return (
        <Grid container item xs={1.714} sx={{ width: "100%" }}>
            {intervals.map((interval, index) => (
                <Grid item xs={12} key={index} sx={{ borderStyle: "solid", borderColor: "rgba(0,0,0,.3)", borderWidth: "1px" }}>
                    <Paper sx={{ height: interval.height, backgroundColor: interval.color, display:'flex', justifyContent:"center", alignItems:"center"}}>
                        <Typography sx={{fontSize:"15px", color:"white", fontFamily:"Source Sans 3", fontWeight:"700"}}>{interval.firstName}<br/>{interval.lastName}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default Day;
