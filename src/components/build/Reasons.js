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
                    <Grid container item xs={12} sm={4} sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="price.png" text="At affordable price!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="price.png" text="At affordable price!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="price.png" text="At affordable price!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="price.png" text="At affordable price!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="price.png" text="At affordable price!" />
                    </Grid>
                    <Grid container item xs={12} sm={4} sx={{ padding: { xs: '0', sm: '80px' }, justifyContent: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Reason image="price.png" text="At affordable price!" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Reasons;
