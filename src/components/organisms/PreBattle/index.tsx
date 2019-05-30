import React, { PureComponent } from 'react';
import Loading from '../../atoms/Loading';
import Battle from '../../pages/Battle';
import { getBattlePokemon, getPokemon } from '../../../api';
import PalParkClosed from '../../molecules/PalParkClosed';
import { Pokemon } from '../../../types';

interface Props {
  habitat: string;
  riggedPokemon?: string;
  modifyPokemon: (pokemon: any) => void;
}
interface State {
  loading: boolean;
  pokemon: Pokemon;
  noPokemon: boolean;
}

class PreBattle extends PureComponent<Props, State> {
  static defaultProps = { habitat: '', riggedPokemon: '' };
  static errorMessage =
    'The Pal Park is currently closed for maintenance. We apologize for the inconvenience.';
  constructor(props: Props) {
    super(props);
    this.state = { loading: true, pokemon: {} as Pokemon, noPokemon: false };
  }

  async componentDidMount() {
    await this.getBattlePokemon(this.props.riggedPokemon);
  }
  async getBattlePokemon(rigged: string | undefined) {
    try {
      let pokemon = rigged
        ? await getPokemon(rigged)
        : await getBattlePokemon(this.props.habitat);
      this.setState({ pokemon, loading: false, noPokemon: false });
    } catch (error) {
      this.setState({ noPokemon: true, loading: false });
    }
  }
  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.noPokemon)
      return <PalParkClosed message={PreBattle.errorMessage} />;
    return (
      <Battle
        pokemon={this.state.pokemon}
        modifyPokemon={this.props.modifyPokemon}
      />
    );
  }
}

export default PreBattle;
