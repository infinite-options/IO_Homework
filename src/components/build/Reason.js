import { Typography, Box } from "@mui/material";

const Reason = ({image,text}) => {
    return (
        <div>
            <img className="reason" src={image}></img>
            <Box height="75px">
                <Typography sx={{fontFamily:'Nunito', fontSize:'26px', fontWeight:'bold'}}>{text}</Typography>
            </Box>
        </div>
    );
}
 
export default Reason;