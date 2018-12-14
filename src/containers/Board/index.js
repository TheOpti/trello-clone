import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  createNewList,
  createNewElemInList,
} from '../../actions';

import ScreenTitle from '../../components/ScreenTitle';
import List from '../../components/List';
import AddNewItemModal from '../../components/AddNewItemModal';
import AddNewListElemModal from '../../components/AddNewListElemModal';

import './styles.css';


class Board extends Component {
  state = {
    isNewItemModalOpen: false,
    isNewListElemModalOpen: false,
    listIdToAddElem: null,
  };

  openNewItemModal = () => {
    this.setState({
      isNewItemModalOpen: true,
    });
  };

  openNewListElemModal = (listId) => {
    this.setState({
      isNewListElemModalOpen: true,
      listIdToAddElem: listId,
    });
  };

  closeModals = () => {
    this.setState({
      isNewItemModalOpen: false,
      isNewListElemModalOpen: false,
      listIdToAddElem: null,
    });
  };

  addNewList = (listName) => {
    this.closeModals();
    this.props.createNewList(this.props.board.id, listName);
  };

  addNewListElem = (elemTitle) => {
    this.closeModals();
    const { listIdToAddElem } = this.state;

    this.props.createNewElemInList(this.props.board.id, listIdToAddElem, elemTitle);
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
                  openNewListElemModal={this.openNewListElemModal}
                />
              )
            })
          }
          <div className="board__add-new-list" onClick={this.openNewItemModal}>
            Add new list...
          </div>
        </div>
        <AddNewItemModal
          title="Add new list to this board"
          label="New list name"
          isOpen={this.state.isNewItemModalOpen}
          onClose={this.closeModals}
          onAccept={this.addNewList}
        />
        <AddNewListElemModal
          isOpen={this.state.isNewListElemModalOpen}
          onClose={this.closeModals}
          onAccept={this.addNewListElem}
        />
        <Link to="/main">
          Main
        </Link>
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
  createNewElemInList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
