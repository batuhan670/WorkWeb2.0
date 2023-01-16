import logo from './logo.svg';
import './App.css';
import MiscMenues from './MiscMenues.js'

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
          </div>
        </div>
        <div className="lineTwo">
          News
        </div>
        <div className="lineThree">
          Schichtplan
        </div>
          <MiscMenues />
        <p><code>Work Web 2.0</code></p>
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">
          Comming soon</a>
      </header >
    </div >
  );
}

export default App;
