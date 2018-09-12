import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body on={1}/>
      </div>
    );
  }
}

export default App;
