import React, { PureComponent } from 'react';
import ChangeScreenButton from '../molecules/ChangeScreenButton';

class MainMenu extends PureComponent {
  render() {
    return (
      <div className="MainMenu">
        <ChangeScreenButton to="/battle">
          Search for Pokemon!
        </ChangeScreenButton>
        <ChangeScreenButton to="/habitats">Habitats</ChangeScreenButton>
        <ChangeScreenButton to="/pokedex">Pokedex</ChangeScreenButton>
      </div>
    );
  }
}

MainMenu.defaultProps = {};

MainMenu.propTypes = {};

export default MainMenu;
