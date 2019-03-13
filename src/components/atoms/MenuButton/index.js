// import React, { PureComponent } from 'react';
import styled from 'styled-components';
import getCSSProperties from '../../../helpers/getCSSProperties';

const MenuButton = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;
  background: ${background};
  border-radius: 10px;
  text-decoration: none;
  ${fontSize};
  ${width}
  :hover {
    background: skyblue;
    cursor: pointer;
  }
`;

function background(props) {
  return getCSSProperties(props, { active: 'lightblue' }, 'lightgrey');
}
function fontSize(props) {
  let cssProps = getCSSProperties(props, { large: '2em' }, false);
  if (cssProps) return `font-size: ${cssProps}`;
  return null;
}
function width({ width }) {
  if (typeof width === 'number') return `width: ${width}%`;
  return null;
}

export default MenuButton;
