import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './styles.css';

class BoardCard extends Component {
  render() {
    const { board } = this.props;
    const { id, name, lists } = board;

    const noOfLists = lists.length;
    const noOfItems = lists.reduce((prev, curr) => prev + curr.items.length, 0);

    return (
      <div className="card bg-light mb-3 board-card">
        <div className="card-header text-center">
          <h5 className="card-title">{ name }</h5>
        </div>
        <div className="card-body">
          <div>
            <div className="board-card__row">
              <div>No. of lists:</div>
              <div>{ noOfLists }</div>
            </div>
            <div className="board-card__row">
              <div>No. of items:</div>
              <div>{ noOfItems }</div>
            </div>
          </div>
          <div className="board-card__button-row">
            <Link to={`/board/${id}`}>
              <Button
                label="Go to board"
                color="primary"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardCard;
