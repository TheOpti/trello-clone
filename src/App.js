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
        <div className="app">
          <header className="app__header">
            <img src={logo} className="app__logo" alt="logo" />
            <h1 className="app-title">Welcome to React</h1>
          </header>
          <div className="app__view">
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
