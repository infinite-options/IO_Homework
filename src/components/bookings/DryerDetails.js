import { AccordionDetails, Grid, Typography } from "@mui/material";
import Day from "./Day";

const DryerDetails = ({index, dates, setDate, handleClick, dryerNum, times}) => {
    return (
                <AccordionDetails sx={{ backgroundColor: "#F2F2F2", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", marginBottom:"15px" }}>
                    <Grid container sx={{justifyContent:"space-between"}}>
                        <Grid item sx={{position:"relative", display:"inline-block"}}>
                            <img src="dryer.png" alt="dryer" />
                            <Typography sx={{position:"absolute", top:"20%", left:"35%", fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px"}}>{index}</Typography>
                        </Grid>
                        {dates.map((date, date_index) => (
                            <Grid item xs={1} key={date_index} onClick={() => handleClick(index, date)}>
                                <Day day={date.slice(0,3)} date={date.slice(-5)} setDate={setDate} />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography sx={{textAlign:"left", color:"#76B148", fontSize:"11px", fontWeight:"600", fontFamily:"Source Sans 3"}}>Available Until 5 PM</Typography>
                    {dryerNum === index && times}
                </AccordionDetails>
    );
}
 
export default DryerDetails;