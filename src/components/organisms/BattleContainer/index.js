import { PureComponent } from 'react';
import determineCatchResult from '../../../helpers/determineCatchResult';
import hpPercentageMessage from '../../../helpers/hpPercentageMessage';
import { CATCH_MESSAGES, POKEBALLS, BERRIES, HP_BERRIES } from '../../../data';

class BattleContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pokeball: 'poke-ball',
      status: 'normal',
      selectedBerry: 'oran-berry',
      hpPercent: 1,
      message: `A wild ${props.pokemon.species} appeared!`
    };
  }

  catchRoll = (pokeball, status, hpPercent) => {
    let result = determineCatchResult(
      this.props.pokemon.catch_rate,
      pokeball,
      status,
      hpPercent
    );
    this.resultOfCatch(result, pokeball);
  };

  resultOfCatch = result => {
    // Catch successful
    if (result === 4) {
      this.props.modifyPokemon({
        ...this.props.pokemon,
        pokeball: this.state.pokeball
      });
      this.setState({
        caught: true,
        message: CATCH_MESSAGES[result]
      });
    }
    // Catch fails
    else {
      this.setState({ message: CATCH_MESSAGES[result] });
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
    let berry = this.state.selectedBerry;
    let pokemon = this.props.pokemon.species;
    if (BERRIES.hasOwnProperty(berry)) {
      // Message needs to be changed
      let message =
        berry === 'oran-berry'
          ? `The ${pokemon} returned to normal!`
          : `The ${pokemon} ate the berry and had ${BERRIES[berry]} inflicted!`;
      this.setState({
        status: BERRIES[berry],
        message
      });
    } else if (HP_BERRIES.hasOwnProperty(berry)) {
      // Affects HP - Razz Berry and the other Berries from Lets Go!
      let hpPercent = this.state.hpPercent - HP_BERRIES[berry];
      let message = `The ${pokemon} ate the berry! It looks ${hpPercentageMessage(
        hpPercent
      )}...`;
      this.setState({ hpPercent, message });
    }
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
