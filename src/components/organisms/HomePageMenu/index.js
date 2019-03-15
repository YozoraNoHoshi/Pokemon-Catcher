import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';

class HomePageMenu extends PureComponent {
  render() {
    return (
      <Flex column>
        <ChangeScreenButton style={{ fontSize: '2em', padding: '20px' }}>
          Enter Area: {title(this.props.currentHabitat)}
        </ChangeScreenButton>
        <ChangeScreenButton to="/habitats">Transit Center</ChangeScreenButton>
        <ChangeScreenButton to="/pokedex">Pokedex</ChangeScreenButton>
        <MenuButton cWidth={100} onClick={this.saveGame}>
          Save Game
        </MenuButton>
        <MenuButton cWidth={100} onClick={this.loadGame}>
          Load Game
        </MenuButton>
      </Flex>
    );
  }
}

HomePageMenu.defaultProps = {};

HomePageMenu.propTypes = {};

export default HomePageMenu;
