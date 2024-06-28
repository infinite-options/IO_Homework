    import React from 'react';
    import NavButton from './Navbutton.js';
    import NavbarElement from './NavbarElement.js';
    import { Grid, Container, Box } from '@mui/material';

    const Navbar = () => {
        return (
            <Container maxWidth={false} disableGutters sx={{marginTop:'2%'}}>
                <Grid container spacing={5} id="navbar" >
                    <Grid item sm={3} xs={12} container sx={{justifyContent:"center", alignItems:"center"}}>
                        <img src="logo.png" alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item sm={1} xs={12} container sx={{justifyContent: {xs:"center"}, alignItems:"center"}}>
                        <NavbarElement text="Home" path="/" />
                    </Grid>
                    <Grid item sm={1} xs={12} container sx={{justifyContent: {xs:"center"}, alignItems:"center"}}>
                        <NavbarElement text="Build" path="/build" />
                    </Grid>
                    <Grid item sm={1} xs={12} container sx={{justifyContent: {xs:"center"}, alignItems:"center"}}>
                        <NavbarElement text="Invest" path="/invest" />
                    </Grid>
                    <Grid item sm={1} xs={12} container sx={{justifyContent: {xs:"center"}, alignItems:"center"}}>
                        <NavbarElement text="Donate" path="/donate" />
                    </Grid>
                    <Grid item sm={1} xs={12} container sx={{justifyContent: {xs:"center"}, alignItems:"center"}}>
                        <NavbarElement text="About" path="/about" />
                    </Grid>
                    <Grid item sm={4} xs={12} container justifyContent="center" alignItems="center">
                        <NavButton text="Get In Touch" />
                    </Grid>
                </Grid>
                <Box sx={{marginTop:'2%'}}>
                    <img src="preview.png" alt="preview" style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Container>
        );
    }

    export default Navbar;
