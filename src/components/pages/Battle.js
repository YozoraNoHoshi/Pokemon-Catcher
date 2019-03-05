import React, { PureComponent } from 'react';
import BattleContainer from '../organisms/BattleContainer';
import ChangeScreenButton from '../molecules/ChangeScreenButton';

class Battle extends PureComponent {
  render() {
    return (
      <BattleContainer
        pokemon={this.props.pokemon}
        modifyPokemon={this.props.modifyPokemon}
      >
        {({ state, catchRoll }) => {
          return (
            <div>
              Things! Excitement!
              <ChangeScreenButton to="/menu">Flee</ChangeScreenButton>
            </div>
          );
        }}
      </BattleContainer>
    );
  }
}

Battle.defaultProps = { pokemon: {}, modifyPokemon: console.log };

Battle.propTypes = {};

export default Battle;
