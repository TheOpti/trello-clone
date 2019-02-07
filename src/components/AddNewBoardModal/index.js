import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from 'partials/_variables.scss';
import CustomModal from 'components/CustomModal';
import ColorBox from 'components/ColorBox';
import Input from 'components/Input';
import Text from 'components/Text';
import Section from 'components/Section';
import VisibilityDropdown from 'components/VisibilityDropdown';

import './styles.scss';


class AddNewBoardModal extends Component {
  state = {
    name: '',
    color: Object.keys(colors)[0],
    visibility: null,
  };

  handleChange = (event)  => {
    this.setState({ name: event.target.value });
  };

  selectColor = (color) => {
    this.setState({ color })
  };

  handleSelect = (visibility) => {
    this.setState({
      visibility,
    })
  };

  handleSaveNewBoard = () => {
    const { onAccept } = this.props;
    onAccept(this.state);

    this.setState({
      name: '',
      visibility: null,
      color: Object.keys(colors)[0],
    });
  };

  render() {
    const {
      isOpen,
      onClose,
    } = this.props;

    const {
      color,
      visibility,
    } = this.state;

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
          <VisibilityDropdown
            handleSelect={this.handleSelect}
            selectedVisibility={visibility}
          />
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
