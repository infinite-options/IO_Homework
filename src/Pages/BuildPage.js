import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import HomeBenefits from '../Assets/BuildHomeBenefits.png'
import TestingImage from '../Assets/TestingImage.png'
import AffordableIcon from '../Assets/AffordableIcon.svg'
import HomeIcon from '../Assets/HomeIcon.svg'
import FlowerIcon from '../Assets/FlowerIcon.svg'
import StackIcon from '../Assets/StackIcon.svg'
import EyeIcon from '../Assets/EyeIcon.svg'
import ShieldIcon from '../Assets/ShieldIcon.svg'

import './BuildPage.css';
import Contact from '../Components/Contact';

function BuildPage(){
    return(
        // Requires Header, Image, Footer
        <div className='Build'>
            <div className='Top'>
                <div className='Container'>
                    <h1>Build Your Tiny Home, Redefine Your Space</h1>
                    Take Our Quiz To Discover Your Ideal Plan
                    <OrangeButton text="Get a Free Assessment"></OrangeButton>
                </div>
            </div>
            <div className='Benefits Container'>

                        <Grid 
                        container spacing={{xs: 1,md:1}}
                        justifyContent="center"
                        alignItems="stretch"
                        className='Container'
                        >
                            <Grid item xs={12} md={6} zeroMinWidth className='Square'>
                                <img src={HomeBenefits} width="100%" />

                            </Grid>
                            <Grid item xs={12} md={6} zeroMinWidth className='Square'>
                                    <Grid 
                                container spacing={{xs: 5,md:3}}
                                justifyContent="center"
                                alignItems="stretch"
                                >
                                    <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                        <img src={AffordableIcon} className='Square-Icon' height="37.5" width="37.5" />
                                        <h1>At Affordable price!</h1>
                                    </Grid>
                                    <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                        <img src={HomeIcon}  className='Square-Icon' height="37.5" width="37.5" />
                                        <h1>Choose your preferred floor plan</h1>
                                    </Grid>
                                    <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                        <img src={StackIcon}  className='Square-Icon' height="37.5" width="37.5" />
                                        <h1>Secure your permit hassle-free!</h1>
                                    </Grid>
                                    <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                        <img src={FlowerIcon}  className='Square-Icon' height="37.5" width="37.5" />
                                        <h1>Personalize Your Amenities!</h1>
                                    </Grid>
                                    <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                        <img src={EyeIcon} className='Square-Icon'  height="37.5" width="37.5" />
                                        <h1>Build quickly as possible!</h1>
                                    </Grid>
                                    <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                        <img src={ShieldIcon} className='Square-Icon' height="37.5" width="37.5" />
                                        <h1>Seamless installation guaranteed!</h1>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                {/* <div className='Content'>
                    <div className='Image'>
                        <img src={HomeBenefits} height="521" width="387" />
                    </div>
                    <div className='Right Content'>
                        <Grid 
                        container spacing={{xs: 5,md:20}}
                        justifyContent="center"
                        alignItems="stretch"
                        >
                            <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                <img src={AffordableIcon} className='Square-Icon' height="37.5" width="37.5" />
                                <h1>At Affordable price!</h1>
                            </Grid>
                            <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                <img src={AffordableIcon}  className='Square-Icon' height="37.5" width="37.5" />
                                <h1>Choose your preferred floor plan</h1>
                            </Grid>
                            <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                <img src={AffordableIcon}  className='Square-Icon' height="37.5" width="37.5" />
                                <h1>Secure your permit hassle-free!</h1>
                            </Grid>
                            <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                <img src={AffordableIcon}  className='Square-Icon' height="37.5" width="37.5" />
                                <h1>Personalize Your Amenities!</h1>
                            </Grid>
                            <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                <img src={AffordableIcon} className='Square-Icon'  height="37.5" width="37.5" />
                                <h1>Build quickly as possible!</h1>
                            </Grid>
                            <Grid item xs={12} md={4} zeroMinWidth className='Square'>
                                <img src={AffordableIcon} className='Square-Icon' height="37.5" width="37.5" />
                                <h1>Seamless installation guaranteed!</h1>
                            </Grid>
                        </Grid>
                    </div>
                </div> */}
            </div>
            <div className='Options  Container'>
                <h1>Flexibility and options to suit your lifestyle.</h1>
                <div className='Image'>
                    <div className='Content'>
                        <h1 className='WithinImage'>L - Casita</h1>
                        One Bedroom - 540 Sq. Ft
                    </div>
                </div>
                <div className='Bottom-Text'>
                    <p>
                        All models come with our distinctive features: a signature kitchen, a luxurious bathroom with a walk-in shower,
                        a combo washer dryer, and ample built-in storage. Customize amenities to suit your preferences.
                    </p>
                    <p className='Note'>
                        Custom built and fully installed for as little as $120,000 or $1,111/mo
                    </p>
                </div>
                
                <OrangeButton text="Get a Free Estimate"></OrangeButton>
            </div>
            {/* <div className='Testing  Container'>
                <div className='Content'>
                    <div className='Left'>
                        <h1>Test-drive your tiny home and immerse yourself in our full range of activities & amenities!</h1>
                        <h2>Try before buy @ $199 / Night</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. </p>
                        <OrangeButton text="Contact Us"></OrangeButton>
                    </div>
                    <div className='Right'>
                        <img src={TestingImage} height="657" width="638" />
                    </div>
                </div>
            </div> */}

            <Grid 
                    container spacing={{sm:10, xl:20}}
                    // paddingTop={0}
                    margin={0}
                    justifyContent="center"
                    textAlign={{xs: "left", md: "center"}}
                    alignItems="stretch"
                    className='Testing Content Container'
                    >
                        <Grid className='Left' item xs={12} md={6} zeroMinWidth>
                            <h1>Test-drive your tiny home and immerse yourself in our full range of activities & amenities!</h1>
                            <h2>Try before buy @ $199 / Night</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. </p>
                            <OrangeButton text="Contact Us"></OrangeButton>
                        </Grid>
                        <Grid item className='Right' xs={12} md={6}  zeroMinWidth>
                            <img src={TestingImage}  width="100%" />

                        </Grid>
                    </Grid>
            <div className='Contact Container Image'>
                <h1 className='WithinImage'>Available In The Vibrant Heart Of Tuscan, Arizona!</h1>
                <Contact title='Get In Touch'></Contact>
            </div>
        </div>
    )
}

export default BuildPage;