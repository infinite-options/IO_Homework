import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import OrangeButton from '../OrangeButton';

const Returns = () => {
    return (
        <Box sx={{backgroundColor:"#F5F5F5", padding:'100px'}}>
            <Grid container spacing={2} sx={{padding:'40px', backgroundColor:"white"}}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ p: 5 }}>
                        <Typography variant="h3" sx={{mb:7}}>Returns on Investment</Typography>
                        <Typography variant="body1" sx={{mb: 2, fontSize:'18px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo.
                        </Typography>
                        <Typography variant="body1" sx={{mb: 2, fontSize:'18px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo.
                        </Typography>
                        <Typography variant="body1" sx={{mb: 10, fontSize:'18px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo.
                        </Typography>
                        <OrangeButton text="Invest" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src="chart.png" alt="Investment Image" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Returns;
