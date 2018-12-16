import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


function ColorBox({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="color-box"
    />
  )
}

ColorBox.propTypes = {
  color: PropTypes.oneOf(['primary']),
};

ColorBox.defaultProps = {
  color: 'primary',
};

export default ColorBox;