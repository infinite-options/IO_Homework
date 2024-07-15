import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import Available from "./Available";
import Day from "./Day";
import Times from "./Times";
import { useEffect, useState } from "react";
import DryerDetails from "./DryerDetails";
const Dryer = ({addBooking}) => {
    const [show, setShow] = useState(false);
    const [selectedTime, setSelectedTime] = useState("");
    const [dryerNum, setDryerNum] = useState(0)
    const [date, setDate] = useState("")
    const [times, setTimes] = useState("")
    const [fullDate, setFullDate] = useState("")


    const handleSelectedTime = (time) => {
        setSelectedTime(time)
    }
    const handleClick = (num, fullDate) => {
        setShow((show)=> !show);
        setDryerNum(num);
        setFullDate(fullDate);
    }

    const [showDialog, setShowDialog] = useState(false);

    const handleScheduleClick = () => {
        setShowDialog(true);
    }

    const handleCloseDialog = () => {
        setShowDialog(false);
        addBooking("Dryers", "dryer.png", "#7CEBDE", fullDate, selectedTime, dryerNum)
    }

    useEffect(() => {
        if (show) {
            setTimes(
                <Grid container justifyContent="center">
                    <Grid item>
                        <Times setTime={handleSelectedTime} selectedTime={selectedTime} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleScheduleClick} sx={{ backgroundColor: "#B3B3B3", width:"100%", height:"22px", marginTop:"10px", color:"#160449", fontSize:"15px", textTransform:"none", fontWeight:"600", fontFamily:"Source Sans 3" }}>
                            Schedule
                        </Button>
                    </Grid>
                </Grid>
            );
        } else {
            setTimes("");
        }
    }, [show, selectedTime]);

    const [selected, setSelected] = useState("#FFFFFF");
    const handleSelected = () => {
        if (selected === "#FFFFFF") {
            setSelected("#160449");
        }
        else {
            setSelected("#FFFFFF");
        }
    }

    const num_dryers = 2
    const details = []
    const dates = [
        "WEDNESDAY 06/12",
        "THURSDAY 06/13",
        "FRIDAY 06/14",
        "SATURDAY 06/15",
        "SUNDAY 06/16",
        "MONDAY 06/17",
        "TUESDAY 06/18"
      ];
      
    for (let i=0; i < num_dryers;i++) {
        details.push(<DryerDetails index={i+1} dates={dates} setDate={setDate} handleClick={handleClick} dryerNum={dryerNum} times={times} />)
    }

    return (
        <Box>
            <Accordion sx={{backgroundColor: "#7CEBDE"}}>
                <AccordionSummary expandIcon={<img src="arrow.png" alt="expand" />}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography sx={{ fontSize: "20px", fontWeight: "700", fontFamily: "Source Sans 3", color:"#160449", marginTop:"-10px"}}>
                                Dryer
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Available text="Available Now" background="#76B148" />
                        </Grid>
                    </Grid>
                </AccordionSummary>
                {details}
            </Accordion>
            <Dialog open={showDialog} onClose={handleCloseDialog}>
                <DialogContent sx={{borderStyle:"solid", borderWidth:"5px", borderRadius:"5px"}}>
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#160449", textAlign:"center"}}>You have scheduled a booking for</Typography><br />
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#3D5CAC", textAlign:"center"}}>Drying Machine #{dryerNum}</Typography>
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#160449", textAlign:"center"}}>on</Typography>
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#3D5CAC", textAlign:"center"}}>{date}</Typography>
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#3D5CAC", textAlign:"center"}}>from</Typography>
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#3D5CAC", textAlign:"center"}}>{selectedTime}</Typography><br />
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#160449", textAlign:"center"}}>A confirmation text has been sent to</Typography>
                    <Typography sx={{fontFamily:"Source Sans 3", fontWeight:"700", fontSize:"20px", color:"#3D5CAC", textAlign:"center"}}>(123)456-7890</Typography><br />
                    <Button onClick={handleCloseDialog} sx={{backgroundColor:'#76B148', color:"white", width:"100%", height:"25px"}}>OK</Button>
                    <Button onClick={handleCloseDialog} sx={{ backgroundColor: '#A52A2A', color: "#FFFFFF", width:"100%", height:"25px", marginTop:"10px" }}>Resend</Button>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Dryer;
