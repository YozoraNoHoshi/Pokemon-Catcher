import styled from 'styled-components';
import getCSSProperties from '../../../helpers/getCSSProperties';

const Text = styled.div`
  font-size: ${fontSize};
  font-weight: ${weight};
  text-align: ${textAlign};
  ${width}
`;

function width({ width }) {
  if (typeof width === 'number') return `width: ${width}%;`;
  if (typeof width === 'string') return `width: ${width};`;
  return `width: 100%`;
}

function weight(props) {
  return getCSSProperties(
    props,
    { bold: 'bold', normal: 'normal', thin: 'thin' },
    'normal'
  );
}

function fontSize(props) {
  return getCSSProperties(
    props,
    { large: '2em', small: '.75em', medium: '1.5em' },
    '1em'
  );
}

function textAlign(props) {
  return getCSSProperties(
    props,
    { left: 'left', center: 'center', right: 'right' },
    'left'
  );
}

export default Text;
