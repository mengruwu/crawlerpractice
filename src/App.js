import React, { Component } from 'react';
import { NavContainer } from './components/NavContainer';
import Main  from './components/Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div align='center'>
        <NavContainer />
        <Main />
      </div>
    );
  }
}

export default App;
