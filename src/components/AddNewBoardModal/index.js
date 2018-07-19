import React, { Component } from 'react';
import CustomModal from '../CustomModal';

class AddNewBoardModal extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveNewBoard = this.handleSaveNewBoard.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSaveNewBoard() {
    this.props.saveNewBoard(this.state.value);
  }

  render() {
    const { isOpen, onClose } = this.props;

    return (
      <CustomModal
        title="Create new board"
        handleClose={onClose}
        handleSave={this.handleSaveNewBoard}
        isOpen={isOpen}
      >
        <div className="form-group">
          <label>New board name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter board name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </CustomModal>
    );
  }
}

export default AddNewBoardModal;
