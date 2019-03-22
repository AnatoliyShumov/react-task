import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter from={0} to={100000} fps={60}/>
      </div>
    );
  }
}

export default App;
