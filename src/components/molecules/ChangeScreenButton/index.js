import React, { PureComponent } from 'react';
import { Link } from '@reach/router';
import MenuButton from '../../atoms/MenuButton';

class ChangeScreenButton extends PureComponent {
  render() {
    let { to, prop } = this.props;
    return (
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: 'initial',
          margin: 0,
          padding: 0
        }}
      >
        <MenuButton {...prop}>{this.props.children}</MenuButton>
      </Link>
    );
  }
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default ChangeScreenButton;
