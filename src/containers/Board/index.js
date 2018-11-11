import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ScreenTitle from '../../components/ScreenTitle';
import SingleBoard from "../../components/SingleBoard";

import './styles.css';

class Board extends Component {
  render() {
    const {
      boards = [],
    } = this.props;

    return (
      <div className="board">
        <ScreenTitle
          title="Board"
        />
        <div className="board__boards-wrapper">
          {
            boards.map((board) => {
              return (
                <SingleBoard
                  board={board}
                  key={board.id}
                />
              )
            })
          }
        </div>
        <Link to="/main">Main</Link>
      </div>
    );
  }
}

export default Board;
