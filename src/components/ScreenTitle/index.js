import React, { Component } from 'react';

import './styles.scss';

class ScreenTitle extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="screen-title">
        <h3>{ title }</h3>
      </div>
    );
  }
}

export default ScreenTitle;
