import { Grid, Box, Container, Typography } from '@mui/material';
import OrangeButton from "../OrangeButton";

const Invest = () => {
    return (
        <Container disableGutters sx={{ padding: 2 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box 
                        component="img" 
                        src="perks.png" 
                        alt="perks" 
                        sx={{ 
                            width: '100%', 
                            height: 'auto', 
                            objectFit: 'cover' 
                        }} 
                    />
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
