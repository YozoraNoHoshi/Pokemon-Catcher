import styled from 'styled-components';
import getCSSProperties from '../../helpers/getCSSProperties';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${getFlexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  overflow: ${overflow};
`;

function getFlexDirection(props) {
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

export default StyledFlex;
