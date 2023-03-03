import React from "react";
import './AppStyles.css';

import Overview from "./components/overview/Overview.js"
import Newsslide from './components/newsslide/Newsslide.js';
import Shiftshedule from './components/shiftshedule/Shiftshedule.js';
import MiscMenues from './components/miscmenu/MiscMenu.js';
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar";
import Login from "./logPortal/UserLogin";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Login />
        <Overview />
        <Shiftshedule />
        <Newsslide />
        <MiscMenues />
        <Footer />
      </header>
    </div>
  );
}

export default App;
