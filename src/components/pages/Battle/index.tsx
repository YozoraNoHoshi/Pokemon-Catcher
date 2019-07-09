import React, { memo } from 'react';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import Card from '../../atoms/Card';
import InventoryMenu from '../../organisms/InventoryMenu';
import ModalMenu from '../../molecules/ModalMenu';
import Sprite from '../../atoms/Sprite';
import {
  BAG_SPRITE,
  POKEBALL_SPRITES,
  BERRY_SPRITES,
  ESCAPE_ROPE
} from '../../../data';

import useBattle from '../../hooks/useBattle';
import { Pokemon, Item } from '../../../types';
import styled from 'styled-components';
import StatusBar from '../../atoms/StatusBar';
import MessageLog from '../../molecules/MessageLog';

const BattleScreen = styled(Flex)`
  width: 50vw;
  & > div {
    width: 100%;
  }
  & > div.battle-view {
    position: relative;
    margin: 10px;
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
    messages,
    selectBerry,
    selectPokeball,
    fleeRate,
    useBerry,
    throwPokeball
  } = useBattle(props.pokemon, props.modifyPokemon);
  const pokeballSprite: string = POKEBALL_SPRITES[pokeball];
  const berrySprite: string = BERRY_SPRITES[selectedBerry];
  const hp = Math.floor(hpPercent * 100);

  return (
    <BattleScreen column alCenter cWidth={'50vw'}>
      <MessageLog messages={messages} />
      <Flex className="battle-view" column alCenter>
        {battleStatus !== 'caught' ? (
          <>
            <StatusBar hp={hp} status={status} fleeRate={fleeRate} />
            <Card
              noLink
              name={props.pokemon.name}
              species={props.pokemon.species}
              sprite={props.pokemon.sprite}
            />
          </>
        ) : (
          <Sprite sHeight={150} src={pokeballSprite} />
        )}
      </Flex>
      <Flex row cWidth={100}>
        {battleStatus === 'active' ? (
          <>
            <Flex column cWidth={100}>
              <MenuButton onClick={throwPokeball} buttonHeight="50px">
                <Flex row jCenter alCenter cWidth={100}>
                  <Sprite sHeight={100} src={pokeballSprite} />
                  PokeBall
                </Flex>
              </MenuButton>
              <ModalMenu
                buttonText="Bag"
                sprite={BAG_SPRITE}
                style={{
                  flexDirection: 'row'
                }}
              >
                <InventoryMenu
                  pokeballs={[] as Item[]}
                  berries={[] as Item[]}
                  selectPokeBall={selectPokeball}
                  selectBerry={selectBerry}
                />
              </ModalMenu>
            </Flex>
            <Flex column cWidth={100}>
              <MenuButton onClick={useBerry} buttonHeight="50px" cWidth={100}>
                <Flex row jCenter alCenter>
                  <Sprite sHeight={100} src={berrySprite} />
                  Berry
                </Flex>
              </MenuButton>
              <ChangeScreenButton to="/" buttonHeight="50px">
                <Flex row jCenter alCenter>
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
    </BattleScreen>
  );
}

Battle.defaultProps = { pokemon: {}, modifyPokemon: console.log };

export default memo(Battle);
