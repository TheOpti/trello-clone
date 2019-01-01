import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../colors.scss';

import './styles.scss';


function ColorBox({ color, name, handleSelectColor, isSelected }) {
  const colorBoxStateClass = isSelected ? 'color-box--selected' : '';
  const colorBoxClasses = `color-box ${colorBoxStateClass}`;

  const selectColor = () => {
    handleSelectColor(name);
  };

  return (
    <div
      onClick={selectColor}
      style={{ backgroundColor: color }}
      className={colorBoxClasses}
    />
  )
}

ColorBox.propTypes = {
  color: PropTypes.oneOf(Object.values(colors)),
  handleSelectColor: PropTypes.func,
  isSelected: PropTypes.bool,
};

ColorBox.defaultProps = {
  color: Object.values(colors)[0],
  isSelected: false,
};

export default ColorBox;