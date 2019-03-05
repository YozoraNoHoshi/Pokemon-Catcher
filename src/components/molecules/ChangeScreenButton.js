import React, { PureComponent } from 'react';
import { Link } from '@reach/router';
import MenuButton from '../atoms/MenuButton';

class ChangeScreenButton extends PureComponent {
  render() {
    return (
      <Link
        to={this.props.to}
        style={{
          textDecoration: 'none',
          color: 'initial',
          margin: 0,
          padding: 0
        }}
      >
        <MenuButton>{this.props.children}</MenuButton>
      </Link>
    );
  }
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default ChangeScreenButton;
