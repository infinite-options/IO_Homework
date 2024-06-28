import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import OrangeButton from "../OrangeButton";
import Form from '../Form';

const Contact = () => {
    return (
        <Box id="contact" sx={{ textAlign: 'center' }}>
            <Container maxWidth="lg" sx={{ padding: { xs: '20px', sm: '40px' } }}>
                <Grid container spacing={5} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontSize: { xs: '24px', sm: '32px' }, fontWeight: 'bold', mb: '70px', textAlign: 'left' }}>
                            Test-drive your tiny home and immerse yourself in our full range of activities & amenities!
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: { xs: '20px', sm: '26px' }, mb: '70px', textAlign: 'left' }}>
                            Try Before Buy @ $199/Night
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '21px' }, mb: '50px', textAlign: 'left' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo.
                        </Typography>
                        <Box sx={{ marginTop: '30px' }}>
                            <OrangeButton text="Contact Us" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="contact.png" alt="contact" style={{ width: '100%', maxWidth: '600px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;
