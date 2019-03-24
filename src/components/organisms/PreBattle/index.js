import React, { PureComponent } from 'react';
import Loading from '../../atoms/Loading';
import { Redirect } from '@reach/router';
import Battle from '../../pages/Battle';
import { getBattlePokemon, getPokemon } from '../../../api';

class PreBattle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true, pokemon: {}, noPokemon: false };
    this.errorMessage = 'Oops, something seems to have gone wrong.';
  }

  async componentDidMount() {
    await getBattlePokemon(this.props.riggedPokemon);
  }
  async getBattlePokemon(rigged = '') {
    try {
      let pokemon = rigged
        ? await getPokemon(this.props.riggedPokemon)
        : await getBattlePokemon(this.props.habitat);
      this.setState({ pokemon, loading: false, noPokemon: false });
    } catch (error) {
      this.setState({ noPokemon: true, loading: false });
      alert(this.errorMessage);
    }
  }
  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.noPokemon) return <Redirect to="/" />;
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
