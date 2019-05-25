import styled, { StyledComponent } from 'styled-components';

interface Props {
  sHeight: string | number;
}

const Sprite: StyledComponent<'img', Props> = styled.img`
  object-fit: contain;
  height: ${height};
  pointer-events: none;
`;

function height({ sHeight }: Props) {
  if (+sHeight) return `${sHeight}%`;
  return '75%';
}

export default Sprite;
