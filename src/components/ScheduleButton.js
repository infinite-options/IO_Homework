import React from "react";
import { Button } from "@mui/material";

const ScheduleButton = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            style={{ marginTop: '20px', width: '100%',marginLeft:'5px' }}
        >
            Schedule
        </Button>
    );
};

export default ScheduleButton;
