import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';

class HomePageHeader extends PureComponent {
  render() {
    return (
      <Flex as="header">
        <Flex bold txCenter style={this.props.headerStyle}>
          {this.props.header}
        </Flex>
        <Flex txCenter large style={{ fontStyle: 'italic' }}>
          {this.props.flavorText}
        </Flex>
      </Flex>
    );
  }
}

HomePageHeader.defaultProps = { headerStyle: {}, flavorText: '', header: '' };

HomePageHeader.propTypes = {};

export default HomePageHeader;
