import React, { Component } from 'react';
import CustomModal from '../CustomModal';

class AddNewItemModal extends Component {
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
      title,
      label,
      isOpen,
      onClose,
    } = this.props;

    return (
      <CustomModal
        title={title}
        handleClose={onClose}
        handleSave={this.handleSaveNewBoard}
        isOpen={isOpen}
      >
        <div className="form-group">
          <label>{ label }</label>
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

export default AddNewItemModal;
