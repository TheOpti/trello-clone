import React, { Component } from 'react';
import BoardCard from '../../components/BoardCard';

import './styles.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main__title">
          <h2>Your boards:</h2>
          <hr />
        </div>
        <div className="main__boards">
          <BoardCard />
          <BoardCard />
        </div>
      </div>
    );
  }
}

export default Main;
