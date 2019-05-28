import React, { memo } from 'react';
import ChangeScreenButton from '../ChangeScreenButton';
import MessageBox from '../../atoms/MessageBox';
import Flex from '../../atoms/Flex';

interface Props {
  message: string;
}

function PalParkClosed(props: Props): JSX.Element {
  return (
    <Flex column alCenter jCenter>
      <MessageBox>{props.message}</MessageBox>
      <ChangeScreenButton to="/">Return to Entrance</ChangeScreenButton>
    </Flex>
  );
}

PalParkClosed.defaultProps = { message: '' };

export default memo(PalParkClosed);
