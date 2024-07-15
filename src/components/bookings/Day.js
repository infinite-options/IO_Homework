import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Day = ({ day, date, setDate}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = ()=> {
        setIsClicked(prevState => !prevState);
        setDate(date)
    };

    return (
        <Button
            onClick={handleClick}
            sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: "5px",
                display: "inline-block",
                padding: "2px 5px",
                minWidth: "auto", 
                minHeight: "50px",
                textTransform: "none" 
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Source Sans 3",
                    fontWeight: "600",
                    fontSize: "11px",
                    color: "#160449"
                }}
            >
                {day} {date}
            </Typography>
        </Button>
    );
}

export default Day;
