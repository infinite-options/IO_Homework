import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import { Item,Grid } from '@mui/material';
import OrangeButton from '../Components/OrangeButton';
import './DonatePage.css'
import Contact from '../Components/Contact';

import HomeIcon from '../Assets/HomeIcon.svg'

function DonatePage(){
    return(
        // Requires Header, Image, Footer
        <div className='Donate'>
            <div className='Top'>
                <div className='Container'>
                    <h1>Transform lives with the gift of affordable housing and provide shelter for those in need.</h1>
                    <OrangeButton text="Donate"></OrangeButton>
                </div>
            </div>
            <div className='Donors Content Container'>
                <div className='Gray Content'>
                    {/* <div className='Section Content '>
                        <div className='Section Left'>
                            <div className='Content'>
                                <h1>01.<br></br>Vision</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                        </div>
                        <div className='Section Left'>
                            <div className='Content'>
                                <h1>02.<br></br>Cause</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div> 
                        </div>
                        <div className='Section Left'>
                            <div className='Content'>
                                <h1>03.<br></br>Benefit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                        </div>
                    </div> */}

    {/* WORKING GRID BELOW */}

                    {/* <Grid
                    container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    textAlign="left"
                    className='Visions Grid Container'
                    margin='auto'
                    >
                        <Grid item md={4} zeroMinWidth className='Section Container'>
                            <div className='Title'>
                                <h1>01.</h1>
                                <br></br>
                                <h1>Vision</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                            </p>

                        </Grid>
                        
                        <Grid item md={4} zeroMinWidth className='Section Container'>
                                <div className='Title'>
                                    <h1>02.</h1>
                                    <br></br>
                                    <h1>Cause</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            <div>

                            </div>
                            
                        </Grid>
                        <Grid item md={4} zeroMinWidth className='Section Container'>
                            <div className='Title'>
                                <h1>03.</h1>
                                <br></br>
                                <h1>Benefits</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                            </p>

                        </Grid>
                    </Grid>


                    <Grid
                    container spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    textAlign="center"
                    className='  Visions Bottom Grid'
                    margin='auto'
                    >
                        <Grid item md={4} zeroMinWidth className=' Container VisionsIcons '>
                            <img src={HomeIcon} height="79" width="90" className='VisionsIcons'/>
                            <h1>10</h1>
                            <h1>Years</h1>
                        </Grid>
                        
                        <Grid item md={4} zeroMinWidth className=' Container VisionsIcons' >
                                <img src={HomeIcon} height="79" width="90"  />
                                <h1>30</h1>
                                <h1>Units</h1>
                            
                            
                        </Grid>
                        <Grid item md={4} zeroMinWidth className=' Container VisionsIcons'>
                            <img src={HomeIcon} height="79" width="90" className='VisionsIcons'/>
                            <h1>150</h1>
                            <h1>Families Helped</h1>

                        </Grid>
                    </Grid>      */}

                    <Grid
                    container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    textAlign="left"
                    className='Visions Grid Container'
                    margin='auto'
                    >
                        <Grid item xs={12} md={4} zeroMinWidth className='Section Container'>
                            <div className='Section Container'>
                                <div className='Title'>
                                    <h1>01.</h1>
                                    <br></br>
                                    <h1>Vision</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                            
                            <div className='Section Container'>
                                <img src={HomeIcon} height="79" width="90" className='VisionsIcons'/>
                                <h1>10</h1>
                                <h1>Years</h1>
                            </div>
                            

                        </Grid>
                        
                        <Grid item xs={12} md={4} zeroMinWidth className='Section Container'>
                            <div className='Section Container'>
                                <div className='Title'>
                                    <h1>02.</h1>
                                    <br></br>
                                    <h1>Cause</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                                
                            <div className='Section Container'>
                                <img src={HomeIcon} height="79" width="90"  />
                                    <h1>30</h1>
                                    <h1>Units</h1>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} md={4} zeroMinWidth className='Section Container'>
                            <div className='Section Container'>
                                <div className='Title'>
                                    <h1>03.</h1>
                                    <br></br>
                                    <h1>Benefits</h1>
                                </div>
                            
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                            
                            <div className='Section Container'>
                                <img src={HomeIcon} height="79" width="90" className='VisionsIcons'/>
                                <h1>150</h1>
                                <h1>Families Helped</h1>
                            </div>
                            

                        </Grid>
                    </Grid>




                </div>
                <div className='Gray Content Container'>
                    <h1>Donation Privileges</h1>
                    <ul>
                        <li>Donate $1000 - Your name brick in Patio </li>
                        <li>Donate $5000 - Your name brick with engraving </li>
                        <li>Donate $10000 - Your name brick with engraving </li>
                        <li>Donate $25000 - Your name brick with engraving </li>
                        <li>Donate $50000 - Your name Complex </li>
                        <li>Donate $100000 - Your name Street </li>
                    </ul>
                </div>
            </div>
            <div className='Donation Container'>
                <Contact title="Make A Donation Now!"
                paragraphs="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Etiam interdum nisl et nunc facilisis, 
                a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus."
                ></Contact>
            </div>
        </div>
    )
}

export default DonatePage;