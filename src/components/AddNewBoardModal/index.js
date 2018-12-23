import React, { Component } from 'react';
import { connect } from 'react-redux';

import colors from '../../constants/colors';

import CustomModal from '../CustomModal';
import ColorBox from '../ColorBox';
import Input from '../Input';

import './styles.css';

class AddNewBoardModal extends Component {
  state = {
    value: '',
    color: '',
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
          <label className="add-new-board-modal__label">
            Board name
          </label>
          <Input
            type="text"
            placeholder="Enter new name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label className="add-new-board-modal__label">
            Select color
          </label>
          <div className="add-new-board-modal__colors">
            {
              Object.values(colors).map((color) => (
                <ColorBox
                  color={color}
                />
              ))
            }
          </div>
        </div>
      </CustomModal>
    );
  }
}

export default connect(null, null)(AddNewBoardModal);
