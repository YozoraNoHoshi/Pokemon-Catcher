import React, { PureComponent } from 'react';
import { Link } from '@reach/router';
import MenuButton from '../../atoms/MenuButton';

interface Props {
  to: string;
}

class ChangeScreenButton extends PureComponent<Props, {}> {
  static defaultProps = { to: '', children: '' };
  render() {
    let { to, ...prop } = this.props;
    return (
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: 'initial',
          margin: 0,
          padding: 0,
          width: 'inherit'
        }}
      >
        <MenuButton {...prop}>{this.props.children}</MenuButton>
      </Link>
    );
  }
}

export default ChangeScreenButton;
