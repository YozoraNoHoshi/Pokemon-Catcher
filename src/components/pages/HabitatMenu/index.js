import React, { PureComponent } from 'react';
import MenuButton from '../../atoms/MenuButton';
import HabitatInfo from '../../molecules/HabitatInfo';
import Flex from '../../atoms/Flex';
import HabitatContainer from '../../organisms/HabitatContainer';
import { title } from '../../../helpers/title';
import Text from '../../atoms/Text';

class HabitatMenu extends PureComponent {
  renderHabitatButtons = (habitats, selectedHabitat) => {
    return habitats.map(h => (
      <MenuButton
        key={h.name}
        id={h.name}
        active={h.name === selectedHabitat}
        cWidth={20}
      >
        {title(h.name)}
      </MenuButton>
    ));
  };
  render() {
    return (
      <HabitatContainer
        currentHabitat={this.props.currentHabitat}
        changeHabitat={this.props.changeHabitat}
      >
        {({ state, setHabitat, changeHabitat, handleClick }) => {
          let habitat = state.habitats[state.selectedHabitat];
          return (
            <Flex column>
              <Text large center>
                Transit Center
              </Text>
              <Text medium center>
                Where would you like to go?
              </Text>
              <MenuButton
                onClick={changeHabitat}
                active={this.props.currentHabitat === state.selectedHabitat}
                style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  marginTop: '20px'
                }}
              >
                {this.props.currentHabitat === state.selectedHabitat
                  ? 'Stay here!'
                  : 'Go!'}
              </MenuButton>
              <Flex
                row
                jCenter
                onClick={handleClick}
                style={{
                  borderBottom: '1px solid black',
                  marginBottom: '20px'
                }}
              >
                {this.renderHabitatButtons(
                  Object.values(state.habitats),
                  state.selectedHabitat
                )}
              </Flex>
              {habitat && (
                <HabitatInfo
                  name={habitat.name}
                  description={habitat.description}
                  pokemon={state.habitatPokemon}
                />
              )}
            </Flex>
          );
        }}
      </HabitatContainer>
    );
  }
}

HabitatMenu.defaultProps = {
  currentHabitat: '',
  changeHabitat: console.log
};

HabitatMenu.propTypes = {};

export default HabitatMenu;
