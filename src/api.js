import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';
export async function getPokemonFromHabitat(habitat) {
  let pokemon = await axios.post(`${BASE_URL}/battle/${habitat}`);
  return pokemon;
}
