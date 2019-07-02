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
      const payload = action.payload as string;
      const newState = { ...state };
      delete newState[payload];
      return newState;
    }

    default:
      return state;
  }
}

export default pokemonReducer;
