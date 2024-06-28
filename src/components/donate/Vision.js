import { Box,Paper, Typography } from "@mui/material";

const Vision = ({ num, header, text }) => {
    return (
        <Box>
            <Paper sx={{ backgroundColor: '#FEF3EF', padding: 2, height:'500px'}}>
                <Typography variant="h3">{num}</Typography>
                <Typography variant="h3">{header}</Typography>
                <Typography variant="body1">{text}</Typography>
            </Paper>
        </Box>
        
    );
}
 
export default Vision;
