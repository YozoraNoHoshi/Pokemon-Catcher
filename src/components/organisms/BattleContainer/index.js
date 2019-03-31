import { PureComponent } from 'react';
// import { navigate } from '@reach/router';
import determineCatchResult from '../../../helpers/determineCatchResult';
import { CATCH_MESSAGES, POKEBALLS, BERRIES } from '../../../data';
class BattleContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pokeball: 'poke-ball',
      status: 'normal',
      selectedBerry: '',
      hpPercent: 1,
      message: `A wild ${props.pokemon.species} appeared!`
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
      let pokemon = { ...this.props.pokemon, pokeball };
      this.props.modifyPokemon(pokemon);
      this.setState({
        caught: true,
        message: `Gotcha! The pokemon was caught!`
      });
      // navigate('/');
    }
    // Catch fails
    else {
      this.setState({ message: CATCH_MESSAGES[result] });
      // alert(CATCH_MESSAGES[result]);
    }
  };

  throwPokeball = () => {
    this.catchRoll(
      this.state.pokeball,
      this.state.status,
      this.state.hpPercent
    );
  };

  selectPokeball = pokeball => {
    if (POKEBALLS.hasOwnProperty(pokeball)) this.setState({ pokeball });
  };

  selectBerry = berry => {
    if (BERRIES.hasOwnProperty(berry)) this.setState({ selectedBerry: berry });
  };

  useBerry = () => {
    if (BERRIES.hasOwnProperty(this.state.selectedBerry))
      this.setState({ status: BERRIES[this.state.selectedBerry] });
    // Should display a message indicating a status change
  };

  render() {
    return this.props.children({
      state: this.state,
      throwPokeball: this.throwPokeball,
      useBerry: this.useBerry,
      selectPokeball: this.selectPokeball,
      selectBerry: this.selectBerry
    });
  }
}

export default BattleContainer;
