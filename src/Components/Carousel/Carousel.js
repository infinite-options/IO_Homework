import React, { useState } from "react";
import "./Carousel.css";

function Carousel() {
  const images = [
    "https://source.unsplash.com/random/800x400",
    "https://source.unsplash.com/random/800x400",
    "https://source.unsplash.com/random/800x400",
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="control-btn prev" onClick={prevSlide}>
        &#8249; {/* Left arrow symbol */}
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="control-btn next" onClick={nextSlide}>
        &#8250; {/* Right arrow symbol */}
      </button>
    </div>
  );
}

export default Carousel;
