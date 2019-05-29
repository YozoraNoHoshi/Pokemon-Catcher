// import React, { PureComponent } from 'react';
import React, { memo } from 'react';
import styled from 'styled-components';
import usePokedex from '../../hooks/usePokedex';
import SearchPokedex from '../../molecules/SearchPokedex';
import DetailedCard from '../../atoms/DetailedCard';
import Flex from '../../atoms/Flex';
import { PokemonWithHabitat } from '../../..';

const DexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;

interface Props {
  pastSearch: PokemonWithHabitat[];
}
// pastSearch will come from redux store

function Pokedex(props: Props): JSX.Element {
  const { pokemon, loading, foundPokemon, searchPokemon } = usePokedex();
  const {
    id,
    habitats,
    species,
    title,
    flavor_text,
    catch_rate,
    sprite
  } = pokemon as PokemonWithHabitat;
  const noResults = !loading && !foundPokemon;

  const pastSearches = props.pastSearch.map(
    (p: PokemonWithHabitat, i: number) => {
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
    }
  );

  return (
    <DexContainer>
      <Flex column alCenter>
        <SearchPokedex submit={searchPokemon} />
        {noResults && <Flex>No Pokemon found.</Flex>}
        {loading && <div />}
        {foundPokemon === true && (
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
          {pastSearches.length > 0 && pastSearches}
        </Flex>
      </Flex>
    </DexContainer>
  );
}

export default memo(Pokedex);
