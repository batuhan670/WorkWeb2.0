import './AppStyles.css';
import logo from './logo.svg';
import MiscMenues from './components/MiscMenues.js';
import React from "react";
import Topline from "./components/Topline.js"
import Overview from "./components/Overview.js"
import Slideshow from './components/Slideshow.js';
import Shiftshedule from './components/shiftshedule/Shiftshedule.js';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topline id="topline" />
        <img src={logo} className="App-logo" alt="logo" />
        <Overview id="overview" />
        <Slideshow id="slideshow" />
        <Shiftshedule id="shiftshedule" />
        <MiscMenues id="miscmenues" />
        <Footer />
      </header >
    </div >
  );
}

export default App;
