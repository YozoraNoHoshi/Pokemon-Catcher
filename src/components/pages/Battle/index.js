import React, { PureComponent } from 'react';
import BattleContainer from '../../organisms/BattleContainer';
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

class Battle extends PureComponent {
  render() {
    return (
      <BattleContainer
        pokemon={this.props.pokemon}
        modifyPokemon={this.props.modifyPokemon}
      >
        {({ state, throwPokeball, useBerry, selectBerry, selectPokeball }) => {
          return (
            <Flex column alCenter cWidth={'50vw'}>
              <MessageBox>
                {state.message ||
                  `The ${this.props.pokemon.species} is staring at you.`}
              </MessageBox>
              <Flex column alCenter style={{ margin: '10px' }}>
                {!state.caught ? (
                  <Card
                    noLink
                    name={this.props.pokemon.name}
                    species={this.props.pokemon.species}
                    sprite={this.props.pokemon.sprite}
                  />
                ) : (
                  <Sprite
                    sHeight={150}
                    src={POKEBALL_SPRITES[state.pokeball]}
                  />
                )}
              </Flex>
              <Flex row cWidth={100}>
                {!state.caught ? (
                  <>
                    <Flex column cWidth={100}>
                      <MenuButton
                        onClick={throwPokeball}
                        style={{ height: '50px' }}
                      >
                        <Flex row jCenter alCenter cWidth={100}>
                          <Sprite
                            sHeight={100}
                            src={POKEBALL_SPRITES[state.pokeball]}
                          />
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
                          // pokeballs={}
                          // berries={}
                          selectBerry={selectBerry}
                          selectPokeball={selectPokeball}
                        />
                      </ModalMenu>
                    </Flex>
                    <Flex column cWidth={100}>
                      <MenuButton onClick={useBerry} style={{ height: '50px' }}>
                        <Flex row jCenter alCenter cWidth={100}>
                          <Sprite
                            sHeight={100}
                            src={BERRY_SPRITES[state.selectedBerry]}
                          />
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
        }}
      </BattleContainer>
    );
  }
}

Battle.defaultProps = { pokemon: {}, modifyPokemon: console.log };

Battle.propTypes = {};

export default Battle;
