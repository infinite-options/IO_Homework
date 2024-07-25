import { Box, Typography, Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlusIcon from '../Assets/PlusIcon.svg';

const utilColor = []
const utilText = []

function fillUtil() {
    for(let i = 0; i <= 100; i++) {
        if(i < 34) {
            utilColor[i] = "#FF8A00"
            utilText[i] = "(Rarely or Never Used)"
        }
        else if(i > 66) {
            utilColor[i] = "#76B148"
            utilText[i] = "(Frequently Used)"
        }
        else {
            utilColor[i] = "#D6B54F"
            utilText[i] = "(Moderately Used)"
        }
    }
}

fillUtil()

const getBookedTime = (value, row) => {
    return `${row.start || ''} - ${row.end || ''}`
}

const columns = [
    {
        field: "name",
        headerName: "Name",
        flex: 1,
    },
    {
        field: "bookedTime",
        headerName: "Booked Time",
        valueGetter: getBookedTime,
        flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
    },
]

export default function AccordianList({ serviceList, serviceIcon, handleAccordianClick, serviceName, serviceColor }) {
    return (
        <div>
            {serviceList.map(item => {
                return (
                    <Accordion
                        key={item.id}
                        onClick={() => handleAccordianClick("openAccordian", item, serviceName + " #" + item.id, serviceColor)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <Grid container>
                                <Grid item>
                                    <img src={serviceIcon} alt="service_icon"></img>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        sx={{
                                            color: '#160449',
                                            fontFamily: 'Source Sans Pro',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            textAlign: 'left',
                                            marginLeft: '10px',}}>
                                        {item.booking} Bookings Today
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: utilColor[item.utilization],
                                            fontFamily: 'Source Sans Pro',
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            textAlign: 'left',
                                            marginLeft: '10px',}}>
                                        Utilization: {item.utilization}% {utilText[item.utilization]}
                                    </Typography>
                                    <Box
                                        sx={{
                                            backgroundColor: '#CB8E8E',
                                            width: 115,
                                            borderRadius: '5px',
                                            marginLeft: '10px',}}>
                                            <Typography
                                                sx={{
                                                    color: '#FFFFFF',
                                                    fontFamily: 'Source Sans Pro',
                                                    fontSize: '15px',
                                                    fontWeight: 'bold',}}>
                                                <img src={PlusIcon} alt="plus_icon"></img> Maintenance
                                            </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DataGrid
                                rows={item.data}
                                columns={columns}
                                sx={{
                                    color: '#3D5CAC',
                                    fontFamily: 'Source Sans Pro',
                                    fontSize: '13px',
                                    fontWeight: 'medium',
                                    textAlign: 'center',
                                    '&.MuiDataGrid-root': {
                                        border: 'none',
                                    },
                                }}
                                initialState={{
                                    density: 'compact',
                                    pagination: {
                                    paginationModel: {
                                        pageSize: Object.keys(item.data).length,
                                    },
                                    },
                                }}
                                disableRowSelectionOnClick
                                disableColumnResize
                                hideFooter/>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}