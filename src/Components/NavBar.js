import ManifestLogo from '../Assets/ManifestLogo.svg';
import HomeIcon from '../Assets/HomeIcon.png';
import PersonIcon from '../Assets/PersonIcon.png';
import NotificationsIcon from '../Assets/NotificationsIcon.png';
import CallIcon from '../Assets/CallIcon.png';
import { Box, Grid, Typography } from '@mui/material';

export default function NavBar() {
    return (
        <Box
            sx={{
                backgroundColor: '#160449',
            }}>
            <Grid container
                sx={{
                    paddingLeft: '1%',
                }}>
                <Grid item>
                    <img src={ManifestLogo} alt="company_logo"></img>
                </Grid>
                <Grid item
                    sx={{
                        textAlign: 'left',
                        marginRight: '1000px'
                    }}>
                    <Typography
                        sx={{
                            color: '#F6EEE3',
                            fontFamily: 'Playfair Display',
                            fontSize: '36px',
                            marginTop: '-5px',
                        }}>
                        Manifest
                    </Typography>
                    <Typography
                        sx={{
                            color: '#F6EEE3',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '10px',
                            marginTop: '-12px',
                        }}>
                        BUY. SELL. RENT. MANAGE. FINANCE.
                    </Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginTop: '10px',
                        marginLeft: '50px',
                    }}>
                    <img src={HomeIcon} alt="home_icon"></img>
                </Grid>
                <Grid item
                    sx={{
                        marginLeft: '10px',
                    }}>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '20px',
                            marginTop: '10px',
                        }}>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginTop: '10px',
                        marginLeft: '50px',
                    }}>
                    <img src={PersonIcon} alt="person_icon"></img>
                </Grid>
                <Grid item
                    sx={{
                        marginLeft: '10px',
                    }}>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '20px',
                            marginTop: '10px',
                        }}>
                        Profile
                    </Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginTop: '10px',
                        marginLeft: '50px',
                    }}>
                    <img src={NotificationsIcon} alt="notifications_icon"></img>
                </Grid>
                <Grid item
                    sx={{
                        marginLeft: '10px',
                    }}>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '20px',
                            marginTop: '10px',
                        }}>
                        Alerts
                    </Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginTop: '10px',
                        marginLeft: '50px',
                    }}>
                    <img src={CallIcon} alt="call_icon"></img>
                </Grid>
                <Grid item
                    sx={{
                        marginLeft: '10px',
                    }}>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '20px',
                            marginTop: '10px',
                        }}>
                        Contacts
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}