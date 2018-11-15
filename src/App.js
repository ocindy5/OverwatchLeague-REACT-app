import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Players_Fr } from './Playerslist_fr.js';
import './App.css';
import PropTypes from "prop-types";
import './fr.css';
import Panel from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Players_Fr />
    </div>
    );
  }
}


export default App;
