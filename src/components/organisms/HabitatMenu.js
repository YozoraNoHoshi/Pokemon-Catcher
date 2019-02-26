import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import HabitatInfo from '../molecules/HabitatInfo';
import { navigate } from '@reach/router';
import ChangeScreenButton from '../molecules/ChangeScreenButton';
import styled from 'styled-components';

const StyledHMenu = styled.div``;

class HabitatMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { habitat: props.currentHabitat };
    this.habitats = Object.values(props.habitats);
  }

  changeHabitat = () => {
    this.props.changeHabitat(this.state.habitat);
    navigate('/menu');
  };

  handleClick = evt => {
    evt.preventDefault();
    if (this.props.habitats[evt.target.id])
      this.setState({ habitat: evt.target.id });
  };

  renderHabitatButtons = habitats => {
    return habitats.map(h => (
      <MenuButton
        key={h.name}
        id={h.name}
        active={h.name === this.state.habitat}
      >
        {h.name}
      </MenuButton>
    ));
  };

  render() {
    return (
      <StyledHMenu className="HabitatMenu">
        {/* Show current habitat information */}
        <HabitatInfo habitat={this.props.habitats[this.state.habitat]} />
        {/* View all habitats */}
        <div onClick={this.handleClick}>
          {this.renderHabitatButtons(this.habitats)}
        </div>
        {/* Change habitat */}
        <MenuButton
          onClick={this.changeHabitat}
          active={this.props.currentHabitat === this.state.habitat}
        >
          Change Area
        </MenuButton>
        <ChangeScreenButton to="/menu">Back</ChangeScreenButton>
      </StyledHMenu>
    );
  }
}

HabitatMenu.defaultProps = {
  currentHabitat: '',
  habitats: { name: {} },
  changeHabitat: console.log
};

HabitatMenu.propTypes = {};

export default HabitatMenu;
