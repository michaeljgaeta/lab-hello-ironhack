import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="images/ironhack-logo.svg" className="App-logo" alt="ironhack-logo" />
          <img src="images/menu-top.svg" className="Menu-top" alt="Menu-top" />
          <h1 className="Tag-line">Say hello to React JS</h1>
          <p className="Sub-title">
            You will learn a Frontend framework from scratch, to become a Ninja Developer.
          </p>

          <button className="Button">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awesome!
            </a>
          </button>
        </header>
      </div>
    );
  }
}

export default App;
