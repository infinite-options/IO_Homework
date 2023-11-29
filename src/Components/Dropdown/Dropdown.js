import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
  const options = [
    { label: "Select Option" },
    { label: "Red" },
    { label: "Green" },
    { label: "Yellow" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        className="form-select"
        value={selectedOption}
        onChange={handleSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default Dropdown;
