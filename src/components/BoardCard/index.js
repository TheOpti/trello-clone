import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class BoardCard extends Component {
  render() {
    const noOfLists = Math.floor(Math.random() * 6) + 1;
    const noOfItems = Math.floor(Math.random() * 16) + 10;

    return (
      <div className="card bg-light mb-3 board-card" style={{maxWidth: '18rem'}}>
        <div className="card-header text-center">
          <h5 className="card-title">Light card title</h5>
        </div>
        <div className="card-body">
          <div className="board-card__row">
            <div>No. of lists:</div>
            <div>{ noOfLists }</div>
          </div>
          <div className="board-card__row">
            <div>No. of items:</div>
            <div>{ noOfItems }</div>
          </div>
          <div className="board-card__button-row">
            <Link to="/board">
              <button type="button" className="btn btn-info">
                Board
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardCard;
