import React, { useState, memo } from 'react';
import useMart from '../../hooks/useMart';

import { MartItem } from '../../../types';

interface Stock {
  [id: string]: MartItem;
}

interface Props {
  stock?: Stock;
}

function Mart(props: Props): JSX.Element {
  return (
    <div>
      {/* Top left: Player Money & name */}
      {/* Bottom left - current cart + cost */}
      {/* Below Cart - Purchse Cart */}
      {/* Right side - Inventory of Mart */}
      {/* Bottom Right - Leave Mart button */}
    </div>
  );
}

Mart.defaultProps = {};

export default memo(Mart);

// TODO - Set up a UI - based off the UI from the games

// TODO - Be able to modify the player's inventory - through redux (implement redux in other words)

// TODO - Buy / Sell for player inventory (should come with InventoryReducer)
