import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import '../App.css';
import AddIcon from "../images/Add icon.png";
import ServiceDetails from './ServiceDetails';

const services = [
    { type: 'Washer', issues: 1, bookings: 9, utilization: '87%', maintenance: '06/17 - 6/18' },
    { type: 'Dryer', issues: 1, bookings: 7, utilization: '87%', maintenance: '06/22' },
    { type: 'Clubhouse', issues: 0, bookings: 1, utilization: '55%' },
    { type: 'BBQ Grill', issues: 0, bookings: 0, utilization: '20%' }
];

const Sidebar = ({ toggleView }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedServiceBookings, setSelectedServiceBookings] = useState([]);

    const handleServiceClick = (service, bookings) => {
        setSelectedService(service);
        setSelectedServiceBookings(bookings);
    };

    return (
        <div className='sidebarservice--details'>
            <aside className="sidebar">
                <div className='sidebar--header'>
                    <h2 className='sidebar--title'>All Services</h2>
                    <button className='sidebar--button' onClick={toggleView}>
                        <img className='sidebar--icon' src={AddIcon} alt='add' />
                    </button>
                </div>
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} onClick={(bookings) => handleServiceClick(service, bookings)} />
                ))}
            </aside>
            <ServiceDetails service={selectedService} bookings={selectedServiceBookings} />
        </div>
    );
};

export default Sidebar;
