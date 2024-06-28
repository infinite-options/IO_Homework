import Navbar from "../navbar/Navbar";
import Reasons from "./Reasons";
import Estimate from "./Estimate";
import Contact from "./Contact";
import Bottom from "../bottom/Bottom";
import Form from "../Form";
import { Box, Typography, Grid } from "@mui/material";

const Build = () => {
    return (
        <div>
            <Navbar />
            <Reasons />
            <Estimate />
            <Contact />
            <Grid container sx={{
                backgroundImage: 'url(buildbackground.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'100px'
            }}>
                <Typography sx={{color:'white', fontSize:'40px', fontWeight:'bold', padding:'40px'}}>Available in the Vibrant Heart Of Tuscan, Arizona!</Typography>
                <Box sx={{
                    width: '80%'
                }}>
                    <Form />
                </Box>
            </Grid>
            <Bottom />
        </div>
    );
}
 
export default Build;