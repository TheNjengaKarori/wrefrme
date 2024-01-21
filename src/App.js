// Import necessary libraries and components
import React from 'react';
import './App.css';  
import Nav from './components/Nav';
import Hero from './components/Hero';
import Info from './components/Info';
import ScreenNav from './components/ScreenNav';


function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Info />
      <ScreenNav />

    </div>
  );
}

export default App;
