import { Box, Button, Grid, Typography } from "@mui/material";

const CreateBooking = ({title,type,background, fullDate, time, num}) => {
    const date = fullDate.slice(0,3) + fullDate.slice(-6);
    console.log(type)
    return (
        <Box sx={{backgroundColor:{background}, padding:"10px", marginTop:"10px", borderRadius:"10px",}}>
            <Typography sx={{textAlign:"left", fontWeight:"700", fontSize:"20px", fontFamily:"Source Sans 3", color:"#160449"}}>{title}</Typography>
            <Box sx={{backgroundColor:"#FFFFFF", borderRadius:"10px",padding:'5px'}}>
                <Grid container justifyContent="center" sx={{marginTop:"10px"}}>
                    <Grid item xs={1.5}>
                        <Box sx={{position:"relative", display:"inline-block"}}>
                            <img src={type}></img>
                            <Typography sx={{position:"absolute", top:10, left:10, fontSize:"20px", fontWeight:"700", fontFamily:"Source Sans 3", color:"#160449"}}>{num}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography noWrap sx={{color:"#160449", fontSize:"14px", fontWeight:"600", fontFamily:"Source Sans 3"}}>{date} , {time} - {time}</Typography>
                    </Grid>
                    <Grid item xs={1.5} sx={{backgroundColor:"#D9D9D9", paddingLeft:"5px", borderRadius:"5px"}}>
                        <Typography sx={{color:"#160449", fontSize:"11px", fontWeight:"600", fontFamily:"Source Sans 3"}}>IN</Typography>
                        <Typography sx={{color:"#160449", fontSize:"15px", fontWeight:"bold", fontFamily:"Source Sans 3"}}>40</Typography>
                        <Typography sx={{color:"#160449", fontSize:"11px", fontWeight:"600", fontFamily:"Source Sans 3"}}>MIN</Typography>
                    </Grid>
                    <Grid item xs={8.5} sx={{backgroundColor:"#160449", borderRadius:"5px", marginTop:"-30px"}}>
                        <Button sx={{color:"white", padding:"0", fontSize:"15px", fontFamily:"Source Sans 3", fontWeight:"700"}}>Cancel Booking</Button>
                    </Grid>
                    <Grid item xs={8.5} sx={{backgroundColor:"#A52A2A", borderRadius:"5px", marginTop:"8px"}}>
                        <Button sx={{color:"white", padding:"0", fontSize:"10px", fontFamily:"Source Sans 3", fontWeight:"600", textTransform:"none"}}>Report an Issue</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
 
export default CreateBooking;