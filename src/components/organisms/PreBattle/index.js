import React, { PureComponent } from 'react';
import Loading from '../../atoms/Loading';
import Battle from '../../pages/Battle';
import { getBattlePokemon, getPokemon } from '../../../api';
import PalParkClosed from '../../molecules/PalParkClosed';

class PreBattle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true, pokemon: {}, noPokemon: false };
    this.errorMessage =
      'The Pal Park is currently closed for maintenance. We apologize for the inconvenience.';
  }

  async componentDidMount() {
    await this.getBattlePokemon(this.props.riggedPokemon);
  }
  async getBattlePokemon(rigged = '') {
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
      return <PalParkClosed message={this.errorMessage} />;
    return (
      <Battle
        pokemon={this.state.pokemon}
        modifyPokemon={this.props.modifyPokemon}
      />
    );
  }
}

PreBattle.defaultProps = { habitat: '', riggedPokemon: '' };

PreBattle.propTypes = {};

export default PreBattle;
