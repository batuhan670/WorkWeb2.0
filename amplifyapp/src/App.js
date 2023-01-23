import './App.css';
import logo from './logo.svg';
import MiscMenues from './components/MiscMenues.js';
import React from "react";
import Topline from "./components/Topline.js"
import Overview from "./components/Overview.js"
import Slideshow from './components/Slideshow.js';
import Shiftshedule from './components/shiftshedule/Shiftshedule.js';
import DoctorsNote from './routes/DoctorsNote.js';


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
        <a href='./DoctorsNote'>Krankmeldung</a>
        <div className='lastLine'>
          <p><code>Work Web 2.0</code></p>
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer">
            Comming soon</a></div>
      </header >
    </div >
  );
}

export default App;
