import { Box, Grid,Typography } from "@mui/material";

const Privileges = () => {
    return (
        <Box>
            <Typography variant="body1" fontWeight="Bold" fontSize="40px">Donation privileges</Typography>
            <Grid container>
                <Grid item xs={12}>
                    <img src="check.png"></img>
                    <Typography variant="body1" fontWeight="Bold" fontSize="26px">Donate $1000 - Your Name Brick In Patio</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src="check.png"></img>
                    <Typography variant="body1" fontWeight="Bold" fontSize="26px">Donate $5000 - Your Name Brick with Engraving</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src="check.png"></img>
                    <Typography variant="body1" fontWeight="Bold" fontSize="26px">Donate $10000 - Your Name Brick with Engraving</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src="check.png"></img>
                    <Typography variant="body1" fontWeight="Bold" fontSize="26px">Donate $25000 - Your Name Brick In Engraving</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src="check.png"></img>
                    <Typography variant="body1" fontWeight="Bold" fontSize="26px">Donate $50000 - Your Name Complex</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src="check.png"></img>
                    <Typography variant="body1" fontWeight="Bold" fontSize="26px">Donate $100000 - Your Name Street</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default Privileges;