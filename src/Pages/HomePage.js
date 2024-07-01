import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OrangeButton from '../Components/OrangeButton';
import TopImage from '../Assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.png';
import Checkmark from '../Assets/Checkmark.svg';
import HomeLayout from '../Assets/HomePageHome.png';
import Profile from '../Assets/Profile.svg';
import Contact from '../Components/Contact';
import { Grid, autocompleteClasses } from '@mui/material';
import GridImage1 from '../Assets/GridImage1.png';
import GridImage2 from '../Assets/GridImage2.png';
import GridImage3 from '../Assets/GridImage3.png';
import GridImage4 from '../Assets/GridImage4.png';
import {Container} from '@mui/material';

// import Grid from '@mui/material';
import './HomePage.css'

function Home(){
    return(
        <div className='Home'>
            <div className='Top'>
            
            </div>
            <div className='Assessment  Container'>
                    <Grid 
                    container spacing={{sm:10, xl:20}}
                    justifyContent="center"
                    textAlign={{xs: "left", md: "center"}}
                    alignItems="stretch"
                    className='Assessment  Container'
                    >
                        <Grid className='Left' item xs={12} md={6} zeroMinWidth>
                            <h1>Build Your Tiny Home, <hr></hr> Redefine Your Space.</h1>
                            <ul>
                                <li>Take a Free Assessment</li>
                                <li>Select the Floor Plan</li>
                                <li>Customize the Amenities</li>
                            </ul>
                            <OrangeButton text='Start Building'></OrangeButton>
                            <p className='Note'>We've got you covered from permits to installation. Take a Free Assessment to get your quick estimate now!</p>
                        </Grid>
                        <Grid item className='Right' xs={12} md={6}  zeroMinWidth>
                            <img
                            src={HomeLayout}
                            // height="658"
                            width="100%" 
                            />   
                        </Grid>
                    </Grid>
                    {/* Test Items Above - Works Below */}
                    
                    {/* <div className='Left'>
                        <h1>Build Your Tiny Home, <hr></hr> Redefine Your Space.</h1>
                        <ul>
                            <li>
                                Take a Free Assessment
                            </li>
                            <li>
                                Select the Floor Plan
                            </li>
                            <li>
                                Customize the Amenities
                            </li>
                        </ul>
                        <OrangeButton text='Start Building'></OrangeButton>
                        <p className='Note'>We've got you covered from permits to installation. Take a Free Assessment to get your quick estimate now!</p>
                    </div>
                    <div className='Right'>
                        <img
                        src={HomeLayout}
                        height="658"
                        width="561" />    
                    </div>    */}
                
            </div>
            <div className='Donate Container'>
                <div className='Content'>
                    <h1>Transform lives with the gift of affordable housing and provide shelter for those in need.</h1>
                    <OrangeButton text="Donate"></OrangeButton>
                </div>
                
            </div>
            <div className='Invest Container'>
                {/* <div className='Content'> */}
                    {/* <div <Grid 
                        container spacing={3}
                        justifyContent="center"
                        alignItems="stretch"
                        >className='Left'> */}
                    {/* <Grid 
                    container spacing={1}
                    justifyContent="center"
                    alignItems="stretch"
                    className='Left'
                    >
                        <Grid item xl={2} zeroMinWidth> */}
                        
                        {/* WORKING GRID BELOW */}
                        <Grid 
                        container spacing={{sm:10, xl:20}}
                        justifyContent="center"
                        textAlign={{xs: "left", md: "center"}}
                        alignItems="stretch"
                        className='Invest  Content'
                        >
                            <Grid className='Left' item xs={12} md={6} zeroMinWidth>
                                <Grid 
                                container spacing={1}
                                justifyContent="center"
                                alignItems="stretch"
                                maxWidth="700px"
                                maxHeight="356px"
                                height="100%"
                                >
                                    <Grid item xs={4} md={5} zeroMinWidth>
                                        <img
                                        src={GridImage1}
                                        width="100%"
                                        alignSelf='flex-end'
                                        >
                                            </img>       
                                    </Grid>
                                    <Grid className='item2' item xs={4} md={5} zeroMinWidth bottom={0}>
                                        <img
                                        src={GridImage2}
                                        style={{
                                            width: "100%",
                                            alignSelf: 'flex-end',
                                            bottom: '0px',
                                            paddingTop: 'auto',
                                            // height: 'auto',
                                            marginTop: '80px',
                                            marginBottom: '0px',
                                            alignSelf: 'end',
                                            justifySelf: 'end'
                                        }}
                                        

                                        />   
                                    </Grid>
                                    <Grid item   xs={4} md={5} zeroMinWidth>
                                        <img
                                        src={GridImage3}
                                        width="100%"
                                        alignSelf='flex-end'
                                        />   
                                    </Grid>
                                    <Grid  item  xs={4} md={5}zeroMinWidth>
                                        <img
                                        src={GridImage4}
                                        width="100%"
                                        alignSelf='flex-end'
                                        />       
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className='Right' xs={12} md={6}  zeroMinWidth>
                                <h1>Secure your tomorrow with rewarding investments in our visionary plan!</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  
                                    nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                                <OrangeButton text="Invest"></OrangeButton>
                            </Grid>
                        </Grid>


                        {/* ATTEMPTING TO TEST OUT PUTTING TEXT INSIDE OF GRIDS  -- BELOW */}

                        {/* <Grid 
                        container spacing={{sm:10, xl:20}}
                        justifyContent="center"
                        textAlign={{xs: "left", md: "center"}}
                        alignItems="stretch"
                        className='Invest  Content'
                        >
                            <Grid className='Left' item xs={12} md={6} zeroMinWidth>
                                <Grid 
                                container spacing={1}
                                justifyContent="center"
                                alignItems="stretch"
                                maxWidth="700px"
                                maxHeight="356px"
                                height="100%"
                                >
                                    <Grid item xs={4} md={5} zeroMinWidth className='GridImage 1'>
                                        <div className='GridImage 1'>
                                            <p className='WithinImage'>Asset Appreciation</p>
                                        </div>        
                                    </Grid>
                                    <Grid item xs={4} md={5} zeroMinWidth >
                                        <div className='GridImage 2'>
                                            <p className='WithinImage'>Asset Appreciation</p>
                                        </div>  
                                    </Grid>
                                    <Grid item   xs={4} md={5} zeroMinWidth>
                                        <div className='GridImage 3'>
                                            <p className='WithinImage'>Asset Appreciation</p>
                                        </div>  
                                    </Grid>
                                    <Grid  item  xs={4} md={5}zeroMinWidth>
                                        <div className='GridImage 4'>
                                            <p className='WithinImage'>Asset Appreciation</p>
                                        </div>      
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className='Right' xs={12} md={6}  zeroMinWidth>
                                <h1>Secure your tomorrow with rewarding investments in our visionary plan!</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  
                                    nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                                <OrangeButton text="Invest"></OrangeButton>
                            </Grid>
                        </Grid> */}
                        
                            {/* <Grid 
                            container spacing={1}
                            justifyContent="center"
                            alignItems="stretch"
                            maxWidth="700px"
                            maxHeight="356px"
                            >
                                <Grid item md={{ width: 250, height: 334 }} xl={{ width: 250, height: 334 }} zeroMinWidth>
                                    <img
                                    src={GridImage1}
                            
                                    >
                                        </img>       
                                </Grid>
                                <Grid item md={{ width: 270, height: 270 }} xl={{ width: 270, height: 270 }} zeroMinWidth>
                                    <img
                                    src={GridImage2}
                                    

                                    />   
                                </Grid>
                                <Grid item md={{ width: 212, height: 285 }} xl={{ width: 212, height: 285 }} zeroMinWidth>
                                    <img
                                    src={GridImage3}
                                    />   
                                </Grid>
                                <Grid  item md={{ width: 338, height: 356 }} xl={{ width: 338, height: 356 }}zeroMinWidth>
                                    <img
                                    src={GridImage4}
                                    
                                    />       
                                </Grid>
                            </Grid>
                    <div className='Right'>
                        <h1>Secure your tomorrow with rewarding investments in our visionary plan!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  
                            nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                        </p>
                        <OrangeButton text="Invest"></OrangeButton>
                    </div>                 */}
            </div>
            <div className='Contact  Container'>
                <Contact title="Get In Touch"/>
                <h1>The Casita design was also awarded the "People's Choice" award in the Tucson Casita competition.</h1>
            </div>
            
                    <Grid 
                    container spacing={1}
                    direction="row"
                    justifyContent="center"
                    place-items="center"
                    alignItems="stretch"
                    className='Video Container'
                    
                    
                    >
                        <Grid item xs={12} md={6} zeroMinWidth className='Quote Content Container Left'>
                            <div className='Content'>
                                <p className='Text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. 
                                    Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                                </p>
                                <div className='Profile'>
                                    <div className='Image'>
                                        <img src={Profile} height="61" width="61" />
                                    </div>
                                    <div className='Person'>
                                        <p className='Name'>Harry Wilson</p>
                                        <p className='Job-Title'>Property Owner</p>
                                    </div>
                                </div>
                            </div>
                                
                        </Grid>
                        <Grid item xs={10} md={6} zeroMinWidth>
                            <iframe width="100%" height="596px" src="https://www.youtube.com/embed/oCwdsBSSGsU?si=S5t1ELvgLm7T9_m_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </Grid>
                    </Grid>
            

        </div>
    )
}

export default Home;