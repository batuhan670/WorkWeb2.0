import React from "react";
import './AppStyles.css';
import Topline from "./components/topline/Topline.js"
import logo from './logo.svg';
import Overview from "./components/overview/Overview.js"
import Slideshow from './components/slideshow/Slideshow.js';
import Shiftshedule from './components/shiftshedule/Shiftshedule.js';
import MiscMenues from './components/miscmenu/MiscMenu.js';
import Footer from './components/footer/Footer';


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
