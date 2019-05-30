import React, { PureComponent } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import { Pokeballs, Berries, PokeballIndex } from '../../..';

interface Props {
  pokeballs: Pokeballs[];
  berries: Berries[];
  selectPokeBall: (poke: PokeballIndex) => void;
  selectBerry: (berry: string) => void;
}

// Change how Pokeballs/Berries is structured later, should not be an array of objects
class InventoryMenu extends PureComponent<Props, {}> {
  static defaultProps = {
    pokeballs: [{}],
    berries: [{}],
    selectPokeball: console.log,
    selectBerry: console.log
  };
  renderInventoryItems = (itemArray: any[], fn: (evt: any) => any) => {
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
            this.props.selectPokeBall
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

export default InventoryMenu;
