import React, { Component } from 'react';
import logo from './logo.svg';
import styled from './App.css';
import red from './red.css'

class App extends Component {
  render() {
    return (
      <div className={red.red}>
        <header className={styled["App-header"]}>
          <img src={logo} className={styled["App-logo"]} alt="logo" />
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
        </header>
      </div>
    );
  }
}

export default App;
