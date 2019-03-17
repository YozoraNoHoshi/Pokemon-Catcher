import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import HomePageMenu from '../../organisms/HomePageMenu';
import HowItWorks from '../../molecules/HowItWorks';
import Header from '../../molecules/Header';

class HomePage extends PureComponent {
  render() {
    return (
      <Flex as="section" column alCenter>
        <Header
          headerStyle={{
            fontSize: '4em',
            marginTop: '10px'
          }}
          header="Welcome to the Pal Park!"
          flavorText='"A Place for New Beginnings"'
        />
        <HomePageMenu
          cWidth={40}
          currentHabitat={this.props.currentHabitat}
          changeGameState={this.props.changeGameState}
        />
        <HowItWorks cWidth={50} />
      </Flex>
    );
  }
}

HomePage.defaultProps = { currentHabitat: '' };

HomePage.propTypes = {};

export default HomePage;
