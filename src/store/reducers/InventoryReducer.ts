import { Action, Item, Inventory, ItemPouches } from '../../types';
import { ADD_ITEM, USE_ITEM } from '../actions';

const INITIAL_STATE: Inventory = { pokeballs: {}, berries: {} };

interface ItemAction {
  id: string;
  quantity: number;
  category: ItemPouches;
  price: number;
}

function inventoryReducer(
  state: Inventory = INITIAL_STATE,
  action: Action<Item | ItemAction | Item[]>
) {
  switch (action.type) {
    case ADD_ITEM: {
      if (Array.isArray(action.payload)) {
        const payload: Item[] = action.payload;
        const newState = { ...state };

        payload.forEach(
          (item: Item) => (newState[item.category][item.id] = item)
        );
      } else {
        const payload = action.payload as Item;
        return { ...state, [payload.id]: payload };
      }
    }

    case USE_ITEM: {
      const item = action.payload as ItemAction;
      const { id: itemId, category, quantity: usedQuantity } = item;
      const newState = { ...state };

      const pouch = newState[category];

      if (pouch.hasOwnProperty(itemId)) {
        const quantity = pouch[itemId].quantity - (usedQuantity | 1);
        quantity > 0
          ? (pouch[itemId].quantity = quantity)
          : delete pouch[itemId];
      }

      return newState;
    }

    default:
      return state;
  }
}

export default inventoryReducer;
