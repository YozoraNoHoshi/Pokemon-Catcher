import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import HabitatInfo from '../molecules/HabitatInfo';
import { navigate } from '@reach/router';
import ChangeScreenButton from '../molecules/ChangeScreenButton';
import habitats from '../../data/habitats.json';

class HabitatMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { habitat: '' };
  }

  changeHabitat = () => {
    this.props.changeHabitat(this.state.habitat);
    navigate('/menu');
  };

  renderHabitatButtons = () => {
    this.props.habitats.map(h => (
      <MenuButton
        active={h.name === this.state.habitat}
        onClick={() => this.setState({ habitat: h.name })}
      >
        {h.name}
      </MenuButton>
    ));
  };

  render() {
    return (
      <div className="HabitatMenu">
        {/* Show current habitat information */}
        {this.state.habitat && (
          <HabitatInfo habitat={habitats[this.state.habitat]} />
        )}
        {/* View all habitats */}
        <div>{this.renderHabitatButtons()}</div>
        {/* Change habitat */}
        <MenuButton click={this.changeHabitat}>Change Area</MenuButton>
        <ChangeScreenButton to="/menu">Back</ChangeScreenButton>
      </div>
    );
  }
}

HabitatMenu.defaultProps = {
  habitats: [{ name: '' }],
  changeHabitat: console.log
};

HabitatMenu.propTypes = {};

export default HabitatMenu;
