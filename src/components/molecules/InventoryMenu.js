import React, { PureComponent } from 'react';
import ModalMenu from './ModalMenu';

class InventoryMenu extends PureComponent {
  renderPokeBalls = pokeballs => {
    return pokeballs.map(m => {
      return <div>hi</div>;
    });
  };
  renderBerries = berries => {
    return berries.map(m => {
      return <div>hi</div>;
    });
  };
  render() {
    return (
      <div className="InventoryMenu">
        <ModalMenu buttonText="Bag">
          <div>{this.renderPokeBalls(this.props.pokeballs)}</div>
          <div>{this.renderBerries(this.props.berries)}</div>
        </ModalMenu>
      </div>
    );
  }
}

InventoryMenu.defaultProps = { pokeballs: [], berries: [] };

InventoryMenu.propTypes = {};

export default InventoryMenu;
