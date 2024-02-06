// Import necessary libraries
import React from 'react';
import logoImage from '../res/Logo.png'; // Update the path to your logo image

// Define the Nav component
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Nav;
