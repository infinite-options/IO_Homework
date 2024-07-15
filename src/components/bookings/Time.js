import { Button, Typography } from "@mui/material";

const Time = ({ time, setTime, selectedTime }) => {
    const handleClick = () => {
        setTime(time)
    }
    return (
        <Button onClick={handleClick}
            sx={{
                backgroundColor:"#FFFFFF",
                borderRadius: "5px",
                height:"20px",
                paddingLeft:"0px",
                paddingRight:"0px",
                minWidth:"60px"
            }}
        >
            <Typography
                sx={{
                    color: "#160449",
                    fontWeight: "600",
                    fontFamily: "Source Sans 3",
                    fontSize: "11px",
                    whiteSpace: "nowrap",
                }}
            >
                {time}
            </Typography>
        </Button>
    );
};

export default Time;
