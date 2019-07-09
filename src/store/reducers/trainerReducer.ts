import { Action } from '../../types';
import { UPDATE_TRAINER_MONEY, UPDATE_TRAINER_NAME } from '../actions';

interface TrainerInfo {
  name: string;
  money: number;
}

const INITIAL_STATE: TrainerInfo = { name: '', money: 3000 };

function trainerReducer(
  state: TrainerInfo = INITIAL_STATE,
  action: Action<string | number>
) {
  switch (action.type) {
    case UPDATE_TRAINER_NAME:
      return { ...state, name: action.payload };

    case UPDATE_TRAINER_MONEY:
      return { ...state, money: action.payload };

    default:
      return state;
  }
}

export default trainerReducer;
