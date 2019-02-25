import React, { PureComponent } from 'react';
import ChangeScreenButton from './ChangeScreenButton';
import InventoryMenu from './InventoryMenu';
import TrainerMenu from './TrainerMenu';

class MainMenu extends PureComponent {
  render() {
    return (
      <div className="MainMenu">
        {/* Find Pokemon Button */}
        <ChangeScreenButton to="/battle">
          Search for Pokemon!
        </ChangeScreenButton>
        {/* Habitat Submenu */}
        <ChangeScreenButton to="/habitats">Habitats</ChangeScreenButton>
        {/* These can be modals */}
        {/* Inventory Submenu */}
        <InventoryMenu />
        <ChangeScreenButton to="/bag">Bag</ChangeScreenButton>
        {/* Trainer Details - includes Save/Load */}
        <TrainerMenu />
        <ChangeScreenButton to="/trainer">
          Trainer Information
        </ChangeScreenButton>
      </div>
    );
  }
}

MainMenu.defaultProps = {};

MainMenu.propTypes = {};

export default MainMenu;
