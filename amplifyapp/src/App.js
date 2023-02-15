import React from "react";
import './AppStyles.css';
import Topline from "./components/topline/Topline.js"
import logo from './logo.svg';
import Overview from "./components/overview/Overview.js"
import Newsslide from './components/newsslide/Newsslide.js';
import Shiftshedule from './components/shiftshedule/Shiftshedule.js';
import MiscMenues from './components/miscmenu/MiscMenu.js';
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      < Navbar />
      <header className="App-header">


        <Overview />
        <Shiftshedule />
        <Newsslide />

        <MiscMenues />
        <Footer />
      </header >
    </div >
  );
}

export default App;
