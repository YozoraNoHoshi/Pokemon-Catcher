import { PureComponent } from 'react';

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      habitat: 'field',
      currentPokemon: [],
      inventory: {},
      loaded: false
    };
  }

  componentDidMount() {
    this.changeGameState('load');
    this.setState({ loaded: true });
  }

  changeHabitat = habitat => {
    this.setState({ habitat });
  };

  modifyItems = (item, quantity = 1) => {
    // Item = string means used an item, object means add an item
    let inventory = { ...this.state.inventory };
    if (typeof item === 'string') {
      inventory[item].quantity <= quantity
        ? delete inventory[item]
        : (inventory[item].quantity -= quantity);
    } else {
      let addedItem = inventory[item.name];
      if (!addedItem) addedItem = { ...item, quantity: 0 };
      addedItem.quantity += quantity;
    }
    this.setState({ inventory });
  };

  modifyPokemon = pokemon => {
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

  changeGameState = type => {
    if (type === 'load') {
      let currentPokemon = localStorage.getItem('currentPokemon') || [];
      let inventory = localStorage.getItem('inventory') || {};
      this.setState({ currentPokemon, inventory });
    } else {
      localStorage.setItem('currentPokemon', this.state.currentPokemon);
      localStorage.setItem('inventory', this.state.inventory);
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

AppContainer.defaultProps = {};

AppContainer.propTypes = {};

export default AppContainer;
