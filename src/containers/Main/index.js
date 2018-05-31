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
          <div className="card mb-3 main__create-new">
            <h5>Create new...</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
