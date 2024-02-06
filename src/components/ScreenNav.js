// Import necessary libraries
import React, { useState } from 'react';
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';

// Define the ScreenNav component
const ScreenNav = () => {
  const [activeButton, setActiveButton] = useState('Desktop');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Function to render the active screen content
  const renderScreenContent = () => {
    switch (activeButton) {
      case 'Desktop':
        return <Desktop />;
      case 'Tablet':
        return <Tablet />;
      case 'Mobile':
        return <Mobile />;
      default:
        return null;
    }
  };

  return (
    <div>
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
      <div className="screen-content">{renderScreenContent()}</div>
    </div>
  );
};

export default ScreenNav;
