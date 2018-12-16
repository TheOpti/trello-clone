import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomModal from '../CustomModal';


class AddNewBoardModal extends Component {
  state = {
    value: '',
  };

  handleChange = (event)  => {
    this.setState({value: event.target.value});
  };

  handleSaveNewBoard = () => {
    this.props.onAccept(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const {
      isOpen,
      onClose,
    } = this.props;

    return (
      <CustomModal
        title="Create new board"
        handleClose={onClose}
        handleSave={this.handleSaveNewBoard}
        isOpen={isOpen}
      >
        <div className="form-group">
          <label>
            Board name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </CustomModal>
    );
  }
}

export default connect(null, null)(AddNewBoardModal);
