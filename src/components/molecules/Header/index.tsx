import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';

interface Props {
  headerStyle?: object;
  flavorText: string;
  header: string;
}

class HomePageHeader extends PureComponent<Props, {}> {
  static defaultProps: Props = { headerStyle: {}, flavorText: '', header: '' };
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

export default HomePageHeader;
