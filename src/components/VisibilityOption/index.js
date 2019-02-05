import React from 'react';
import PropTypes from 'prop-types';
import Text from '@components/Text';

import './styles.scss';


function VisibilityOption({ visibility, onVisibilityClick}) {
  const { title, description } = visibility;

  const selectVisibility = () => {
    onVisibilityClick(visibility);
  };

  return (
    <div
      className="visibility-option"
      onClick={selectVisibility}
    >
      <Text as="p" semibold>
        { title }
      </Text>
      <Text as="p" regular>
        { description }
      </Text>
    </div>
  )
}

VisibilityOption.propTypes = {
  visibility: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  onVisibilityClick: PropTypes.func,
};

VisibilityOption.defaultProps = {
  color: 'primary',
};

export default VisibilityOption;