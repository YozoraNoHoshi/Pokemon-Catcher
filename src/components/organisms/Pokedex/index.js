import React, { PureComponent } from 'react';
import { getPokemon } from '../../../api';
import SearchPokedex from '../../molecules/SearchPokedex';
import DetailedCard from '../../atoms/DetailedCard';
import Flex from '../../atoms/Flex';
import { stringifyID } from '../../../helpers/stringifyID';
import styled from 'styled-components';

const DexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;
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
          let pastSearch =
            Object.keys(this.state.pokemon).length > 0
              ? [...prevSt.pastSearch, prevSt.pokemon]
              : [...prevSt.pastSearch];
          return { pokemon, pastSearch, loading: false, foundPokemon: true };
        });
      } else this.setState({ loading: false, foundPokemon: nameOrId });
    } catch (error) {
      this.setState({ loading: false, foundPokemon: nameOrId });
    }
  };

  renderPastSearches = pastSearch => {
    return pastSearch.map((p, i) => {
      return (
        <DetailedCard
          key={`${p.id}${i}`}
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
      <DexContainer>
        <Flex column alCenter>
          <SearchPokedex submit={this.searchPokemon} />
          {noResults && <Flex>No pokemon found.</Flex>}
          {this.state.loading && <div />}
          {this.state.foundPokemon === true && (
            <DetailedCard
              id={stringifyID(id)}
              species={species}
              title={title}
              flavor_text={flavor_text}
              catch_rate={catch_rate}
              sprite={sprite}
            />
          )}
        </Flex>
        <Flex column jCenter alStart>
          <Flex cWidth={100} alCenter>
            Previous Searches
          </Flex>
          <Flex cWidth={'350px'} alStart style={{ height: '100%' }}>
            {this.state.pastSearch.length > 0 &&
              this.renderPastSearches(this.state.pastSearch)}
          </Flex>
        </Flex>
      </DexContainer>
    );
  }
}

Pokedex.defaultProps = { pokeID: '' };

Pokedex.propTypes = {};

export default Pokedex;
