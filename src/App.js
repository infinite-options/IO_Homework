import React from 'react';
import Header from './components/AdminHeader';
import Sidebar from './components/Sidebar';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

const App = () => (
    <div className="app">
        <Header />
        <div className="left-side">
            <Sidebar />
        </div>
    </div>
);

export default App;
