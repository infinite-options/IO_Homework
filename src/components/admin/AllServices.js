import { Accordion, AccordionActions, AccordionSummary, Box, Button, Grid, Typography } from "@mui/material";
import WasherBookings from "./WasherBookings";
import DryerBookings from "./DryerBookings";
import ClubhouseBookings from "./ClubhouseBookings";
import BbqBookings from "./BbqBookings";
import ServiceDetails from "../details/ServiceDetails";
import { useState } from "react";

const AllServices = () => {
    const washerPersonsOne = [
        {name:'Robert Smith', start:"10 AM", end:"11 AM", status:"Complete"},
        {name:'Steve Albini', start:"11:30 AM", end:"12:30 PM", status:"Complete"},
        {name:'Thom Yorke', start:"1 PM", end:"2 PM", status:"Incomplete"},
        {name:'Brian Wilson', start:"5:30 PM", end:"6:30 PM", status:"-"},
    ]

    const dryerPersonsOne = [
        {name:'Robert Smith', start:"9 AM", end:"10 AM", status:"Complete"},
        {name:'Steve Albini', start:"10:30 AM", end:"11:30 AM", status:"Complete"},
        {name:'Thom Yorke', start:"3 PM", end:"4 PM", status:"Incomplete"},
        {name:'Brian Wilson', start:"5:30 PM", end:"6:30 PM", status:"Incomplete"},
        {name:'Victor Lai', start:"4 PM", end:"5 PM", status:"-"},
    ]
    
    const maintenanceHours = [
        {name: null, start:"2:00 PM", end:"4:00 PM", status:"Maintenance"}
    ]
    

    const [title, setTitle] = useState(["Service Details"])
    const [persons, setPersons] = useState([])

    return (
        <Grid container>
            <Grid item xs={4} container sx={{marginLeft:"25px",marginTop:"20px", marginRight:"30px",borderRadius:"10px",backgroundColor:"#F2F2F2", justifyContent:"center", alignItems:"center"}}>
                <Grid item xs={10}>
                    <Typography sx={{fontSize:"35px", fontFamily:"Source Sans 3", fontWeight:"700"}}>All Services</Typography>
                </Grid>
                <Grid item xs={2}>
                    <img src="plus.png"></img>
                </Grid>
                <Grid item container xs={12} sx={{backgroundColor:"#79CBF9", marginLeft:"20px", marginRight:"20px", borderRadius:"5px", mb:'5px'}}>
                    <Grid item xs={12} container >
                        <Typography sx={{color:"white", fontSize:"25px", fontWeight:"700", fontFamily:"Source Sans 3", marginLeft:"15px"}}>Washers</Typography>
                        <Typography sx={{color:"#A52A2A", fontSize:"25px", fontWeight:"700", fontFamily:"Source Sans 3"}}>(1 Reported Issue)</Typography>
                    </Grid>
                    <WasherBookings numBookings="9" washerNum="1" utilization="87" persons={washerPersonsOne} setTitle={setTitle} setPersons={setPersons} />
                    <WasherBookings numBookings="5" washerNum="2" utilization="55" persons={washerPersonsOne} setTitle={setTitle} setPersons={setPersons} />
                    <WasherBookings numBookings="5" washerNum="3" utilization="20" persons={washerPersonsOne} setTitle={setTitle} setPersons={setPersons} />
                </Grid>
                <Grid item container xs={12} sx={{backgroundColor:"#7CEBDE", marginLeft:"20px", marginRight:"20px", borderRadius:"5px", mb:'5px'}}>
                    <Grid item xs={12} container >
                        <Typography sx={{color:"white", fontSize:"25px", fontWeight:"700", fontFamily:"Source Sans 3", marginLeft:"15px"}}>Dryers</Typography>
                        <Typography sx={{color:"#A52A2A", fontSize:"25px", fontWeight:"700", fontFamily:"Source Sans 3"}}>(1 Reported Issue)</Typography>
                    </Grid>
                    <DryerBookings numBookings="9" dryerNum="1" utilization="87" persons={dryerPersonsOne} setTitle={setTitle} setPersons={setPersons} />
                    <DryerBookings numBookings="5" dryerNum="2" utilization="55" persons={dryerPersonsOne} setTitle={setTitle} setPersons={setPersons} />
                </Grid>
                <Grid item container xs={12} sx={{backgroundColor:"#D893F9", marginLeft:"20px", marginRight:"20px", borderRadius:"5px", mb:'5px'}}>
                    <Grid item xs={12} container >
                        <Typography sx={{color:"white", fontSize:"25px", fontWeight:"700", fontFamily:"Source Sans 3", marginLeft:"15px"}}>Clubhouse</Typography>
                    </Grid>
                    <ClubhouseBookings numBookings={1} utilization="55" setTitle={setTitle} setPersons={setPersons} />
                </Grid>
                <Grid item container xs={12} sx={{backgroundColor:"#FE9A9A", marginLeft:"20px", marginRight:"20px", borderRadius:"5px", mb:'5px'}}>
                    <Grid item xs={12} container >
                        <Typography sx={{color:"white", fontSize:"25px", fontWeight:"700", fontFamily:"Source Sans 3", marginLeft:"15px"}}>BBQ Grill</Typography>
                    </Grid>
                    <BbqBookings numBookings={0} utilization="20" setTitle={setTitle} setPersons={setPersons} />
                </Grid>
                
            </Grid>
            <Grid item xs={7.3}>
                <Box sx={{backgroundColor:"#F2F2F2", borderRadius:"5px", height:"100%"}}>
                    <Typography sx={{color:"#160449", fontSize:"35px", fontWeight:'700', fontFamily:'Source Sans 3', marginTop:"20px", padding:"15px"}}>{title}</Typography>
                    <ServiceDetails title={title} persons={persons} maintenanceHours={maintenanceHours} />
                </Box> 
            </Grid>
        </Grid>
    );
}
 
export default AllServices;