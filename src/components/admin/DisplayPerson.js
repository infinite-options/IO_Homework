import { Box, Divider, Grid, Typography } from "@mui/material";

const DisplayPerson = ({person}) => {
    let status=""
    if (person.status === "Complete") {
        status="#76B148"
    }
    else if (person.status ==="Incomplete") {
        status="#F07B78"
    }
    else {
        status="#3D5CAC"
    }
    return (
        <Box>
            <Divider sx={{backgroundColor:"black", opacity:".3",marginTop:"5px", mb:"5px"}} />
            <Grid container>
                <Grid item xs={5} container>
                    <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>{person.name}</Typography>
                </Grid>
                <Grid item xs={5} container>
                    <Typography sx={{color:"#3D5CAC", fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>{person.start} - {person.end}</Typography>
                </Grid>
                <Grid item xs={2} container>
                    <Typography sx={{color:status, fontSize:'13px', fontWeight:'600', fontFamily:'Source Sans 3'}}>{person.status}</Typography>
                </Grid> 
            </Grid>
        </Box>
    );
}
 
export default DisplayPerson;