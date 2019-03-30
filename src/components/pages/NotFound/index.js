import React, { PureComponent } from 'react';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import Flex from '../../atoms/Flex';
import Sprite from '../../atoms/Sprite';

class NotFound extends PureComponent {
  render() {
    return (
      <Flex jCenter alCenter column style={{ marginTop: '30%' }}>
        <Flex txCenter large>
          This section is currently under construction.
        </Flex>
        <Sprite src="https://thumbs.gfycat.com/ParallelQuerulousCottontail.webp" />
        <Flex txCenter large>
          We apologize for the inconvenience.
        </Flex>
        <ChangeScreenButton to="/">Return to the Pal Park</ChangeScreenButton>
      </Flex>
    );
  }
}

NotFound.defaultProps = {};

NotFound.propTypes = {};

export default NotFound;
