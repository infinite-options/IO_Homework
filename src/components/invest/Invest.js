import React from 'react';
import Navbar from "../navbar/Navbar";
import Benefits from "./Benefits";
import Returns from './Returns';
import Quote from './Quote';
import { Box, Grid, Typography } from '@mui/material';
import Form from '../Form';
import Footer from '../footer/Footer';

const Invest = () => {
    return (
        <div>
            <Navbar />
            <Grid container spacing={2} sx={{ paddingLeft:'5%', paddingRight:'5%', marginTop:'50px', marginBottom:'150px'}}>
                <Grid item xs={12}>
                    <Typography variant="h1" style={{ fontFamily: 'Nunito', fontSize: 40, fontWeight: 'bold' }}>
                        Why Invest With Us?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} sx={{marginTop:'50px'}}>
                    <Benefits image="global.png" header="One global login" text="Skip the login nightmare for all your different accounts, instead, see everything from one login." />
                </Grid>
                <Grid item xs={12} sm={4} sx={{marginTop:'50px'}}>
                    <Benefits image="link.png" header="Real-time link" text="Go from delayed and inaccurate information to one, real time dashboard." />
                </Grid>
                <Grid item xs={12} sm={4} sx={{marginTop:'50px'}}>
                    <Benefits image="reporting.png" header="Reporting, solved" text="Easily create beautiful, custom reports on your balances, cash-flows and transactions" />
                </Grid>
            </Grid>
            <Returns />
            <Quote />
            <Box sx={{backgroundColor:"#F5F5F5", padding:"120px"}}>
            <Typography sx={{fontSize:"24px", mb:"50px", fontWeight:"500"}}>Need Assistance With Designing Or Planning The Shed Of Your Dreams? Fill Out This Form And One Of Our Experets Will Be In Touch With You Shortly To Set Up A Complimentary Phone Consultation</Typography>
                <Form />
            </Box>
            <Footer />
        </div>
    );
}

export default Invest;
