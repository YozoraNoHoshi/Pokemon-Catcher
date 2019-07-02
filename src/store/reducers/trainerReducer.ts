import { Action } from '../../types';
import { UPDATE_TRAINER } from '../actions';
// import { #1 } from "./actions.js"

interface TrainerInfo {
  name: string;
}

const INITIAL_STATE: TrainerInfo = { name: '' };

function trainerReducer(
  state: TrainerInfo = INITIAL_STATE,
  action: Action<string>
) {
  switch (action.type) {
    case UPDATE_TRAINER:
      return { ...state, name: action.payload };

    default:
      return state;
  }
}

export default trainerReducer;
