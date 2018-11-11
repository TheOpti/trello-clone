import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createNewList } from '../../actions';

import ScreenTitle from '../../components/ScreenTitle';
import List from "../../components/List";
import AddNewItemModal from "../../components/AddNewItemModal";

import './styles.css';

class Board extends Component {
  state = {
    isModalOpen: false,
  };

  openModal =() => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  addNewList = (listName) => {
    this.closeModal();
    this.props.createNewList(this.props.board.id, listName);
  };

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
          <div className="board__add-new-list" onClick={this.openModal}>
            Add new list...
          </div>
        </div>
        <AddNewItemModal
          title="Add new list to this board"
          label="New list name"
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          onAccept={this.addNewList}
        />
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
  createNewList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
