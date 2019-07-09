import { useState } from 'react';

// import { useSelector } from 'react-redux'

export default function useMart() {
  // Connected to redux most likely.
  const [stock, setStock] = useState({});
  // useSelector(state => state.trainer)
  // Initialize Mart stock
  // Set prices for items
  // Functions for buying X items
  // Functions for selling X items
  // Functions for releasing Pokemon in exchange for cash.
  return { stock };
}
