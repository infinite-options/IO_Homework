import React from "react";
import { Modal, Box, Typography, Button, createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#160449', 
        },
        secondary: {
            main: '#3D5CAC', 
        },
        success: {
            main: '#4caf50', 
        },
        brown: {
            main: '#A52A2A', 
        },
    },
    typography: {
        fontFamily: 'Source Sans Pro, Arial, sans-serif', 
    },
});

const BookingPopup = ({ open, onClose, details }) => {
    return (
        <ThemeProvider theme={theme}>
            <Modal open={open} onClose={onClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        border: '2px solid black'  
                    }}
                >
                    <Typography variant="h4" component="h2" sx={{ color: theme.palette.primary.main,fontWeight:'bold',textAlign:'center' }}>
                        You have scheduled a booking for
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ mt: 2 , color: theme.palette.secondary.main,fontWeight:'bold',textAlign:'center'}}>
                        {details.machine}
                    </Typography>
                    <Typography sx={{ mt: 1, color: theme.palette.primary.main, fontWeight:'bold', fontSize:'25px',textAlign:'center'}}>on  </Typography>
                    <Typography sx={{ mt: 1, color: theme.palette.secondary.main, fontWeight:'bold', fontSize:'25px',textAlign:'center'}}><strong>{details.date}</strong></Typography>
                    <Typography sx={{ mt: 1, color: theme.palette.primary.main, fontWeight:'bold', fontSize:'25px',textAlign:'center' }}>from</Typography>
                    <Typography sx={{ mt: 1, color: theme.palette.secondary.main, fontWeight:'bold', fontSize:'25px',textAlign:'center' }}><strong>{details.time}</strong></Typography>
                    <Typography sx={{ mt: 1, color: theme.palette.primary.main, fontWeight:'bold', fontSize:'25px',textAlign:'center'}}>
                        A confirmation text has been sent to 
                    </Typography>
                    <Typography sx={{ mt: 1, color: theme.palette.secondary.main, fontWeight:'bold', fontSize:'25px',textAlign:'center' }}>
                        {details.phone}
                    </Typography>
                    <Box sx={{ mt: 3, display: 'flex', flexDirection:"column",alignItems:'center'}}>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={onClose}
                            sx={{ width: '100%', mb: 1 }}
                        >
                            OK
                        </Button>
                        <Button
                            variant="contained"
                            color="brown"
                            sx={{ width: '100%' }}
                            onClick={() => {
                                console.log('Resending confirmation...');
                            }}
                        >
                            Resend
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </ThemeProvider>
    );
};

export default BookingPopup;
