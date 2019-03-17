import React, { PureComponent } from 'react';
import { getPokemon } from '../../../api';
import SearchPokedex from '../../molecules/SearchPokedex';
import DetailedCard from '../../atoms/DetailedCard';
import Flex from '../../atoms/Flex';

class Pokedex extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, pastSearch: [], loading: false };
  }

  searchPokemon = async nameOrId => {
    try {
      this.setState({ loading: true });
      let pokemon = await getPokemon(nameOrId);
      if (!Array.isArray(pokemon)) {
        this.setState(prevSt => {
          let pastSearch = [...prevSt.pastSearch, prevSt.pokemon];
          return { pokemon, pastSearch, loading: false, foundPokemon: true };
        });
      } else this.setState({ loading: false, foundPokemon: nameOrId });
    } catch (error) {
      this.setState({ loading: false, foundPokemon: nameOrId });
    }
  };

  renderPastSearches = pastSearch => {
    return pastSearch.map(p => {
      return (
        <DetailedCard
          id={p.id}
          species={p.species}
          title={p.title}
          flavor_text={p.flavor_text}
          catch_rate={p.catch_rate}
          sprite={p.sprite}
        />
      );
    });
  };

  render() {
    let {
      id,
      species,
      title,
      flavor_text,
      catch_rate,
      sprite
    } = this.state.pokemon;
    let noResults =
      this.state.foundPokemon !== undefined &&
      typeof this.state.foundPokemon === 'string';
    return (
      <Flex column jCenter alCenter>
        <SearchPokedex submit={this.searchPokemon} />
        {noResults && <Flex>No pokemon found.</Flex>}
        {this.state.loading && <div />}
        {this.state.foundPokemon === true && (
          <DetailedCard
            id={id}
            species={species}
            title={title}
            flavor_text={flavor_text}
            catch_rate={catch_rate}
            sprite={sprite}
          />
        )}
        {this.state.pastSearch.length > 0 && (
          <Flex cwidth={100} column>
            <Flex>Previous Searches:</Flex>
            <Flex cWidth={100} row fWrap>
              {this.renderPastSearches(this.state.pastSearch)}
            </Flex>
          </Flex>
        )}
      </Flex>
    );
  }
}

Pokedex.defaultProps = { pokeID: '' };

Pokedex.propTypes = {};

export default Pokedex;
