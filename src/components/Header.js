import React from "react";
import Group49Image from "../images/Group 49.svg";

export default function Header() {
    return (
        
      <header className="header">
        <img className="header--logo" src={Group49Image} alt="Group 49" width="90px" />
        <div>
          <h1 className="header--title">Manifest</h1>
          <p className="header--sub">BUY.SELL.RENT.MANAGE.FINANCE</p>
        </div>
      </header>
      
  );
}
