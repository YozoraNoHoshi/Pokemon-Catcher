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

class Battle extends PureComponent {
  render() {
    return (
      <BattleContainer
        pokemon={this.props.pokemon}
        modifyPokemon={this.props.modifyPokemon}
      >
        {({ state, throwPokeball, useBerry, selectBerry, selectPokeball }) => {
          return (
            <div>
              <Flex column alCenter>
                {!state.caught ? (
                  <Card
                    noLink
                    name={this.props.pokemon.name}
                    species={this.props.pokemon.species}
                    sprite={this.props.pokemon.sprite}
                  />
                ) : (
                  <Sprite
                    sHeight={100}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${
                      state.pokeball
                    }.png`}
                  />
                )}
              </Flex>
              <MessageBox>
                {state.message ||
                  `The ${this.props.pokemon.species} is staring at you.`}
              </MessageBox>
              <Flex row cWidth={100}>
                {!state.caught ? (
                  <>
                    <Flex column cWidth={100}>
                      <MenuButton onClick={throwPokeball}>
                        <Flex jCenter alCenter cWidth={100}>
                          <Sprite
                            sHeight={100}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${
                              state.pokeball
                            }.png`}
                          />
                          PokeBall
                        </Flex>
                      </MenuButton>
                      <ModalMenu buttonText="Bag">
                        <InventoryMenu
                          selectBerry={selectBerry}
                          selectPokeball={selectPokeball}
                        />
                      </ModalMenu>
                    </Flex>
                    <Flex column cWidth={100}>
                      <MenuButton onClick={useBerry}>Berry</MenuButton>
                      <ChangeScreenButton to="/">Run!</ChangeScreenButton>
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
            </div>
          );
        }}
      </BattleContainer>
    );
  }
}

Battle.defaultProps = { pokemon: {}, modifyPokemon: console.log };

Battle.propTypes = {};

export default Battle;
