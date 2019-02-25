import React, { PureComponent } from 'react';
import { navigate } from '@reach/router';
import MenuButton from '../atoms/MenuButton';

class ChangeScreenButton extends PureComponent {
  handleClick = () => {
    navigate(`/pokemon/${this.props.to}`);
  };
  render() {
    return (
      <MenuButton click={this.handleClick}>{this.props.children}</MenuButton>
    );
  }
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default ChangeScreenButton;
