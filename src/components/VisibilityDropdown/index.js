import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import visibilityTypes from 'constants/visibilityTypes';
import VisibilityOption from 'components/VisibilityOption';

import './styles.scss';


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

  handleVisibilityClick = (visibility) => {
    const { handleSelect } = this.props;

    handleSelect(visibility);
    this.closeDropdown();
  };

  render() {
    const {
      selectedVisibility,
    } = this.props;

    const { isOpen } = this.state;

    const title = selectedVisibility ? selectedVisibility.title : 'Select...';

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
                  <VisibilityOption
                    key={visibility.id}
                    visibility={visibility}
                    onVisibilityClick={this.handleVisibilityClick}
                  />
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
  selectedVisibility: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }),
};

export default VisibilityDropdown;
