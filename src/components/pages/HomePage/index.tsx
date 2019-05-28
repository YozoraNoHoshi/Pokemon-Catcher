import React, { memo } from 'react';

import Flex from '../../atoms/Flex';
import HomePageMenu from '../../organisms/HomePageMenu';
import HowItWorks from '../../molecules/HowItWorks';
import Header from '../../molecules/Header';
import styled from 'styled-components';

const HomePageContainer = styled(Flex)`
  width: 75vw;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

interface Props {
  changeGameState: (type?: string) => void;
  currentHabitat: string;
}

function HomePage(props: Props): JSX.Element {
  return (
    <HomePageContainer as="section" column alCenter>
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
        currentHabitat={props.currentHabitat}
        changeGameState={props.changeGameState}
      />
      <HowItWorks cWidth={50} />
    </HomePageContainer>
  );
}

HomePage.defaultProps = { currentHabitat: '', changeGameState: () => {} };

export default memo(HomePage);
