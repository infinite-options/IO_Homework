import React from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Dropdown from "../Dropdown/Dropdown";
import Accordion from "../Accordion/Accordion";

import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the '/table' route
    navigate("/table");
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button className="button" onClick={handleButtonClick}>
        Go to Table Component
      </button>
      <Header />
      <br></br>
      <Button />
      <br></br>
      <Dropdown />
      <br></br>
      <Accordion />
      <br></br>
      <br></br>
      <button className="button" onClick={handleButtonClick}>
        Go to Table Component
      </button>
    </div>
  );
}

export default Home;
