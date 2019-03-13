import React, { PureComponent } from 'react';
import BattleContainer from '../../organisms/BattleContainer';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';
import Card from '../../atoms/Card';
import InventoryMenu from '../InventoryMenu';

class Battle extends PureComponent {
  render() {
    return (
      <BattleContainer
        pokemon={this.props.pokemon}
        modifyPokemon={this.props.modifyPokemon}
      >
        {({ state, throwPokeball, useBerry }) => {
          return (
            <div>
              <Flex>
                A WILD POKEMON APPEARED
                <Card
                  noLink
                  sprite={this.props.pokemon.sprite}
                  name={this.props.pokemon.species}
                />
              </Flex>
              <Flex row fWrap>
                <MenuButton onClick={throwPokeball}>Throw PokeBall</MenuButton>
                <MenuButton onClick={useBerry}>Use Berry</MenuButton>
                <InventoryMenu />
                <ChangeScreenButton to="/menu">Run!</ChangeScreenButton>
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
