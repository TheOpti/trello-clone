import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  createNewList,
  createNewElemInList,
  openModal,
  closeModal,
} from '../../actions';

import modalsNames from '../../constants/modals';

import ScreenTitle from '../../components/ScreenTitle';
import List from '../../components/List';
import AddNewListModal from '../../components/AddNewListModal';
import AddNewListElemModal from '../../components/AddNewListElemModal';

import './styles.scss';


class Board extends Component {
  state = {
    listIdToAddElem: null,
  };

  addNewList = (listName) => {
    this.props.closeModal(modalsNames.ADD_NEW_LIST_MODAL);
    this.props.createNewList(this.props.board.id, listName);
  };

  addNewListElem = (elemTitle) => {
    this.props.closeModal(modalsNames.ADD_NEW_LIST_ELEM_MODAL);
    const { listIdToAddElem } = this.state;

    this.props.createNewElemInList(this.props.board.id, listIdToAddElem, elemTitle);
  };

  openNewListElemModal = (listId) => {
    this.setState({ listIdToAddElem: listId });
    this.props.openModal(modalsNames.ADD_NEW_LIST_ELEM_MODAL);
  };

  openNewListModal = () => {
    this.props.openModal(modalsNames.ADD_NEW_LIST_MODAL);
  };

  closeModals = () => {
    this.props.closeModal(modalsNames.ADD_NEW_LIST_MODAL);
    this.props.closeModal(modalsNames.ADD_NEW_LIST_ELEM_MODAL);
  };

  render() {
    const {
      board = {},
      isNewListModalOpen,
      isNewListElemModalOpen,
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
          <div className="board__add-new-list" onClick={this.openNewListModal}>
            Add new list...
          </div>
        </div>
        <AddNewListModal
          isOpen={isNewListModalOpen}
          onClose={this.closeModals}
          onAccept={this.addNewList}
        />
        <AddNewListElemModal
          isOpen={isNewListElemModalOpen}
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
    isNewListModalOpen: state.ui.modals[modalsNames.ADD_NEW_LIST_MODAL],
    isNewListElemModalOpen: state.ui.modals[modalsNames.ADD_NEW_LIST_ELEM_MODAL],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewList: (boardId, listTitle) => dispatch(createNewList(boardId, listTitle)),
    createNewElemInList: (boardId, listId, elemTitle) => dispatch(createNewElemInList(boardId, listId, elemTitle)),
    openModal: (modalName) => dispatch(openModal(modalName)),
    closeModal: (modalName) => dispatch(closeModal(modalName)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
