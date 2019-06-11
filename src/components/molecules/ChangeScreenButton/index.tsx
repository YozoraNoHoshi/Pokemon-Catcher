import React, { memo, ReactNode } from 'react';
import { Link } from '@reach/router';
import MenuButton, { Props as MBProps } from '../../atoms/MenuButton';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;
  margin: 0;
  padding: 0;
  width: inherit;
`;

interface Props extends MBProps {
  to: string;
  children: ReactNode;
}

function ChangeScreenButton(props: Props): JSX.Element {
  let { to, ...prop } = props;
  return (
    <StyledLink to={to}>
      <MenuButton {...prop}>{props.children}</MenuButton>
    </StyledLink>
  );
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default memo(ChangeScreenButton);
