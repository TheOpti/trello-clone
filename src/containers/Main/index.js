import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  createBoard,
  openModal,
  closeModal,
} from '../../actions';

import modalsNames from 'constants/modals';

import BoardCard from 'components/BoardCard';
import ScreenTitle from 'components/ScreenTitle';
import AddNewBoardModal from 'components/AddNewBoardModal';

import './styles.scss';


class Main extends Component {
  saveNewBoard = (board) => {
    const { closeModal, createBoard } = this.props;

    closeModal();
    createBoard(board);
  };

  render() {
    const {
      boards,
      isNewBoardModalOpen,
      openModal,
      closeModal,
    } = this.props;

    return (
      <div className="main">
        <ScreenTitle
          title="Your boards:"
        />
        <div className="main__boards">
          {
            boards.map(board => (
              <BoardCard
                key={board.id}
                board={board}
              />
            ))
          }
          <div
            className="main__create-new"
            onClick={openModal}
          >
            Create new board...
          </div>
        </div>
        <AddNewBoardModal
          isOpen={isNewBoardModalOpen}
          onClose={closeModal}
          onAccept={this.saveNewBoard}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards,
    isNewBoardModalOpen: state.ui.modals[modalsNames.ADD_NEW_BOARD_MODAL],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (boardName) => dispatch(createBoard(boardName)),
    openModal: () => dispatch(openModal(modalsNames.ADD_NEW_BOARD_MODAL)),
    closeModal: () => dispatch(closeModal(modalsNames.ADD_NEW_BOARD_MODAL)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
