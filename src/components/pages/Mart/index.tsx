import React, { useState, memo } from 'react';
import useMart from '../../hooks/useMart';

import { MartItem, Player } from '../../../types';
import SmallInfoBar from '../../atoms/SmallInfoBar';
import MenuButton from '../../atoms/MenuButton';
import ChangeScreenButton from '../../molecules/ChangeScreenButton';
import Cart from '../../molecules/Cart';

interface Stock {
  [id: string]: MartItem;
}

interface Props {
  stock?: Stock;
  player: Player;
}

function Mart(props: Props): JSX.Element {
  let cart = { cost: 0, items: [] };
  const purchaseCart = () => {};
  const addItemToCart = (itemName: string, quantity: number) => {
    // add item to cart based off the id of item, and the current quantity
  };
  return (
    <div>
      {/* Top left: Player Money & name */}
      <div className="player-display">
        <SmallInfoBar text={props.player.name} subText={props.player.money} />
      </div>
      {/* Bottom left - current cart + cost */}
      <div className="cart-display">
        <SmallInfoBar text="Total" subText={cart.cost} />
        {/* Below Cart - Purchse Cart */}
        <MenuButton onClick={purchaseCart}>Confirm Purchase</MenuButton>
      </div>
      <div className="mart-stock">
        {/* Right side - Inventory of Mart */}
        <Cart cartItems={cart.items} addItemToCart={addItemToCart} />
        {/* Bottom Right - Leave Mart button */}
        <ChangeScreenButton to="/">Leave</ChangeScreenButton>
      </div>
    </div>
  );
}

Mart.defaultProps = {};

export default memo(Mart);

// TODO - Set up a UI - based off the UI from the games

// TODO - Be able to modify the player's inventory - through redux (implement redux in other words)

// TODO - Buy / Sell for player inventory (should come with InventoryReducer)
