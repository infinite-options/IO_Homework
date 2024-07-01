import { Grid, Box, Container, Typography } from '@mui/material';
import OrangeButton from "../OrangeButton";

const Invest = () => {
    return (
        <Container>
            <Grid container spacing={15} alignItems="center" sx={{marginTop:"40px"}}>
                <Grid container item xs={12} md={6} spacing={2}>
                    <Grid item xs={6}>
                        <Box 
                            sx={{ 
                                position: 'relative', 
                                backgroundImage: 'url(asset.png)', 
                                backgroundSize: 'contain', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat',
                                width: '100%', 
                                height: '334px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    position: 'absolute',
                                    top: '20%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    fontSize:'24px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Asset Appreciation
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box 
                            sx={{ 
                                position: 'relative', 
                                backgroundImage: 'url(free.png)', 
                                backgroundSize: 'contain', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat',
                                width: '100%', 
                                height: '250px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop:"80px"
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    position: 'absolute',
                                    top: '20%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    fontSize:'24px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Free Perks
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box 
                            sx={{ 
                                position: 'relative', 
                                backgroundImage: 'url(tax.png)', 
                                backgroundSize: 'contain', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat',
                                width: '100%', 
                                height: '285px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '-5px'
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    position: 'absolute',
                                    top: '20%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    fontSize:'24px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Tax Advantages
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box 
                            sx={{ 
                                position: 'relative', 
                                backgroundImage: 'url(financial.png)', 
                                backgroundSize: 'contain', 
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat',
                                width: '100%', 
                                height: '380px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop:'-35px'
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    position: 'absolute',
                                    top: '30%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    fontSize:'24px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Financial Returns
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h4" component="p" sx={{ marginBottom: 2 }}>
                            Secure your tomorrow with rewarding investments in our visionary plan!
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo.
                        </Typography>
                        <OrangeButton text="Invest" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Invest;
