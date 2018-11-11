import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBoard } from '../../actions';

import BoardCard from '../../components/BoardCard';
import ScreenTitle from '../../components/ScreenTitle';
import AddNewItemModal from '../../components/AddNewItemModal';

import './styles.css';

class Main extends Component {
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

  saveNewBoard = (boardName) => {
    this.closeModal();
    this.props.createBoard(boardName);
  };

  render() {
    const { boards } = this.props;

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
            className="card mb-3 main__create-new board-card"
            onClick={this.openModal}
          >
            <h5>Create new...</h5>
          </div>
        </div>
        <AddNewItemModal
          title="Create new board"
          label="New board name"
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          onAccept={this.saveNewBoard}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards,
  }
};

const mapDispatchToProps = {
  createBoard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
