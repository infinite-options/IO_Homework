import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import OrangeButton from "../OrangeButton";

const Estimate = () => {
    return (
        <Box id="estimate" sx={{ padding: { xs: '20px', sm: '40px' }, textAlign: 'center' }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ fontSize: { xs: '24px', sm: '32px' }, fontWeight: 'bold' }}>
                        Flexibility and options to suit your lifestyle.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src="room.png" alt="room" style={{ width: '100%', maxWidth: '600px' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        All models come with our distinctive features: a signature kitchen, a luxurious bathroom with a walk-in shower, a combo washer dryer, and ample built-in storage. Customize amenities to suit your preferences.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: 'grey', fontSize: { xs: '12px', sm: '14px' } }}>
                        Custom built and fully installed for as little as $120,000 or $1,111/mo
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <OrangeButton text="Get A Free Estimate" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Estimate;
