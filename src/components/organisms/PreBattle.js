import React, { PureComponent } from 'react';
import Loading from '../atoms/Loading';
import { Redirect } from '@reach/router';
import Battle from './Battle';

class PreBattle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false, pokemon: {}, noPokemon: false };
  }

  componentDidMount() {
    // Make an api call to get the pokemon data based on props
    // Punt the result into state
    try {
    } catch (error) {
      this.setState({ noPokemon: true });
    }
  }

  render() {
    if (this.state.noPokemon) return <Redirect to="/menu" />;
    return this.state.loading ? (
      <Loading />
    ) : (
      <Battle pokemon={this.state.pokemon} modifyPokemon={this.modifyPokemon} />
    );
  }
}

PreBattle.defaultProps = { habitat: '' };

PreBattle.propTypes = {};

export default PreBattle;
