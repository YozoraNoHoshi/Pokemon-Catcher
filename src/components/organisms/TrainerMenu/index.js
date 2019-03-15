import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';

class TrainerMenu extends PureComponent {
  renderPokemonCards = pokemon => {
    return pokemon.map(p => {
      return (
        <Card
          key={`${p.name}`}
          name={p.name}
          species={p.species}
          sprite={p.sprite}
        />
      );
    });
  };
  render() {
    return (
      <Flex column cWidth={60} className="TrainerMenu">
        <Flex txCenter large>
          {this.props.trainerName}
        </Flex>
        {this.props.pokemon.length > 0 ? (
          <>
            <Flex txCenter>Caught Pokemon</Flex>
            <Flex
              row
              fWrap
              jCenter
              alStart
              style={{ overflowY: 'auto', height: '240px' }}
            >
              {this.renderPokemonCards(Object.values(this.props.pokemon))}
            </Flex>
          </>
        ) : (
          <Flex txCenter>You have not caught any Pokemon yet!</Flex>
        )}
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
