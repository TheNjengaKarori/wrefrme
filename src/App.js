// Import necessary libraries and components
import React from 'react';
import './App.css';  
import Nav from './components/Nav';
import Hero from './components/Hero';
import Info from './components/Info';


// Define the main App component
function App() {
  return (
    <div className="app">
      {/* Include your components here */}
      <Nav />
      <Hero />
      <Info />

    </div>
  );
}

export default App;
