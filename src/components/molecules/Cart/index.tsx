import React, { memo } from 'react';
import styled from 'styled-components';
import Sprite from '../../atoms/Sprite';

const CartContainer = styled.div``;

interface Props {
  cartItems: any[];
  addItemToCart: Function;
}

function Cart(props: Props): JSX.Element {
  const items = props.cartItems.map(item => {
    <div id={item.id}>
      <Sprite src={item.sprite} />
      {item.name}
    </div>;
  });
  return <CartContainer>{items}</CartContainer>;
}

Cart.defaultProps = {};

export default memo(Cart);
