import { Typography } from "@mui/material";

const Reason = ({image,text}) => {
    return (
        <div>
            <img src={image}></img>
            <Typography sx={{fontFamily:'Nunito', fontSize:'26px', fontWeight:'bold'}}>{text}</Typography>
        </div>
    );
}
 
export default Reason;