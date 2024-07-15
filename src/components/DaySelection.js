import React, { useState } from "react";
import { Grid, Stack, Box } from '@mui/material';
import WeekdayButton from "./WeekdayButton";
import TimeGrid from "./TimeGrid";

export default function DaySelection({ iconSrc, machineName  }) {

    const currentDate = new Date();
    const currWeek = [];
    const weekArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    for (let i = 0; i < 7; i++) {
        let tempDate = new Date(currentDate);
        tempDate.setDate(currentDate.getDate() + i);
        currWeek.push(tempDate);
    }

    const [selectedDateIndex, setSelectedDateIndex] = useState(null);

    const handleWeekdaySelect = (index) => {
        if (selectedDateIndex === index) {
            setSelectedDateIndex(null); 
        } else {
            setSelectedDateIndex(index); 
        }
    }

    const selectedDate = selectedDateIndex !== null ? currWeek[selectedDateIndex] : null;
    
    return (
        <Box style={{ backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px' }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                        container
                        spacing={0.5}
                        padding={'0px'}
                    >
                        <img src={iconSrc} alt='icon' /> 
                        {currWeek.map((weekday, index) => (
                            <div key={weekday.toDateString()} onClick={() => handleWeekdaySelect(index)}>
                                <WeekdayButton
                                    WeekDay={weekArr[weekday.getDay()]}
                                    Month={weekday.getMonth() + 1}
                                    Date={weekday.getDate()}
                                    Year={weekday.getFullYear()}
                                    isSelected={selectedDateIndex === index}
                                />
                            </div>
                        ))}
                    </Stack>
                </Grid>
                <Box display={selectedDateIndex !== null ? 'block' : 'none'}>
                    <TimeGrid selectedDate={selectedDate} machineName={machineName} machineIcon={iconSrc} />
                </Box>
            </Grid>
        </Box>
    );
}
