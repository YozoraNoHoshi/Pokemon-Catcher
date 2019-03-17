import React, { PureComponent } from 'react';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import Flex from '../../atoms/Flex';

class MainMenu extends PureComponent {
  saveGame = () => {
    this.props.changeGameState();
  };
  loadGame = () => {
    this.props.changeGameState('load');
  };
  render() {
    return (
      <Flex
        column
        jCenter
        cWidth={this.props.cWidth}
        style={{
          borderLeft: '1px solid black'
        }}
      >
        <Flex column cWidth={100}>
          <ChangeScreenButton
            to="/battle"
            pokeRed
            style={{
              padding: '30px',
              color: 'white'
            }}
          >
            Search for Pokemon!
          </ChangeScreenButton>
          <ChangeScreenButton to="/habitats">Transit Center</ChangeScreenButton>
          <ChangeScreenButton to="/pokedex">Pokedex</ChangeScreenButton>
        </Flex>
        <Flex row>
          <MenuButton cWidth={100} onClick={this.saveGame}>
            Save Game
          </MenuButton>
          <MenuButton cWidth={100} onClick={this.loadGame}>
            Load Game
          </MenuButton>
        </Flex>
        <Flex cWidth={100}>
          <ChangeScreenButton to="/">
            Return to Park Entrance
          </ChangeScreenButton>
        </Flex>
      </Flex>
    );
  }
}

MainMenu.defaultProps = { changeGameState: console.log, cWidth: 100 };

MainMenu.propTypes = {};

export default MainMenu;
