import { Action } from '../../types';
import { ADD_ITEM, USE_ITEM } from '../actions';
// import { #1 } from "./actions.js"

interface Inventory {
  [id: string]: any;
}

const INITIAL_STATE: Inventory = {};

function inventoryReducer(
  state: Inventory = INITIAL_STATE,
  action: Action<any>
) {
  switch (action.type) {
    case ADD_ITEM: {
      const payload = action.payload;
      return { ...state, [payload.id]: payload };
    }

    case USE_ITEM: {
      const itemId = action.payload;
      const newState = { ...state };
      if (newState.hasOwnProperty(itemId)) {
        const quantity = newState[itemId].quantity - 1;
        quantity > 0
          ? (newState[itemId].quantity = quantity)
          : delete newState[itemId];
      }

      return newState;
    }

    default:
      return state;
  }
}

export default inventoryReducer;
