import React, { Component } from 'react';
import BoardCard from '../../components/BoardCard';

import './styles.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <BoardCard />
        <BoardCard />
      </div>
    );
  }
}

export default Main;
