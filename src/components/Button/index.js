import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Button({label, handleClick, color, className = ''}) {
  console.log('Button component');

  const btnClasses = `button button--${color} ${className}`;

  return (
    <button
      className={btnClasses}
      onClick={handleClick}
    >
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  handleClick: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;