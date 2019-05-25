import styled, { StyledComponent } from 'styled-components';
import getCSSProperties from '../../../helpers/getCSSProperties';

interface Props {
  row?: boolean;
  column?: boolean;
  cWidth?: string | number;
  bold?: boolean;
  normal?: boolean;
  thin?: boolean;
  large?: boolean;
  small?: boolean;
  medium?: boolean;
  jCenter?: boolean;
  jStart?: boolean;
  jEnd?: boolean;
  jAround?: boolean;
  jBetween?: boolean;
  alCenter?: boolean;
  alStart?: boolean;
  alEnd?: boolean;
  fWrap?: boolean;
  noFWrap?: boolean;
  txCenter?: boolean;
  txLeft?: boolean;
  txRight?: boolean;
}

const Flex: any = styled.div`
  display: flex;
  flex-direction: ${flexDirection};
  user-select: none;
  ${justifyContent}
  ${alignItems}
  ${flexWrap}
  ${textAlign}
  ${fontWeight}
  ${fontSize}
  ${width}
`;

function flexDirection(props: Props) {
  return getCSSProperties(props, { row: 'row', column: 'column' }, 'inherit');
}

function width({ cWidth }: Props) {
  if (typeof cWidth === 'number') return `width: ${cWidth}%;`;
  if (typeof cWidth === 'string') return `width: ${cWidth};`;
  return null;
}

function fontWeight(props: Props) {
  let cssProp = getCSSProperties(
    props,
    { bold: 'bold', normal: 'normal', thin: 'thin' },
    'normal'
  );
  if (cssProp) return `font-weight: ${cssProp};`;
  return null;
}

function fontSize(props: Props) {
  let cssProp = getCSSProperties(
    props,
    { large: '2em', small: '.75em', medium: '1.5em' },
    false
  );
  if (cssProp) return `font-size: ${cssProp};`;
  return null;
}

function justifyContent(props: Props) {
  let cssProp = getCSSProperties(
    props,
    {
      jCenter: 'center',
      jStart: 'flex-start',
      jEnd: 'flex-end',
      jAround: 'space-around',
      jBetween: 'space-between'
    },
    false
  );
  if (cssProp) return `justify-content: ${cssProp};`;
  return null;
}
function alignItems(props: Props) {
  let cssProp = getCSSProperties(
    props,
    { alCenter: 'center', alStart: 'flex-start', alEnd: 'flex-end' },
    false
  );
  if (cssProp) return `align-items: ${cssProp};`;
  return null;
}
function flexWrap(props: Props) {
  let cssProp = getCSSProperties(
    props,
    { fWrap: 'wrap', noFWrap: 'no-wrap' },
    false
  );
  if (cssProp) return `flex-wrap: ${cssProp};`;
  return null;
}
function textAlign(props: Props) {
  let cssProp = getCSSProperties(
    props,
    { txCenter: 'center', txRight: 'right', txLeft: 'left' },
    false
  );
  if (cssProp) return `text-align: ${cssProp};`;
  return null;
}

export default Flex;