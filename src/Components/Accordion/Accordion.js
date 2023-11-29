import React, { useState } from "react";
import "./Accordion.css";

function Accordion() {
  const accordionData = [
    { id: 1, title: "Accordion Section 1", content: "Content for Section 1" },
    { id: 2, title: "Accordion Section 2", content: "Content for Section 2" },
    { id: 3, title: "Accordion Section 3", content: "Content for Section 3" },
  ];

  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (id) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((sectionId) => sectionId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };
  return (
    <div className="accordion-app">
      <div className="accordion-box">
        {accordionData.map((section) => (
          <div
            key={section.id}
            className={`accordion-section ${
              openSections.includes(section.id) ? "open" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(section.id)}
            >
              <h2>
                <span className="accordion-icon">
                  {openSections.includes(section.id) ? "-" : "+"}
                </span>{" "}
                {section.title}
              </h2>
            </div>
            {openSections.includes(section.id) && (
              <div className="accordion-content">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
