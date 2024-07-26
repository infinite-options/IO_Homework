import { Box, Checkbox, Divider, Grid, Typography } from "@mui/material";

const DisplayTenant = ({person}) => {

    return (
        <Grid item xs={12}>
            <Box>
                <Divider sx={{backgroundColor:"black", opacity:".3", mb:"5px"}} />
                <Grid container>
                    <Grid item xs={1} container sx={{marginTop:"-10px"}}>
                        <Checkbox />
                    </Grid>
                    <Grid item xs={7} container>
                        <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>{person.name}</Typography>
                    </Grid>
                    <Grid item xs={4} container>
                        <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>{person.start} - {person.end}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
 
export default DisplayTenant;