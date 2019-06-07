import React, { memo } from 'react';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import { Width } from '../../../types';
interface Props {
  changeGameState: (arg?: string) => void;
}

import useSaveLoad from '../../hooks/useSaveLoad';

function MainMenu(props: Props & Width): JSX.Element {
  const { saveGame, loadGame } = useSaveLoad(props.changeGameState);
  return (
    <Flex
      column
      jCenter
      cWidth={props.cWidth}
      style={{
        borderLeft: '1px solid black'
      }}
    >
      <Flex column cWidth={100}>
        <ChangeScreenButton
          to="/battle"
          pokeRed
          style={{
            padding: '30px',
            color: 'white'
          }}
        >
          Search for Pokemon!
        </ChangeScreenButton>
        <ChangeScreenButton to="/habitats">Transit Center</ChangeScreenButton>
        <ChangeScreenButton to="/pokedex">Pokedex</ChangeScreenButton>
      </Flex>
      <Flex row>
        <MenuButton cWidth={100} onClick={saveGame}>
          Save Game
        </MenuButton>
        <MenuButton cWidth={100} onClick={loadGame}>
          Load Game
        </MenuButton>
      </Flex>
      <Flex cWidth={100}>
        <ChangeScreenButton to="/">Return to Park Entrance</ChangeScreenButton>
      </Flex>
    </Flex>
  );
}

MainMenu.defaultProps = { changeGameState: console.log, cWidth: 100 };

export default memo(MainMenu);
