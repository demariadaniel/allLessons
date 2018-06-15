import React, { Component } from 'react';
import BoxA from './components/Boxes/BoxA';
import Header from './components/Headers/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="box-container">
          <BoxA />
          <BoxA />
          <BoxA />
          <BoxA />
        </div>
      </div>
    );
  }
}

export default App;
