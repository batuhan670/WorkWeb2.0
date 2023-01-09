import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="lineOne">
          <div>
            Table 1<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est perspiciatis ipsa veritatis recusandae possimus saepe sequi voluptates unde soluta asperiores, alias libero natus laboriosam suscipit deleniti dolores nisi? Qui.
          </div>
          <div>
            Table 2
          </div>
          <div>
            Table 3
          </div>
        </div>
        <div className="lineTwo">
          <div>
            Table 4<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est perspiciatis ipsa veritatis recusandae possimus saepe sequi voluptates unde soluta asperiores, alias libero natus laboriosam suscipit deleniti dolores nisi? Qui.
          </div>
          <div>
            Table 5
          </div>
          <div>
            Table 6
          </div>
          <div>
            Table 7
          </div>
        </div>
        <p>
          <code>Work Web 2.0</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comming soon
        </a>
      </header >
    </div >
  );
}

export default App;
