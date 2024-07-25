import React, { useState, useEffect } from 'react';
import '../App.css';
import { Box } from '@mui/material';
import SelectDaysIcon from '../images/selectdays.png';
import RebookIcon from "../images/rebooktenants.png";
import Dialog from './Dialog';

const getColorForUser = (userName) => {
    const colorList = [
        '#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D6A4A4',
        '#392F5A', '#F4A261', '#D3B9C2', '#E1BEE7', '#B9FBC0'
    ];

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
        }
        return hash;
    };

    const colorIndex = Math.abs(hashCode(userName)) % colorList.length;
    return colorList[colorIndex];
};

const timeSlots = [
    '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am',
    '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm',
    '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm',
    '6:00 pm', '6:30 pm'
];

const ServiceDetails = ({ service, bookings }) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDayIndex = new Date().getDay();
    const [selectedDayIndex, setSelectedDayIndex] = useState(currentDayIndex);
    const [bookingMap, setBookingMap] = useState({});
    const [dates, setDates] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const generateDatesForExtendedRange = () => {
            const startOfWeek = new Date();
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); 
            const extendedDates = [];

            for (let i = -7; i < 14; i++) { 
                const date = new Date(startOfWeek);
                date.setDate(date.getDate() + i);
                extendedDates.push(date.toISOString().split('T')[0]); 
            }

            return extendedDates;
        };

        const generatedDates = generateDatesForExtendedRange();
        setDates(generatedDates);
    }, []);

    useEffect(() => {
        const mapBookings = () => {
            const map = {};

            bookings.forEach(booking => {
                const bookingDate = booking.date.trim();
                const fromTimeSlot = timeSlots.indexOf(booking.fromtime);
                const toTimeSlot = timeSlots.indexOf(booking.totime);

                if (fromTimeSlot !== -1 && toTimeSlot !== -1) {
                    const dateIndex = dates.indexOf(bookingDate);

                    if (dateIndex !== -1) {
                        if (!map[dateIndex]) {
                            map[dateIndex] = {};
                        }

                        const span = toTimeSlot - fromTimeSlot;
                        map[dateIndex][fromTimeSlot] = {
                            name: booking.name,
                            span: span
                        };
                    }
                }
            });

            setBookingMap(map);
        };

        if (dates.length > 0 && bookings.length > 0) {
            mapBookings();
        }
    }, [dates, bookings]);

    const handleDayClick = (dayIndex) => {
        setSelectedDayIndex(dayIndex);
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <div className="service-details">
            <div className="service-header">
                <h2 className='service--title'>{service ? `${service.type}` : 'Service Details'}</h2>
                <div className='service--box'>
                    <Box className='service--container' style={{ backgroundColor: 'white', padding: '16px' }}>
                        <div className='selectRebook--btn'>
                            <button className='selectbutton' style={{ background: 'white', border: 'none', borderRadius: '5px' }}>
                                <img className='selectdaysicon' src={SelectDaysIcon} alt='selectdays' />
                                <h2 className='selectdaystext'>Select Days</h2>
                            </button>
                            <button className='rebookbutton' style={{ background: 'white', border: 'none', borderRadius: '5px' }}>
                                <img className='rebookicon' src={RebookIcon} alt='rebook' />
                                <h2 className='rebooktext' onClick={handleDialogOpen}>Rebook Tenants</h2>
                            </button>
                        </div>
                        <div className='closedMaintenance--btn'>
                            <button style={{ background: '#3D5CAC', border: 'none', borderRadius: '5px' }}>Closed hours</button>
                            <button style={{ background: '#3D5CAC', border: 'none', borderRadius: '5px' }}>Maintenance hours</button>
                        </div>

                        <div className="schedule">
                            <table style={{ tableLayout: 'fixed', width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        {days.map((day, dayIndex) => (
                                            <th key={dayIndex} className={dayIndex === currentDayIndex ? "current-day" : ""}>
                                                <div
                                                    className={`day-date ${selectedDayIndex === dayIndex ? 'selected' : ''}`}
                                                    onClick={() => handleDayClick(dayIndex)}
                                                >
                                                    {day} <br />
                                                    {dates[dayIndex + 7]}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {timeSlots.map((time, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td className="time-slot">{time}</td>
                                            {dates.slice(7, 14).map((date, colIndex) => {
                                                const actualDateIndex = colIndex + 7;
                                                const booking = bookingMap[actualDateIndex] && bookingMap[actualDateIndex][rowIndex];
                                                const span = booking ? booking.span : 1;

                                                return (
                                                    <td
                                                        key={colIndex}
                                                        rowSpan={span}
                                                        style={{
                                                            border: '1px solid gray',
                                                            backgroundColor: booking ? getColorForUser(booking.name) : 'transparent',
                                                            textAlign: 'center',
                                                            verticalAlign: 'middle'
                                                        }}
                                                    >
                                                        {booking && booking.name}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Box>
                </div>
            </div>
            {openDialog && <Dialog open={openDialog} onClose={handleDialogClose} bookings={bookings} />}
        </div>
    );
};

export default ServiceDetails;
