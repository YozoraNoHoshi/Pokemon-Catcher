import { CATCH_POKEMON } from './actions';
import { Pokemon, Action } from '../types';

export function catchPokemon(pokemonObj: Pokemon): Action {
  return { type: CATCH_POKEMON, payload: pokemonObj };
}
