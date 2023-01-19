import './App.css';
import "./components/NewsIconLeft.js";
import "./components/NewsIconRight.js";
import logo from './logo.svg';
import MiscMenues from './MiscMenues.js';
import React from "react";
import Slideshow from './components/Slideshow.js';
import Schichtplan from './components/Schichtplan';
import DoctorsNote from './routes/DoctorsNote.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="topAndMenu">
          Name der Abteilung
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="lineOne">
          <div>
            Aktuelle Stunden<br />
          </div>
          <div>
            Vorgesetzer<br />
            Anwesenheit<br />
            Kontakte
          </div>
          <div>
            Instandhaltung
          </div></div>
        <Slideshow />
        <Schichtplan />
        <MiscMenues />
        <link to = ""></link>>
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
