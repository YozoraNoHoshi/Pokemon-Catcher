import styled from 'styled-components';
import getCSSProperties from '../../helpers/getCSSProperties';

const Flex = styled.div`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  overflow: ${overflow};
`;

function flexDirection(props) {
  return getCSSProperties(props, { row: 'row', column: 'column' }, 'row');
}
function overflow(props) {
  return getCSSProperties(
    props,
    { hidden: 'hidden', scroll: 'scroll', visible: 'visible' },
    'initial'
  );
}
function justifyContent(props) {
  return getCSSProperties(
    props,
    { jCenter: 'center', jStart: 'flex-start', jEnd: 'flex-end' },
    'flex-start'
  );
}
function alignItems(props) {
  return getCSSProperties(
    props,
    { alCenter: 'center', alStart: 'flex-start', alEnd: 'flex-end' },
    'flex-start'
  );
}
function flexWrap(props) {
  return getCSSProperties(
    props,
    { wrap: 'wrap', nowrap: 'no-wrap' },
    'initial'
  );
}

export default Flex;
