import React, { memo } from 'react';
import styled from 'styled-components';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import { Width } from '../../../types';
import useSaveLoad from '../../hooks/useSaveLoad';

const Span = styled.span`
  font-size: 0.33em;
`;

interface Props {
  changeGameState: (type?: string) => void;
  currentHabitat: string;
}

function HomePageMenu(props: Props & Width): JSX.Element {
  const { saveGame, loadGame } = useSaveLoad(props.changeGameState);

  return (
    <Flex column cWidth={props.cWidth}>
      <Flex>
        <ChangeScreenButton
          to="/battle"
          pokeRed
          style={{ fontSize: '2em', padding: '20px', color: 'mistyrose' }}
        >
          Enter Park <br />
          <Span>Destination: The {title(props.currentHabitat)}</Span>
        </ChangeScreenButton>
      </Flex>
      <Flex row cWidth={100}>
        <ChangeScreenButton to="/habitats">Transit Center</ChangeScreenButton>
        <ChangeScreenButton to="/pokedex">Pokedex</ChangeScreenButton>
      </Flex>
      <Flex row cWidth={100}>
        <MenuButton cWidth={100} onClick={saveGame}>
          Save
        </MenuButton>
        <MenuButton cWidth={100} onClick={loadGame}>
          Load
        </MenuButton>
      </Flex>
      <Flex>
        <ChangeScreenButton to="/mart">[UNDER CONSTRUCTION]</ChangeScreenButton>
      </Flex>
    </Flex>
  );
}

HomePageMenu.defaultProps = { cWidth: 100 };

export default memo(HomePageMenu);
