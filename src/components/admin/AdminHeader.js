import { Box, Grid, Typography } from "@mui/material"
const AdminHeader = () => {
    return (
        <Box sx={{backgroundColor:"#160449"}}>
            <Grid container sx={{padding:"10px", paddingBottom:"15px", height:"54px"}}>
                
                <Grid container>
                    <Grid item container xs={1} sx={{justifyContent:"center",alignItems:"Top"}}>
                        <Grid item sx={{marginTop:"-10px"}}>
                            <img src="logo.png" style={{height:'45px'}}></img>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} sx={{textAlign:"left", alignItems:"Top", marginTop:"-20px", marginLeft:"-30px"}} >
                        <Grid item xs={12} container>
                            <Typography sx={{color:"white", fontFamily:'Playfair Display', fontSize:'36px', fontWeight:'600px'}}>Manifest</Typography>
                        </Grid>
                        <Grid item xs={12} container sx={{marginTop:"-10px"}}>
                            <Typography sx={{color:"white", fontFamily:'Source Sans 3', fontSize:'10px'}}>BUY, SELL, RENT, MANAGE, FINANCE.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5}>
                        <Grid container item xs={3} sx={{alignItems:"center", justifyContent:"flex-end"}}>
                            <img src="dashboard.png"></img>
                            <Typography sx={{color:"white", fontWeight:"600", fontFamily:"Source Sans 3", fontSize:"20px"}}>Dashboard</Typography>
                        </Grid>
                        <Grid container item xs={3} sx={{alignItems:"center", justifyContent:"flex-end"}}>
                            <img src="profile.png"></img>
                            <Typography sx={{color:"white", fontWeight:"600", fontFamily:"Source Sans 3", fontSize:"20px"}}>Profile</Typography>
                        </Grid>
                        <Grid container item xs={3} sx={{alignItems:"center", justifyContent:"flex-end"}}>
                            <img src="alerts.png"></img>
                            <Typography sx={{color:"white", fontWeight:"600", fontFamily:"Source Sans 3", fontSize:"20px"}}>Alerts</Typography>
                        </Grid>
                        <Grid container item xs={3} sx={{alignItems:"center", justifyContent:"flex-end"}}>
                            <img src="contacts.png"></img>
                            <Typography sx={{color:"white", fontWeight:"600", fontFamily:"Source Sans 3", fontSize:"20px"}}>Contacts</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                
            </Grid>
        </Box>
    );
}
 
export default AdminHeader;