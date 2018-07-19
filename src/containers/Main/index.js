import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBoard } from '../../actions';

import BoardCard from '../../components/BoardCard';
import AddNewBoardModal from '../../components/AddNewBoardModal';

import './styles.css';

class Main extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isAddNewBoardModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveNewBoard = this.saveNewBoard.bind(this);
  }

  openModal() {
    this.setState({
      isAddNewBoardModalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isAddNewBoardModalOpen: false,
    });
  }

  saveNewBoard(boardName) {
    this.closeModal();
    this.props.createBoard(boardName);
  }

  render() {
    const { boards } = this.props;

    console.log('boards: ', boards);


    return (
      <div className="main">
        <div className="main__title">
          <h2>Your boards:</h2>
          <hr />
        </div>
        <div className="main__boards">
          {
            boards.map((board) => {
              return (
                <BoardCard
                  name={board.name}
                />
              )
            })
          }
          <div
            className="card mb-3 main__create-new board-card"
            onClick={this.openModal}
          >
            <h5>Create new...</h5>
          </div>
        </div>
        <AddNewBoardModal
          isOpen={this.state.isAddNewBoardModalOpen}
          onClose={this.closeModal}
          saveNewBoard={this.saveNewBoard}
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
