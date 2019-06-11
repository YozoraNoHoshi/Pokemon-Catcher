import React, { memo } from 'react';
import Flex from '../../atoms/Flex';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: inherit;
  & > div {
  }
`;
interface Props {
  headerStyle?: object;
  flavorText: string;
  header: string;
}

function HomePageHeader(props: Props): JSX.Element {
  return (
    <Flex as="header">
      <Flex bold txCenter style={props.headerStyle}>
        {props.header}
      </Flex>
      <Flex txCenter italic large>
        {props.flavorText}
      </Flex>
    </Flex>
  );
}

HomePageHeader.defaultProps = { headerStyle: {}, flavorText: '', header: '' };

export default memo(HomePageHeader);
