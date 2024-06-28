import { Paper, Typography } from "@mui/material";

const Benefits = ({ image, header, text}) => {
    return (
        <Paper sx={{padding:'40px', height:'80%'}}>
            <img src={image} alt="Benefit Icon" />
            <Typography variant="h3" sx={{fontSize:'26px', fontWeight:'bold', fontFamily:'Nunito', marginTop:'20px'}}>
                {header}
            </Typography>
            <Typography variant="body1" sx={{fontFamily: 'Nunito', marginTop:'10px'}}>
                {text}
            </Typography>
        </Paper>
    );
}

export default Benefits;
