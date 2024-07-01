import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import OrangeButton from './OrangeButton';
import CompanyLogo from '../Assets/CompanyLogo.svg';
import { Grid } from '@mui/material';

function Header(){
    return(
        <div className='Header'>
            <div className='Header  Container'>
                {/* <div className='Left'>
                    <img src={CompanyLogo} height="79" width="90" />
                </div> */}
                <Grid 
                    container spacing={{ md: 1}}
                    direction="row"
                    justifyContent="center"
                    place-items="center"
                    alignItems="stretch"
                    className='GridPages'
                    >
                        <Grid item xs={12} md={2} zeroMinWidth>
                            <img src={CompanyLogo} height="79" width="90" />

                        </Grid>
                        
                        <Grid item xs={10} md={8} zeroMinWidth>
                                <Grid 
                            container spacing={{ md: 1, xl: 2}}
                            direction="row"
                            justifyContent="center"
                            place-items="center"
                            alignItems="stretch"
                            className='GridPages'
                            height="100%"
                            alignContent="center"
                            >
                                    <Grid item xs={12} sm={2} md={1.6} zeroMinWidth>
                                        <p><Link to='/Home'>Home</Link></p>
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={2} md={1.6} zeroMinWidth>
                                        <p><Link to='/Build'>Build</Link></p>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={1.6} zeroMinWidth>
                                        <p><Link to='/Invest'>Invest</Link></p>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={1.6} zeroMinWidth>
                                        <p><Link to='/Donate'>Donate</Link></p>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={1.6} zeroMinWidth>
                                        <p><a href="#">About</a></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8} md={2} zeroMinWidth>
                                <OrangeButton text="Get In Touch" className="Header-Button">
                                </OrangeButton>
                            </Grid>
                        </Grid>

                    {/* <Grid 
                    container spacing={{ md: 1, xl: 2}}
                    direction="row"
                    justifyContent="center"
                    place-items="center"
                    alignItems="stretch"
                    className='GridPages'
                    >
                        <Grid item xs={12} md={2.4} zeroMinWidth>
                            <p><Link to='/Home'>Home</Link></p>
                        </Grid>
                        
                        <Grid item xs={12} md={2.4} zeroMinWidth>
                            <p><Link to='/Build'>Build</Link></p>
                        </Grid>
                        <Grid item xs={12} md={2.4} zeroMinWidth>
                            <p><Link to='/Invest'>Invest</Link></p>
                        </Grid>
                        <Grid item xs={12} md={2.4} zeroMinWidth>
                            <p><Link to='/Donate'>Donate</Link></p>
                        </Grid>
                        <Grid item xs={12} md={2.4} zeroMinWidth>
                            <p><a href="#">About</a></p>
                        </Grid>
                    </Grid> */}
                {/* <div className='Right'>
                    <OrangeButton text="Get In Touch">
                    </OrangeButton>
                </div> */}
                
            </div>
            
        </div>
    )
}

export default Header;