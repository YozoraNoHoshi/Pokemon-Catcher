import styled from 'styled-components';
import getCSSProperties from '../../../helpers/getCSSProperties';

const Text = styled.div`
  font-size: ${fontSize};
  font-weight: ${weight};
  text-align: ${textAlign};
  ${width}
`;

function width({ cWidth }) {
  if (typeof cWidth === 'number') return `width: ${cWidth}%;`;
  if (typeof cWidth === 'string') return `width: ${cWidth};`;
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
