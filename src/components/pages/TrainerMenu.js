import React, { PureComponent } from 'react';
import ModalMenu from '../molecules/ModalMenu';
import MenuButton from '../atoms/MenuButton';
import Card from '../atoms/Card';
import pokemon from '../../data/pokemon.json';
import Flex from '../atoms/Flex';

class TrainerMenu extends PureComponent {
  saveGame = () => {
    this.props.changeGameState();
  };
  loadGame = () => {
    this.props.changeGameState('load');
  };
  renderPokemonCards = pokemon => {
    return pokemon.map(p => {
      return <Card name={p.name} key={p.name} sprite={p.sprite} />;
    });
  };
  render() {
    return (
      <Flex jCenter width={100} className="TrainerMenu">
        <ModalMenu buttonText="Trainer Details">
          <Flex txCenter style={{ fontSize: '2em' }}>
            {this.props.trainerName}
          </Flex>
          <Flex txCenter jCenter>
            Caught Pokemon
          </Flex>
          <Flex row fWrap jCenter>
            {this.renderPokemonCards(Object.values(this.props.pokemon))}
          </Flex>
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
  pokemon,
  trainerName: 'Red'
};

TrainerMenu.propTypes = {};

export default TrainerMenu;
