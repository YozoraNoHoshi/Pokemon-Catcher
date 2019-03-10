import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

function convertResultToObject(arr) {
  return arr.reduce((acc, h) => {
    acc[h.name] = h;
    return acc;
  }, {});
}

export async function getAllHabitats() {
  let result = await axios.get(`${BASE_URL}/habitats`);
  return convertResultToObject(result.data.habitats);
}
export async function getHabitatInfo(habitat) {
  let result = await axios.get(`${BASE_URL}/habitats/${habitat}`);
  return result.data.habitat;
}
export async function getBattlePokemon(habitat) {
  let result = await axios.get(`${BASE_URL}/habitats/${habitat}/battle`);
  return result.data.pokemon;
}

// Only really needs name, species, and sprite
export async function getHabitatPokemon(habitat) {
  let result = await axios.get(`${BASE_URL}/habitats/${habitat}/pokemon`);
  return result.data.pokemon;
}
export async function getAllPokemon() {
  let result = await axios.get(`${BASE_URL}/pokemon`);
  return result.data.pokemon;
}
export async function getPokemon(nameOrId, column = 'name') {
  if (column !== 'name') column = 'id';
  let result = await axios.get(`${BASE_URL}/pokemon/${nameOrId}`, {
    params: { column }
  });
  return result.data.pokemon;
}
export async function getFullPokemon(pokemonName) {
  let result = await axios.get(`${BASE_URL}/pokemon/${pokemonName}/habitats`);
  return result.data.pokemon;
}
