import styled, { StyledComponent } from 'styled-components';
import getCSSProperties, {
  width,
  alignItems,
  textAlign,
  flexWrap,
  justifyContent,
  fontSize,
  fontStyle,
  fontWeight
} from '../../../helpers/getCSSProperties';
import {
  FlexDirection,
  Width,
  FontSize,
  FontWeight,
  JustifyContent,
  AlignItems,
  Wrap,
  TextAlign,
  FontStyle
} from '../../../types';

type Props = FlexDirection &
  Width &
  FontWeight &
  FontSize &
  JustifyContent &
  AlignItems &
  Wrap &
  TextAlign &
  FontStyle & { ref?: any };

const Flex: StyledComponent<'div', any, Props, never> = styled.div`
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
  ${fontStyle}
`;

function flexDirection(props: Props) {
  return getCSSProperties(props, { row: 'row', column: 'column' }, 'inherit');
}

export default Flex;
