import styled from 'styled-components';
import getCSSProperties from '../../helpers/getCSSProperties';

const Flex = styled.div`
  display: flex;
  flex-direction: ${flexDirection};
  ${justifyContent}
  ${alignItems}
  ${flexWrap}
  ${overflow}
  ${textAlign}
  ${width}
`;

function flexDirection(props) {
  return getCSSProperties(props, { row: 'row', column: 'column' }, 'inherit');
}
function width({ width }) {
  if (typeof width === 'number') return `width: ${width}%;`;
  if (typeof width === 'string') return `width: ${width};`;
  return null;
}
function overflow(props) {
  let cssProp = getCSSProperties(
    props,
    { hidden: 'hidden', scroll: 'scroll', visible: 'visible' },
    false
  );
  if (cssProp) return `overflow: ${cssProp};`;
  return null;
}
function justifyContent(props) {
  let cssProp = getCSSProperties(
    props,
    { jCenter: 'center', jStart: 'flex-start', jEnd: 'flex-end' },
    false
  );
  if (cssProp) return `justify-content: ${cssProp};`;
  return null;
}
function alignItems(props) {
  let cssProp = getCSSProperties(
    props,
    { alCenter: 'center', alStart: 'flex-start', alEnd: 'flex-end' },
    false
  );
  if (cssProp) return `align-items: ${cssProp};`;
  return null;
}
function flexWrap(props) {
  let cssProp = getCSSProperties(
    props,
    { fWrap: 'wrap', noFWrap: 'no-wrap' },
    false
  );
  if (cssProp) return `flex-wrap: ${cssProp};`;
  return null;
}
function textAlign(props) {
  let cssProp = getCSSProperties(
    props,
    { txCenter: 'center', txRight: 'right', txLeft: 'left' },
    false
  );
  if (cssProp) return `text-align: ${cssProp};`;
  return null;
}

export default Flex;
