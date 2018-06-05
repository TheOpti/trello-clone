import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BoardTopRow from '../../components/BoardTopRow';
import SingleBoard from "../../components/SingleBoard";

import './styles.css';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <BoardTopRow />
        <div className="board__boards-wrapper">
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
        <Link to="/main">Main</Link>
      </div>
    );
  }
}

export default Board;
