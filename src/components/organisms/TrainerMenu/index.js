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
          className={this.props.className}
        />
      );
    });
  };
  render() {
    return (
      <Flex
        column
        jCenter
        alCenter
        cWidth={this.props.cWidth}
        className={this.props.className}
      >
        {/* <Flex txCenter large>
          {this.props.trainerName}
        </Flex> */}
        {this.props.pokemon.length > 0 ? (
          <Flex
            className={this.props.className}
            row
            fWrap
            jCenter
            alStart
            style={{ overflowY: 'auto', height: '240px' }}
          >
            {this.renderPokemonCards(Object.values(this.props.pokemon))}
          </Flex>
        ) : (
          <Flex className={this.props.className} txCenter>
            You have not caught any Pokemon yet!
          </Flex>
        )}
      </Flex>
    );
  }
}

TrainerMenu.defaultProps = {
  pokemon: [],
  trainerName: 'Red',
  cWidth: 100
};

TrainerMenu.propTypes = {};

export default TrainerMenu;
