import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';
import Profile from '../Assets/Profile.svg'
import './InvestPage.css'
import Contact from '../Components/Contact';
import { Grid } from '@mui/material';
import GlobalIcon from '../Assets/GlobalIcon.svg'
import BarGraph from '../Components/BarGraph'

function InvestPage(){
    return(
        // Requires Header, Image, Footer
        <div className='Invest'>
            <div className='Top'>
                <div className='Container'>
                    <h1>Secure Your Yomorrow With Rewarding Investments In Our Visionary Plan!</h1>
                    <OrangeButton text="Invest"></OrangeButton>
                    Existing Investors? Sign In
                </div>
            </div>
            <div className='Why  Container'>
                {/* <div className='Content'>
                    <h1>Why Invest With Us?</h1>
                    <div className='Section '>
                        <div className='Section'>
                            <h4>One global login</h4>
                            <p>
                                Skip the login nightmare for all your
                                different accounts, instead, see
                                everything from one login.
                            </p>
                        </div>
                        <div className='Section'>
                            <h4>Real-time link</h4>
                            <p>
                                Go from delayed and inaccurate
                                information to one, real time dashboard.
                            </p>
                        </div>
                        <div className='Section'>
                            <h4>Reporting, solved</h4>
                            <p>
                                Easily create beautiful, custom reports on your balances, cash-flows and transactions.
                            </p>
                        </div>
                    </div>
                </div> */}


                <Grid
                    container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    textAlign="left"
                    className='Why'
                    margin='auto'
                    >
                        <Grid item md={3.5} zeroMinWidth className='CircleBox'>
                            <div className='Section Container'>
                                <div className='CircleIcon'>
                                    <img src={GlobalIcon} height="36" width="100%" />

                                </div>
                                <h4>One global login</h4>
                                <p>
                                    Skip the login nightmare for all your
                                    different accounts, instead, see
                                    everything from one login.
                                </p>
                            </div>
                            
                        </Grid>
                        
                        <Grid item md={3.5} zeroMinWidth className='CircleBox'>
                            <div className='Section Container'>
                                <div className='CircleIcon'>
                                    <img src={GlobalIcon} height="36" width="100%" />

                                </div>
                                <h4>Real-time link</h4>
                                <p>
                                    Go from delayed and inaccurate
                                    information to one, real time dashboard.
                                </p>
                            </div>
                            
                            
                        </Grid>
                        <Grid item md={3.5} zeroMinWidth className='CircleBox'>
                            <div className='Section Container'>
                                <div className='CircleIcon'>
                                    <img src={GlobalIcon} height="36" width="100%" />

                                </div>
                                <h4>Reporting, solved</h4>
                                <p>
                                    Easily create beautiful, custom reports on your balances, cash-flows and transactions.
                                </p>
                            </div>
                            
                        </Grid>
                    </Grid>
                                        
            </div>
            <div className='Returns  Container'>
                <div className='Content'>
                    <div className='Chart  Container'>
                        <div className='Content'>
                            <div className='Left'>
                                <h1>Returns on Investment</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                                <OrangeButton text="Invest"></OrangeButton>
                            </div>
                            <div className='Right'>
                                <BarGraph></BarGraph>
                            </div>

                        </div>
                    </div>
                    
                    
                </div>
            </div>
            {/* <div className='Investor  Container'>
                <div className='Content'>
                    <div className='Image'>
                        <img src={Profile} height="246" width="246" />
                    </div>
                    <div className='Right'>
                        <p className='Quote'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. 
                            Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, 
                            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                        </p>
                        <div className='Person'>
                            <p className='Name'>Harry Wilson</p>
                            <p>Investor</p>
                        </div>
                    </div>
                </div>
            </div> */}

                    <Grid
                    container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    textAlign="left"
                    className='Investor Container'
                    margin='auto'
                    >
                        <Grid item md={4} zeroMinWidth className='Right'>
                            
                                <div className='Image'>
                                <img src={Profile} height="246" width="100%" />
                            </div>
                        </Grid>
                        
                        <Grid item md={8} zeroMinWidth className='Left'>
                            <p className='Quote'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. 
                                Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, 
                                faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                            </p>
                            <div className='Person'>
                                <p className='Name'>Harry Wilson</p>
                                <p>Investor</p>
                            </div>
                            
                        </Grid>
                    </Grid>

            <div className='Assistance  Container'>
                <div className='Content'>
                    <h2>
                        Need assistance with designing or planning the shed of your dreams? Fill out this form and one of our experts will be in touch with you shortly to set up a complimentary phone consultation.
                    </h2>
                    <Contact title='Get In Touch'></Contact>
                </div>
            </div>
        </div>
    )
}

export default InvestPage;