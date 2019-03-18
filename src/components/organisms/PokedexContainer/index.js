import { PureComponent } from 'react';
import { getPokemon } from '../../../api';

class PokedexContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, pastSearch: [], loading: false };
  }
  searchPokemon = async nameOrId => {
    try {
      this.setState({ loading: true });
      let pokemon = await getPokemon(nameOrId, true);
      if (!Array.isArray(pokemon)) {
        this.setState(prevSt => {
          let pastSearch =
            Object.keys(this.state.pokemon).length > 0
              ? [...prevSt.pastSearch, prevSt.pokemon]
              : [...prevSt.pastSearch];
          return { pokemon, pastSearch, loading: false, foundPokemon: true };
        });
      } else throw new Error(`Could not find ${nameOrId}`);
    } catch (error) {
      this.setState({ loading: false, foundPokemon: nameOrId });
    }
  };

  render() {
    let noResults =
      this.state.foundPokemon !== undefined &&
      typeof this.state.foundPokemon === 'string';
    return this.props.children({
      noResults,
      state: this.state,
      searchPokemon: this.searchPokemon
    });
  }
}

PokedexContainer.defaultProps = {};

PokedexContainer.propTypes = {};

export default PokedexContainer;
