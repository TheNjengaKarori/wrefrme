// Import necessary libraries
import React, { useState } from 'react';

// Define the ScreenNav component
const ScreenNav = () => {
  const [activeButton, setActiveButton] = useState('Desktop');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="screen-nav">
      <button
        className={`nav-item ${activeButton === 'Desktop' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Desktop')}
      >
        Desktop
      </button>
      <button
        className={`nav-item ${activeButton === 'Tablet' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Tablet')}
      >
        Tablet
      </button>
      <button
        className={`nav-item ${activeButton === 'Mobile' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Mobile')}
      >
        Mobile
      </button>
    </div>
  );
};

export default ScreenNav;
