import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Main from './containers/Main/index';
import Board from './containers/Board/index';
import Header from './components/Header';

import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app__view">
            <Switch>
              <Route path="/main" component={Main} />
              <Route path="/board/:id" component={Board} />
              <Redirect from="/" to="/main" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
