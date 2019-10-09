import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <iframe width="400" height="215" src="https://www.youtube.com/embed/XcU9GEUZTQA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <p>
          React teste
        </p>
        <a
          className="App-link"
          href="https://amaropsjunior.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          amaropsjunior.github.io/
        </a>
      </header>
    </div>
  );
}

export default App;
