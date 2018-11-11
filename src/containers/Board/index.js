import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createListInBoard } from '../../actions';

import ScreenTitle from '../../components/ScreenTitle';
import List from "../../components/List";

import './styles.css';

class Board extends Component {
  render() {
    const {
      board = {},
    } = this.props;

    const {
      name,
      lists,
    } = board;

    return (
      <div className="board">
        <ScreenTitle
          title={name}
        />
        <div className="board__boards-wrapper">
          {
            lists.map((list) => {
              return (
                <List
                  list={list}
                  key={list.id}
                />
              )
            })
          }
          <div className="board__add-new-list">
            Add new list...
          </div>
        </div>
        <Link to="/main">Main</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.board.boards.find((elem) => ownProps.match.params.id),
  }
};

const mapDispatchToProps = {
  createListInBoard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
