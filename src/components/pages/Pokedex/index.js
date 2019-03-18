import React, { PureComponent } from 'react';
import SearchPokedex from '../../molecules/SearchPokedex';
import DetailedCard from '../../atoms/DetailedCard';
import Flex from '../../atoms/Flex';
import styled from 'styled-components';
import PokedexContainer from '../../organisms/PokedexContainer';

const DexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;
class Pokedex extends PureComponent {
  renderPastSearches = pastSearch => {
    return pastSearch.map((p, i) => {
      return (
        <DetailedCard
          key={`${p.id}${i}`}
          id={p.id}
          habitats={p.habitats}
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
    return (
      <PokedexContainer>
        {({ noResults, searchPokemon, state }) => {
          let {
            id,
            habitats,
            species,
            title,
            flavor_text,
            catch_rate,
            sprite
          } = state.pokemon;
          return (
            <DexContainer>
              <Flex column alCenter>
                <SearchPokedex submit={searchPokemon} />
                {noResults && <Flex>No pokemon found.</Flex>}
                {state.loading && <div />}
                {state.foundPokemon === true && (
                  <DetailedCard
                    id={id}
                    habitats={habitats}
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
                  {state.pastSearch.length > 0 &&
                    this.renderPastSearches(state.pastSearch)}
                </Flex>
              </Flex>
            </DexContainer>
          );
        }}
      </PokedexContainer>
    );
  }
}

Pokedex.defaultProps = {};

Pokedex.propTypes = {};

export default Pokedex;
