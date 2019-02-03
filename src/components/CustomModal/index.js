import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import Text from '@components/Text';

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
      selectedColor,
    } = this.props;

    const {
      isClosing
    } = this.state;

    if (!isOpen) {
      return null;
    }

    const modalContentClass = 'custom-modal__content';
    const modalColor = selectedColor ? `color--${selectedColor}` : '';
    const modalStateClass = isClosing ? `${modalContentClass}--closed` : '';
    const modalClasses = `custom-modal__content ${modalStateClass} ${modalColor}`;

    return (
      <div className="custom-modal">
        <div className={modalClasses}>
          <div className="custom-modal__header">
            <Text as="h5">
              { title }
            </Text>
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

CustomModal.propTypes = {
  title: PropTypes.string,
  handleSave: PropTypes.func,
  isOpen: PropTypes.bool,
  selectedColor: PropTypes.string,
};

CustomModal.defaultProps = {
  selectedColor: 'white',
};

export default CustomModal;
