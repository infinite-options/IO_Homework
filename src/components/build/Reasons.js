import { Box, Grid } from "@mui/material";
import Reason from "./Reason";

const Reasons = () => {
    return (
        <Box>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <img src="decor.png" alt="Decoration" style={{ width: '100%' }} />
                </Grid>
                <Grid container item xs={12} sm={8} spacing={2}>
                    <Grid container item xs={12} sm={4} alignItems="center" sx={{padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="icon1.png" text="At affordable price!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} alignItems="center" sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="icon2.png" text="Choose Your Preferred Floor Plan" />
                    </Grid>
                    <Grid container item xs={12} sm={4} alignItems="center" sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="icon3.png" text="Secure Your Permit Hassle-Free!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} alignItems="center" sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="icon4.png" text="Personalize Your Amenities" />
                    </Grid>
                    <Grid container item xs={12} sm={4} alignItems="center" sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="icon5.png" text="Build Quickly As Possible!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} alignItems="center" sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="icon6.png" text="Seamless Installation Guaranteed!" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Reasons;
