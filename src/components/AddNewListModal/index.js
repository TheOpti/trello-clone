import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomModal from '../CustomModal';


class AddNewListModal extends Component {
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
        title="Add new list to this board"
        handleClose={onClose}
        handleSave={this.handleSaveNewBoard}
        isOpen={isOpen}
      >
        <div className="form-group">
          <label>
            New list name
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

export default connect(null, null)(AddNewListModal);
