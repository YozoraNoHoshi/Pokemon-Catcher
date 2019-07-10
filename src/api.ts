import axios from 'axios';
import { Pokemon } from './types';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

function convertResultToObject(arr: any[]): object {
  return arr.reduce((acc, h) => {
    acc[h.name] = h;
    return acc;
  }, {});
}
export async function getPokeMartStock(category?: string) {
  let query: string = '';
  if (category) query += `?category=${category}`;
  let result = await axios.get(`${BASE_URL}/mart${query}`);
  return result.data.stock;
}
export async function getAllHabitats(): Promise<any> {
  let result = await axios.get(`${BASE_URL}/habitats`);
  return convertResultToObject(result.data.habitats);
}
export async function getHabitatInfo(habitat: string): Promise<any> {
  let result = await axios.get(`${BASE_URL}/habitats/${habitat}`);
  return result.data.habitat;
}
export async function getBattlePokemon(habitat: string): Promise<Pokemon> {
  let result = await axios.get(`${BASE_URL}/habitats/${habitat}/battle`);
  return result.data.pokemon;
}

// Only really needs name, species, and sprite
export async function getHabitatPokemon(habitat: string): Promise<Pokemon[]> {
  let result = await axios.get(`${BASE_URL}/habitats/${habitat}/pokemon`);
  return result.data.pokemon;
}
export async function getAllPokemon(): Promise<Pokemon[]> {
  let result = await axios.get(`${BASE_URL}/pokemon`);
  return result.data.pokemon;
}
export async function getPokemon(
  nameOrId: string | number,
  full = ''
): Promise<Pokemon> {
  if (full) full = '/habitats';
  let column = 'name';
  if (!isNaN(+nameOrId)) {
    nameOrId = +nameOrId;
    column = 'id';
  } else nameOrId = (nameOrId as string).toLowerCase();
  let result = await axios.get(
    `${BASE_URL}/pokemon/${nameOrId}${full}?column=${column}`
  );
  return result.data.pokemon;
}
