const db = require('../db');

// habitat table contains (name, description)
// habitat_inhabitants (habitat, pokemon)

class Habitat {
  static async getAllHabitats() {
    let result = await db.query(`SELECT * FROM habitats`);
    return result.rows;
  }
  static async getSpecificHabitat(name) {
    // Needs to get all pokemon that live in the habitat too
    // Use a join on the search with the join table, full join
    let result = await db.query(`SELECT * FROM habitats WHERE name = $1`, [
      name
    ]);
    return result.rows[0];
  }

  static async getPokemonOfHabitats(name) {
    let result = await db.query(
      `SELECT p.name, p.species, p.sprite 
      FROM pokehabitats ph
      JOIN pokemon p ON ph.pokemon = p.name
      WHERE ph.habitat = $1;`,
      [name]
    );
    return result.rows;
  }
  static async randomPokemonFromHabitat(name) {
    let habitatPokemon = await db.query(
      `SELECT p.name, p.id, p.species, p.title, p.flavor_text, p.catch_rate, p.sprite 
      FROM pokehabitats ph
      JOIN pokemon p ON ph.pokemon = p.name
      WHERE ph.habitat = $1 ORDER BY random() LIMIT 1;`,
      [name]
    );
    return habitatPokemon.rows[0];
  }
}

module.exports = Habitat;
