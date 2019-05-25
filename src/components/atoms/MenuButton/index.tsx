import styled from 'styled-components';
import getCSSProperties from '../../../helpers/getCSSProperties';

interface Props {
  pokeRed?: boolean;
  active?: boolean;
  large?: boolean;
  cWidth?: number;
}

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    background: ${hoverBackground};
    cursor: pointer;
  }
`;

function background(props: Props) {
  return getCSSProperties(
    props,
    { active: 'lightblue', pokeRed: 'firebrick' },
    'lightgrey'
  );
}
function hoverBackground(props: Props) {
  return getCSSProperties(props, { pokeRed: 'crimson' }, 'skyblue');
}
function fontSize(props: Props) {
  let cssProps = getCSSProperties(props, { large: '2em' }, false);
  if (cssProps) return `font-size: ${cssProps};`;
  return null;
}
function width({ cWidth }: Props) {
  if (typeof cWidth === 'number') return `width: ${cWidth}%;`;
  return null;
}

export default MenuButton;
