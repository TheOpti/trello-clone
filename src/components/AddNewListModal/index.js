import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomModal from '../CustomModal';
import Section from '../Section';
import Text from '../Text';
import Input from '../Input';


class AddNewListModal extends Component {
  state = {
    value: '',
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
        title="Add new list to this board"
        handleClose={onClose}
        handleSave={this.handleSaveNewBoard}
        isOpen={isOpen}
      >
        <Section>
          <Text as="p">
            New list name
          </Text>
          <Input
            type="text"
            placeholder="Enter new name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Section>
      </CustomModal>
    );
  }
}

export default connect(null, null)(AddNewListModal);
