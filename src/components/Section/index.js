import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


function Section({ children }) {
  return (
    <div className="section">
      { children }
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.obj,
};

export default Section;