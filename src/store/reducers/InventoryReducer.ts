import { Action } from '../../types';
// import { #1 } from "./actions.js"

const INITIAL_STATE = {};

function inventoryReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'INSERTACTIONHERE':
      return { ...state };

    default:
      return state;
  }
}

export default inventoryReducer;
