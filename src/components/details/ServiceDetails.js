import { Box, Button, Checkbox, Dialog, DialogContent, Grid, Paper, Typography } from "@mui/material";
import Day from "./Day";
import { useState } from 'react';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DisplayTenant from "../admin/DisplayTenant";

const ServiceDetails = ({title, persons, maintenanceHours}) => {
    const [showDayDialog, setShowDayDialog] = useState(false);
    const [showRebookDialog, setShowRebookDialog] = useState(false);
    const [showMaintenance, setShowMaintenance] = useState(false);

    let times = ["9:00 AM"];
    let hours = 9;
    let minutes = 0;
    let period = "AM";
    
    for (let i = 0; i < 19; i++) {
        minutes += 30;
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        if (hours === 12 && minutes === 0) {
            period = period === "AM" ? "PM" : "AM";
        }
        if (hours === 13) {
            hours = 1;
        }
        let formattedTime = `${hours}:${minutes === 0 ? "00" : minutes} ${period}`;
        times.push(formattedTime);
    }


    let background = "#D6D5DA"
    
    if (title[0]=== "W") {
        background="#79CBF9"
    }
    else if(title[0]==="D") {
        background="#7CEBDE"
    }
    else if(title[0]==="C") {
        background="#D893F9"
    }
    else if(title[0]==="B") {
        background="#FE9A9A"
    }

    const handleDayClick =()=> {
        setShowDayDialog(true);
    }
    
    const handleRebookClick = () => {
        setShowRebookDialog(true);
    }

    const handleCloseDialog = () => {
        setShowDayDialog(false); 
        setShowRebookDialog(false);  
    }

    const handleMaintenanceClick = () => {
        setShowMaintenance(!showMaintenance)
    }

    return (
        <Box sx={{backgroundColor:"white", borderRadius:"10px", marginLeft:"25px", marginRight:"25px", height:"90%"}}> 
            <Grid container justifyContent="center">
                <Grid container item xs={6} justifyContent="center" alignItems="center" >
                    <Grid item xs={2} container justifyContent="flex-end" sx={{marginLeft:"-15px"}} onClick={handleDayClick}>
                        <img src="date.png"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{color:"#3D5CAC", fontSize:"20px", fontWeight:"700", fontFamily:"Source Sans 3"}}>
                            Select Days
                        </Typography>
                    </Grid>
                    <Grid item xs={1} container justifyContent="flex-end" onClick={handleRebookClick}>
                        <img src="rebook.png"></img>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography sx={{color:"#3D5CAC", fontSize:"20px", fontWeight:"700", fontFamily:"Source Sans 3"}}>
                            Rebook Tenants
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" item xs={12} spacing={2}>
                    <Grid item xs={4} container justifyContent="flex-end">
                        <Button sx={{backgroundColor:'#D6D5DA', height:"28px"}}><img src="plus2.png"></img>
                        <Typography sx={{textTransform:"none",color:"#8E8E8E", fontSize:'15px', fontWeight:'700', fontFamily:"Source Sans 3", marginLeft:"20px", marginRight:"20px"}}>Closed Hours</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4} container>
                        <Button sx={{backgroundColor:'#D6D5DA', height:"28px"}} onClick={handleMaintenanceClick}><img src="plus2.png"></img>
                            <Typography sx={{textTransform:"none",color:"#8E8E8E", fontSize:'15px', fontWeight:'700', fontFamily:"Source Sans 3", marginLeft:"10px", marginRight:"5px"}}>Maintenance Hours</Typography>
                        </Button>
                    </Grid>
                    <Grid container>
                        <Grid container item xs={1.5} sx={{marginTop:"80px", mb:"-20px"}}>
                            {times.map((time) => (
                                <Grid item xs={12}>
                                    <Typography sx={{fontFamily:"Source Sans 3", color:"#160449", fontSize:"15px", fontWeight:"600"}}>{time}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container item xs={10.5}>
                            <Grid container item sx={{backgroundColor:background, borderRadius:'10px 10px 0px 0px', padding:"10px", width:"93%", marginTop:"10px", justifyContent:"space-around"}}>
                                <Grid item sx={{ width:"60px", borderRadius:"30px"}}>
                                    <Typography sx={{color:"#160449", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>SUN</Typography>
                                    <Typography sx={{color:"#160449", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>23</Typography>
                                </Grid>
                                <Grid item sx={{ width:"60px", borderRadius:"30px"}}>
                                    <Typography sx={{color:"#160449", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>MON</Typography>
                                    <Typography sx={{color:"#160449", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>24</Typography>
                                </Grid>
                                <Grid item sx={{ width:"60px", borderRadius:"30px"}}>
                                    <Typography sx={{color:"#160449", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>TUE</Typography>
                                    <Typography sx={{color:"#160449", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>25</Typography>
                                </Grid>
                                <Grid item sx={{ width:"60px", borderRadius:"30px", backgroundColor:"#160449"}}>
                                    <Typography sx={{color:"white", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>WED</Typography>
                                    <Typography sx={{color:"white", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>26</Typography>
                                </Grid>
                                <Grid item sx={{ width:"60px", borderRadius:"30px"}}>
                                    <Typography sx={{color:"#160449", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>THUR</Typography>
                                    <Typography sx={{color:"#160449", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>27</Typography>
                                </Grid>
                                <Grid item sx={{ width:"60px", borderRadius:"30px"}}>
                                    <Typography sx={{color:"#160449", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>FRI</Typography>
                                    <Typography sx={{color:"#160449", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>28</Typography>
                                </Grid>
                                <Grid item sx={{ width:"60px", borderRadius:"30px"}}>
                                    <Typography sx={{color:"#160449", fontSize:'15px', fontFamily:'Source Sans 3', fontWeight:'600', mb:"-12px"}}>SAT</Typography>
                                    <Typography sx={{color:"#160449", fontSize:'30px', fontFamily:"Source Sans 3", fontWeight:"600"}}>29</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item sx={{width:"93%"}}>
                                <Day />
                                <Day />
                                <Day />
                                <Day persons={persons} maintenanceHours={maintenanceHours} showMaintenance={showMaintenance} />
                                <Day />
                                <Day />
                                <Day />
                            </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
            <Dialog open={showDayDialog} onClose={handleCloseDialog}>
                <DialogContent sx={{borderStyle:"solid", width:"320px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={5} alignItems="center" justifyContent="flex-end" container>
                            <img src="date2.png"></img>
                        </Grid>
                        <Grid item container xs={7} alignItems="center">
                            <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#160449"}}>Select Days</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" sx={{marginTop:"15px"}}>
                        <Grid item xs={3} sx={{borderRadius:"10px", backgroundColor:"#F2F2F2", marginLeft:"5px", marginRight:"5px", boxShadow:"0px 5px 5px rgb(0 0 0 / 20%)"}} container justifyContent="center">
                            <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#435DAE", padding:"2px"}}>2023</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{borderRadius:"10px", backgroundColor:"#160449", marginLeft:"5px", marginRight:"5px", boxShadow:"0px 5px 5px rgb(0 0 0 / 20%)"}} container justifyContent="center">
                            <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"white", padding:"2px"}}>2024</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{borderRadius:"10px", backgroundColor:"#F2F2F2", marginLeft:"5px", marginRight:"5px", boxShadow:"0px 5px 5px rgb(0 0 0 / 20%)"}} container justifyContent="center">
                            <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#435DAE", padding:"2px"}}>2025</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginTop:"20px"}}>
                        <Grid item xs={5} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>January</Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>July</Typography>
                        </Grid>
                        <Grid item xs={5} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>February</Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>August</Typography>
                        </Grid>
                        <Grid item xs={5} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>March</Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>September</Typography>
                        </Grid>
                        <Grid item xs={5} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>April</Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>October</Typography>
                        </Grid>
                        <Grid item xs={5} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>May</Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>November</Typography>
                        </Grid>
                        <Grid item xs={5} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>June</Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-start">
                            <Typography sx={{color:"#3D5CAC", fontFamily:"Source Sans 3", fontWeight:"600", fontSize:"20px"}}>December</Typography>
                        </Grid>
                        
                    </Grid>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                    <Grid container justifyContent="center" sx={{marginTop:"-40px"}}>
                        <Grid item xs={6} container justifyContent="flex-end">
                            <Button>
                                <Typography sx={{color:"black", fontSize:"14px", fontFamily:"Source Sans 3", fontWeight:'600', textTransform:"none", backgroundColor:"#CB8E8E", padding:"2px 30px 2px 30px", borderRadius:"8px"}}>Undo All</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleCloseDialog}>
                                <Typography sx={{color:"black", fontSize:"14px", fontFamily:"Source Sans 3", fontWeight:'600', textTransform:"none", backgroundColor:"#9EAED6", width:"115px", borderRadius:"8px", padding:"2px 0px 2px 0px"}}>Save</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Dialog open={showRebookDialog} close={handleCloseDialog}>
                <DialogContent sx={{width:"450px", borderStyle:'solid'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4.5} alignItems="center" justifyContent="flex-end" container>
                            <img src="rebook2.png"></img>
                        </Grid>
                        <Grid item container xs={7} alignItems="center">
                            <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#160449"}}>Rebook Tenants</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{fontFamily:"Source Sans 3", fontSize:'30px', fontWeight:'700', color:'#160449'}}>Wednesday, 06/26</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={1} container sx={{marginTop:"-10px"}}>
                                <Checkbox />
                            </Grid>
                            <Grid item xs={7} container>
                                <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>Name</Typography>
                            </Grid>
                            <Grid item xs={4} container>
                                <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>Booked Time</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        {persons.map(person => (
                                    <DisplayTenant person={person}/>
                                ))}
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={6} container justifyContent="flex-end">
                            <Button>
                                <Typography sx={{color:"black", fontSize:"14px", fontFamily:"Source Sans 3", fontWeight:'600', textTransform:"none", backgroundColor:"#CB8E8E", padding:"2px 30px 2px 30px", borderRadius:"8px", width:"196px"}}>Undo All</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleCloseDialog}>
                                <Typography sx={{color:"black", fontSize:"14px", fontFamily:"Source Sans 3", fontWeight:'600', textTransform:"none", backgroundColor:"#9EAED6", width:"196px", borderRadius:"8px", padding:"2px 0px 2px 0px"}}>Save & Continue</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
 
export default ServiceDetails;