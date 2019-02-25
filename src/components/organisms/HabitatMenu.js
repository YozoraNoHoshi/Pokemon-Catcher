import React, { PureComponent } from 'react';
import MenuButton from '../atoms/MenuButton';
import HabitatInfo from '../atoms/HabitatInfo';
import { navigate } from '@reach/router';
import ChangeScreenButton from '../molecules/ChangeScreenButton';
import habitats from '../../../data/habitats.json';

class HabitatMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { habitat: '' };
  }

  changeHabitat = () => {
    this.props.changeHabitat(this.state.habitat);
    navigate('/pokemon/menu');
  };

  renderHabitats = () => {
    this.props.habitats.map(h => (
      <MenuButton onClick={() => this.setState({ habitat: h.name })}>
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
        <div>{this.renderHabitats()}</div>
        {/* Change habitat */}
        <MenuButton click={this.changeHabitat}>Change Area</MenuButton>
        <ChangeScreenButton to="/pokemon/menu">Back</ChangeScreenButton>
      </div>
    );
  }
}
// Maybe make this a modal

HabitatMenu.defaultProps = {
  habitats: [{ name: '' }],
  changeHabitat: console.log
};

HabitatMenu.propTypes = {};

export default HabitatMenu;
