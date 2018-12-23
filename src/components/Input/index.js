import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


function Input({value, className = '', ...props}) {
  const inputClasses = `input ${className}`;

  return (
    <input
      value={value}
      className={inputClasses}
      {...props}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Input;