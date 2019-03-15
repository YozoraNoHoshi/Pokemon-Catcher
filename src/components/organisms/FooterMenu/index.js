import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import TrainerMenu from '../TrainerMenu';
import ModalMenu from '../../molecules/ModalMenu';
import MainMenu from '../../organisms/MainMenu';
import styled from 'styled-components';

const FMenu = styled(Flex)`
  flex-direction: row;
  position: fixed; bottom: 0
  left: calc(50% - 4ch);
`;

class FooterMenu extends PureComponent {
  render() {
    if (this.props.location.pathname === '/') return null;
    return (
      <FMenu>
        <ModalMenu closeOnInteract buttonText="Menu">
          <Flex row cWidth={100} style={{ justifyContent: 'space-between' }}>
            <TrainerMenu pokemon={this.props.currentPokemon} />
            <MainMenu changeGameState={this.props.changeGameState} />
          </Flex>
        </ModalMenu>
      </FMenu>
    );
  }
}

FooterMenu.defaultProps = {
  currentPokemon: [{}],
  changeGameState: console.log
};

FooterMenu.propTypes = {};

export default FooterMenu;
