import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <div>Board component</div>

        <Link to="/main">Main</Link>
      </div>
    );
  }
}

export default Board;
