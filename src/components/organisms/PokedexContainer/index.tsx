import { PureComponent } from 'react';
import { getPokemon } from '../../../api';
import { Pokemon } from '../../../types';

interface Props {
  children: any;
}

interface State {
  pokemon: Pokemon | object;
  pastSearch: Pokemon[];
  loading: boolean;
  foundPokemon: boolean | string | undefined | number;
}
// Good candidate for a custom hook?
class PokedexContainer extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pokemon: {},
      pastSearch: [],
      loading: false,
      foundPokemon: undefined
    };
  }

  // Rewrite this - typings are all over the place and overall isn't very clean.
  searchPokemon = async (nameOrId: string | number) => {
    try {
      this.setState({ loading: true });
      let pokemon: Pokemon | undefined[] = await getPokemon(
        nameOrId,
        '/habitats'
      );
      if (!Array.isArray(pokemon)) {
        this.setState((prevSt: any) => {
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
export default PokedexContainer;
