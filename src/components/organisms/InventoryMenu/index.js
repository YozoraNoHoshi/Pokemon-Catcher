import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';

class InventoryMenu extends PureComponent {
  renderInventoryItems = (itemArray, fn) => {
    return itemArray.map(p => {
      return (
        <Card
          // noLink
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
      <Flex row>
        <Flex column cWidth={50}>
          Pokeballs
          {this.renderInventoryItems(
            this.props.pokeballs,
            this.props.selectPokeball
          )}
        </Flex>
        <Flex column cWidth={50}>
          Berries
          {this.renderInventoryItems(
            this.props.berries,
            this.props.selectBerry
          )}
        </Flex>
      </Flex>
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
