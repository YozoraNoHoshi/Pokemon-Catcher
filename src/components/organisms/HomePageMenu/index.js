import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';

class HomePageMenu extends PureComponent {
  render() {
    return (
      <Flex column>
        <Flex row>
          <ChangeScreenButton
            pokeRed
            cWidth={100}
            style={{ fontSize: '2em', padding: '20px', color: 'mistyrose' }}
          >
            Enter Area: {title(this.props.currentHabitat)}
          </ChangeScreenButton>
        </Flex>
        <Flex row>
          <ChangeScreenButton cWidth={100} to="/habitats">
            Transit Center
          </ChangeScreenButton>
          <ChangeScreenButton cWidth={100} to="/pokedex">
            Pokedex
          </ChangeScreenButton>
        </Flex>
        <Flex row>
          <MenuButton cWidth={100} onClick={this.saveGame}>
            Save Game
          </MenuButton>
          <MenuButton cWidth={100} onClick={this.loadGame}>
            Load Game
          </MenuButton>
        </Flex>
      </Flex>
    );
  }
}

HomePageMenu.defaultProps = {};

HomePageMenu.propTypes = {};

export default HomePageMenu;
