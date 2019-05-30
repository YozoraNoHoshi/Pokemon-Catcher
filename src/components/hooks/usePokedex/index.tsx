import { useState } from 'react';
import { getPokemon } from '../../../api';
import { Pokemon } from '../../../types';

export default function usePokedex(): {
  pokemon: Pokemon;
  loading: boolean;
  foundPokemon: boolean;
  searchPokemon: (nameOrId: number | string) => void;
} {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [loading, setLoading] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState(false);
  // const [pastSearch, setPastSearch] = useState([]);
  // const dispatch = useDispatch()

  const searchPokemon = async (nameOrId: number | string) => {
    setLoading(true);
    try {
      let newPokemon: Pokemon | any[] = await getPokemon(nameOrId, '/habitats');
      if (!Array.isArray(newPokemon)) {
        // TODO - Dispatch to store containing pokemon (before it gets updated) for past searches
        setPokemon(newPokemon);
        setFoundPokemon(true);
      } else {
        // No match
        setLoading(false);
        setFoundPokemon(false);
      }
    } catch (error) {
      setLoading(false);
      setFoundPokemon(false);
    }
  };

  return {
    pokemon,
    loading,
    foundPokemon,
    searchPokemon
  };
}
