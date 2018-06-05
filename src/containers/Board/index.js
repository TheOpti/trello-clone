import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BoardTopRow from '../../components/BoardTopRow';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <BoardTopRow />
        <div>Board component</div>

        <Link to="/main">Main</Link>
      </div>
    );
  }
}

export default Board;
