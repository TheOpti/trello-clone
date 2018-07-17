import React, { Component } from 'react';
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

  render() {
    return (
      <div className="main">
        <div className="main__title">
          <h2>Your boards:</h2>
          <hr />
        </div>
        <div className="main__boards">
          <BoardCard />
          <BoardCard />
          <div className="card mb-3 main__create-new" onClick={this.openModal}>
            <h5>Create new...</h5>
          </div>
        </div>
        <AddNewBoardModal
          isOpen={this.state.isAddNewBoardModalOpen}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}

export default Main;
