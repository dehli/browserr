import React, { Component } from 'react';
import './App.css';
import browserr from 'browserr';

class App extends Component {
  render() {
    const browser = browserr();
    return (
      <div className="App">
        <h2 className="App-header">Browserr Demo</h2>
        <p className="App-intro">
          I think you are using... {browser}.
        </p>
      </div>
    );
  }
}

export default App;
