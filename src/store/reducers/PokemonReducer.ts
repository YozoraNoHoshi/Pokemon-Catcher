import { Action, Pokemon } from '../../types';
import { ADD_POKEMON, RELEASE_POKEMON } from '../actions';

const INITIAL_STATE = {};

function pokemonReducer(
  state = INITIAL_STATE,
  action: Action<Pokemon | string | number>
) {
  switch (action.type) {
    case ADD_POKEMON: {
      const payload = action.payload as Pokemon;
      return { ...state, [payload.id]: payload };
    }

    case RELEASE_POKEMON: {
      // Remove Pokemon by action.payload (it's the ID)
      return { ...state };
    }
    default:
      return state;
  }
}

export default pokemonReducer;
