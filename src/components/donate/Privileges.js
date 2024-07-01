import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Privileges = () => {
    return (
        <Box>
            <Typography sx={{ fontSize: "40px", textAlign: "center", mb: "50px" }}>Donation Privileges</Typography>
            <Grid container xs={12} spacing={4}>
                <Grid item xs={12} sm={12} container alignItems="center">
                    <Grid item xs={12} sm={1} container justifyContent="center">
                        <img src="check.png" alt="Checkmark" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body1" fontWeight="bold" fontSize="26px">Donate $1000 - Your Name Brick In Patio</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} container alignItems="center">
                    <Grid item xs={12} sm={1} container justifyContent="center">
                        <img src="check.png" alt="Checkmark" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body1" fontWeight="bold" fontSize="26px">Donate $5000 - Your Name Brick with Engraving</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} container alignItems="center">
                    <Grid item xs={12} sm={1} container justifyContent="center">
                        <img src="check.png" alt="Checkmark" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body1" fontWeight="bold" fontSize="26px">Donate $10000 - Your Name Brick with Engraving</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} container alignItems="center">
                    <Grid item xs={12} sm={1} container justifyContent="center">
                        <img src="check.png" alt="Checkmark" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body1" fontWeight="bold" fontSize="26px">Donate $25000 - Your Name Brick In Engraving</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} container alignItems="center">
                    <Grid item xs={12} sm={1} container justifyContent="center">
                        <img src="check.png" alt="Checkmark" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body1" fontWeight="bold" fontSize="26px">Donate $50000 - Your Name Complex</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} container alignItems="center" sx={{ mb: "50px" }}>
                    <Grid item xs={12} sm={1} container justifyContent="center">
                        <img src="check.png" alt="Checkmark" />
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Typography variant="body1" fontWeight="bold" fontSize="26px">Donate $100000 - Your Name Street</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Privileges;
