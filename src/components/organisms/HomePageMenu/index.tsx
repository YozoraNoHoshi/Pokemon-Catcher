import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';
import { title } from '../../../helpers/title';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import MenuButton from '../../atoms/MenuButton';
import { Width } from '../../..';

interface Props {
  changeGameState: (type?: string) => void;
  currentHabitat: string;
}

class HomePageMenu extends PureComponent<Props & Width, {}> {
  static defaultProps = { cWidth: 100 };
  saveGame = () => {
    this.props.changeGameState();
  };
  loadGame = () => {
    this.props.changeGameState('load');
  };
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

export default HomePageMenu;
