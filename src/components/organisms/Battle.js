import React, { PureComponent } from 'react';
import determineCatchResult from '../../helpers/determineCatchResult';
import { navigate } from '@reach/router';

class Battle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.caught = false;
    this.ballMultiplier = 1;
    this.status = 'normal';
    this.hpPercent = 1;
  }

  catchRoll = () => {
    let result = determineCatchResult(
      this.props.pokemon.catchRate,
      this.ballMultiplier,
      this.status,
      this.hpPercent
    );
    // Catch successful
    if (result === 4) {
      this.props.modifyPokemon(this.props.pokemon);
      navigate('/menu');
    }
  };

  render() {
    return <div className="Battle" />;
  }
}

Battle.defaultProps = { pokemon: {}, modifyPokemon: console.log };

Battle.propTypes = {};

export default Battle;
