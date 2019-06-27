import React, { memo } from 'react';
import styled from 'styled-components';
import { Width } from '../../../types';
import useSaveLoad from '../../hooks/useSaveLoad';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';

const MenuFlex = styled(Flex)`
  border-left: 1px solid black;
`;

interface Props {
  changeGameState: (arg?: string) => void;
}

function MainMenu(props: Props & Width): JSX.Element {
  const { saveGame, loadGame } = useSaveLoad(props.changeGameState);
  return (
    <MenuFlex column jCenter cWidth={props.cWidth}>
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
    </MenuFlex>
  );
}

MainMenu.defaultProps = { changeGameState: console.log, cWidth: 100 };

export default memo(MainMenu);
