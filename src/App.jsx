import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div>
              <img src="images/ironhack-logo.svg" className="App-logo" alt="ironhack-logo" />
            </div>
            <div>
              <img src="images/menu-top.svg" className="Menu-top" alt="Menu-top" />
            </div>
          </nav>
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

        <section>
          <div className="icon-set">
            <div className="icon-individual">
              <img src="images/icon1.png" alt="icon" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="icon-individual">
              <img src="images/icon2.png" alt="icon" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="icon-individual">
              <img src="images/icon3.png" alt="icon" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="icon-individual">
              <img src="images/icon4.png" alt="icon" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
