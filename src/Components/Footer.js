import React from 'react';
import './Footer.css'
import { Grid } from '@mui/material';
import CompanyLogo from '../Assets/CompanyLogo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrintIcon from '@mui/icons-material/Print';
import RssFeedIcon from '@mui/icons-material/RssFeed';
function Footer(){
    return (
        <div className='Footer Container'>
            <div className='Footer-UI Content'>  
                {/* <div className='Middle Content'> */}
                    {/* <div className='Left'>
                        <img
                        src={CompanyLogo}
                        height="140"
                        width="159" /> */}
                    {/* </div> */}
                    <div className='Middle Content'>
                    <Grid 
                    container spacing={2}
                    direction="row"
                    justifyContent="left"
                    alignItems="stretch"
                            
                    >
                        <Grid item xs={12} md={6} zeroMinWidth>
                            <img
                            src={CompanyLogo}
                            height="140"
                            
                            width="100%"
                             />
                        </Grid>
                        
                        <Grid item xs={12} md={6} zeroMinWidth>
                            <Grid 
                            container spacing={2}
                            direction="row"
                            justifyContent="Center"
                            alignItems="stretch"
                            className='Contact-Info'
                            
                            >
                                <Grid item xs={12} md={12} zeroMinWidth>
                                    <LocationOnIcon className='Icons'></LocationOnIcon>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                                </Grid>
                                
                                <Grid item xs={12} md={4} zeroMinWidth>
                                    <LocalPhoneIcon className='Icons'></LocalPhoneIcon>(123) 456-7890
                                </Grid>
                                <Grid item xs={12} md={4} zeroMinWidth>
                                    <PrintIcon className='Icons'></PrintIcon>(123) 456-7890
                                </Grid>
                            </Grid>
                            <Grid 
                            container spacing={1}
                            direction="row"
                            justifyContent="left"
                            alignItems="stretch"
                            alignContent=" Social-Media center Content"
                            >
                                <Grid item md={3} xs={12} zeroMinWidth className='Text'>
                                    Social Media

                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <FacebookIcon className='Icons'></FacebookIcon>
                                </Grid>
                                
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <TwitterIcon className='Icons'></TwitterIcon>
                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <LinkedInIcon className='Icons'></LinkedInIcon>
                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <YouTubeIcon className='Icons'></YouTubeIcon>
                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <InstagramIcon className='Icons'></InstagramIcon>
                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <GoogleIcon className='Icons'></GoogleIcon>
                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <PinterestIcon className='Icons'></PinterestIcon>
                                </Grid>
                                <Grid item md={1} xs={4} zeroMinWidth>
                                    <RssFeedIcon className='Icons'></RssFeedIcon>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                        
                    </Grid>
                        
                        {/* <div>

                        <Grid 
                            container spacing={2}
                            direction="row"
                            justifyContent="left"
                            alignItems="stretch"
                            
                            >
                                <Grid item xs={12} zeroMinWidth>
                                    <LocationOnIcon className='Icons'></LocationOnIcon>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                                </Grid>
                                
                                <Grid item xs={4} zeroMinWidth>
                                    <LocalPhoneIcon className='Icons'></LocalPhoneIcon>(123) 456-7890
                                </Grid>
                                <Grid item xs={4} zeroMinWidth>
                                    <PrintIcon className='Icons'></PrintIcon>(123) 456-7890
                                </Grid>
                            </Grid>
                        </div> */}
                        
                        {/* <div className='Social-Media'>
                            <Grid 
                            container spacing={1}
                            direction="row"
                            justifyContent="left"
                            alignItems="stretch"
                            className='Icons'
                            alignContent=" Social-Media center"
                            >
                                <Grid item xs={3} zeroMinWidth className='Text'>
                                    Social Media

                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <FacebookIcon></FacebookIcon>
                                </Grid>
                                
                                <Grid item xs={1} zeroMinWidth>
                                    <TwitterIcon></TwitterIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <LinkedInIcon></LinkedInIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <YouTubeIcon></YouTubeIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <InstagramIcon></InstagramIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <GoogleIcon></GoogleIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <PinterestIcon></PinterestIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <RssFeedIcon></RssFeedIcon>
                                </Grid>
                                
                            </Grid>
                        </div>  */}
                        
                        
                    {/* </div> */}
                </div>
                <hr></hr>
                <Grid 
                        container spacing={{ xs: 1, md: 1 }}
                        direction="row"
                        justifyContent="left"
                        alignItems="stretch"
                        className='GridPages'
                        width='100%'
                        fontSize='14px'
                        >
                            <Grid item md={8} xs={12} zeroMinWidth>
                                    <Grid 
                                container spacing={{ xs: 1, md: 1 }}
                                direction="row"
                                justifyContent="left"
                                alignItems="stretch"
                                className='GridPages'
                                width='100%'
                                fontSize='14px'
                                >
                                    <Grid item md={3} xs={12} zeroMinWidth>
                                        <p className='bottom-pages'>ABOUT US</p>
                                    </Grid>
                                    
                                    <Grid item md={3} xs={12} zeroMinWidth>
                                        <p className='bottom-pages'>CONTACT US</p>
                                    </Grid>
                                    <Grid item md={3} xs={12} zeroMinWidth>
                                        <p className='bottom-pages'>PRIVACY POLICY</p>
                                    </Grid>
                                    <Grid item md={3} xs={12} zeroMinWidth>
                                        <p className='bottom-pages'>DISCLAIMER</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            <Grid item md={4} xs={12} zeroMinWidth>
                                    <p className='Copyright Footer'>
                                    Copyright © 2020 Minimumlivingcost. All rights reserved
                                </p>
                            </Grid>
                        
                        </Grid>
                        {/* <Grid 
                        container spacing={{ xs: 1, md: 1 }}
                        direction="row"
                        justifyContent="left"
                        alignItems="stretch"
                        className='GridPages'
                        width='100%'
                        fontSize='14px'
                        >
                            <Grid item md={3} xs={12} zeroMinWidth>
                                <p className='bottom-pages'>ABOUT US</p>
                            </Grid>
                            
                            <Grid item md={3} xs={12} zeroMinWidth>
                                <p className='bottom-pages'>CONTACT US</p>
                            </Grid>
                            <Grid item md={3} xs={12} zeroMinWidth>
                                <p className='bottom-pages'>PRIVACY POLICY</p>
                            </Grid>
                            <Grid item md={3} xs={12} zeroMinWidth>
                                <p className='bottom-pages'>DISCLAIMER</p>
                            </Grid>
                        </Grid> */}
                   
                    {/* <div className='Right'>
                        <p className='Copyright Footer'>
                            Copyright © 2020 Minimumlivingcost. All rights reserved
                        </p>
                    </div> */}
                    
            </div>    
        </div>
    )
}

export default Footer;