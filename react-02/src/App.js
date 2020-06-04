import React from 'react';
import logo from './logo.svg';
import logo1 from './logo1.svg';
import logo2 from './logo2.svg';
import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
import logo5 from './logo5.svg';
import logo6 from './logo6.svg';
import logo7 from './logo7.svg';
import './App.css';
import './App1.css';
import './App2.css';
import './App3.css';
import './App4.css';
import './App5.css';
import './App6.css';
import './App7.css';

function App() {
  function highlight(e) {
    e.target.style.border = " 3px solid #ff33DD "
    e.target.style.background = "#ff33DD"

  }
  function nohighlight(e) {
    e.target.style.border = " 3px solid transparent "
    e.target.style.background = "transparent"

  }
  function show(e) {
    alert(e.target.alt)
  }
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <img src={logo1} className="App1-logo" alt="logo1: Beautiful Sky" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo2} className="App2-logo" alt="logo2: Lovely Music" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo3} className="App3-logo" alt="logo3: Cozy Home" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo4} className="App4-logo" alt="logo4: Female Strength" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo5} className="App5-logo" alt="logo5: Loving Heart" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo6} className="App6-logo" alt="logo6: AI-DataAnlatics" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo7} className="App7-logo" alt="logo7: Nature-Stillness" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <div>
          <img src={logo1} className="App1-logo" alt="logo1: Beautiful Sky" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo2} className="App2-logo" alt="logo2: Lovely Music" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo3} className="App3-logo" alt="logo3: Cozy Home" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo4} className="App4-logo" alt="logo4: Female Strength" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo5} className="App5-logo" alt="logo5: Loving Heart" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo6} className="App6-logo" alt="logo6: AI-DataAnlatics" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
          <img src={logo7} className="App7-logo" alt="logo7: Nature-Stillness" onMouseOver={highlight} onMouseLeave={nohighlight} onClick={show} />
        </div> */}

      </header>
    </div>
  );
}

export default App;
