import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage'
import Build from './Pages/BuildPage'
import Invest from './Pages/InvestPage'
import Donate from './Pages/DonatePage'
import Header from './Components/Header';
import Footer from './Components/Footer';

function Main(){
    // Create a Router that will maintain all of the pages to direct to
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Routes> 
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/Home" element={<Home></Home>}/>
                    <Route path="/Build" element={<Build></Build>}/>
                    <Route path="/Invest" element={<Invest></Invest>}/>
                    <Route path="/Donate" element={<Donate></Donate>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
        
    )
    
}

export default Main;