import { useState } from 'react';
import { getPokemon } from '../../../api';
import { Pokemon } from '../../../types';

type PkmnIdx = 'waiting' | 'loading' | 'found' | 'not-found' | 'error';

export default function usePokedex(): {
  pokemon: Pokemon;
  foundPokemon: PkmnIdx;
  searchPokemon: (nameOrId: number | string) => void;
} {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [foundPokemon, setFoundPokemon] = useState('waiting' as PkmnIdx);
  // const [pastSearch, setPastSearch] = useState([]);
  // const dispatch = useDispatch()

  const searchPokemon = async (nameOrId: number | string) => {
    setFoundPokemon('loading');
    try {
      let newPokemon: Pokemon | any[] = await getPokemon(nameOrId, '/habitats');
      if (!Array.isArray(newPokemon)) {
        // TODO - Dispatch to store containing pokemon (before it gets updated) for past searches
        setPokemon(newPokemon);
        setFoundPokemon('found');
      } else {
        // No match
        setFoundPokemon('not-found');
      }
    } catch (error) {
      setFoundPokemon('error');
    }
  };

  return {
    pokemon,
    foundPokemon,
    searchPokemon
  };
}
