import React, { Component } from 'react';

import Button from '../Button';

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
            <Button
              handleClick={handleClose}
              label="&times;"
              color="transparent"
              className="custom-modal__close-btn"
            />
          </div>
          <div className="modal-body">
            { this.props.children }
          </div>
          <div className="modal-footer">
            <Button
              handleClick={handleClose}
              label="Close"
              color="secondary"
            />
            <Button
              handleClick={handleSave}
              label="Save changes"
              color="primary"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomModal;
