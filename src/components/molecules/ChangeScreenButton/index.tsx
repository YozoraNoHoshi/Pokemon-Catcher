import React, { memo, ReactNode } from 'react';
import { Link } from '@reach/router';
import MenuButton, { Props as MBProps } from '../../atoms/MenuButton';

interface Props extends MBProps {
  to: string;
  children: ReactNode;
}

function ChangeScreenButton(props: Props): JSX.Element {
  let { to, ...prop } = props;
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
      <MenuButton {...prop}>{props.children}</MenuButton>
    </Link>
  );
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default memo(ChangeScreenButton);
