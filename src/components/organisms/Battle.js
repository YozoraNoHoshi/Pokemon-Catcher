import React, { PureComponent } from 'react';
import Loading from '../atoms/Loading';

class Battle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false, pokemon: {} };
  }

  componentDidMount() {
    // Make an api call to get the pokemon data based on props
    // Punt the result into state
  }
  render() {
    return this.state.loading ? <Loading /> : <div className="Battle" />;
  }
}

Battle.defaultProps = { pokemonSpecies: '' };

Battle.propTypes = {};

export default Battle;
