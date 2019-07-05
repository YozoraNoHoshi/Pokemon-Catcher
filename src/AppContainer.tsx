import { PureComponent } from 'react';
import { CaughtPokemon, Inventory, BerryIndex, PokeballIndex } from './types';
import { POKEBALLS } from './data';

interface Props {
  children: (arg: any) => any;
}
interface State {
  habitat: string;
  currentPokemon: CaughtPokemon[];
  inventory: Inventory;
  loading: boolean;
}
// Move this to redux eventually
class AppContainer extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      habitat: JSON.parse(localStorage.getItem('habitat')!) || 'field',
      currentPokemon: JSON.parse(localStorage.getItem('currentPokemon')!) || [],
      inventory: JSON.parse(localStorage.getItem('inventory')!) || {},
      loading: false
    };
  }

  // componentDidMount() {
  //   this.setState({ loading: false });
  // }

  changeHabitat = (habitat: any) => {
    this.setState({ habitat });
  };

  modifyItems = (item: BerryIndex | PokeballIndex, quantity: number) => {
    //Quanity is negative if using an item
    let inventory = { ...this.state.inventory };

    let currentBag = POKEBALLS.hasOwnProperty(item)
      ? inventory.pokeballs
      : inventory.berries;
    let selectedItem = currentBag[item];

    if (quantity < 0) {
      selectedItem.quantity <= quantity
        ? delete currentBag[item]
        : (selectedItem.quantity += quantity);
    } else {
      let category = POKEBALLS.hasOwnProperty(item) ? 'pokeball' : 'berry';
      selectedItem
        ? (selectedItem.quantity += quantity)
        : (currentBag[item] = { name: item, quantity, category });
    }

    this.setState({ inventory });
  };

  modifyPokemon = (pokemon: CaughtPokemon | string | number) => {
    // Object means adding pokemon, string/number means removing
    if (typeof pokemon === 'object') {
      this.setState(prevSt => {
        return { currentPokemon: [...prevSt.currentPokemon, pokemon] };
      });
    } else {
      this.setState(prevSt => {
        return {
          currentPokemon: prevSt.currentPokemon.filter(p => p.id !== pokemon)
        };
      });
    }
  };

  changeGameState = (type?: string) => {
    if (type === 'load') {
      let currentPokemon =
        JSON.parse(localStorage.getItem('currentPokemon')!) || [];
      let inventory = JSON.parse(localStorage.getItem('inventory')!) || {};
      let habitat = JSON.parse(localStorage.getItem('habitat')!) || 'field';
      this.setState({ currentPokemon, inventory, habitat });
    } else {
      localStorage.setItem(
        'currentPokemon',
        JSON.stringify(this.state.currentPokemon)
      );
      localStorage.setItem('inventory', JSON.stringify(this.state.inventory));
      localStorage.setItem('habitat', JSON.stringify(this.state.habitat));
    }
  };
  render() {
    return this.props.children({
      state: this.state,
      changeGameState: this.changeGameState,
      changeHabitat: this.changeHabitat,
      modifyItems: this.modifyItems,
      modifyPokemon: this.modifyPokemon
    });
  }
}

export default AppContainer;
