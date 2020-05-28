import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
