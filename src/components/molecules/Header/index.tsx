import React, { memo } from 'react';
import Flex from '../../atoms/Flex';

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
      <Flex txCenter large style={{ fontStyle: 'italic' }}>
        {props.flavorText}
      </Flex>
    </Flex>
  );
}

HomePageHeader.defaultProps = { headerStyle: {}, flavorText: '', header: '' };

export default memo(HomePageHeader);
