import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import MainMenu from '../../organisms/MainMenu';
import HomePageMenu from '../../organisms/HomePageMenu';

class HomePage extends PureComponent {
  render() {
    return (
      <Flex as="section" column alCenter>
        <Flex as="header">
          <Flex
            bold
            txCenter
            style={{
              fontSize: '4em',
              marginTop: '10px'
            }}
          >
            Welcome to the Pal Park!
          </Flex>
          <Flex txCenter large style={{ fontStyle: 'italic' }}>
            "A Place for New Beginnings"
          </Flex>
        </Flex>

        <HomePageMenu
          currentHabitat={this.props.currentHabitat}
          changeGameState={this.props.changeGameState}
        />
      </Flex>
    );
  }
}

HomePage.defaultProps = { currentHabitat: '' };

HomePage.propTypes = {};

export default HomePage;
