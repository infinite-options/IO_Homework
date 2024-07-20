import React from 'react';
import '../App.css';
import Group49Image from '../images/Group 49.svg';

const Header = () => (
    <header className="header">
        <img className="header--logo" src={Group49Image} alt="Group 49" width="90px" />
        <div className="header--items">
            <h1 className="header--title">Manifest</h1>
            <p className="header--sub">BUY.SELL.RENT.MANAGE.FINANCE</p>
        </div>
        <nav className="header--navbar">
            <ul>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Alerts</li>
                <li>Contacts</li>
            </ul>
        </nav>
    </header>
);

export default Header;
