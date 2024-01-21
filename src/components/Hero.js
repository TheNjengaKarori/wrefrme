// Import necessary libraries
import React from 'react';

import underline from '../res/underline.png';
import sketchImage from '../res/Sketch.png';

// Define the Hero component
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-description">
        <h1>Wrefrmes</h1>
        <img src={underline} alt="underline" className="underline" />
        <p>Your go-to platform for accessing high-quality wireframes.</p>
      </div>
      <div className="hero-content">
      <img src={sketchImage} alt="Sketch" className="sketch-image" />
      </div>
    </div>
  );
};

export default Hero;
