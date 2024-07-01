import React from 'react';
import { Typography, Grid, Box, TextareaAutosize } from "@mui/material";
import OrangeButton from "./OrangeButton";

const Form = ({title,text1,text2,text3}) => {
    return (
        <Box sx={{ backgroundColor: "white", padding: "50px", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            <Typography variant="h1" sx={{ fontSize: "28px", fontWeight: "bold", color: "#DE5741", textAlign: 'center', marginBottom: '60px' }}>
                {title}
            </Typography>
            <Grid container>
                <Grid item sx={{padding:"20px"}}>
                    <Typography>
                        {text1}
                    </Typography>
                </Grid>
                <Grid item sx={{padding:"20px"}}>
                    <Typography>
                        {text2}
                    </Typography>
                </Grid>
                <Grid item sx={{padding:"20px", mb:"100px"}}>
                    <Typography>
                        {text3}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="center" sx={{ mb: "30px" }}>
                <Grid item xs={12} sm={4}>
                    <form>
                        <label>First Name <span style={{ color: "#f4511E" }}>*</span></label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Enter First Name"
                            style={{ width: '90%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        />
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <form>
                        <label htmlFor="lastName">Last Name <span style={{ color: "#f4511E" }}>*</span></label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Enter Last Name"
                            style={{ width: '90%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        />
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <form>
                        <label htmlFor="phone">Phone <span style={{ color: "#f4511E" }}>*</span></label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Enter Phone"
                            style={{ width: '90%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        />
                    </form>
                </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="center" sx={{ mb: "30px" }}>
                <Grid item xs={12} sm={4}>
                    <form>
                        <label>City <span style={{ color: "#f4511E" }}>*</span></label>
                        <select
                            style={{ width: '100%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        >
                            <option>Select City</option>
                        </select>
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <form>
                        <label htmlFor="lastName">State <span style={{ color: "#f4511E" }}>*</span></label>
                        <select
                            style={{ width: '100%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        >
                            <option>Select State</option>
                        </select>
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <form>
                        <label htmlFor="phone">Zip Code <span style={{ color: "#f4511E" }}>*</span></label>
                        <select
                            style={{ width: '100%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        >
                            <option>Select Zip Code</option>
                        </select>
                    </form>
                </Grid>
            </Grid> 
            <Grid container sx={{mb:"100px"}}>
                <Grid item xs={12}>
                    <form>
                        <label htmlFor="phone">Amount <span style={{ color: "#f4511E" }}>*</span></label>
                        <select
                            style={{ width: '100%', backgroundColor: "#F9F9F9", padding: "20px", borderRadius: "5px", borderWidth: "0", fontSize: "14px", color: '#737373' }}
                        >
                            <option>Select Amount</option>
                        </select>
                    </form>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <OrangeButton text="Submit" />
            </Box>
        </Box>
    );
}

export default Form;
