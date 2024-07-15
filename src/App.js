import React from 'react';
import './App.css'; 
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default App;
