import { Box, Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{mt:"100px"}}>
           <hr style={{backgroundColor:"#F4511E", width:"85%", height:"2px", border:"none"}}></hr>
           <Grid container sx={{marginTop:"100px"}}>
            <Grid container item xs={6} justifyContent="center">
                <Box
                    sx={{
                        backgroundImage: 'url(/logo.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '140px',
                        height: '140px',
                    }}
                ></Box>
            </Grid>
            <Grid container xs={6}>
                <Grid container item xs={12}alignItems="center">
                    <Grid container spacing={3}> 
                            <Grid item xs={12} sm={1}><img src="footer-icon1.png"></img></Grid>
                            <Grid item xs={12} sm={10} container justifyContent="flex-start"><Typography>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</Typography></Grid>
                        </Grid>
                    </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container>
                        <Grid item xs={12} sm={3}><img src="footer-icon2.png"></img></Grid>
                        <Grid item xs={12} sm={8}><Typography>(123)456-7890</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={12} sm={2}><img src="footer-icon3.png"></img></Grid>
                        <Grid item xs={12} sm={6}><Typography>(123)456-7890</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={2}>
                        <Typography sx={{opacity:.5}}>Social media</Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm1.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm2.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm3.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm4.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm5.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm6.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm7.png"></img>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <img src="sm8.png"></img>
                    </Grid>
                </Grid>
            </Grid>
           </Grid>
           <hr style={{opacity:".2",backgroundColor:"#7BB9FC", width:"75%", height:"2px",border:"none", marginTop:"80px"}}></hr>
           <Grid container justifyContent="center" sx={{marginTop:"30px", marginBottom:"100px"}}> 
                <Grid item xs={12} md={1} container justifyContent="center">
                    <Typography>ABOUT US</Typography>
                </Grid>
                <Grid item xs={12} md={1} container justifyContent="center">
                    <Typography>CONTACT US</Typography>
                </Grid>
                <Grid item xs={12} md={1} container justifyContent="center">
                    <Typography>HELP</Typography>
                </Grid>
                <Grid item xs={12} md={1} container justifyContent="center">
                    <Typography>PRIVACY POLICY</Typography>
                </Grid>
                <Grid item xs={12} md={1} container justifyContent="center">
                    <Typography>DISCLAIMER</Typography>
                </Grid>
                <Grid item xs={12} md={5} container justifyContent="center">
                    <Typography sx={{color:"#0A142F", opacity:.5}}>Copyright @2020 Minimumlivingcost. All rights reserved</Typography>
                </Grid>
           </Grid>
        </Box>
    );
}
 
export default Footer;