import React, { PureComponent } from 'react';
import { Link } from '@reach/router';
import MenuButton from '../atoms/MenuButton';

class ChangeScreenButton extends PureComponent {
  render() {
    return (
      <Link to={this.props.to}>
        <MenuButton>{this.props.children}</MenuButton>
      </Link>
    );
  }
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default ChangeScreenButton;
