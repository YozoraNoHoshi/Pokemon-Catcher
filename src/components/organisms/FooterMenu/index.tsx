// import React, { PureComponent } from 'react';
import React, { memo } from 'react';
import Flex from '../../atoms/Flex';
import TrainerMenu from '../TrainerMenu';
import ModalMenu from '../../molecules/ModalMenu';
import MainMenu from '../MainMenu';
import styled from 'styled-components';
import { POKEBALL_SPRITES } from '../../../data';
import { CaughtPokemon, PokeballSprites } from '../../../types';
import { WindowLocation, RouteComponentProps } from '@reach/router';

const FMenu = styled(Flex)`
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: calc(50% - 4ch);
`;

interface Props extends RouteComponentProps {
  currentPokemon: CaughtPokemon[] | object[];
  changeGameState: (arg?: string) => void;
}

function FooterMenu(props: Props): JSX.Element | null {
  const location = props.location!;
  if (location.pathname === '/') return null;
  return (
    <FMenu as="footer">
      <ModalMenu closeOnInteract buttonText="Menu">
        <Flex row cWidth={100} style={{ justifyContent: 'space-between' }}>
          <TrainerMenu
            className="modal"
            pokeballs={POKEBALL_SPRITES as PokeballSprites}
            cWidth={55}
            pokemon={props.currentPokemon as CaughtPokemon[]}
          />
          <MainMenu cWidth={45} changeGameState={props.changeGameState} />
        </Flex>
      </ModalMenu>
    </FMenu>
  );
}

FooterMenu.defaultProps = {
  currentPokemon: [{}],
  changeGameState: console.log
};

export default memo(FooterMenu);
