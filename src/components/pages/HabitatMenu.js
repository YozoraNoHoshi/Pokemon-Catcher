import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import HabitatInfo from '../molecules/HabitatInfo';

import ChangeScreenButton from '../molecules/ChangeScreenButton';
import styled from 'styled-components';
import Flex from '../atoms/Flex';
import HabitatContainer from '../organisms/HabitatContainer';

const StyledHMenu = styled.div``;

class HabitatMenu extends PureComponent {
  renderHabitatButtons = (habitats, selectedHabitat) => {
    return habitats.map(h => (
      <MenuButton key={h.name} id={h.name} active={h.name === selectedHabitat}>
        {h.name}
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
            <StyledHMenu className="HabitatMenu">
              <HabitatInfo
                name={habitat.name}
                description={habitat.description}
              />
              <Flex row jCenter onClick={handleClick}>
                {this.renderHabitatButtons(
                  Object.values(state.habitats),
                  state.selectedHabitat
                )}
              </Flex>
              <MenuButton
                onClick={changeHabitat}
                active={this.props.currentHabitat === state.selectedHabitat}
              >
                {this.props.currentHabitat === state.selectedHabitat
                  ? 'Current Area'
                  : 'Move to Selected Area!'}
              </MenuButton>
              <ChangeScreenButton to="/menu">Back</ChangeScreenButton>
            </StyledHMenu>
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
