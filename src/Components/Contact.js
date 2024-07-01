import React from 'react';
import './Contact.css'
import OrangeButton from './OrangeButton';
import { Grid } from '@mui/material';
import {Checkbox} from '@mui/material';
function Contact({title, paragraphs}){
    return(
        <div className="Form">
            <div className='Contain'>
                <div className="Content">
                    <h1 className='ContactTitle'>{title}</h1>
                    <p className='ExtraParagraphs'>{paragraphs}</p>
                    <p className='ExtraParagraphs'>{paragraphs}</p>
                    <p className='ExtraParagraphs'>{paragraphs}</p>
    {/*                 
                    <input placeholder="Enter First Name"></input>
                    <input placeholder='Enter Last Name'></input>
                    <input placeholder='Enter Phone'></input>
                    <select placeholder='Enter City'>
                        <option>Select City</option>
                    </select>
                    <select placeholder='Enter State'>
                        <option>Select State</option>
                    </select>
                    <select placeholder='Enter Zip Code'>
                        <option>Select Zip Code</option>

                    </select>
                    <input className="Email" placeholder='Enter Email'></input>
                    <select placeholder='Select'>
                        <option>Select</option>

                    </select>
                    <input className="Comments" placeholder='Enter Comments'></input> */}
                    <Grid 
                    container spacing={2}
                    direction="row"
                    justifyContent="left"
                    alignItems="stretch"
                    className='GridForm'
                    
                    >
                        <Grid item xs={12} md={4} zeroMinWidth marginTop={1} className='GridItem'>
                            <h1>Enter First Name</h1>
                            <input placeholder="Enter First Name"></input>
                        </Grid>
                        
                        <Grid item xs={12} md={4}zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter Last Name</h1>
                            <input placeholder='Enter Last Name'></input>
                        </Grid>
                        <Grid item xs={12} md={4} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter Phone</h1>
                            <input placeholder='Enter Phone'></input>
                        </Grid>

                        <Grid item xs={12} md={4} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter City</h1>
                            <select placeholder='Enter City'>
                                <option>Select City</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} md={4} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter State</h1>
                            <select placeholder='Enter State'>
                                <option>Select State</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} md={4} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter Zip Code</h1>
                            <select placeholder='Enter Zip Code'>
                                <option>Select Zip Code</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} md={8}  zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter Email</h1>
                            <input className="Email" placeholder='Enter Email'></input>

                        </Grid>
                        <Grid item xs={12} md={4} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Are you a:</h1>
                            <select placeholder='Select'>
                                <option>Select</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} md={12} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Enter Comments</h1>
                            <input className="Comments" placeholder='Enter Comments'></input>
                        </Grid>
                        <Grid item xs={12} md={5} zeroMinWidth marginTop={1}  className='GridItem'>
                            <h1>Tick the box if you want to test before you build!</h1>
                        </Grid>
                        <Grid item xs={12} md={2} zeroMinWidth marginTop={1}  className='GridItem'>
                            <Checkbox  defaultChecked />

                        </Grid>
                        <Grid item xs={12} md={5} zeroMinWidth marginTop={1}  className='GridItem'>
                            
                        </Grid>
                    </Grid>
                    
                    
                    <OrangeButton text="Submit"></OrangeButton>
                </div>
            </div>
        </div>
    )
}

export default Contact;
