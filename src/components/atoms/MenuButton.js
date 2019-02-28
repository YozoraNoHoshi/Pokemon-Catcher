// import React, { PureComponent } from 'react';
import styled from 'styled-components';
import getCSSProperties from '../../helpers/getCSSProperties';

const MenuButton = styled.div`
  text-align: center;
  padding: 5px;
  margin: 5px;
  background: ${background};
  border-radius: 10px;
`;

function background(props) {
  return getCSSProperties(props, { active: 'lightblue' }, 'lightgrey');
}

export default MenuButton;
