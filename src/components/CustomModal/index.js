import React, { Component } from 'react';

import './styles.css';

class CustomModal extends Component {
  render() {
    const {
      title,
      handleSave,
      handleClose,
      isOpen,
    } = this.props;

    if (!isOpen) return null;

    return (
      <div className="custom-modal">
        <div className="custom-modal__content">
          <div className="modal-header">
            <h5 className="modal-title">
              { title }
            </h5>
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { this.props.children }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomModal;
