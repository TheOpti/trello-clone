import React, { Component } from 'react';
import Button from '../Button';

import './styles.scss';


class CustomModal extends Component {
  state = {
    isClosing: false,
  };

  closeModal = () => {
    this.setState({ isClosing: true });

    setTimeout(() => {
      const { handleClose } = this.props;
      handleClose();

      this.setState({ isClosing: false });
    }, 300);
  };

  render() {
    const {
      title,
      handleSave,
      isOpen,
    } = this.props;

    const {
      isClosing
    } = this.state;

    if (!isOpen) return null;

    const modalContentClass = 'custom-modal__content';
    const modalStateClass = isClosing ? `${modalContentClass}--closed` : '';
    const modalClasses = `custom-modal__content ${modalStateClass}`;

    return (
      <div className="custom-modal">
        <div className={modalClasses}>
          <div className="custom-modal__header">
            <h5>
              { title }
            </h5>
            <Button
              handleClick={this.closeModal}
              label="&times;"
              color="transparent"
              className="custom-modal__close-btn"
            />
          </div>
          <div className="custom-modal__body">
            { this.props.children }
          </div>
          <div className="custom-modal__footer">
            <Button
              handleClick={this.closeModal}
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
