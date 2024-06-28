import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Vision from "./Vision";
import Privileges from "./Privileges";
import MakeDonate from "./MakeDonate";

const DonatePage = () => {
    return (
        <Box>
            <Navbar />
            <Box sx={{ padding: '100px'}}>
                <Box sx={{ padding: '20px', backgroundColor: '#F5F5F5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '50px' }}>
                    <Grid container sx={{mb:'100px', padding:'30px'}}>
                        <Grid item xs={12} sm={4}>
                            <Vision num="01." header="Vision" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo." />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Vision num="02." header="Cause" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo." />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Vision num="03." header="Benefit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. nec justo." />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} justifyContent="center" sx={{mb:'50px'}}>
                        <Grid item xs={12} sm={4} textAlign="center">
                            <img src="houseicon.png" alt="House Icon" style={{ width: '50px', marginBottom: '20px' }} />
                            <Typography variant="h3">10</Typography>
                            <Typography variant="body1" fontWeight="600" fontSize="26px">Years</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} textAlign="center">
                            <img src="houseicon.png" alt="House Icon" style={{ width: '50px', marginBottom: '20px' }} />
                            <Typography variant="h3">30</Typography>
                            <Typography variant="body1" fontWeight="600" fontSize="26px">Units</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} textAlign="center">
                            <img src="houseicon.png" alt="House Icon" style={{ width: '50px', marginBottom: '20px' }} />
                            <Typography variant="h3">150</Typography>
                            <Typography variant="body1" fontWeight="600" fontSize="26px">Families Helped</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{padding:'100px'}}>
                <Box sx={{padding:'50px', backgroundColor:'#F5F5F5'}}>
                    <Privileges />
                </Box>
            </Box>
            <MakeDonate />
        </Box>
    );
}

export default DonatePage;
