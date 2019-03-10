import { PureComponent } from 'react';
import { navigate } from '@reach/router';
import determineCatchResult from '../../helpers/determineCatchResult';
class BattleContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pokeball: 'pokeball',
      status: 'normal',
      selectedBerry: '',
      hpPercent: 1
    };
    this.caught = false;
  }

  catchRoll = (pokeball, status, hpPercent) => {
    let result = determineCatchResult(
      this.props.pokemon.catch_rate,
      pokeball,
      status,
      hpPercent
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

  throwPokeball = () => {
    this.catchRoll(
      this.state.pokeball,
      this.state.status,
      this.state.hpPercent
    );
  };

  selectPokeball = () => {
    // change this.state.pokeball
    return;
  };

  selectBerry = () => {
    // Change this.state.selectedBerry
    return;
  };

  useBerry = () => {
    // Put the effects of this.state.selectedBerry into effect, make it reflect in either hpPercent or status
    return;
  };

  render() {
    return this.props.children({
      state: this.state,
      throwPokeball: this.throwPokeball,
      useBerry: this.useBerry
    });
  }
}

export default BattleContainer;
