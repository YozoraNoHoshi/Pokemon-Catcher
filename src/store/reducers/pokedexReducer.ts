import { Action, PokemonWithHabitat } from '../../types';
import { ADD_POKEDEX_SEARCH, CLEAR_POKEDEX_SEARCH } from '../actions';

interface State {
  searches: PokemonWithHabitat[];
}

const INITIAL_STATE: State = { searches: [] };

function pokedexReducer(
  state = INITIAL_STATE,
  action: Action<PokemonWithHabitat>
) {
  switch (action.type) {
    case ADD_POKEDEX_SEARCH: {
      const searches = [...state.searches, action.payload];
      return { ...state, searches };
    }

    case CLEAR_POKEDEX_SEARCH: {
      const newState = { ...state, searches: [] };
      return newState;
    }

    default:
      return state;
  }
}

export default pokedexReducer;
