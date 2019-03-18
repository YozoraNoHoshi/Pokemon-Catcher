import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';

class InventoryMenu extends PureComponent {
  renderInventoryItems = (itemArray, fn) => {
    return itemArray.map(p => {
      return (
        <Card
          key={p.name}
          click={fn}
          sprite={p.sprite}
          name={p.name}
          species={p.name}
        />
      );
    });
  };
  render() {
    return (
      <div className="InventoryMenu">
        <div>
          {this.renderInventoryItems(
            this.props.pokeballs,
            this.props.selectPokeball
          )}
        </div>
        <div>
          {this.renderInventoryItems(
            this.props.berries,
            this.props.selectBerry
          )}
        </div>
      </div>
    );
  }
}

InventoryMenu.defaultProps = {
  pokeballs: [{}],
  berries: [{}],
  selectPokeball: console.log,
  selectBerry: console.log
};

InventoryMenu.propTypes = {};

export default InventoryMenu;
