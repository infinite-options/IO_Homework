import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import CalendarBox from './CalendarBox';
import CalendarIcon from '../Assets/CalendarIcon.svg';
import RebookIcon from '../Assets/RebookIcon.svg';
import PlusIcon from '../Assets/PlusIcon2.svg';
import SelectDaysPopUp from './SelectDaysPopUp';

import ServiceBox from './ServiceBox.js';
import WasherIcon from '../Assets/WasherIcon.svg';
import DryerIcon from '../Assets/DryerIcon.svg';
import ClubhouseIcon from '../Assets/ClubhouseIcon.svg';
import BBQGrillIcon from '../Assets/BBQGrillIcon.svg';

const today = new Date()

const daysOfWeek = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
}

function fillDaysOfWeek() {
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

    for(const [key, value] of Object.entries(daysOfWeek)) {
        daysOfWeek[key] = (value - today.getDay()) + today.getDate()
        if(daysOfWeek[key] > lastDayOfMonth.getDate()) {
            daysOfWeek[key] = daysOfWeek[key] - lastDayOfMonth.getDate()
        }
    }
}

const serviceNameList = [
    'Washer',
    'Dryer',
    'Clubhouse',
    'BBQGrill',
]

const serviceColorList = [
    '#79CBF9',
    '#7CEBDE',
    '#D893F9',
    '#FE9A9A',
]

const listDefault = [
    {
        id: "1",
        booking: "9",
        utilization: "55",
        data: [
            {id: "1", name:'Robert Smith', start:"10 AM", end:"11 AM", status:"Complete", color: "#C5EFA4", day: "Wed"},
            {id: "2", name:'Steve Albini', start:"11:30 AM", end:"12:30 PM", status:"Complete", color: "#F07B78", day: "Wed"},
            {id: "3", name:'Thom Yorke', start:"1 PM", end:"2 PM", status:"Incomplete", color: "#435DAE", day: "Wed"},
            {id: "4", name:'BrianWilson', start:"5:30 PM", end:"6:30 PM", status:"-", color: "#435DAE", day: "Wed"},
        ],
    },
    {
        id: "2",
        booking: "5",
        utilization: "80",
        data: [
            {id: "1", name:'Parshant', start:"10 AM", end:"11 AM", status:"Complete", color: "#C5EFA4", day: "Thu"},
            {id: "2", name:'Charlize', start:"11:30 AM", end:"12:30 PM", status:"Complete", color: "#F07B78", day: "Thu"},
            {id: "3", name:'Lakshmi', start:"3 PM", end:"4 PM", status:"Incomplete", color: "#435DAE", day: "Thu"},
            {id: "4", name:'Victor', start:"4:30 PM", end:"5:30 PM", status:"-", color: "#435DAE", day: "Thu"},
        ],
    },
]

fillDaysOfWeek()

export default function Boxes() {
    const [list, setList] = useState(listDefault[0])
    const [serviceName, setServiceName] = useState("Washer #1, " + today.toLocaleString('default', { month: 'long' }) + " " + daysOfWeek["Sun"] + " - " + daysOfWeek["Sat"])
    const [serviceColor, setServiceColor] = useState("#79CBF9")
    const [selectDaysPopUp, setSelectDaysPopUp] = useState(false)

    function handleSelectDaysClick(action) {
        if (action === "open") {
            setSelectDaysPopUp(true)
        }
        else {
            setSelectDaysPopUp(false)
        }
    }

    function handleAccordianClick(action, listData, listName, listColor) {
        if (action === "openAccordian") {
            setList(listData)
            setServiceName(listName + ", " + today.toLocaleString('default', { month: 'long' }) + " " + daysOfWeek["Sun"] + " - " + daysOfWeek["Sat"])
            setServiceColor(listColor)
        }
        else {
            setList(listDefault.data)
        }
    }

    return (
        <Grid container>
            <SelectDaysPopUp selectDaysPopUp={selectDaysPopUp}/>
            <Grid item>
                <Box
                    sx={{
                        backgroundColor: '#F2F2F2',
                        width: 550,
                        borderRadius: '10px',
                        marginTop: '20px',
                        marginBottom: '20px',
                        marginLeft: '20px',
                        padding: '20px',}}>
                    <Typography
                        sx={{
                            color: '#160449',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '35px',
                            fontWeight: 'bold',}}>
                        All Services
                    </Typography>
                    <ServiceBox
                        bgcolor={serviceColorList[0]}
                        serviceName={serviceNameList[0]}
                        serviceList={listDefault}
                        serviceIcon={WasherIcon}
                        handleAccordianClick={handleAccordianClick}/>
                    <ServiceBox
                        bgcolor={serviceColorList[1]}
                        serviceName={serviceNameList[1]}
                        serviceList={listDefault}
                        serviceIcon={DryerIcon}
                        handleAccordianClick={handleAccordianClick}/>
                    <ServiceBox
                        bgcolor={serviceColorList[2]}
                        serviceName={serviceNameList[2]}
                        serviceList={listDefault}
                        serviceIcon={ClubhouseIcon}
                        handleAccordianClick={handleAccordianClick}/>
                    <ServiceBox
                        bgcolor={serviceColorList[3]}
                        serviceName={serviceNameList[3]}
                        serviceList={listDefault}
                        serviceIcon={BBQGrillIcon}
                        handleAccordianClick={handleAccordianClick}/>
                </Box>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        width: '1200px',
                        backgroundColor: '#F2F2F2',
                        borderRadius: '10px',
                        marginTop: '20px',
                        marginBottom: '20px',
                        marginLeft: '20px',
                        padding: '20px',}}>
                    <Typography
                        sx={{
                            color: '#160449',
                            fontFamily: 'Source Sans Pro',
                            fontSize: '35px',
                            fontWeight: 'bold',}}>
                        {serviceName}
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '10px',
                            padding: '20px',}}>
                        <Grid container
                            alignItems="center"
                            justifyContent="center">
                            <Grid item>
                                    <img src={CalendarIcon} alt="calendar_icon"></img>
                            </Grid>
                            <Grid item>
                                <Typography
                                    onClick={() => handleSelectDaysClick("open")}
                                    sx={{
                                        color: '#3D5CAC',
                                        fontFamily: 'Source Sans Pro',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        margin: '10px',}}>
                                        Select Days
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={RebookIcon} alt="rebook_icon"></img>
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={{
                                        color: '#3D5CAC',
                                        fontFamily: 'Source Sans Pro',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        margin: '10px',}}>
                                    Rebook Tenants
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container
                            alignItems="center"
                            justifyContent="center">
                            <Grid item>
                                <Box
                                    sx={{
                                        backgroundColor: "#D6D5DA",
                                        width: 170,
                                        borderRadius: '5px',
                                        margin: '10px',}}>
                                    <Typography
                                        sx={{
                                            color: '#8E8E8E',
                                            fontFamily: 'Source Sans Pro',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            textAlign: 'center',}}>
                                        <img src={PlusIcon} alt="plus_icon"></img> Closed Hours
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box
                                    sx={{
                                        backgroundColor: "#D6D5DA",
                                        width: 170,
                                        borderRadius: '5px',
                                        margin: '10px',}}>
                                    <Typography
                                        sx={{
                                            color: '#8E8E8E',
                                            fontFamily: 'Source Sans Pro',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            textAlign: 'center',}}>
                                        <img src={PlusIcon} alt="plus_icon"></img> Maintenance Hours
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <CalendarBox
                            list={list}
                            serviceColor={serviceColor}
                            daysOfWeek={daysOfWeek}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}