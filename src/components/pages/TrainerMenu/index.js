import React, { PureComponent } from 'react';
import ModalMenu from '../../molecules/ModalMenu';
import MenuButton from '../../atoms/MenuButton';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import Text from '../../atoms/Text';

class TrainerMenu extends PureComponent {
  saveGame = () => {
    this.props.changeGameState();
  };
  loadGame = () => {
    this.props.changeGameState('load');
  };
  renderPokemonCards = pokemon => {
    return pokemon.map(p => {
      return <Card name={p.species} key={p.name} sprite={p.sprite} />;
    });
  };
  render() {
    return (
      <Flex jCenter cWidth={100} className="TrainerMenu">
        <ModalMenu buttonText="Trainer Details">
          <Text center large>
            {this.props.trainerName}
          </Text>
          {this.props.pokemon.length > 0 ? (
            <>
              <Text center>Caught Pokemon</Text>
              <Flex
                row
                fWrap
                jCenter
                style={{ overflowY: 'auto', height: '250px' }}
              >
                {this.renderPokemonCards(Object.values(this.props.pokemon))}
              </Flex>
            </>
          ) : (
            <Text center>You have not caught any Pokemon yet!</Text>
          )}
          <Flex jCenter row>
            <MenuButton onClick={this.saveGame}>Save Game</MenuButton>
            <MenuButton onClick={this.loadGame}>Load Game</MenuButton>
          </Flex>
        </ModalMenu>
      </Flex>
    );
  }
}

TrainerMenu.defaultProps = {
  pokemon: [],
  trainerName: 'Red'
};

TrainerMenu.propTypes = {};

export default TrainerMenu;
