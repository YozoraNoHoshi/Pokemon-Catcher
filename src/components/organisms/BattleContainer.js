import { PureComponent } from 'react';
import { navigate } from '@reach/router';
import determineCatchResult from '../../helpers/determineCatchResult';

class BattleContainer extends PureComponent {
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
    // Catch fails
    else {
    }
  };
  render() {
    return this.props.children({
      state: this.state,
      catchRoll: this.catchRoll
    });
  }
}

BattleContainer.defaultProps = {};

BattleContainer.propTypes = {};

export default BattleContainer;
