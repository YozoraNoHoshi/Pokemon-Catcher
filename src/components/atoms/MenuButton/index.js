import styled from 'styled-components';
import getCSSProperties from '../../../helpers/getCSSProperties';

const MenuButton = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;
  background: ${background};
  border-radius: 3px;
  text-decoration: none;
  box-shadow: 0 0 3px black;
  ${fontSize}
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
  if (cssProps) return `font-size: ${cssProps};`;
  return null;
}
function width({ cWidth }) {
  if (typeof cWidth === 'number') return `width: ${cWidth}%;`;
  return null;
}

export default MenuButton;
