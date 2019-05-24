import React, { PureComponent } from 'react';
import ChangeScreenButton from '../ChangeScreenButton';
import MessageBox from '../../atoms/MessageBox';
import Flex from '../../atoms/Flex';

class PalParkClosed extends PureComponent {
  render() {
    return (
      <Flex column alCenter>
        <MessageBox>{this.props.message}</MessageBox>
        <ChangeScreenButton to="/">Return to Entrance</ChangeScreenButton>
      </Flex>
    );
  }
}

PalParkClosed.defaultProps = { message: '' };

PalParkClosed.propTypes = {};

export default PalParkClosed;
