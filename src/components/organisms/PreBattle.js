import React, { PureComponent } from 'react';
import Loading from '../atoms/Loading';
import { Redirect } from '@reach/router';
import Battle from '../pages/Battle';
import { getBattlePokemon } from '../../api';

class PreBattle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false, pokemon: {}, noPokemon: false };
  }

  async componentDidMount() {
    await this.getBattlePokemon();
  }
  async getBattlePokemon() {
    // Make an api call to get the pokemon data based on props
    // Punt the result into state
    try {
      this.setState({ loading: true });
      let pokemon = await getBattlePokemon(this.props.habitat);
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

PreBattle.defaultProps = { habitat: '' };

PreBattle.propTypes = {};

export default PreBattle;
