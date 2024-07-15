import React from 'react';
import { Button, Grid } from "@mui/material";

export default function WeekdayButton({ WeekDay, Month, Date, isSelected }) {
    return (
        <div className="WeekdayButton">
            <Button style={{
                borderRadius: '5px', 
                backgroundColor: isSelected ? '#160449' : '#D6D5DA', 
                color: isSelected ? "#FFFFFF" : '#160449', 
                fontSize: '11px', 
                padding: '2px', 
                minWidth: '0px', 
                fontWeight: '600'
            }}>
                <Grid container spacing={0.5} style={{ padding: '0px', width: '100%' }}>
                    <Grid item xs={12} style={{ padding: '0px' }}>
                        {WeekDay}
                    </Grid>
                    <Grid item xs={12}>
                        {`${Month}/${Date}`}
                    </Grid>
                </Grid>
            </Button>
        </div>
    )
}


