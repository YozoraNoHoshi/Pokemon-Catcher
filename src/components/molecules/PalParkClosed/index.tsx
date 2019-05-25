import React, { PureComponent } from 'react';
import ChangeScreenButton from '../ChangeScreenButton';
import MessageBox from '../../atoms/MessageBox';
import Flex from '../../atoms/Flex';

interface Props {
  message: string;
}
interface State {}

class PalParkClosed extends PureComponent<Props, State> {
  static defaultProps: Props = { message: '' };
  render() {
    return (
      <Flex column alCenter jCenter>
        <MessageBox>{this.props.message}</MessageBox>
        <ChangeScreenButton to="/">Return to Entrance</ChangeScreenButton>
      </Flex>
    );
  }
}

export default PalParkClosed;
