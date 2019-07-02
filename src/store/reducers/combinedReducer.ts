// import { combineReducers } from 'redux';
import pokemon from './PokemonReducer';
import habitat from './HabitatReducer';
import inventory from './InventoryReducer';
import trainer from './TrainerReducer';

function combineReducers(obj: any): any {}
export default combineReducers({
  pokemon,
  habitat,
  inventory,
  trainer
});
