
import { Grid, Typography, Box } from '@mui/material';

const Quote = () => {
    return (
        <Box sx={{ backgroundColor: 'rgba(244, 81, 30, 0.07)',p:'50px 80px 50px 0px'}}>
            <Grid container>
                <Grid item xs={12} md={4} container justifyContent="center" alignItems="center">
                    <img src="person.png" alt="Person" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography sx={{mb:'10px', fontSize:'21px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </Typography>
                    <Typography sx={{color:"#F4511E",mb:'10px', fontWeight:'bold',fontSize:'18px'}}>
                        Harry Wilson    
                    </Typography>
                    <Typography>
                        Investor
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default Quote;
