import { Box, Grid, Typography } from "@mui/material"
const Header = () => {
    return (
        <Box sx={{backgroundColor:"#160449"}}>
            <Grid container justifyContent="center" sx={{padding:"10px", paddingBottom:"15px"}}>
                <Grid container xs={4} sx={{justifyContent:"flex-end", alignItems:"center"}}>
                    <Grid item>
                        <img src="logo.png"></img>
                    </Grid>
                </Grid>
                <Grid container item xs={8} sx={{textAlign:"left"}} >
                    <Grid item xs={12}>
                        <Typography sx={{color:"white", fontFamily:'Playfair Display', fontSize:'36px', fontWeight:'600px'}}>Manifest</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{color:"white", fontFamily:'Source Sans 3', fontSize:'10px', marginTop:"-5px"}}>BUY, SELL, RENT, MANAGE, FINANCE.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default Header;