import React, { PureComponent } from 'react';
import { getPokemon } from '../../../api';
import SearchPokedex from '../../molecules/SearchPokedex';
import Card from '../../atoms/Card';

class Pokedex extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, loading: false };
  }

  searchPokemon = async nameOrId => {
    try {
      this.setState({ loading: true });
      let pokemon = await getPokemon(nameOrId);
      if (pokemon)
        this.setState({ pokemon, loading: false, foundPokemon: true });
      else this.setState({ loading: false, foundPokemon: false });
    } catch (error) {
      this.setState({ loading: false, foundPokemon: false });
    }
  };

  render() {
    if (this.state.loading) return <div />;
    let pokemon = this.state.pokemon;
    return (
      <div className="Pokedex">
        <SearchPokedex submit={this.searchPokemon} />
        {this.state.foundPokemon && (
          <Card
            name={pokemon.name}
            species={pokemon.species}
            sprite={pokemon.sprite}
            passedState={{ ...this.state.pokemon }}
          />
        )}
      </div>
    );
  }
}

Pokedex.defaultProps = { pokeID: '' };

Pokedex.propTypes = {};

export default Pokedex;
