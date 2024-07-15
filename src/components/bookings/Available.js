import { Box, Typography } from "@mui/material";

const Available = ({text,background}) => {
    return (
        <Box sx={{backgroundColor:background, borderRadius:"5px"}}>
            <Typography sx={{color:"white",  fontSize:"14px", fontWeight:"700", fontfamily:"Source Sans 3", padding:"5px"}}>{text}</Typography>
        </Box>
    );
}
 
export default Available;