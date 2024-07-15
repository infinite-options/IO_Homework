import { Box, Grid } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#3D5CAC",
                padding: "10px",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                paddingTop: "15px",
                width: "100%",
            }}
        >
            <Grid container justifyContent="space-around">
                <Grid item sx={3}>
                    <img src="home.png" alt="Home"></img>
                </Grid>
                <Grid item sx={3}>
                    <img src="user.png" alt="User"></img>
                </Grid>
                <Grid item sx={3}>
                    <img src="bell.png" alt="Bell"></img>
                </Grid>
                <Grid item sx={3}>
                    <img src="chat.png" alt="Chat"></img>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
