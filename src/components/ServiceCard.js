import React, { useState } from 'react';
import '../App.css';
import { Grid, Stack, Box, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WasherIcon from '../images/LaundryIcon.png';
import DryerIcon from '../images/DryerIcon.png';
import ClubhouseIcon from '../images/ClubhouseIcon.png';
import BBQIcon from '../images/BBQIcon.png';

const ServiceCard = ({ service, onClick }) => {
    const [expanded, setExpanded] = useState(false);
    const [bookings, setBookings] = useState([]);

    const handleExpandClick = async () => {
        if (!expanded) {
            const fetchedBookings = await fetchBookings(service.type);
            setBookings(fetchedBookings);
            onClick(fetchedBookings); 
        }
        setExpanded(!expanded);
    };

    const fetchBookings = async (type) => {
        let mockBookings = [];

        switch (type) {
            case 'Washer':
                mockBookings = [
                    { id: 1, name: 'Robert Smith', date: '2024-07-23', fromtime: '10:00 am', totime: '11:00 am', status: 'completed' },
                    { id: 2, name: 'Steve Albini', date: '2024-07-25', fromtime: '11:30 am', totime: '12:30 pm', status: 'completed' },
                    { id: 3, name: 'Thom Yorke', date: '2024-07-24', fromtime: '1:00 pm', totime: '2:00 pm', status: 'incomplete' },
                    { id: 4, name: 'Brian Willson', date: '2024-07-23', fromtime: '5:30 pm', totime: '6:30 pm', status: '-' },
                    { id: 5, name: 'Robert Smith', date: '2024-07-22', fromtime: '12:00 pm', totime: '01:00 pm', status: 'completed' }
                ];
                break;
            case 'Dryer':
                mockBookings = [
                    { id: 3, name: 'Alice Brown', date: '2024-07-2', fromtime: '12:00 pm', totime: '1:00 pm', status: 'Completed' }
                ];
                break;
            case 'Clubhouse':
                mockBookings = [
                    { id: 3, name: 'Alice Brown', date: '2024-07-26', fromtime: '12:00 pm', totime: '1:00 pm', status: 'Completed' }
                ];
                break;
            default:
                mockBookings = [];
                break;
        }

        return mockBookings;
    };

    const getServiceIcon = (type) => {
        switch (type) {
            case 'Washer':
                return WasherIcon;
            case 'Dryer':
                return DryerIcon;
            case 'Clubhouse':
                return ClubhouseIcon;
            case 'BBQ Grill':
                return BBQIcon;
            default:
                return null;
        }
    };

    const className = service.type.toLowerCase().replace(' ', '-');
    const icon = getServiceIcon(service.type);

    const utilization = parseInt(service.utilization.replace('%', ''), 10);
    let utilizationClass = '';
    let utilizationText = '';

    if (utilization <= 33) {
        utilizationClass = 'rarely-used';
        utilizationText = 'Rarely or never used';
    } else if (utilization <= 66) {
        utilizationClass = 'moderately-used';
        utilizationText = 'Moderately Used';
    } else {
        utilizationClass = 'frequently-used';
        utilizationText = 'Most frequently used';
    }

    const issueClass = service.issues > 0 ? 'has-issues-text' : '';

    return (
        <div className={`service-card ${className}`}>
            <h3 className='servicecard--title'>
                {service.type} <span className={issueClass}>({service.issues} Reported Issue)</span>
            </h3>
            <Box style={{ backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px', width: '280px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            spacing={0.5}
                            padding={'0px'}
                            gap={1}
                        >
                            <img className='servicecard--icon' src={icon} alt={`${service.type} icon`} />
                            <div className='servicecard--stack'>
                                <p className='bookings--count'>{service.bookings} Bookings Today</p>
                                <p className={`item--utilization ${utilizationClass}`}>Utilization: {service.utilization} ({utilizationText})</p>
                                <button className='servicecard--btn'>Maintenance</button>
                            </div>
                            <Button onClick={handleExpandClick}>
                                <ExpandMoreIcon />
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box marginTop={2}>
                        {bookings.length > 0 ? (
                            <table className="booking-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Booked Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td style={{ padding: '8px' }}>{booking.name}</td>
                                            <td style={{ padding: '8px' }}>{booking.fromtime} - {booking.totime}</td>
                                            <td style={{ padding: '8px' }}>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No bookings found.</p>
                        )}
                    </Box>
                </Collapse>
            </Box>
        </div>
    );
};

export default ServiceCard;
