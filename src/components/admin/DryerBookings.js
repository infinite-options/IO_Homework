import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, Typography } from "@mui/material";
import DisplayPerson from "./DisplayPerson";

const DryerBookings = ({numBookings, dryerNum, utilization, persons, setTitle, setPersons}) => {
    const handleClick=()=> {
        setTitle("Dryer Machine #" + dryerNum)
        setPersons(persons)
        console.log(persons)
    }
    if (!persons) {
        persons=[];
    }
    let utilizationBackground=""
    let frequent=""
    if(utilization <= 33) {
        utilizationBackground="#FF8A00";
        frequent="(Rarely or Never Used)";
    }
    if(utilization >33 && utilization <=66) {
        utilizationBackground="#D6B54F";
        frequent="(Moderately Used)";
    }
    if(utilization > 66) {
        utilizationBackground="#76B148";
        frequent="(Frequently Used)";
    }
    return (
                    <Grid item xs={12} container sx={{mb:"10px",justifyContent:"center"}}>
                        <Accordion onClick={handleClick} sx={{marginLeft:"15px", marginRight:"15px", width:"95%"}} >
                            <AccordionSummary expandIcon={<img src="arrow.png" alt="expand" />}>
                                <Grid item sx={{position:"relative", display:"inline-block"}}>
                                    <img src="washer.png" alt="washer" style={{height:"58px"}} />
                                    <Typography sx={{position:"absolute", top:"30%", left:"35%", fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"25px"}}>{dryerNum}</Typography>
                                </Grid>
                                <Grid item container direction="column"sx={{marginLeft:"20px", marginTop:"-5px"}}>
                                    <Grid item container justifyContent="flex-start">
                                        <Typography sx={{color:"#160449", fontSize:'15px', fontWeight:"600", fontFamily:"Source Sans 3"}}>{persons.length} Bookings Today</Typography>
                                    </Grid>
                                    <Grid item container justifyContent="flex-start">
                                        <Typography sx={{color:utilizationBackground, fontSize:'15px', fontWeight:"600", fontFamily:"Source Sans 3"}}>Utilization: {utilization}% {frequent}</Typography>
                                    </Grid>
                                    <Grid container justifyContent="flex-start">
                                        <Button sx={{color:"white", backgroundColor:"#CB8E8E", height:"18px"}}>+ Maintenance</Button>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Grid container>
                                    <Grid item xs={5} container>
                                        <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>Name</Typography>
                                    </Grid>
                                    <Grid item xs={5} container>
                                        <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>Booked Time</Typography>
                                    </Grid>
                                    <Grid item xs={2} container>
                                        <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>Status</Typography>
                                    </Grid> 
                                </Grid>
                                <Box></Box>
                                {persons.map(person => (
                                    <DisplayPerson person={person}/>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
    );
}
 
export default DryerBookings;