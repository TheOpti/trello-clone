import React, { Component } from 'react';
import { connect } from 'react-redux';

import colors from '../../colors.scss';

import CustomModal from '../CustomModal';
import ColorBox from '../ColorBox';
import Input from '../Input';
import Text from '../Text';

import './styles.scss';

class AddNewBoardModal extends Component {
  state = {
    value: '',
    color: Object.keys(colors)[0],
  };

  handleChange = (event)  => {
    this.setState({ value: event.target.value });
  };

  handleSaveNewBoard = () => {
    this.props.onAccept(this.state.value);
    this.setState({ value: '' });
  };

  selectColor = (color) => {
    this.setState({ color, })
  };

  render() {
    const {
      isOpen,
      onClose,
    } = this.props;

    const { color } = this.state;

    return (
      <CustomModal
        title="Create new board"
        handleClose={onClose}
        handleSave={this.handleSaveNewBoard}
        isOpen={isOpen}
        selectedColor={color}
      >
        <div className="form-group">
          <Text as="p">
            Board name
          </Text>
          <Input
            type="text"
            placeholder="Enter new name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Text as="p">
            Select color
          </Text>
          <div className="add-new-board-modal__colors">
            {
              Object
                .keys(colors)
                .map((colorName) => (
                  <ColorBox
                    handleSelectColor={this.selectColor}
                    isSelected={colorName === this.state.color}
                    key={colorName}
                    color={colors[colorName]}
                    name={colorName}
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
