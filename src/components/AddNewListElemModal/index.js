import React, { Component } from 'react';
import CustomModal from '../CustomModal';


class AddNewListElemModal extends Component {
  state = {
    value: '',
  };

  handleChange = (event)  => {
    this.setState({value: event.target.value});
  };

  handleSaveNewListElem = () => {
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
        title="Add new list element"
        handleClose={onClose}
        handleSave={this.handleSaveNewListElem}
        isOpen={isOpen}
      >
        <div className="form-group">
          <label>Element's name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new list item name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </CustomModal>
    );
  }
}

export default AddNewListElemModal;
