import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import Main from './containers/Main/index';
import Board from './containers/Board/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <Redirect from="/" to="main" />
            <Route path="/main" component={Main} />
            <Route path="/board" component={Board} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
