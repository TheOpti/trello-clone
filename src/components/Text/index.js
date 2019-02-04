import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';


class Text extends PureComponent {
  render() {
    const {
      className,
      as,
      light,
      regular,
      semibold,
      bold,
      ...attributes
    } = this.props;

    const classes = cx(
      className,
      'text',
      `text__${as}`,
      {
        'text--light': light,
        'text--regular': regular,
        'text--semibold': semibold,
        'text--bold': bold,
      },
    );

    return createElement(
      as,
      {
        ...attributes,
        className: classes,
      },
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'div']),
  light: PropTypes.bool,
  regular: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
};

Text.defaultProps = {
  as: 'p',
  color: 'inherit',
  regular: true,
};

export default Text;