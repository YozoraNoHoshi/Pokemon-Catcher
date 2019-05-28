import { CATCH_POKEMON } from './actions';
import { Pokemon, Action } from '..';

export function catchPokemon(pokemonObj: Pokemon): Action {
  return { type: CATCH_POKEMON, payload: pokemonObj };
}
