import styled from 'styled-components';

const Sprite = styled.img`
  object-fit: contain;
  height: ${height};
  pointer-events: none;
`;

function height({ sHeight }) {
  if (+sHeight) return `${sHeight}%`;
  return '75%';
}

export default Sprite;
