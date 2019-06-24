import {
  ADD_POKEMON,
  RELEASE_POKEMON,
  ALTER_INVENTORY,
  MOVE_AREA,
  SAVE_GAME,
  LOAD_GAME
} from './actions';
import { Pokemon, Action } from '../types';

export function addPokemon(pokemonObj: Pokemon): Action<Pokemon> {
  return { type: ADD_POKEMON, payload: pokemonObj };
}

export function releasePokemon(
  pokemonId: string | number
): Action<string | number> {
  return { type: RELEASE_POKEMON, payload: pokemonId };
}

export function moveArea(newLocation: string): Action<string> {
  return { type: MOVE_AREA, payload: newLocation };
}

export function alterInventory(item: any): Action<any> {
  return { type: ALTER_INVENTORY, payload: item };
}

export function saveGame(type: string): Action<string> {
  return { type: SAVE_GAME };
}

export function loadGame(type: string): Action<string> {
  return { type: LOAD_GAME };
}
