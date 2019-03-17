import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';

class HomePageMenu extends PureComponent {
  render() {
    return (
      <Flex column cWidth={this.props.cWidth}>
        <Flex cWidth={100}>
          <ChangeScreenButton
            to="/battle"
            pokeRed
            style={{ fontSize: '2em', padding: '20px', color: 'mistyrose' }}
          >
            Enter Park <br />
            <span style={{ fontSize: '.33em' }}>
              Destination: The {title(this.props.currentHabitat)}
            </span>
          </ChangeScreenButton>
        </Flex>
        <Flex row cWidth={100}>
          <ChangeScreenButton to="/habitats">Transit Center</ChangeScreenButton>
          <ChangeScreenButton to="/pokedex">Pokedex</ChangeScreenButton>
        </Flex>
        <Flex row>
          <MenuButton cWidth={100} onClick={this.saveGame}>
            Save
          </MenuButton>
          <MenuButton cWidth={100} onClick={this.loadGame}>
            Load
          </MenuButton>
        </Flex>
      </Flex>
    );
  }
}

HomePageMenu.defaultProps = { cWidth: 100 };

HomePageMenu.propTypes = {};

export default HomePageMenu;
