import React, { PureComponent } from 'react';
import Loading from '../atoms/Loading';
import { Redirect } from '@reach/router';
import Battle from '../pages/Battle';
import { getBattlePokemon, getPokemon } from '../../api';

class PreBattle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true, pokemon: {}, noPokemon: false };
  }

  async componentDidMount() {
    if (this.props.riggedPokemon) await this.riggedPokemon();
    else await this.getBattlePokemon();
  }
  async getBattlePokemon() {
    try {
      let pokemon = await getBattlePokemon(this.props.habitat);
      this.setState({ pokemon, loading: false, noPokemon: false });
    } catch (error) {
      this.setState({ noPokemon: true, loading: false });
    }
  }
  async riggedPokemon() {
    try {
      let pokemon = await getPokemon(this.props.riggedPokemon);
      this.setState({ pokemon, loading: false, noPokemon: false });
    } catch (error) {
      this.setState({ noPokemon: true, loading: false });
    }
  }

  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.noPokemon) return <Redirect to="/menu" />;
    // Change this.modifyPokemon to this.props.modifyPokemon
    return (
      <Battle pokemon={this.state.pokemon} modifyPokemon={this.modifyPokemon} />
    );
  }
}

PreBattle.defaultProps = { habitat: '', riggedPokemon: '' };

PreBattle.propTypes = {};

export default PreBattle;
