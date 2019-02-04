import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Text from '@components/Text';

import './styles.scss';


const visibilityTypes = [
  {
    id: 'private',
    title: 'Private',
    description: 'This board is private',
  },
  {
    id: 'public',
    title: 'Public',
    description: 'This board is open to everyone when link is shared.',
  }
];

class VisibilityDropdown extends PureComponent {
  state = {
    isOpen: false,
  };

  openDropdown = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeDropdown = () => {
    this.setState({
      isOpen: false,
    });
  };

  onVisibilityClick = (visibility) => {
    const { handleSelect } = this.props;

    handleSelect(visibility);
    this.closeDropdown();
  };

  render() {
    const {
      selectedVisibility,
    } = this.props;

    const { isOpen } = this.state;

    const title = selectedVisibility ? selectedVisibility : 'Select...';

    return (
      <div className="visibility-dropdown">
        <div className="visibility-dropdown__title" onClick={this.openDropdown}>
          { title }
        </div>
        { isOpen && (
          <div className="visibility-dropdown__elements">
            {
              visibilityTypes.map((visibility) => {
                return (
                  <div
                    className="visibility-dropdown__element"
                    onClick={() => this.onVisibilityClick(visibility)}
                  >
                    <Text as="p" semibold>
                      { visibility.title }
                    </Text>
                    <Text as="p" regular>
                      { visibility.description }
                    </Text>
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
    );
  }
}


VisibilityDropdown.propTypes = {
  handleSelect: PropTypes.func,
  selectedVisibility: PropTypes.string,
};

export default VisibilityDropdown;
