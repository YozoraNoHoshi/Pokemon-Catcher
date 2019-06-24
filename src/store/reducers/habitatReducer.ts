import { Action } from '../../types';
import { MOVE_AREA } from '../actions';
// import { #1 } from "./actions.js"

interface Habitats {
  habitat: string;
}

const INITIAL_STATE: Habitats = {
  habitat: JSON.parse(localStorage.getItem('habitat')!) || 'field'
};

function habitatReducer(state = INITIAL_STATE, action: Action<string>) {
  switch (action.type) {
    case MOVE_AREA:
      return { ...state, habitat: action.payload };

    default:
      return state;
  }
}

export default habitatReducer;
