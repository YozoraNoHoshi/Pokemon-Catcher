import React, { memo } from 'react';
import Card from '../../atoms/Card';
import Flex from '../../atoms/Flex';
import {
  Pokeballs,
  Berries,
  PokeballIndex,
  HPBerriesIndex,
  CatchBerriesIndex,
  Inventory,
  Item
} from '../../../types';

interface Props {
  pokeballs: Item[];
  berries: Item[];
  inventory?: Inventory;
  selectPokeBall: (poke: PokeballIndex) => void; // Refactor to use event delegation instead
  selectBerry: (berry: HPBerriesIndex | CatchBerriesIndex) => void;
}

function InventoryMenu(props: Props): JSX.Element {
  const renderInventoryItems = (itemArray: any[], fn: (evt: any) => any) => {
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

  // Iterate over inventory and split it into Pokeballs and Berries

  return (
    <Flex row>
      <Flex column cWidth={50}>
        Pokeballs
        {renderInventoryItems(props.pokeballs, props.selectPokeBall)}
      </Flex>
      <Flex column cWidth={50}>
        Berries
        {renderInventoryItems(props.berries, props.selectBerry)}
      </Flex>
    </Flex>
  );
}

// Change how Pokeballs/Berries is structured later, should not be an array of objects
InventoryMenu.defaultProps = {
  pokeballs: [{}],
  berries: [{}],
  selectPokeball: console.log,
  selectBerry: console.log
};

export default memo(InventoryMenu);
