import React, { Component } from 'react';
import CustomModal from '../CustomModal';
import Section from '../Section';
import Text from '../Text';
import Input from '../Input';


class AddNewListElemModal extends Component {
  state = {
    value: '',
  };

  handleChange = (event)  => {
    this.setState({value: event.target.value});
  };

  handleSaveNewListElem = () => {
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
        title="Add new list element"
        handleClose={onClose}
        handleSave={this.handleSaveNewListElem}
        isOpen={isOpen}
      >
        <Section>
          <Text as="p">
            Element's name
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

export default AddNewListElemModal;
