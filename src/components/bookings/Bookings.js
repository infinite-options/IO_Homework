import { Box, Button, Grid, Typography } from "@mui/material";
import Washer from "./Washer";
import Dryer from "./Dryer";
import Clubhouse from "./Clubhouse";
import BBQ from "./BBQ";
import CreateBooking from "../createbooking/CreateBooking";
import { useState } from "react";

const Bookings = () => {
    const [available, setAvailable] = useState(false);
    const [bookings, setBookings] = useState([])
    const handleClick = (title, type, background, date, time, num) => {
        setBookings([...bookings , <CreateBooking title={title} type={type} background={background} fullDate={date} time={time} num={num} />])
    }
    return (
        <Box sx={{backgroundColor:"#ECEBEB", borderRadius:"10px", marginLeft:"4%", marginRight:"4%", marginTop:"5%", padding:"20px", marginBottom:"100px    "}}>
            {available === true &&
            <Typography sx={{fontFamily:"20px", fontSize:"20px", fontWeight:"700", fontSize:"20px", color:"#160449"}}>SELECT A SERVICE & DATE</Typography>}
            {available === false &&
            <Typography sx={{fontFamily:"20px", fontSize:"20px", fontWeight:"700", fontSize:"20px", color:"#160449"}}>MANAGE YOUR BOOKINGS</Typography>}
            <Grid container sx={{marginTop:"10px"}}>
                <Grid item xs={6} sx={{backgroundColor:"#3D5CAC", borderRadius:"10px", paddingBottom:"15px"}}>
                    <Button onClick={() => setAvailable(true)} sx={{color:"white", fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"14px", whiteSpace:"nowrap", textTransform:"none"}}>Available Bookings</Button>
                </Grid>
                <Grid item xs={6} sx={{backgroundColor:"#160449", borderRadius:"10px"}}>
                    <Button onClick={() => setAvailable(false)} sx={{color:"white", fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"14px", textTransform:"none"}}>Your Bookings</Button>
                </Grid>
            </Grid>
            {available === true &&
            <Grid container>
                <Grid item xs={12} sx={{marginTop:"10px"}}>
                    <Washer addBooking={handleClick} />
                </Grid>
                <Grid item xs={12} sx={{marginTop:"10px"}}>
                    <Dryer addBooking={handleClick} />
                </Grid>
                <Grid item xs={12} sx={{marginTop:"10px"}}>
                    <Clubhouse addBooking={handleClick} />
                </Grid>
                <Grid item xs={12} sx={{marginTop:"10px"}}>
                    <BBQ addBooking={handleClick} />
                </Grid>
            </Grid>}
            {available === false && bookings.length === 0 &&
            <Typography sx={{color:"#A52A2A", fontSize:"30px", fontFamily:"Source Sans 3", fontWeight:"700", paddingBottom:"100%", paddingTop:"20px"}}>You haven't booked anything yet...</Typography>
            }
            {available === false && bookings.map((booking)=> (booking))}
            
        </Box>
    );
}
 
export default Bookings;