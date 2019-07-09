import { Action, CaughtPokemon } from '../../types';
import { ADD_POKEMON, RELEASE_POKEMON } from '../actions';

interface State {
  caught: CaughtPokemon[];
  seen: Set<string>;
}

const INITIAL_STATE: State = { caught: [], seen: new Set() };

function pokemonReducer(state = INITIAL_STATE, action: Action<CaughtPokemon>) {
  switch (action.type) {
    case ADD_POKEMON: {
      const payload: CaughtPokemon = action.payload;
      const caught = [...state.caught, payload];

      const seen = new Set(state.seen);
      if (!seen.has(payload.id)) seen.add(payload.id);

      return { ...state, caught, seen };
    }

    case RELEASE_POKEMON: {
      const payload: CaughtPokemon = action.payload;
      const caught = state.caught.filter(
        p => p.id !== payload.id && p.tag !== payload.tag
      );

      // const seen = new Set(caught.map(p => p.id));

      return { ...state, caught };
    }

    default:
      return state;
  }
}

export default pokemonReducer;
