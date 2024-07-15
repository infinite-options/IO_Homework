import React from "react"
import { Grid, Stack} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DaySelection from "./DaySelection"
import AvailableButton from "./AvailableButton";
import washerIcon from "../images/LaundryIcon.png"


export default function WasherAccordion() {

    return (
        <Accordion style={{ backgroundColor: '#79CBF9', borderRadius: '10px', marginBottom:'10px', padding:'0px' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Grid container spacing={1} textAlign={'left'}>
                    <Grid item xs={40}>
                        <h2 style={{padding:'0px',margin:'0px'}}>Washers</h2>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                        <AvailableButton isAvailable={true}></AvailableButton>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <DaySelection iconSrc={washerIcon}  machineName="Washer"/>
                    <DaySelection iconSrc={washerIcon}  machineName="Washer"/>
                    <DaySelection iconSrc={washerIcon} machineName="Washer" />
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}