import React, { memo } from 'react';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import Card from '../../atoms/Card';
import InventoryMenu from '../../organisms/InventoryMenu';
import ModalMenu from '../../molecules/ModalMenu';
import Sprite from '../../atoms/Sprite';
import MessageBox from '../../atoms/MessageBox';
import {
  BAG_SPRITE,
  POKEBALL_SPRITES,
  BERRY_SPRITES,
  ESCAPE_ROPE
} from '../../../data';

import useBattle from '../../hooks/useBattle';
import { Pokemon, Berries, Pokeballs } from '../../../types';
import styled from 'styled-components';

const BattleScreen = styled.div`
  position: relative;
  width: 33vw;
  & > aside {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface Props {
  pokemon: Pokemon;
  modifyPokemon: (pokemon: Pokemon | string | number) => void;
}

function Battle(props: Props): JSX.Element {
  const {
    pokeball,
    battleStatus,
    status,
    selectedBerry,
    hpPercent,
    message,
    selectBerry,
    selectPokeball,
    useBerry,
    throwPokeball
  } = useBattle(props.pokemon, props.modifyPokemon);
  const pokeballSprite: string = POKEBALL_SPRITES[pokeball];
  const berrySprite: string = BERRY_SPRITES[selectedBerry];
  const hp = Math.floor(hpPercent * 100);
  return (
    <Flex column alCenter cWidth={'50vw'}>
      <MessageBox>
        {message || `The ${props.pokemon.species} is staring at you.`}
      </MessageBox>
      <Flex column alCenter style={{ margin: '10px' }}>
        {battleStatus !== 'caught' ? (
          <BattleScreen>
            <aside>
              <div>Status: {status}</div>
              <div>
                HP: <progress value={hp} max={100} />
              </div>
            </aside>
            <Card
              noLink
              name={props.pokemon.name}
              species={props.pokemon.species}
              sprite={props.pokemon.sprite}
            />
          </BattleScreen>
        ) : (
          <Sprite sHeight={150} src={pokeballSprite} />
        )}
      </Flex>
      <Flex row cWidth={100}>
        {battleStatus === 'active' ? (
          <>
            <Flex column cWidth={100}>
              <MenuButton onClick={throwPokeball} style={{ height: '50px' }}>
                <Flex row jCenter alCenter cWidth={100}>
                  <Sprite sHeight={100} src={pokeballSprite} />
                  PokeBall
                </Flex>
              </MenuButton>
              <ModalMenu
                buttonText="Bag"
                sprite={BAG_SPRITE}
                style={{
                  height: '50px',
                  flexDirection: 'row'
                }}
              >
                <InventoryMenu
                  pokeballs={[] as Pokeballs[]}
                  berries={[] as Berries[]}
                  selectPokeBall={selectPokeball}
                  selectBerry={selectBerry}
                />
              </ModalMenu>
            </Flex>
            <Flex column cWidth={100}>
              <MenuButton onClick={useBerry} style={{ height: '50px' }}>
                <Flex row jCenter alCenter cWidth={100}>
                  <Sprite sHeight={100} src={berrySprite} />
                  Berry
                </Flex>
              </MenuButton>
              <ChangeScreenButton to="/" style={{ height: '50px' }}>
                <Flex row jCenter alCenter cWidth={100}>
                  <Sprite sHeight={100} src={ESCAPE_ROPE} />
                  Run!
                </Flex>
              </ChangeScreenButton>
            </Flex>
          </>
        ) : (
          <ChangeScreenButton
            to="/"
            pokeRed
            style={{
              fontSize: '2em',
              padding: '20px',
              color: 'mistyrose'
            }}
          >
            Return to Entrance
          </ChangeScreenButton>
        )}
      </Flex>
    </Flex>
  );
}

Battle.defaultProps = { pokemon: {}, modifyPokemon: console.log };

export default memo(Battle);
