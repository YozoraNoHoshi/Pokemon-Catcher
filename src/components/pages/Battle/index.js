import React, { PureComponent } from 'react';
import BattleContainer from '../../organisms/BattleContainer';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import Card from '../../atoms/Card';
import InventoryMenu from '../../organisms/InventoryMenu';
import ModalMenu from '../../molecules/ModalMenu';

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
                A WILD POKEMON APPEARED
                <Card
                  noLink
                  name={this.props.pokemon.name}
                  species={this.props.pokemon.species}
                  sprite={this.props.pokemon.sprite}
                />
              </Flex>
              <Flex row cWidth={100}>
                <Flex column cWidth={100}>
                  <MenuButton onClick={throwPokeball}>PokeBall</MenuButton>
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
