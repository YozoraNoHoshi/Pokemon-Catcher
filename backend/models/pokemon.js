const db = require('../db');
const { stringifyID, title } = require('../helpers/helpers');

// pokemon table (id, name, species, title, flavor_text, catch_rate, sprite)
// habitat_inhabitants (habitat, pokemon)
class Pokemon {
  static async getPokemon(nameOrID = '', param = 'name') {
    if (param !== 'name') param = 'id';
    let query = `SELECT * FROM pokemon`;
    let values = [];
    if (nameOrID) {
      query = `${query} WHERE ${param} = $1`;
      values = [nameOrID.toLowerCase()];
    }
    let result = await db.query(query, values);
    if (result.rows.length === 1) {
      result.rows[0].id = stringifyID(result.rows[0].id);
      return result.rows[0];
    }
    return result.rows;
  }
  static async getUniquePokemonNames() {
    let result = await db.query(`SELECT name FROM pokemon`);
    return new Set(result.rows.map(p => p.name));
  }
  static async getHabitatsOfPokemon(pokemonName, param = 'name') {
    if (param !== 'name') param = 'id';
    let result = await db.query(
      `SELECT json_agg(ph.habitat) as habitats, p.id, p.name, p.species, p.title, p.flavor_text, p.catch_rate, p.sprite
      FROM pokehabitats ph
      JOIN pokemon p ON ph.pokemon = p.name
      WHERE p.${param} = $1 
      GROUP BY p.id, p.name, p.species, p.title, p.flavor_text, p.catch_rate, p.sprite;
      `,
      [pokemonName]
    );
    if (result.rows.length === 1) {
      result.rows[0].id = stringifyID(result.rows[0].id);
      result.rows[0].habitats = result.rows[0].habitats
        .map(h => title(h))
        .join(', ');
      return result.rows[0];
    }
    return result.rows;
  }
}
module.exports = Pokemon;
