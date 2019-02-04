import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../colors.scss';
import CustomModal from '@components/CustomModal';
import ColorBox from '@components/ColorBox';
import Input from '@components/Input';
import Text from '@components/Text';
import Section from '@components/Section';
import VisibilityDropdown from '@components/VisibilityDropdown';

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
        <Section>
          <Text as="p">
            Board name
          </Text>
          <Input
            type="text"
            placeholder="Enter new name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Section>
        <Section>
          <Text as="p">
            Visibility
          </Text>
          <VisibilityDropdown />
        </Section>
        <Section>
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
        </Section>
      </CustomModal>
    );
  }
}

export default connect(null, null)(AddNewBoardModal);
