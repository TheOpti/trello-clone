import React, { Component } from 'react';
import CustomModal from '../CustomModal';

class AddNewBoardModal extends Component {
  render() {
    const { onClose, isOpen } = this.props;

    return (
      <CustomModal
        title="Create new board"
        handleClose={onClose}
        isOpen={isOpen}
      >
        <div className="form-group">
          <label>New board name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter board name"
          />
        </div>
      </CustomModal>
    );
  }
}

export default AddNewBoardModal;
