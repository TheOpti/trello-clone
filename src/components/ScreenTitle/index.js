import React, { Component } from 'react';
import Text from 'components/Text';

import './styles.scss';

class ScreenTitle extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="screen-title">
        <Text as="h2">
          { title }
        </Text>
      </div>
    );
  }
}

export default ScreenTitle;
