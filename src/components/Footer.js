import React from "react";
import '../App.css'; 
import Home from "../images/Home_fill.png";
import User from "../images/User_fill.png";
import Bell from "../images/Bell_fill.png";
import Chat from "../images/basil_chat-solid.png";

export default function Footer(){
    return(
        <div className="footer">
            <button className="footer-button">
                <img src={Home} alt="home"/>
            </button>
            <button className="footer-button">
                <img src={User} alt="user"/>
            </button>
            <button className="footer-button">
                <img src={Bell} alt="bell"/>
            </button>
            <button className="footer-button">
                <img src={Chat} alt="chat"/>
            </button>
        </div>
    )
}
