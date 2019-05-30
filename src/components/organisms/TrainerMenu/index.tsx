import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import { Width, CaughtPokemon, PokeballIndex, PokeballSprites } from '../../..';

type Props = Width & {
  className: string;
  pokemon: CaughtPokemon[];
  trainerName: string;
  pokeballs: PokeballSprites;
};
class TrainerMenu extends PureComponent<Props, {}> {
  static defaultProps = {
    pokemon: [],
    trainerName: 'Red',
    cWidth: 100,
    pokeballs: {}
  };
  renderPokemonCards = (pokemon: CaughtPokemon[]) => {
    return pokemon.map((p: CaughtPokemon) => {
      return (
        <Card
          key={`${p.name}`}
          name={p.name}
          pokeball={this.props.pokeballs[p.pokeball as PokeballIndex]}
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

export default TrainerMenu;
