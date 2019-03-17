import { CATCH_POKEMON } from './actions';

export function catchPokemon(pokemonObj) {
  return { type: CATCH_POKEMON, payload: pokemonObj };
}
