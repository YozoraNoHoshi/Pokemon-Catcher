import styled, { StyledComponent } from 'styled-components';

interface Props {
  sHeight?: string | number;
}

const Sprite: StyledComponent<'img', any, Props, never> = styled.img`
  object-fit: contain;
  height: ${height};
  pointer-events: none;
`;

function height({ sHeight }: Props) {
  if (Number(sHeight)) return `${sHeight}%`;
  return '75%';
}

export default Sprite;
